$(function(){
	try{
		var row = $(".nav>li>ul>li");
		for (var r=0; r<row.length; r++) {
			(function(num){
				row[r].onclick = function() {
					console.log("第"+(parseInt(num/5)+1)+"章，" +num%5+" 被点击了");
				}
			})(r);
		}
	}catch(e){
		alert(e.message);
	}
});