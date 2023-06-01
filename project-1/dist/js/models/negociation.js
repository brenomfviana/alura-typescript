var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _date, _amount, _price;
export class Negociation {
    constructor(date, amount, price) {
        _date.set(this, void 0);
        _amount.set(this, void 0);
        _price.set(this, void 0);
        __classPrivateFieldSet(this, _date, date);
        __classPrivateFieldSet(this, _amount, amount);
        __classPrivateFieldSet(this, _price, price);
    }
    get date() {
        return __classPrivateFieldGet(this, _date);
    }
    get amount() {
        return __classPrivateFieldGet(this, _amount);
    }
    get price() {
        return __classPrivateFieldGet(this, _price);
    }
    get volume() {
        return __classPrivateFieldGet(this, _amount) * __classPrivateFieldGet(this, _price);
    }
}
_date = new WeakMap(), _amount = new WeakMap(), _price = new WeakMap();
