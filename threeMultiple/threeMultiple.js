// DOMContentLoaded 이벤트 :  HTML 문서의 모든 요소들이 로드되고 파싱되었을 때 발생하는 이벤트
window.addEventListener('DOMContentLoaded', function () {
    domReady();                   // DOMContentLoaded 이벤트가 발생했을 때 domReady() 함수를 호출합니다.
 });
 
 function domReady() {
     var displayArea = document.querySelector('.result');      // result 클래스를 찾아와 displayArea 변수에 저장합니다. 
     var userNumber = prompt("숫자를 입력하세요.");        // 사용자로부터 숫자를 입력받습니다. 
 
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