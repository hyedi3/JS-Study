// 버튼을 클릭했을 때, onclick에 설정한 calc 함수 실행 
function calc() {
    var currentYear = prompt("현재 년도를 입력하세요.", "YYYY"); // 사용자가 입력한 값을 저장하는 변수 (올해 년도)
    var birthYear = prompt("태어난 년도를 입력하세요.", "YYYY");  // 사용자가 입력한 값을 저장하는 변수 (태어난 년도)
    var age;   // 계산한 나이를 저장할 변수 

    // 올해 년도에서 태어난 년도를 뺀 다음 1을 더하여 age에 저장
    age = currentYear - birthYear + 1; 

    // 문서(document)에서 선택자를 사용하여, (querySelector) id 값이 result인 태그("#result")를 선택하고 HTML에 삽입(innerHTML)
    // querySelector : 괄호 속에 제공한 선택자와 일치하는 문서 내 첫 번째 Element를 반환
    document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세입니다.";

}
