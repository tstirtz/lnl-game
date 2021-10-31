import { DeepstreamClient } from '@deepstream/client';
import * as PIXI from 'pixi.js';;

export default class Loader {
    constructor() {
        this.connectionReady = false;
		this.imagesReady = false;
		this.callback = null;

        // Create the image loader and add the initial assets
		this.assetLoader = new PIXI.Loader();
		this.assetLoader.add( '/images/alienspaceship.png');

        this.assetLoader.onComplete.add(this.onImagesLoaded.bind( this ) );
    }

    load = ( deepstreamUrl, callback) => {
		console.log(this);
        this.callback = callback;
        this.assetLoader.load();
        const ds = new DeepstreamClient(deepstreamUrl);
		console.log(deepstreamUrl);
		console.log(ds);
		ds.login({}, (success, data) => {
			if (success) {
				this.connectionReady = true;
				this.checkReady();
			} else {
				console.log("error", data);
			}
		});
		console.log(ds.getConnectionState());
    }

    onImagesLoaded = () => {
		this.imagesReady = true;
		this.checkReady();
	}

    onLoggedIn = (success, data) => {
		if (success) {
			debugger;
			this.connectionReady = true;
			this.checkReady();
		} else {
			console.log("error", data);
		}
	}
    
    checkReady = () => {
		if(
			this.connectionReady &&
			this.imagesReady
		) {

			this.callback();
		}
	}
}