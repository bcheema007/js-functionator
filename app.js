const div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'box-sizing:border-box;position:absolute;background-color:red;width:100px;height:100px;color:white;text-align:center;line-height:100px;');
div.innerHTML = 'Hello World!';

const keySequence = [];
let index = 0;

//32 is for space, 13 is for enter

let intervalID;

document.addEventListener('keydown', function(event) {

    console.log(event);

    // if(event.keyCode === 37) {
    //     keySequence[index++] = event.keyCode;
    //     //div.style.left = div.getBoundingClientRect().x - 20 + 'px';
    // }
    // else if(event.keyCode === 38) {
    //     keySequence[index++] = event.keyCode;
    //     //div.style.top = div.getBoundingClientRect().y - 20 + 'px';
    // }
    // else if(event.keyCode === 39) {
    //     keySequence[index++] = event.keyCode;
    //     //div.style.left = div.getBoundingClientRect().x + 20 + 'px';
    // }
    // else if(event.keyCode === 40) {
    //     keySequence[index++] = event.keyCode;
    //     //div.style.top = div.getBoundingClientRect().y + 20 + 'px';
    // }

    // console.log(keySequence);

    // if(event.keyCode === 13 || event.keyCode === 32) {
    //     //run the arrow key sequence on the element
    //     index = 0;
    //     intervalID = setInterval(moveElement, 1000);
    // }

    

});

// function moveElement() {

//     if(keySequence.length === 0) {
//         clearInterval(intervalID);
//     }

//     if(keySequence[0] === 37) {
//         keySequence.shift();
//         div.style.left = div.getBoundingClientRect().x - 20 + 'px';
//     }
//     else if(keySequence[0] === 38) {
//         keySequence.shift();
//         div.style.top = div.getBoundingClientRect().y - 20 + 'px';
//     }
//     else if(keySequence[0] === 39) {
//         keySequence.shift();
//         div.style.left = div.getBoundingClientRect().x + 20 + 'px';
//     }
//     else if(keySequence[0] === 40) {
//         keySequence.shift();
//         div.style.top = div.getBoundingClientRect().y + 20 + 'px';
//     }

//     console.log(keySequence);

// }