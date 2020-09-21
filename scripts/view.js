export default class View {

    constructor() {

        this.input = document.querySelector('#input');

        this.separatorSplitInput = document.querySelector('#separator-split');
        this.splitButton = document.querySelector('#btn-split');

        this.textarea = document.querySelector('#textarea');
        this.linesCounterPar = document.querySelector('#lines-counter');

        this.bindSeparatorsCheck = document.querySelector('#bind-separators');

        this.separatorJoinInput = document.querySelector('#separator-join');
        this.joinButton = document.querySelector('#btn-join');
        this.output = document.querySelector('#output');
        this.copyToClipboardButton = document.querySelector('#copy-output');
    }

    /**
     * 
     * @param {object} handlers 
     * @param {string} event 
     */
    bindControls(handlers, event) {

        Object.entries(handlers).forEach(item => {

            const [controlName, handler] = item;
            this[controlName].addEventListener(event, handler);
        });
    }

    bindButtons(handlers) {

        this.bindControls(handlers, 'click');
    }

    bindInputs(handlers) {

        this.bindControls(handlers, 'input');
    }

    bindTextAreas(handlers) {

        this.bindControls(handlers, 'input');
    }

    bindChecks(handlers) {

        this.bindControls(handlers, 'click');
    }

    updataSeparatorSplitInput(value) {

        this.separatorSplitInput.value = value;
    }

    updataSeparatorJoinInput(value) {

        this.separatorJoinInput.value = value;
    }

    updateLinesCount(value) {

        this.linesCounterPar.innerHTML = `Lines: ${value}`;
    }



}