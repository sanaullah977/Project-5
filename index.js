

// Heart Icon & Counter proccessing section

document.getElementById('heartIcon1');
document.getElementById('heartCounter')

let count = 0;

heartIcon1.addEventListener('click' , function() {
    count ++ ;
    
    heartCounter.textContent = count ;
});

document.getElementById('heartIcon2');
document.getElementById('heartCounter')



heartIcon2.addEventListener('click' , function() {
    count ++ ;
    
    heartCounter.textContent = count ;
});

document.getElementById('heartIcon3');
document.getElementById('heartCounter')


heartIcon3.addEventListener('click' , function() {
    count ++ ;
    
    heartCounter.textContent = count ;
});

document.getElementById('heartIcon4');
document.getElementById('heartCounter')


heartIcon4.addEventListener('click' , function() {
    count ++ ;
    
    heartCounter.textContent = count ;
});

document.getElementById('heartIcon5');
document.getElementById('heartCounter')


heartIcon5.addEventListener('click' , function() {
    count ++ ;
    
    heartCounter.textContent = count ;
});

document.getElementById('heartIcon6');
document.getElementById('heartCounter')


heartIcon6.addEventListener('click' , function() {
    count ++ ;
    
    heartCounter.textContent = count ;
});

document.getElementById('heartIcon7');
document.getElementById('heartCounter')



heartIcon7.addEventListener('click' , function() {
    count ++ ;
    
    heartCounter.textContent = count ;
});

document.getElementById('heartIcon8');
document.getElementById('heartCounter')



heartIcon8.addEventListener('click' , function() {
    count ++ ;
    
    heartCounter.textContent = count ;
});

document.getElementById('heartIcon9');
document.getElementById('heartCounter')



heartIcon9.addEventListener('click' , function() {
    count ++ ;
    
    heartCounter.textContent = count ;
});


// Copy Button & Counter Proccessing Section


document.getElementById('copyBtn1');
document.getElementById('copyCounter')

let copycount= 0;

copyBtn1.addEventListener('click' , function() {
    copycount ++ ;
    
    copyCounter.textContent = copycount;
});



document.getElementById('copyBtn2');
document.getElementById('copyCounter')


copyBtn2.addEventListener('click' , function() {
    copycount ++ ;
    
    copyCounter.textContent = copycount;
});

document.getElementById('copyBtn3');
document.getElementById('copyCounter')


copyBtn3.addEventListener('click' , function() {
    copycount ++ ;
    
    copyCounter.textContent = copycount;
});

document.getElementById('copyBtn4');
document.getElementById('copyCounter')


copyBtn4.addEventListener('click' , function() {
    copycount ++ ;
    
    copyCounter.textContent = copycount;
});

document.getElementById('copyBtn5');
document.getElementById('copyCounter')


copyBtn5.addEventListener('click' , function() {
    copycount ++ ;
    
    copyCounter.textContent = copycount;
});

document.getElementById('copyBtn6');
document.getElementById('copyCounter')


copyBtn6.addEventListener('click' , function() {
    copycount ++ ;
    
    copyCounter.textContent = copycount;
});

document.getElementById('copyBtn7');
document.getElementById('copyCounter')


copyBtn7.addEventListener('click' , function() {
    copycount ++ ;
    
    copyCounter.textContent = copycount;
});

document.getElementById('copyBtn8');
document.getElementById('copyCounter')


copyBtn8.addEventListener('click' , function() {
    copycount ++ ;
    
    copyCounter.textContent = copycount;
});

document.getElementById('copyBtn9');
document.getElementById('copyCounter')


copyBtn9.addEventListener('click' , function() {
    copycount ++ ;
    
    copyCounter.textContent = copycount;
});




// Call & Coin proccessing section


document.getElementById('callBtn1');
document.getElementById('coinCounter');

let currentCoin = parseInt(coinCounter.innerText);
callBtn1.addEventListener('click', function(){
    if( currentCoin >= 20 ){
        currentCoin -=20;
        coinCounter.innerText = currentCoin;
        alert("To call the National Emergency Number, please dial 999.");
    }
    else(
        alert("999 নম্বরটিতে কল করার জন্য আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই।  Please Recharge Minimum Amount of 20 coin. ")
    )
    
});

