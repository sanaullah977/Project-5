document.getElementById('callBtn');
document.getElementById('coinCounter');

let currentCoin = parseInt(coinCounter.innerText);
callBtn.addEventListener('click', function(){
    if( currentCoin >= 20 ){
        currentCoin -=20;
        coinCounter.innerText = currentCoin;
        alert("কল করা হচ্ছে ");
    }
    else(
        alert("আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই।")
    )
    
})