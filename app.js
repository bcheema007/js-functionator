// set the font-family
document.body.setAttribute('style', 'font-family:Bungee Shade,cursive');

// set up the h1 element
let h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.setAttribute('style', 'position:sticky;top:0;margin-top:0');

// set up the div element
const div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'box-sizing:border-box;position:absolute;background-color:blue;width:100px;height:100px;color:white;text-align:center;line-height:100px;font-weight:1000');
div.innerHTML = 'Hello';

// change the position of the div element at the start
div.style.left = div.getBoundingClientRect().x + 42 + 'px';
div.style.top = div.getBoundingClientRect().x + 92 + 'px';

// array to store the arrow key sequence
const keySequence = [];
// need index to store arrow key sequence properly
let index = 0;

//32 is for space, 13 is for enter, 67 is for c, 77 is for m

// need to terminate interval at some point
let intervalID;

// listen for the arrow key presses, store in array, and display on webpage
document.addEventListener('keydown', function(event) {

    if(event.keyCode === 37) {
        keySequence[index] = event.keyCode;
        displayArrowKey(event);
        index++;
    }
    else if(event.keyCode === 38) {
        keySequence[index] = event.keyCode;
        displayArrowKey(event);
        index++
    }
    else if(event.keyCode === 39) {
        keySequence[index] = event.keyCode;
        displayArrowKey(event);
        index++;
    }
    else if(event.keyCode === 40) {
        keySequence[index] = event.keyCode;
        displayArrowKey(event);
        index++;
    }

    if(event.keyCode === 13 || event.keyCode === 32) {
        // run the arrow key sequence on the element
        index = 0;
        intervalID = setInterval(moveElement, 500);
    }

    // change the background color of the div element
    if(event.keyCode === 67) {
        changeColor();
    }

    // change the text inside of the div element
    if(event.keyCode === 77) {
        changeText();
    }

});

function moveElement() {

    let value = 30;

    if(keySequence[0] === 37) {
        deleteSpan(0);
        keySequence.shift();
        div.style.left = div.getBoundingClientRect().x - value + 'px';
    }
    else if(keySequence[0] === 38) {
        deleteSpan(0);
        keySequence.shift();
        div.style.top = div.getBoundingClientRect().y - value + 'px';
    }
    else if(keySequence[0] === 39) {
        deleteSpan(0);
        keySequence.shift();
        div.style.left = div.getBoundingClientRect().x + value + 'px';
    }
    else if(keySequence[0] === 40) {
        deleteSpan(0);
        keySequence.shift();
        div.style.top = div.getBoundingClientRect().y + value + 'px';
    }

    if(keySequence.length === 0) {
        clearInterval(intervalID);
    }

}

function changeColor() {
    const generateColor = Math.random().toString().substr(-6);
    div.style.backgroundColor = '#' + generateColor;
}

function changeText() {
    // 5 characters due to size of element
    const text = prompt('Please enter at max 5 characters: ');
    div.innerHTML = text;
}

function displayArrowKey(event) {

    let temp = document.createElement('span');
    temp.setAttribute('style', 'border:solid 1px black;margin-right:2px;padding:5px');
    temp.id = index;

    if(event.keyCode === 37) {
        temp.textContent = 'left';
    }
    else if(event.keyCode === 38) {
        temp.textContent = 'up';
    }
    else if(event.keyCode === 39) {
        temp.textContent = 'right';
    }
    else if(event.keyCode === 40) {
        temp.textContent = 'down';
    }

    h1.appendChild(temp);

    // if your mouse enters the area of the span element the background turns red 
    temp.addEventListener('mouseenter', function(event) {
        event.target.style.backgroundColor = 'orangered';
    });

    // if your mouse leaves the area of the span element the background color turns white
    temp.addEventListener('mouseleave', function(event) {
        event.target.style.backgroundColor = 'white';
    });

    temp.addEventListener('click', function(event) {
        deleteTarget(event.target.id);
    });
    
}

// remove span from webpage and delete element from array
function deleteTarget(id) {
    document.getElementById(id).remove();
    keySequence.splice(id, 1);
    updateSpanId();
}

// after removing an element from the array the span element ids will need to be changed in order to accurately reflect their index/position in the array.
function updateSpanId() {
    let h1Children = h1.children;
    for(let i = 0; i < h1Children.length; i++) {
        h1Children[i].id = i;
    }
}

// This function is for when the user hits enter or spacebar to start the sequence of movements. We simply want to delete the div with id of 0 each time to indicate that a single movement in the direction specified has been completed. We then update the ids of all spans so that the next span can be deleted with id of zero. This happens until the entire sequence is completed.
function deleteSpan(zero) {
    const temp = document.getElementById(zero);
    // apply the light green color to the next element which will be deleted in the sequence. 
    if(temp.nextElementSibling !== null) {
        temp.nextElementSibling.style.backgroundColor = 'lightgreen';
    }
    temp.remove();
    updateSpanId();
}