document.getElementById('callBtn2');
document.getElementById('coinCounter');


callBtn2.addEventListener('click', function(){
    if( currentCoin >= 20 ){
        currentCoin -=20;
        coinCounter.innerText = currentCoin;
        alert("To call the Police, please dial 999.");
    }
    else(
        alert("999 নম্বরটিতে কল করার জন্য আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই। Please Recharge Minimum Amount of 20 coin.")
    )
    
});

document.getElementById('callBtn3');
document.getElementById('coinCounter');


callBtn3.addEventListener('click', function(){
    if( currentCoin >= 20 ){
        currentCoin -=20;
        coinCounter.innerText = currentCoin;
        alert("To call the Fire Service, please dial 999.");
    }
    else(
        alert("999 নম্বরটিতে কল করার জন্য আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই। Please Recharge Minimum Amount of 20 coin.")
    )
    
});

document.getElementById('callBtn4');
document.getElementById('coinCounter');


callBtn4.addEventListener('click', function(){
    if( currentCoin >= 20 ){
        currentCoin -=20;
        coinCounter.innerText = currentCoin;
        alert("To call the Ambulance , please dial 1994-999999. ");
    }
    else(
        alert("1994-999999 নম্বরটিতে কল করার জন্য আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই। Please Recharge Minimum Amount of 20 coin.")
    )
    
});

document.getElementById('callBtn5');
document.getElementById('coinCounter');


callBtn5.addEventListener('click', function(){
    if( currentCoin >= 20 ){
        currentCoin -=20;
        coinCounter.innerText = currentCoin;
        alert("To call the Women & child Helpline , please dial 109. ");
    }
    else(
        alert("109 নম্বরটিতে কল করার জন্য আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই। Please Recharge Minimum Amount of 20 coin.")
    )
    
});

document.getElementById('callBtn6');
document.getElementById('coinCounter');


callBtn6.addEventListener('click', function(){
    if( currentCoin >= 20 ){
        currentCoin -=20;
        coinCounter.innerText = currentCoin;
        alert(" To call the Anti-Corruption, please dial 106.");
    }
    else(
        alert("106 নম্বরটিতে কল করার জন্য আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই। Please Recharge Minimum Amount of 20 coin.")
    )
    
});

document.getElementById('callBtn7');
document.getElementById('coinCounter');


callBtn7.addEventListener('click', function(){
    if( currentCoin >= 20 ){
        currentCoin -=20;
        coinCounter.innerText = currentCoin;
        alert("To call the Electricity Hotline , please dial 16216.");
    }
    else(
        alert("16216 নম্বরটিতে কল করার জন্য আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই। Please Recharge Minimum Amount of 20 coin.")
    )
    
});

document.getElementById('callBtn8');
document.getElementById('coinCounter');


callBtn8.addEventListener('click', function(){
    if( currentCoin >= 20 ){
        currentCoin -=20;
        coinCounter.innerText = currentCoin;
        alert("To call the Brac , please dial 16445.");
    }
    else(
        alert("16445 নম্বরটিতে কল করার জন্য আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই। Please Recharge Minimum Amount of 20 coin.")
    )
    
});

document.getElementById('callBtn9');
document.getElementById('coinCounter');


callBtn9.addEventListener('click', function(){
    if( currentCoin >= 20 ){
        currentCoin -=20;
        coinCounter.innerText = currentCoin;
        alert("To call the Bangladesh Railway , please dial 163 . ");
    }
    else(
        alert(" 163 নম্বরটিতে কল করার জন্য আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই। Please Recharge Minimum Amount of 20 coin.")
    )
    
});


// Copy oparetion Section-----------------------

 document.getElementById('copyBtn1');
copyBtn1.addEventListener('click', function(){

    let card = copyBtn1.closest("div.md\\:w-\\[400px\\]");
    let number = card.querySelector("span").textContent;

navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied The Text: " + number);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });

});

 document.getElementById('copyBtn2');
