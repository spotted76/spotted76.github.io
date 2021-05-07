
/*
 * \brief Question class.  Basically just handles expanding and 
 * contracting the answer portion of the question.
 */
export default class Question {

    /* 
     * \brief Constructor, expects an li
     */
    constructor(listItem) {
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