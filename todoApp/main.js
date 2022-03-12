const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
var description = document.querySelector('#desc')
const container = document.querySelector('.container');

class item{
    constructor(itemName, description){
        //create the item div
        this.createDiv(itemName, description);
    }

    createDiv(itemName, description){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let desc = document.createElement('input');
        desc.value = description;
        desc.disabled = true;
        desc.classList.add('item_desc');
        desc.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
        itemBox.appendChild(desc);

        editButton.addEventListener('click',() => this.edit(input));
        editButton.addEventListener('click',() => this.edit(desc));


        removeButton.addEventListener('click', () => this.remove(itemBox));

    }

    edit(input){
        input.disabled = !input.disabled;
        desc.disabled = !desc.disabled;
    }

    remove(item){
        container.removeChild(item);
    }

}

function check(){
    if(input.value != ""){
        new item(input.value, description.value);
        input.value = "";
        description.value = "";
    }
}



addButton.addEventListener('click',check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})