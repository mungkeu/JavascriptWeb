var slides = document.querySelectorAll("#container > img"); // 이미지들을 저장한 배열
var prev = document.querySelector("#prev");  // 이전 버튼 
var next = document.querySelector("#next");		// 다음 버튼
var current = 0; // 표시할 이미지 위치
// www.w3c.org에서 제공하는 엔티티 코드 표는 https://dev.w3.org/html5/html-author/charref

 showSlide(current);


function showSlide(n) {
    for(var i=0; i<slides.length; i++) {  // slide 배열의 처음부터 끝까지 반복
      slides[i].style.display = "none";  // 모든 이미지를 화면에서 감춤
    }
    slides[n].style.display = "block";  // n번째 이미지를 화면에 표시 
  }

    prev.onclick = prevSlide;
    next.onclick = nextSlide;
	function prevSlide(){
			if(current>0)current-=1;
			else current = slides.length -1;
			showSlide(current);
		}
	function nextSlide (){
			if(current < slides.length-1)
				current += 1;
			else
				current=0;
				showSlide(current);
		}