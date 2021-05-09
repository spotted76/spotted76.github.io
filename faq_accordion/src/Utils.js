

/*
 * \brief For a given ul, li, and question/answer, this function will
 *  calculate the dimensions within the container. 
 * 
 * @returns BoundingRect
 */

function calculateHiddenDimensions(parentContainer, hiddenContainer) {

    // Duplicate the passed object, and append a hidden expanded version
    const dupContainer = hiddenContainer.cloneNode(true);
    dupContainer.style.opacity = "0";
    dupContainer.setAttribute('id', 'ghost');
    const answer = dupContainer.querySelector('.answer');
    answer.style.height = "100%";

    parentContainer.appendChild(dupContainer);
    
    // Retrieve it, and get the bounding rect
    const ghost = parentContainer.querySelector('#ghost');
    const dimensions = ghost.querySelector('.answer').getBoundingClientRect();
    parentContainer.removeChild(ghost);

    return dimensions;
}


export default {calculateHiddenDimensions};