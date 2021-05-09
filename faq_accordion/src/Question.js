
import utilities from './Utils.js';

/*
 * \brief Question class.  Basically just handles expanding and 
 * contracting the answer portion of the question.
 */
export default class Question {

    /* 
     * \brief Constructor, expects an li
     */
    constructor(listItem) {
        this.listItem = listItem;
        this.question = listItem.querySelector('.qa');
    }

    /*
     * \brief Function that checks for equality
     *
     * @returns true if the passed li equals the member question
     */
    equals(question) {
        return this.question === question;
    }

    /*
     * \brief Expands or contracts the answer
     */
    toggleExpanded() {

        if ( !this.isExpanded() )
        {
            //Get the closesst ul
            const parentUL = this.listItem.closest('ul');
            const height = 
                utilities.calculateHiddenDimensions(parentUL, this.listItem).height;
            const answer = this.question.querySelector('.answer');
            answer.style.height = `${height}px`;
        }
        else {
            const answer = this.question.querySelector('.answer');
            answer.style.height = '0px';
        }

        this.question.classList.toggle('expanded');
    }

    /*
     * \brief Returns true if the answer is visible
     *
     * @returns true if the answer is visible
     */
    isExpanded() {
        return this.question.classList.contains('expanded');
    }
}