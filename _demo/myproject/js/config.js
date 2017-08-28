/* 配置路径 */
require.config({
	paths: {
		"jquery" : "jquery/jquery-3.2.1",
		"banner" : "module/banner",
		"jqy-ui" : "jquery/jquery-ui",
		"common" : "common"
		}
});

/* 使用 */
/*
require(["jquery","banner"],function(jq,banner){
	jq(function(){
		alert(jq().jquery);
		banner.start();
	});
});
*/