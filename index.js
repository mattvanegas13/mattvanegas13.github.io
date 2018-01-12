console.log("test");
$('.rip').on('click',function()
 {
    $(this).html('wow lol') /*note that this functions as it does in java which refers to the element that is passed into the first line of jquery*/
});

/*
	animating shit with js and jquery
	.extra-cool-text {
	  color: #42cbad;
	  font-weight: 700;
	  line-height: 40px;
	} -> the css you are going to activate

	$('p').on('click', function() {
	  $(this).toggleClass('name of the classs- references a css chunk');
	});

	or you can include it in a jquery command within the line

	$('p').on('click', function() {
	  $(this).css({"color": "#42cbad","font-weight": "700","line-height": "40px"});
	})

	to actually animate

	$('h3').on('mouseover', 
	function() 
	{
	  $(this).animate({"letter-spacing": "10px","font-size": "40px"}, 1000);
	}); --> we pass a second argument that 1000 -> the time you want this to last

	$(document).ready(function() {

		All your js goes in between these brackets
		
	}};

	-> document refers to the webpage itself.

*/