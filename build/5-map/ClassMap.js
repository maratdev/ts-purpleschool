"use strict";
class MyHashTable {
    buckets;
    keys = {};
    constructor(bucketsLength = 7) {
        this.buckets = new Array(bucketsLength);
        this.keys = {};
    }
    _hash(key) {
        return (key
            .split("")
            .map((k) => k.charCodeAt(0))
            .reduce((a, b) => a + b, 0) % this.buckets.length);
    }
    set(key, value) {
        const hash = this._hash(key);
        if (this.has(key)) {
            for (let entry of this.buckets[hash]) {
                if (entry.key === key) {
                    entry.value = value;
                }
            }
        }
        else {
            if (!this.buckets[hash]) {
                this.buckets[hash] = [];
            }
            this.buckets[hash].push({ key, value });
        }
        this.keys[key] = hash;
    }
    has(key) {
        return Object.hasOwn(this.keys, key);
    }
    get(key) {
        const hash = this._hash(key);
        const bucket = this.buckets[hash];
        return bucket?.find((v) => v.key === key)?.value;
    }
    delete(key) {
        if (!this.has(key)) {
            return null;
        }
        const hash = this._hash(key);
        delete this.keys[key];
        if (!this.buckets[hash]) {
            return null;
        }
        this.buckets[this._hash(key)] = [
            ...this.buckets[this._hash(key)].filter((pair) => pair.key != key),
        ];
    }
    clear() {
        this.buckets = [];
    }
}
const hTable = new MyHashTable();
hTable.set('London', '7');
hTable.set('Paris', '-7');
hTable.set('Msk', '10');
console.log(hTable.get("Paris"));
//# sourceMappingURL=ClassMap.js.map