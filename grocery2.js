const inputItemName = document.querySelector('.itemName');
const inputItemPrice = document.querySelector('.itemPrice');
const inputBudget = document.querySelector('.budget');
console.log(inputBudget.value);
const needButton = document.querySelector('.Need');
const haveButton = document.querySelector('.Have');
const doneButton = document.querySelector('.Done');
const budgetButtom = document.querySelector('.budgetbtn');
var needList = document.querySelector('.container ul');
var haveList = document.querySelector('.container2 ul');
var close1 = document.querySelectorAll('.container ul li');
var close2 = document.querySelectorAll('.container2 ul li');
const disp1 = document.getElementById('budgetOutput');
var currentTotal = document.getElementById('currentTotal');
var totalBill = 0;
var warning = document.getElementById('warning');
let arr = []; 

budgetButtom.addEventListener('click', (e)=>{
    if(inputBudget.value != null){
        e.preventDefault();
        disp1.innerHTML = "Your budget is $" + inputBudget.value;
    }
});

// Add to needList
needButton.addEventListener('click', (e)=>{
    if(inputItemName.value != ""){
        e.preventDefault();
        // Display Current Total Bill
        totalBill += parseFloat(inputItemPrice.value);
        arr.push(parseFloat(inputItemPrice.value));
        currentTotal.innerHTML = "Current Total: $" + totalBill;

        // If currentBill greater than total warn user
        if(totalBill > parseFloat(inputBudget.value)){
            warning.innerHTML = "Warning: Your current bill exceeds your budget";
        }

        //create list
        const myLi = document.createElement('li');
        myLi.innerHTML = '<input type="checkbox" name="Item">'+'<label>' + inputItemName.value + " $" +  inputItemPrice.value +'</label>'+'<a href="#"> &#10006; </a>';
        needList.appendChild(myLi);

    }
    close1 = document.querySelectorAll('.container ul li');
    for(let i=0; i<close1.length; i++){
        close1[i].children[2].addEventListener('click', (e)=>{
            e.preventDefault();
            // Reduce from current total
            console.log(i);
            totalBill -= parseFloat(arr[i]);
            currentTotal.innerHTML = "Current Total: $" + totalBill;
            arr.splice(arr.indexOf(i),1);


            close1[i].style.opacity = 0;
            setTimeout(()=>{
                close1[i].style.display = "none";
                close1[i].remove();
            }, 0);
            
            
        })
    }

});

// Add to have List
const haveListElements = document.querySelectorAll('.container ul li');
haveButton.addEventListener('click', (e)=>{
    if(inputItemName.value != ""){
        e.preventDefault();
        //create list
        const myLi = document.createElement('li');
        myLi.innerHTML = '<input type="checkbox" name="Item" checked>'+'<label>' + inputItemName.value + " $" +  inputItemPrice.value +'</label>'+'<a href="#"> &#10006; </a>';
        haveList.appendChild(myLi);

    }
    close2 = document.querySelectorAll('.container2 ul li');
    for(let i=0; i<close2.length; i++){
        close2[i].children[2].addEventListener('click', ()=>{
            close2[i].style.opacity = 0;
            setTimeout(()=>{
                close2[i].style.display = "none";
                close2[i].remove();
            }, 500);
        })
    }

});

// Remove from need list and add to have list
doneButton.addEventListener('click', (e)=>{
    const close = document.querySelectorAll('.container ul li');
    for(let i=0; i<close.length; i++){
        if(close[i].children[0].checked===true){
            //create list
            const myLi = document.createElement('li');
            myLi.innerHTML = '<input type="checkbox" name="Item" checked>'+close[i].children[1].textContent+'<a href="#"> &#10006; </a>';
            haveList.appendChild(myLi);
            close2 = document.querySelectorAll('.container2 ul li');
            close[i].remove();
        }
    }
});