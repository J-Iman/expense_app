var total_budget = document.getElementById('total-budget')

var entire_budget = 0
var left_budget = 0 

var set_budget_button = document.getElementById('set-budget')
var add_to_list_button = document.getElementById('add-to-list')

var item_name = document.getElementById('item-name')
var item_price = document.getElementById('item-price')

var total_budget_text = document.getElementById('total-budget-text')
var remaning_budget_text = document.getElementById('remaning-budget-text')

set_budget_button.addEventListener('click', function(){

    entire_budget = total_budget.value;
    left_budget = entire_budget;

    if (entire_budget == "") {
        total_budget.style.borderBottom = '2px solid red'
    }
    else {

        total_budget.style.borderBottom = '1px solid black'
        total_budget_text.innerHTML = entire_budget;
        remaning_budget_text.innerHTML = entire_budget; 
    }
})

add_to_list_button.addEventListener('click', function(){
    if (item_price.value > entire_budget || item_price.value > left_budget){
        // show a message you can't afford this
        alert('wrong')
    }

    else {
        // logical aspect 
        left_budget = left_budget - item_price.value
        remaning_budget_text.innerHTML = left_budget
        // Embding element into the right container 
        var right_side = document.getElementById('right-side')
        var right_side_container = document.createElement('div') 
        right_side_container.classList.add('right-side-container')

        var item_name_conatiner = document.createElement('p')
        item_name_conatiner.innerText = item_name.value

        var item_price_container = document.createElement('p')
        item_price_container.innerText = item_price.value

        var remove_item = document.createElement('p')
        remove_item.innerText = 'remove'

        item_name_conatiner.classList.add('element_applied')
        item_price_container.classList.add('element_applied')
        remove_item.classList.add('element_applied')


        right_side.appendChild(right_side_container)
        right_side_container.appendChild(item_name_conatiner)
        right_side_container.appendChild(item_price_container)
        right_side_container.appendChild(remove_item)
    }
})

// remove_item.addEventListener('click', function(){
//     alert('clicked')
//     right_side.removeChild(right_side_container)
//     left_budget = item_price.value + left_budget
// })