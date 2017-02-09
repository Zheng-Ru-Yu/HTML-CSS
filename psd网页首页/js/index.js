$(function(){
	var $next = $('.next');
	var nowIdx=0;
	var $imges=$('.imges');
	var $img=$('.imges img');
	var ImgWidth=$img.first().outerWidth();

	$('.next').on('click',function(){
		nowIdx++;
		if (nowIdx==$img.length){
			nowIdx=0;
		}
		changeImg();

	});
	$('.prev').on('click',function(){
		console.log(111);
		nowIdx--;
		if (nowIdx==-1){
			nowIdx=$img.length-1;
		}
		changeImg();

	});
	function changeImg(){
		$imges.stop().animate({
			left:-nowIdx*(ImgWidth+204)
		
	});
}


















});