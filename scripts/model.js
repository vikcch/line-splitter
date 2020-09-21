export default class Model {

    constructor() {

    }

    /**
     * 
     * @param {string} value 
     * @param {string} separator 
     */
    split(value, separator) {

        const regex = new RegExp(separator, 'g');

        return value.split(regex);
    }

    /**
     * 
     * @param {string} value 
     * @param {string} separator 
     */
    join(value, separator) {

        const arr = value.split('\n')

        return arr.join(separator);
    }

    countLines(value) {

        /** @type {array} */
        const arr = value.split('\n');

        return arr.length;
    }



}