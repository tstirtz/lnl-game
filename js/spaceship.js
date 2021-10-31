import * as PIXI from 'pixi.js';

class SpaceShip {
    constructor(game, x, y) {
        this._game = game;
        this._body = new PIXI.Sprite.fromImage('/images/alienspaceship.png');
        this._body.position.x = x;
        this._body.position.y = y;
        this._body.anchor.x = 0.5;
        this._body.anchor.y = 0.5;
        this._game.stage.addChild(this._body);
    }

}