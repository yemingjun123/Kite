
require(["config"],function(){
	require(["jquery","banner","common"],function(jq,banner,cm){
		jq(function(){
			alert(jq().jquery);
			banner.start();
			cm.version();
			cm.location();
		});
	});
});