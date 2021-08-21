
function includedPrice(cost) {
    const extraMemoryCost = document.getElementById(cost);
    extraMemoryCost.innerText = 0;
}
// 8gb unified memory
document.getElementById('8gb-memory-btn').addEventListener('click', function(){
    includedPrice('extra-memory-cost')
})
//  256GB SSD storage includedPrice
document.getElementById('256gb-ssd-btn').addEventListener('click', function(){
    includedPrice('extra-storage-cost')
})
document.getElementById('free-delivery').addEventListener('click', function(){
    includedPrice('delivery-charge')
})

// 16gb unified memory

function updateTotalPrice(extraPrice, price ,totalPrice) {


    //  get extra price
    const extraItem = document.getElementById(extraPrice);
    const extraItemText = extraItem.innerText;
    const extraItemCosts = parseInt(extraItemText) + price;
    extraItem.innerText = extraItemCosts;
     
   
    // sum total price
    const totalItemPrice = document.getElementById(totalPrice);
    const totalItemText = totalItemPrice.innerText;
    const previousTotal = parseInt(totalItemText);
    const sumOfTotal = previousTotal + extraItemCosts;
    totalItemPrice.innerText = sumOfTotal;

    const total = document.getElementById('total');
    total.innerText = sumOfTotal;
};
// extra memory cost
document.getElementById('16gb-memory-btn').addEventListener('click', function(){
    updateTotalPrice('extra-memory-cost', 180, 'total-price')
});


// 512 SSD storage cost
document.getElementById('512gb-ssd-btn').addEventListener('click', function (){
    updateTotalPrice('extra-storage-cost', 100, 'total-price')
});


// 1TB SSD storage cost
document.getElementById('1tb-ssd-btn').addEventListener('click', function (){
    updateTotalPrice('extra-storage-cost', 180, 'total-price')
});


// extra delivery cost
document.getElementById('extra-delivery-charge').addEventListener('click', function (){
    updateTotalPrice('delivery-charge', 20, 'total-price')
});


document.getElementById('apply-btn').addEventListener('click', function(){
    const promoCodeInput = document.getElementById('promo-code-input');
    const promoCodeInputValue = promoCodeInput.value;
    
    if( promoCodeInputValue == 'stevekaka'){
        
    }
    else{
        console.log('Please Give Correct Code')
    }
});
