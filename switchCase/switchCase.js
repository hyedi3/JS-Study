let displayArea = document.querySelector('.result');       // result 클래스를 찾아와 displayArea 변수에 저장합니다. 

let session = prompt("관심 세션을 선택해 주세요. [1. 마케팅, 2. 개발, 3. 디자인]", "1");        // 사용자로부터 숫자를 입력받아 session 변수에 저장합니다. (미리보기 숫자 1)
const marketingSession = "201호";
const developSession = "203호";
const designSession = "205호";

switch (session) {     // 사용자가 입력한 값 확인
    case "1":     // 1번을 입력할 경우 실행 
        displayArea.innerHTML = `마케팅 세션은 <span class="strong">${marketingSession}</span>에서 진행됩니다.`;
        break;     // case 문 실행 후 switch 문 탈출 

    case "2":      // 2번을 입력할 경우 실행 
        displayArea.innerHTML = `개발 세션은 <span class="strong">${developSession}</span>에서 진행됩니다.`;
        break;

    case "3":      // 3번을 입력할 경우 실행 
        displayArea.innerHTML = `디자인 세션은 <span class="strong">${designSession}</span>에서 진행됩니다.`;
        break;

    default:     // case에 지정한 조건값과 일치하는 조건이 없을 때 실행 
        alert("리스트에 없는 세션입니다.");
}