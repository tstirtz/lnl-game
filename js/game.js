// const SpaceShip = require( './spaceship' );
// const BulletManager = require( './bullet-manager' );
//const EventEmitter = require( 'events' ).EventEmitter;
import * as PIXI from 'pixi.js';

export default class Game {
    constructor(element) {
        this.stage = new PIXI.Container();

        this.renderer = new PIXI.Application(
            window.innerWidth,
            window.innerHeight,
            {transparent: true},
            false
        );
        element.appendChild(this.renderer.view);

        requestAnimationFrame(this.tick);
    }

    tick = () => {
        this.renderer.render(this.stage);
        requestAnimationFrame(this.tick)
    }
}