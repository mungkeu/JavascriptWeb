// 사용자 입력값 받기 - prompt();
// 알림 창으로 출력하기 - alert();
// 웹 브라우저 화면에 출력하기 - document.write()
// 콘솔에 출력하기 - console.log()

// 에러찾기
// 크롬 -> f12 -> ctrl + shift + j

// let time = new Date(); // Date 객체 생성.
// let Display = time.toLocaleTimeString; // 현재 시간.
// let Display = time.getFullYear() // 현재 년도

// onlick()시 id값이 #result인 태그에 innerHtml 즉 붙여 넣는다 = 다음의 내용을
// document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세입니다.";

// typeof 연산자. 타입을 알려준다.
// typeof 1990;

// .value로 해당 id에 입력된 값을 가져와서 담는다.
// var originPrice = document.querySelector('#oPrice').value;

// 문자열과 값을 같이 사용할 때
// let str = `원래 가격은 ${price}입니다.`;

//람다
// addNumber = () => alert(a+b);

// 마우스 이벤트
// click - 사용자가 HTML 요소를 마우스로 눌렀을 때 이벤트가 발생
// dblclick - 사용자가 Html 요소를 마우스로 두 번 눌렀을 때 이벤트가 발생
// mousedown - 사용자가 요소 위에서 마우스 버튼을 누르는 동안 이벤트가 발생
// mousemove - 사용자가 요소 위에서 마우스 포인터를 움직일 때 이벤트가 발생
// mouseover - 마우스 포인터가 요소 위로 옮겨질 때 이벤트가 발생
// mouseout - 마우스 포인터가 요소를 벗어날 때 이벤트가 발생
// mouseup  - 상요자가 누르고 있던 마우스 버튼에서 손을 뗄 때 이벤트가 발생

// 키보드 이벤트
// keypress - 사용자가 키를 눌렀을 때 이벤트가 발생
// keydown - 사용자가 키를 누르는 동안 이벤트가 발생
// keyup - 사용자가 키에서 손을 뗄 때 이벤트가 발생

// 문서 로딩 이벤트
// abort - 웹 문서가 완전히 로딩되기 전에 불러오기를 멈췄을 때 이벤트가 발생
// error - 문서가 정확히 로딩되지 않았을 때 이벤트가 발생
// load - 문서 로딩이 끝나면 이벤트가 발생
// resize - 문서 화면 크기가 바뀌었을 때 이벤트가 발생
// scroll - 문서 화면이 스크롤되었을 때 이벤트가 발생
// unload - 문서를 벗어날 때 이벤트가 발생

// 폼 이벤트
// blur - 폼 요소에 포커스를 잃었을 때 이벤트가 발생
// change - 목록이나 체크 상태 등이 변경되었을 때 이벤트가 발생 (<input>,<select>,<textarea> 태그 등에서 사용)
// focus - 폼 요소에 포커스가 놓였을 때 이벤트가 발생 (<label>, <select>,<textarea>,<button> 태그 등에서 사용)
// reset - 폼이 다시 시작되었을 때 이벤트가 발생
// submit -  submit 버튼을 눌렀을 때 이벤트가 발생

// display를 바꿔가며 상세보기등을 보여주고 숨길때
// document.querySelector('#desc').style.display = 'block'; // 보임
// document.querySelector('#desc').style.display = 'none';  // 감춤

// 해당 이미지를 누를때 그리고 이미지에 마우스올리면 테두리 생기고 나가면 사라진다.
// var coverImage = document.querySelector('#cover');
// coverImage.onclick = () => alert('눌렀습니다.');
// coverImage.onmouseover = () => coverImage.style.border = '5px black solid';
// coverImage.onmouseout = () => coverImage.style.bore = '';

// 날짜/시간 정보를 가져오는 함수
// getFullYear()    - 날짜 정보에서 연도 정보를 가져와 네 자리 숫자로 표시합니다. 
// getMonth()       - 날짜 정보에서 월 정보를 가져옵니다. 0: 1월 ~ 11: 12월
// getDate()        - 날짜 정보에서 며칠인지 알 수 있는 일(Date) 정보를 가져온다.
// getDay()         - 날짜 정보에서 요일 정보를 가져온다. 0: 일요일, 6: 토요일
// getTime()        - 1970년 1월 1일 자정 이후의시간을 밀리초로 표시합니다. 밀리초 1/1000초를 가리킵니다.
// getHours()       - 0~23의 숫자로 시를 표시한다.
// getMinutes()     - 0~59의 숫자로 분을 표시한다.
// getSeconds()     - 0~59의 숫자로 초를 표시한다.
// getMilliseconds()- 0~999의 숫자로 밀리초를 표시한다.

// 날짜/시간 정보를 설정하는 함수
// setFullYear()    - 연도를 네 자리 숫자로 설정한다.
// setMonth()       - 0~11의 숫자로 월을 표시한다.
// setDate()        - 1~31의 숫자로 일을 설정한다.
// setTime()        - 1970년 1월 1일 자정 이후의 시간을 밀리초로 설정한다.
// setHours()       - 0~23의 숫자로 시를 설정한다. 
// setMinutes()     - 0~59의 숫자로 분을 설정한다.
// setSeconds()     - 0~59의 숫자로 초를 설정한다.
// setMilliseconds()- 0~999의 숫자로 밀리초를 설정한다.

// 응용
// 오늘 날짜로부터 50일이 지난 후의 날짜를 계산하는 방법
// 1. not.getDate() 함수로 오늘 날짜를 알아낸 후 그 값에 50을 더한다.
// 2. 그리고 now.setDate() 함수를 통해 그 값을 날짜 정보로 다시 바꾼다.
// now.setDate(now.getDate() + 50)