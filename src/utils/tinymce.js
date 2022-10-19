// tinymce.ts

// ==== isNumber  函数====
const toString = Object.prototype.toString

export function is(val, type) {
    return toString.call(val) === `[object ${type}]`
}

export function isNumber(val) {
    return is(val, 'Number')
}


// ==== buildShortUUID  函数====
export function buildShortUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
