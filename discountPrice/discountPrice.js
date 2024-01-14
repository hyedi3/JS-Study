function showPrice( ) {
    var currentPrice = document.querySelector("#cPrice").value;   // 사용자가 입력한 원래 가격 
    var rate = document.querySelector("#rate").value;             // 사용자가 입력한 할인율

    var savedPrice = currentPrice * (rate/100);     // 할인 퍼센트를 100으로 나눈 후 현재 가격이랑 곱해서 할인된 가격을 반환
    var resultPrice = currentPrice - savedPrice;    // 현재 가격에 할인된 가격을 뺀 결과값 반환

    document.querySelector(".showResult").innerHTML = "상품의 원래 가격은 " + currentPrice + 
    "원이고, 할인율은 " + rate + "%입니다. " + savedPrice + "원을 절약한 " + resultPrice + 
    " 원에 살 수 있습니다.";
}