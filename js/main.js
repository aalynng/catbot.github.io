
var words = [
	'You must find acceptance within yourself and not from others.',
	'YOLO. Just do it.',
	'Treat yourself',
	'Shit doesn\'t have to make sense.',
	'That person is an adult. You are not responsible for their actions.',
	'Just because they did one or two good things does not negate the bad shit they\'ve done.',
	'It\'s okay if you are not completely sure if you made the right choice.',
	'Let go of the Fear Of Missing Out.',
	'Be honest with yourself with who you are and what you want.',
	'There are no prizes for martyring yourself.',
	'The worse case thing they can do is say no.',
	'If you don\'t even try then it is 100% guranteed fail.',
	'It\'s easier to ask for forgiveness than permission.',
	]

var getRandomWord = function () {
      return words[Math.floor(Math.random() * words.length)];
    };

$('img').mouseover(function(){
	$('img').attr('src', 'images/cat2.png');
})

$('img').mouseout(function(){
	$('img').attr('src', 'images/cat.png');
})

$('img').on('click', function(){
	$('.answer').fadeOut(750, function (){
		$('p').fadeIn(1000);
		$('p').text(getRandomWord());	
	})

});