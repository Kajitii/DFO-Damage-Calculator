/// <reference path="utils.d.ts" />

export namespace Utils {

    String.prototype.computerize = function(this: string) {
        let str: string = this;
        str = str.charAt(0).toLowerCase() + str.substring(1);
        str = str.replace(/[ ]/g, '');
        return str;
    };

    String.prototype.humanize = function(this: string) {
        let str: string = this;
        str = str.replace(/([A-Z])/g, ' $1').trim();
        str = str.charAt(0).toUpperCase() + str.substring(1);
        return str;
    };

    export function getEnumValues(obj: object): string[] {
        let keys: string[] = Object.keys(obj);
        keys.splice(keys.length / 2);
        return keys;
    }

    export function getEnumNames(obj: object): string[] {
        let keys: string[] = Object.keys(obj);
        return keys.splice(keys.length / 2);
    }

    export function getEnumLength(obj: object): number {
        return Object.keys(obj).length / 2;
    }

}