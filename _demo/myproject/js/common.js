define(["jquery"],function($){
	return {
		version: function(){
			alert("jquery version is :"+$().jquery);
		},
		location: function(){
			alert("Location is Changsha Hunan");
		}
	}
})