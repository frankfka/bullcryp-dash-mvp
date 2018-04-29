/*********
VARIABLES
*********/

var tradeContainer = document.getElementById('tradeContainer');
var orderBook = document.getElementById('orderBook');
var orderToggle = document.getElementById('bookImg');

// toggle with book icon
let orderToggleClick = 0;
orderToggle.addEventListener('click', function(ev){
    orderToggleClick++;
    if (orderToggleClick == 1){
        tradeContainer.style.width = "100%";
        orderBook.style.width = "0%";
        orderToggle.style.left = "90%";
        orderToggle.style.transition = "all 0.5s";
        tradeContainer.style.transition = "all 0.5s";
        orderBook.style.transition = "all 0.5s";
    } else if (orderToggleClick == 2){
        tradeContainer.style.width = "70%";
        orderBook.style.width = "30%";
        orderToggle.style.left = "70%";
        orderToggle.style.transition = "all 0.5s";
        tradeContainer.style.transition = "all 0.5s";
        orderBook.style.transition = "all 0.5s";
        orderToggleClick = 0;
    }
});