/* jshint devel:true */
'use strict';

function setHeight() {
   var windowHeight = $(window).innerHeight();
    $('.hero').css('min-height', windowHeight);
  }

  var windowWidth = $(window).innerWidth();

  if(windowWidth>768){
  	setHeight();
  }

var colormorphOne = '#0281c1';
var colormorphTwo = '#05299b';
var colormorphThree = '#112659';

function colorMorph() {
	$('.navbar-brand').animate({color: colormorphTwo}, 8000, 'linear');
	$('.navbar-brand').animate({color: colormorphOne}, 8000, 'linear', colorMorph);
}
colorMorph();

function colorMorph2() {
	$('.footer').animate({backgroundColor: colormorphThree}, 8000, 'linear');
	$('.footer').animate({backgroundColor: colormorphOne}, 8000, 'linear', colorMorph2);
}
colorMorph2();

		
		var h = $('#preston-app-1').height();
		console.log(h);


		var addHeights = function(){
			$('#preston-app-2').height(h);
		};
		
		var removeHeights = function(){
			$('#preston-app-2').removeAttr('style');
		};
		$( document ).ready(function() {
			if (window.innerWidth>=786){
				addHeights();
			}
		});

		$(window).resize(function(){
			removeHeights();
			h = $('#preston-app-1').height();
			if (window.innerWidth>=768){
				addHeights();
			}
		});