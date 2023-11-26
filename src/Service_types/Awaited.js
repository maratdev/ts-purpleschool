"use strict";
async function getMenu() {
    return [{ name: 'Аналитика', url: 'site.ru' }];
}
async function getArray(x) {
    return [await x];
}
