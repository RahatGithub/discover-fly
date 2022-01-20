//setting zero as the initial value of both input fields
const firstClassInput = document.getElementById('first-class-input');
firstClassInput.value = 0;

const economyClassInput = document.getElementById('economy-class-input');
economyClassInput.value = 0;


//event handler for first class plus button
const firstClassPlus = document.getElementById('first-class-plus');
firstClassPlus.addEventListener('click', function(){
    updateTickets('first', 'plus')
})

//event handler for first class minus button
const firstClassMinus = document.getElementById('first-class-minus');
firstClassMinus.addEventListener('click', function(){
    updateTickets('first', 'minus')
})

//event handler for economy class plus button
const economyClassPlus = document.getElementById('economy-class-plus');
economyClassPlus.addEventListener('click', function(){
    updateTickets('economy', 'plus')
})

//event handler for economy class minus button
const economyClassMinus = document.getElementById('economy-class-minus');
economyClassMinus.addEventListener('click', function(){
    updateTickets('economy', 'minus')
})

// function for increasing/decreasing the number of tickets and update the subtotal
function updateTickets(ticketClass, operation){
    const id = ticketClass + '-class-input';
    updateSubtotal(id, ticketClass, operation);
    if (operation == 'plus'){
        addTickets(id);
    }
    else if (operation == 'minus'){
        removeTickets(id);
    }
}

//function for increasing the number of tickets
function addTickets(id){
    const input = document.getElementById(id);
    const currentValue = parseInt(input.value);
    const newValue = currentValue + 1;
    input.value = newValue;
}

//function for reducing the number of tickets
function removeTickets(id){
    const input = document.getElementById(id);
    const currentValue = parseInt(input.value);
    let newValue = 0;
    if(currentValue > 0){
        newValue = currentValue - 1;
    }
    input.value = newValue;
}

// function for updating subtotal
function updateSubtotal(id, ticketClass, operation){
    const input = document.getElementById(id);
    const currentValue = parseInt(input.value);
    const subtotal = document.getElementById('subtotal');
    const currentSubtotal = parseInt(subtotal.innerText);
    let newSubtotal = currentSubtotal;
    if (operation == 'plus'){
        if(ticketClass == 'first'){
            newSubtotal = currentSubtotal + 150;
        }
        else if(ticketClass == 'economy'){
            newSubtotal = currentSubtotal + 100;
        }
    }
    else if (operation == 'minus' && currentValue != 0){
        if(ticketClass == 'first'){
            newSubtotal = currentSubtotal - 150;
        }
        else if(ticketClass == 'economy'){
            newSubtotal = currentSubtotal - 100;
        }
    }
    subtotal.innerText = newSubtotal;
    updateTax();
    updateTotal();
}

//function for updating TAX 
function updateTax(){
    const subtotal = document.getElementById('subtotal');
    const currentSubtotal = parseInt(subtotal.innerText);
    const tax = document.getElementById('tax');
    tax.innerText = currentSubtotal * 0.1;
}

//function for updating total
function updateTotal(){
    const subtotal = document.getElementById('subtotal');
    const currentSubtotal = parseInt(subtotal.innerText);
    const tax = document.getElementById('tax');
    const currentTax = parseInt(tax.innerText);
    const total = document.getElementById('total');
    total.innerText = currentSubtotal + currentTax;
}


const bookNowBtn = document.getElementById('book-now-btn');
bookNowBtn.addEventListener('click', function(){
    const numFirstClass = document.getElementById('first-class-input').value;
    const numEconomyClass = document.getElementById('economy-class-input').value;
    const total = document.getElementById('total').innerText;

    window.alert("Thanks for flying with us.\nFirst Class Tickets: " + numFirstClass + "\nEconomy Class Tickets: " + numEconomyClass + "\nTotal amount: $" + total);
})