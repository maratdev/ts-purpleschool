"use strict";
//нам понадобится класс, к которому будут применены миксины:
class Sprite {
    name = "";
    x = 0;
    y = 0;
    constructor(name) {
        this.name = name;
    }
}
// Миксин, который добавляет свойство
function Scale(Base) {
    return class Scaling extends Base {
        // Миксины не могут объявлять частные/защищенные свойства
        // однако вы можете использовать поля ES2020  private
        _scale = 1;
        setScale(scale) {
            this._scale = scale;
        }
        get scale() {
            return this._scale;
        }
    };
}
// Создаем новый класс из класса Sprite,
// с применением Mixin Scale:
const EightBitSprite = Scale(Sprite);
const flappySprite = new EightBitSprite("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);
