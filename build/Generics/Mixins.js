"use strict";
//нам понадобится класс, к которому будут применены миксины:
class Sprite {
    constructor(name) {
        this.name = "";
        this.x = 0;
        this.y = 0;
        this.name = name;
    }
}
// Миксин, который добавляет свойство
function Scale(Base) {
    return class Scaling extends Base {
        constructor() {
            super(...arguments);
            // Миксины не могут объявлять частные/защищенные свойства
            // однако вы можете использовать поля ES2020  private
            this._scale = 1;
        }
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
//# sourceMappingURL=Mixins.js.map