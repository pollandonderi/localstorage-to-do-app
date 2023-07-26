//select respective items using the ir selectoer and id
const ul = document.querySelector('ul');
const input = document.getElementById('item');
// now fetch the array from the local storage
let itemsArray = localStorage.getItem('items');
// if the items do not exist then evaluate to an empty array
JSON.parse(localStorage.getItem('items'))||[];

itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}
function addItem(){
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    addTask(input.value);
    input.value = '';
  }
  function clearItem(){
    localStorage.clear();
    ul.innerHTML = '';
    itemsArray = [];
  }

//   check for local storage using this

//   if (typeof(Storage) !== "undefined") {

    // Code for localStorage

    // } else {

    // No web storage Support.
    
// }