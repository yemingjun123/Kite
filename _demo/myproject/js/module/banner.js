// 轮播图
define(["jquery"],function($){
	function Banner(){
		this.start = function(){
			alert("start: "+$().jquery);
		}	
	}
	return new Banner();
});
