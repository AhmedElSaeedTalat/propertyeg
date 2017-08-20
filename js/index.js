$(document).scroll(function(){
	$(".menu").show();
	$(".menu").addClass("navbar-fixed-top");
	if($(document).scrollTop()==0){
		$(".menu").hide();
	}
});
$(document).ready(function(){
	$(".headingStyle").addClass("headingAnimation");
	$(".textStyle").addClass("textStyleAnimation");
	$(".button1").addClass("buttonAnimation1");
	$(".button2").addClass("buttonAnimation2");
});
$("#list").click(function(){
	$(".xsMenu").slideToggle();
});
$("document").ready(function(){
	let x = $("#headOfPage");
	let refered = this;
	let y = scrollMonitor.create(x);
	y.enterViewport(
		()=>{
			$("#2").removeClass("specialStyle");
			$("#3").removeClass("specialStyle");
			$("#4").removeClass("specialStyle");
			$("#5").removeClass("specialStyle");
 			$("#1").addClass("specialStyle");
 			$("#homeSection").addClass("specialStyle");
			$("#TESTIMONIALSSection").removeClass("specialStyle");
			$("#contactSection").removeClass("specialStyle");
			$("#blogSection").removeClass("specialStyle");
 			$("#aboutSection").removeClass("specialStyle");
		});
	});
$("document").ready(function(){
	let x = $("#about");
	let refered = this;
	let y = scrollMonitor.create(x);
	y.enterViewport(
		()=>{
			$("#1").removeClass("specialStyle");
			$("#3").removeClass("specialStyle");
			$("#4").removeClass("specialStyle");
			$("#5").removeClass("specialStyle");
 			$("#2").addClass("specialStyle");
 			$("#homeSection").removeClass("specialStyle");
			$("#TESTIMONIALSSection").removeClass("specialStyle");
			$("#contactSection").removeClass("specialStyle");
			$("#blogSection").removeClass("specialStyle");
 			$("#aboutSection").addClass("specialStyle");
		});
	});


$("document").ready(function(){
	let x = $("#TESTIMONIALS");
	let refered = this;

	let y = scrollMonitor.create(x);

	y.enterViewport(
		()=>{
			$("#2").removeClass("specialStyle");
 			$("#3").addClass("specialStyle");
			$("#5").removeClass("specialStyle");
			$("#4").removeClass("specialStyle");
			$("#homeSection").removeClass("specialStyle");
			$("#TESTIMONIALSSection").addClass("specialStyle");
			$("#contactSection").removeClass("specialStyle");
			$("#blogSection").removeClass("specialStyle");
 			$("#aboutSection").removeClass("specialStyle");
		}


		);
	});
		
$("document").ready(function(){
	let x = $("#Blog");
	let refered = this;

	let y = scrollMonitor.create(x);

	y.enterViewport(
		()=>{
			$("#1").removeClass("specialStyle");
			$("#2").removeClass("specialStyle");
			$("#3").removeClass("specialStyle");
 			$("#4").addClass("specialStyle");
			$("#5").removeClass("specialStyle");
			$("#homeSection").removeClass("specialStyle");
			$("#TESTIMONIALSSection").removeClass("specialStyle");
			$("#contactSection").removeClass("specialStyle");
			$("#aboutSection").removeClass("specialStyle");
 			$("#blogSection").addClass("specialStyle");
		}


		);
	});
		$("document").ready(function(){
	let x = $("#Form");

	let y = scrollMonitor.create(x);

	y.enterViewport(
		()=>{
			$("#1").removeClass("specialStyle");
			$("#2").removeClass("specialStyle");
			$("#3").removeClass("specialStyle");
			$("#4").removeClass("specialStyle");
 			$("#5").addClass("specialStyle");
 			$("#homeSection").removeClass("specialStyle");
			$("#TESTIMONIALSSection").removeClass("specialStyle");
			$("#contactSection").addClass("specialStyle");
			$("#blogSection").removeClass("specialStyle");
 			$("#aboutSection").removeClass("specialStyle");
		}


		);
	});
		
					// Slider
	let index = 0;
	var first = $(".first");
  		var second = $(".second");
  		var third = $(".third");
  		var array  = [first,second,third];
  $(document).ready(function(){
  		
  		array[index].addClass("display");
  		checkClasses();
  		setInterval(function (){showBlog()},4500);
  });


function showBlog(){
	
  
	index += 1;
	hideBlog();
	console.log(index);
	showNext();
	checkClasses();
}
function showNext()
{
	if(index >= array.length){
		index = 0;
		array[index].addClass("display");
	}
	else{
		array[index].addClass("display");
		
	}

}
function hideBlog(){
	if(index > 0){
		let previousIndex = index-1;
		array[previousIndex].removeClass("display");
}
}
$("#first").click(function(){
	index = 0;
	array[index].addClass("display");
	array[1].removeClass("display");
	array[2].removeClass("display");
	$("#first").css({"background":"#323232"});
	$("#second").css({"background":"#868686"});
	$("#third").css({"background":"#868686"});
});
$("#second").click(function(){
	index = 1;
	array[index].addClass("display");
	array[0].removeClass("display");
	array[2].removeClass("display");
	$("#second").css({"background":"#323232"});
	$("#first").css({"background":"#868686"});
	$("#third").css({"background":"#868686"});
});
$("#third").click(function(){
	index = 2;
	array[index].addClass("display");
	array[1].removeClass("display");
	array[0].removeClass("display");
	$("#third").css({"background":"#323232"});
	$("#second").css({"background":"#868686"});
	$("#first").css({"background":"#868686"});

});
function checkClasses(){
	if(first.hasClass("display")){
		$("#first").css({"background":"#323232"});
		$("#second").css({"background":"#868686"});
		$("#third").css({"background":"#868686"});

	}else if(second.hasClass("display")){
		$("#second").css({"background":"#323232"});
		$("#first").css({"background":"#868686"});
		$("#third").css({"background":"#868686"});

	}
	else if(third.hasClass("display")){
		$("#third").css({"background":"#323232"});
		$("#second").css({"background":"#868686"});
		$("#first").css({"background":"#868686"});

	}
	console.log(first.hasClass("display"));
}

$(document).ready(function(){
	let x = $("#Blog");
	let refered = this;

	let y = scrollMonitor.create(x);

	y.enterViewport(
		()=>{
	$("#box1").addClass("boxAnimation");
	$("#box2").addClass("boxAnimation2");
 	$("#box3").addClass("boxAnimation3");
 	$("#box4").addClass("boxAnimation4");
 	$("#box5").addClass("boxAnimation5");
 	$("#box6").addClass("boxAnimation6");
 });
});
$(document).ready(function(){
	let x = $("#Form");

	let y = scrollMonitor.create(x);

	y.enterViewport(
		()=>{
	$("#input").addClass("inputAnimation");
	$("#white-box").addClass("boxAnimate");
 	});
});
$(document).ready(function(){
	let x = $("#footer");

	let y = scrollMonitor.create(x);

	y.enterViewport(
		()=>{
	$("#texts1").addClass("textsAnimation1");
	$("#texts2").addClass("textsAnimation2");
 	$("#texts3").addClass("textsAnimation3");
 	$("#texts4").addClass("textsAnimation4");
 });
});
// $("#1").click(function(){

// })