copyBtn2.addEventListener('click', function(){

    let card = copyBtn2.closest("div.md\\:w-\\[400px\\]");
    let number = card.querySelector("span").textContent;

navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied The Text: " + number);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });

});

 document.getElementById('copyBtn3');
copyBtn3.addEventListener('click', function(){

    let card = copyBtn3.closest("div.md\\:w-\\[400px\\]");
    let number = card.querySelector("span").textContent;

navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied The Text: " + number);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });

});

 document.getElementById('copyBtn4');
copyBtn4.addEventListener('click', function(){

    let card = copyBtn4.closest("div.md\\:w-\\[400px\\]");
    let number = card.querySelector("span").textContent;

navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied The Text: " + number);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });

});

 document.getElementById('copyBtn5');
copyBtn5.addEventListener('click', function(){

    let card = copyBtn5.closest("div.md\\:w-\\[400px\\]");
    let number = card.querySelector("span").textContent;

navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied The Text: " + number)
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });

});

 document.getElementById('copyBtn6');
copyBtn6.addEventListener('click', function(){

    let card = copyBtn6.closest("div.md\\:w-\\[400px\\]");
    let number = card.querySelector("span").textContent;

navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied The Text: " + number)
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });

});

 document.getElementById('copyBtn7');
copyBtn7.addEventListener('click', function(){

    let card = copyBtn7.closest("div.md\\:w-\\[400px\\]");
    let number = card.querySelector("span").textContent;

navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied The Text: " + number);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });

});

 document.getElementById('copyBtn8');
copyBtn8.addEventListener('click', function(){

    let card = copyBtn8.closest("div.md\\:w-\\[400px\\]");
    let number = card.querySelector("span").textContent;

navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied The Text: " + number);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });

});

 document.getElementById('copyBtn9');
copyBtn9.addEventListener('click', function(){

    let card = copyBtn9.closest("div.md\\:w-\\[400px\\]");
    let number = card.querySelector("span").textContent;

navigator.clipboard.writeText(number)
      .then(() => {
        alert("Copied The Text: " + number);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });

});


// Call History Section-----------------------

// document.getElementById("callBtn1").addEventListener("click",function() {
//     let card = document.getElementById("callBtn1").closest("div.md\\:w-\\[400px\\]");
    
//     let title = card.querySelector("h1").textContent;
//     let number = card.querySelector("span").textContent;
    
//     let recordDiv= document.createElement("div");
//     recordDiv.textContent = 'called: ${title} -${number}';
//     recordDiv.classList.add("p-2", "border", "border-gray-300", "rounded", "mb-2");

//     document.getElementById("recordContainer").appendChild(recordDiv);
// });

const callData = [];
const callButtons = document.querySelectorAll(".callBtn1");
const historyContainer = document.getElementById("callHistory");

callButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const parentCard = this.closest(".cardName");
    const name = parentCard.querySelector(".serviceName").innerText;
    const number = parentCard.querySelector(".serviceNumber").innerText;

    const data = {
      name: name,
      number: number,
      date: new Date().toLocaleTimeString(),
    };

    callData.push(data);

    // নতুন call history append করা
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="flex justify-between items-center p-3 bg-gray-100 rounded-md">
        <div>
          <h4 class="font-semibold">${data.name}</h4>
          <p class="text-gray-600">${data.number}</p>
        </div>
        <p class="text-sm">${data.date}</p>
      </div>
    `;
    historyContainer.appendChild(div);

    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-3 bg-gray-100 rounded-md mb-2";

    li.innerHTML = `
      <div>
        <h4 class="font-semibold">${data.name}</h4>
        <p class="text-gray-600">${data.number}</p>
      </div>
      <p class="text-sm">${data.date}</p>
    `;

    historyContainer.appendChild(li);

    // scroll সর্বশেষ কল এ নেমে আসবে
    historyContainer.scrollTop = historyContainer.scrollHeight;
  });
});
    