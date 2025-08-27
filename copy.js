 document.getElementById('copyBtn');
 document.getElementById('copyCounter')

let copycount= 0;

copyBtn.addEventListener('click' , function() {
    copycount ++ ;
    
    copyCounter.textContent = copycount;
});