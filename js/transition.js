
$(.document).ready(function()
{
	$(.'img-zoom').hover(function(){
	$(this).addclass('transition');
	},function(){
	$(this).removeclass('transition');
	});
});
