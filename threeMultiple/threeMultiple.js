window.addEventListener('DOMContentLoaded', function () {
    domReady();
 });
 
 function domReady() {
     var displayArea = document.querySelector('.result');
     var userNumber = prompt("숫자를 입력하세요.");
 
     if (userNumber != null) {                          // [확인]을 눌렀을 때 실행
 
         if (userNumber % 3 === 0) {                // 3의 배수일 때 실행
             displayArea.innerHTML = `${userNumber}은 3의 배수입니다.`;
         }
         else {                                                       // 3의 배수가 아닐 때 실행
             displayArea.innerHTML = `${userNumber}은 3의 배수가 아닙니다.`;
         }
     } else {
         alert("입력이 취소되었습니다.")        // [취소]를 눌렀을 때 실행
     }
 }