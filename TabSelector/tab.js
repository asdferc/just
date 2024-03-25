// {solve 3} : sol2의 찐 최적화.. dataset이라는 것을 사용한다. 지렸다 그냥.
$('.list').click(function(e){
	탭열기(e.target.dataset.id)
})

// {solve 2} : 이벤트 버블링을 역이용한다.
// $('.list').click(function(e){ //이벤트 리스너 1개만 쓰는 방법. 
// 	if (e.target == document.querySelectorAll('.tab-button')[0]) {
// 		탭열기(0)
// 	}
// 	if (e.target == document.querySelectorAll('.tab-button')[1]) {
// 		탭열기(1)
// 	}
// 	if (e.target == document.querySelectorAll('.tab-button')[2]) {
// 		탭열기(2)
// 	}
// })


// {solve 0}
// for (let i=0; i < $('.tab-button').length; i++) { // 코드 최적화  사용하기 ~~~!! (i<3라고 하드코딩되어 있으면 확장성이 없고 수정하기 어렵다.)
// 	$('.tab-button').eq(i).on('click', function(){
// 		$('.tab-button').removeClass('orange');
// 		$('.tab-button').eq(i).addClass('orange');
// 		$('.tab-content').removeClass('show');
// 		$('.tab-content').eq(i).addClass('show');
// })
// } // 반복문 안에서 변수를 잡을 땐, var i=0 가 아니라 let 으로 해야한다.



// {solve 1} : 탭열기 함수를 만들어 최적화
// for (let i=0; i < $('.tab-button').length; i++) {
// 	$('.tab-button').eq(i).on('click', function(){
// 		탭열기(i)
// 	})
// }
function 탭열기(구멍) {
		$('.tab-button').removeClass('orange');
		$('.tab-button').eq(구멍).addClass('orange');
		$('.tab-content').removeClass('show');
		$('.tab-content').eq(구멍).addClass('show');
}






// {무지성 코드들의 흔적}
// $('.tab-button').eq(1).on('click', function(){
// 	$('.tab-button').removeClass('orange');
// 	$('.tab-button').eq(1).addClass('orange');
// 	$('.tab-content').removeClass('show');
// 	$('.tab-content').eq(1).addClass('show');
// })

// $('.tab-button').eq(2).on('click', function(){
// 	$('.tab-button').removeClass('orange');
// 	$('.tab-button').eq(2).addClass('orange');
// 	$('.tab-content').removeClass('show');
// 	$('.tab-content').eq(2).addClass('show');
// })


// {전체적인 로직}
// 버튼0 누르면
// - 버튼0,1,2에 붙어있던 orange 클래스명 전부 제거하라고 코드 3줄 짜기
// - 버튼0에 orange 클래스명 부착
// - 박스0,1,2에 붙어있던 show 클래스명 전부 제거하라고 코드 3줄 짜기
// - 박스0에 show 클래스명 부착

// {이벤트 리스너는 램을 잡아먹는다.}
// 3번 반복되는 $('.tab-button') 를 변수로 치환해서 쓰자. 3배의 속도

// {깨달음}
// 반복문으로 쓸 수가 있구나 ..