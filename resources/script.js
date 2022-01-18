//setting zero as the initial value of both input fields
const firstClassInput = document.getElementById('first-class-input');
firstClassInput.value = 0;

const economyClassInput = document.getElementById('economy-class-input');
economyClassInput.value = 0;


//event handler for first class plus button
const firstClassPlus = document.getElementById('first-class-plus');
firstClassPlus.addEventListener('click', function(){
    const ticketClass = 'first-class'
    const id = ticketClass + '-input';
    const operation = 'plus';
    addTickets(id);
    updateSubtotal(id, ticketClass, operation);
})

//event handler for first class minus button
const firstClassMinus = document.getElementById('first-class-minus');
firstClassMinus.addEventListener('click', function(){
    const ticketClass = 'first-class'
    const id = ticketClass + '-input';
    const operation = 'minus';
    removeTickets(id);
    updateSubtotal(id, ticketClass, operation);
})

//event handler for economy class plus button
const economyClassPlus = document.getElementById('economy-class-plus');
economyClassPlus.addEventListener('click', function(){
    addTickets('economy-class-input');
})

//event handler for economy class minus button
const economyClassMinus = document.getElementById('economy-class-minus');
economyClassMinus.addEventListener('click', function(){
    removeTickets('economy-class-input');
})


//function for adding tickets
function addTickets(id){
    const input = document.getElementById(id);
    const currentValue = parseInt(input.value);
    const newValue = currentValue + 1;
    input.value = newValue;
}

//function for reducing tickets
function removeTickets(id){
    const input = document.getElementById(id);
    const currentValue = parseInt(input.value);
    let newValue = 0;
    if(currentValue > 0){
        newValue = currentValue - 1;
    }
    input.value = newValue;
}

function updateSubtotal(id, ticketClass, operation){
    const input = document.getElementById(id);
    const currentValue = parseInt(input.value);
    const subtotal = document.getElementById('subtotal');
    const currentSubtotal = parseInt(subtotal.innerText);
    let newSubtotal = 0;
    if (operation == 'plus'){
        if(ticketClass == 'first-class'){
            newSubtotal = currentSubtotal + 150;
        }
        else if(ticketClass == 'economy-class'){
            newSubtotal = currentSubtotal + 100;
        }
    }
    else if (operation == 'minus' && currentValue != 0){
        if(ticketClass == 'first-class'){
            newSubtotal = currentSubtotal - 150;
        }
        else if(ticketClass == 'economy-class'){
            newSubtotal = currentSubtotal - 100;
        }
    }

    subtotal.innerText = newSubtotal;
}