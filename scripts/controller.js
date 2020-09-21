import Model from './model.js';
import View from './view.js';

export default class Controller {

    /**
     * 
     * @param {View} view 
     * @param {Model} model 
     */
    constructor(model, view) {

        this.model = model;
        this.view = view;

        const buttonHandlers = {
            splitButton: this.handlerSplitButton_OnClick,
            joinButton: this.handlerJoinButton_OnClick,
            copyToClipboardButton: this.handlerCopyToClipboardButton_OnClick
        };
        this.view.bindButtons(buttonHandlers);

        const inputHandlers = {
            separatorSplitInput: this.handlerSplitInput_OnInput,
            separatorJoinInput: this.handlerJoinInput_OnInput
        };

        this.view.bindInputs(inputHandlers);

        const textareaHandlers = {
            textarea: this.handlerTextarea_OnInput
        };
        this.view.bindTextAreas(textareaHandlers);

        const checkHandlers = {
            bindSeparatorsCheck: this.handlerBindSeperatorsCheck_OnClick
        };
        this.view.bindChecks(checkHandlers);
    }

    handlerSplitButton_OnClick = (event) => {

        const { value } = this.view.input;

        const splitSeparator = this.view.separatorSplitInput.value;

        const splited = this.model.split(value, splitSeparator);

        this.view.textarea.value = splited.join('\n');

        this.handlerTextarea_OnInput();
    }

    handlerJoinButton_OnClick = (event) => {

        const value = this.view.textarea.value;

        const joinSeparator = this.view.separatorJoinInput.value;

        const joined = this.model.join(value, joinSeparator);

        this.view.output.value = joined;
    }

    handlerSplitInput_OnInput = (event) => {

        if (this.view.bindSeparatorsCheck.checked) {

            const { value } = event.currentTarget;

            this.view.updataSeparatorJoinInput(value);
        }
    }

    handlerJoinInput_OnInput = (event) => {

        if (this.view.bindSeparatorsCheck.checked) {

            const { value } = event.currentTarget;

            this.view.updataSeparatorSplitInput(value);
        }
    }

    handlerTextarea_OnInput = (event) => {

        const count = this.model.countLines(this.view.textarea.value);

        this.view.updateLinesCount(count);
    }

    handlerBindSeperatorsCheck_OnClick = (event) => { }

    handlerCopyToClipboardButton_OnClick = (event) => {

        const text = this.view.output.value;

        navigator.clipboard.writeText(text).then(() => {

            this.view.copyToClipboardButton.classList.add('copied-color');

            setInterval(() => {

                this.view.copyToClipboardButton.classList.remove('copied-color');
            }, 3000);

        }, function (err) {

            console.error(err);
            alert('Something went wrong!!')
        });
    }
}