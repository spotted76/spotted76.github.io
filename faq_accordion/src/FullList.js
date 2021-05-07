
import Question from './Question.js';

/*
 * \brief This class maintains the full list of quesitons and answers.
 */
export default class FullList {
    
    /* 
     * \brief Contructor, epects an ul as the passed argument
     */
    constructor(ulElement) {

        this.ul = ulElement;
        this.questions = [];

    }

    /*
     * \brief Registers a click listener on the entire ul (should be more efficient)
     *        Walks through the UL, pulling out each li element, and creating a 
     *        question instance for each one, storing them in an array 
     */
    initialize() {

        this.ul.addEventListener('click', (evt) => {
            evt.stopPropagation();
            this.listClicked(evt);    
        });

        const liElements = this.ul.querySelectorAll('li');
        for ( let element of liElements ) {
            this.questions.push(new Question(element));
        }

    }

    /*
     * \brief Function called when a anything within the ul has been clicked.
     *        this function discards clicks for the answer category, as an 
     *        expanded category should not trigger a collapse.  Additionally, 
     *        this method will collapse any question that has been expanded, so
     *        that only 1 question can be expanded at a time 
     */
    listClicked(evt) {
        const target = evt.target;

        //Make sure it's not the question, want to ignore this
        if ( target.getAttribute('class') != 'answer') {
            const parentQuestion = target.closest('.qa');

            // first, find the target question
            let clickedQuestion;

            // First, collapse anything that is expanded 
            for( let question of this.questions) {
                if (question.equals(parentQuestion)) {
                    clickedQuestion = question;
                } 
            }

            if ( clickedQuestion ) {
                //If it's already expanded, close it
                if ( clickedQuestion.isExpanded() ) {
                    clickedQuestion.toggleExpanded();
                }
                else {
                    //Close all the others, and open this one
                    for(let question of this.questions) {
                        if (question.isExpanded()) {
                            question.toggleExpanded();
                            break;
                        }
                     }
    
                    clickedQuestion.toggleExpanded();
                }
            } 

        }
        
    }

}
