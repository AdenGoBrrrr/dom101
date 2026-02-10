/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

function replaceText(elem, str){
    elem.textContent = str;
}

function addTextTo(elem, str){
    elem.textContent += str;
}

function moreBears(){
    animals.src = 'http://placebear.com/400/200';
    animals.alt = 'A bear.';
    animals.title = 'A BEAR!';
}

function setId(elem, str){
    elem.id = str;
    return elem;
}

function setClass(elem, str){
    elem.className = str;
    return elem;
}

function addAClass(elem, str){
    elem.classList.add(str);
    return elem;    
}

function removeAClass(elem, str){
    elem.classList.remove(str);
    return elem;
}

function newElement(name){
    return document.createElement(name);
}

function findElementById(id){
    return document.getElementById(id);
}

function findElementsByQuery(query){
    return document.querySelectorAll(query);
}

/*Create a function `reverseList` that can reverse the content of a list (a UL or OL element).  The function should take one parameter, which is a query selector used to find the list whose children should be reversed.  Return the selected element. */

function reverseList(query){
    let list = document.querySelector(query);
    // Take a static snapshot of the children, reverse it, then append
    // each node to move it into the reversed order.
    const nodes = Array.from(list.children).reverse();
    nodes.forEach(node => list.appendChild(node));
    return list;
} 

function mover(moveThis, appendToThis){
    const elem = document.querySelector(moveThis);
    const target = document.querySelector(appendToThis);
    target.appendChild(elem);
    return target;
}

function filler(list, candidates) {
    candidates.forEach(candidate => {
        const li = document.createElement('li');
        li.textContent = candidate;
        list.appendChild(li);
    });
}

function dupe (selector){
    const elem = document.querySelector(selector);
    const dupe = elem.cloneNode(true);
    elem.parentElement.appendChild(dupe);
    return elem;
}

function removeAll(selector){
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => elem.remove());
}

function getUserData(){
    const username = document.querySelector('#username').value;
    const speed = parseInt(document.querySelector('#speed').value);
    const student = document.querySelector('#student').checked;
    return {
        name: username,
        speed: speed,
        student: student
    };
}