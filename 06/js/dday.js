var now = new Date();
var firstDay = new Date("2018-03-23");
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime/(24*60*60*1000));
document.querySelector('#accent').innerText = passedDay + "일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days){
    let future = toFirst + days * (1000 * 60 * 60 * 24); // 처음 만난 날에 100일을 더한다.
    let someday = new Date(future);

    let year = someday.getFullYear();
    let month = someday.getMonth()+1;
    let date = someday.getDate();

document.querySelector('#date' + days).innerHTML = year + '년' + month + '월' + date + '일';
}

