
import FullList from './FullList.js';


document.addEventListener("DOMContentLoaded", function() { 
    
    const ul = document.querySelector('ul');

    const questionList = new FullList(ul);
    questionList.initialize();

});