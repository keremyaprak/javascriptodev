let name = prompt("İsminizi Giriniz");
let selectName = document.querySelector("#myName");
selectName.innerHTML = `${name}`;

function showTime() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('myClock').innerHTML =  hour + ":" + minute + ":" + second;
    setTimeout(showTime, 1000);
    
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  showTime()