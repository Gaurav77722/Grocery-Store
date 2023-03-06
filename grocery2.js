const inputItemName = document.querySelector('.itemName');
const needButton = document.querySelector('.Need');
const haveButton = document.querySelector('.Have');
const needList = document.querySelector('.container ul');
console.log(needList);
const haveList = document.querySelector('.container2 ul');
console.log(haveList);
console.log(inputItemName);

needButton.addEventListener('click', (e)=>{
    if(inputItemName.value != ""){
        e.preventDefault();
        //create list
        const myLi = document.createElement('li');
        myLi.innerHTML = '<input type="checkbox" name="Item">'+inputItemName.value+'<a href="#"> &#10006; </a>';
        console.log(needList);
        needList.appendChild(myLi);

        // create span
        // const mySpan = document.createElement('span');
        // mySpan.innerHTML = '<input type="checkbox" name="Item">'+inputItemName.value+'<a href="#"> &#10006; </a>';
        // myLi.appendChild(mySpan);
    }
    const close = document.querySelectorAll('li');
    for(let i=0; i<close.length; i++){
        close[i].children[1].addEventListener('click', ()=>{
            close[i].style.opacity = 0;
            setTimeout(()=>{
                close[i].style.display = "none";
                close[i].remove();
            }, 500);
        })
    }
    
    inputItemName.value="";

});