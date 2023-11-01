const button = document.querySelector('button');
const ul = document.querySelector('ul');
const TODO_List = document.querySelector('.TODO-List')

button.addEventListener('click', (e)=>{
    const input = document.querySelector('input');
    const item = input.value;
    // console.log(item);
    if(input.value != ""){
        const li = document.createElement('li');
        const Button = document.createElement('button');
        Button.innerHTML = "❌"
        li.innerHTML = item;
        li.appendChild(Button);
        ul.appendChild(li);
        input.value = "";
        Button.addEventListener('click', (e)=> {
            li.remove();
        })
    }

})