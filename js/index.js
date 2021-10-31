import  Game from './game';
import Loader from './loader';

var global = global || window;
global.Buffer = global.Buffer || require('buffer').Buffer;

window.onload = function() {
    const loader = new Loader();
    console.log(loader);
    
    loader.load('localhost:6020', () => {
        new Game (document.body);
    });
}