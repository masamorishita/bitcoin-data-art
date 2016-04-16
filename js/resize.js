$(function () {
	sizing();
	$(window).resize(function() {
		sizing();
	});
});

function sizing(){
	$("#myCanvas").attr({height:$("#wrapper").height()});
	$("#myCanvas").attr({width:$("#wrapper").width()});
}