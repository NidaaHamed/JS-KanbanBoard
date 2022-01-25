let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  //task1
  const item = document.createElement("div");
  //task2
  item.classList.add("item");
  item.id = 'item-' + order;
  item.draggable = true;
  //task3
  item.addEventListener('dragstart',(event) => {
    return event.dataTransfer.setData('text', event.target.id);
  });
  //task4
  item.addEventListener('dragend',(event) => {
    return event.dataTransfer.clearData();
  });
  //task5
  const input = document.createElement("input");
  item.appendChild(input);
  //task6
  const save_btn = document.createElement("button");
  save_btn.innerHTML="Save";
  //task7
  save_btn.addEventListener('click', () => {
    //task8
    error.innerHTML='';
    if(input.value !== ''){
      //task9
      order = order + 1;
      item.innerHTML=input.value;
      adding = false;
    }else{
      //task10
      error.innerHTML = message;
    }
  })
  //task11
  item.appendChild(save_btn);
  return item;
  
};

document.querySelectorAll('.drop').forEach(element => {
  //task12
  element.addEventListener('drop', (event) => {
    event.preventDefault();
    //task13
    const id = event.dataTransfer.getData('text');
    //task14
    event.target.appendChild(document.getElementById(id));
  });
  //task15
  element.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
});