'use strict';

export default function json(data) {
    // console.log(data)
    return new Promise((resolve, reject) => {
        // эмуляция обработки ArrayBuffer
        setTimeout(() => {
            resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
        }, 500);
    });
}
