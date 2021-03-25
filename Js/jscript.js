(function(){

const input = document.querySelector('.todo-input');
const form = document.querySelector('.todo-form');
const itemlist = document.querySelector('.todo-items');

form.addEventListener('submit',function(event){
    event.preventDefault();
    itemlist.innerHTML += '<li>' + input.value + '</li>';
    store();
    input.value = "";
  },false)

  itemlist.addEventListener('click',function(event){
    var t = event.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  },false)

  function store() {
    window.localStorage.myitems = itemlist.innerHTML;
  }

  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      itemlist.innerHTML =  '<li>Make a to do list</li>'
    }
    else {
      itemlist.innerHTML = storedValues;
    }
  }
  getValues();
})();

  