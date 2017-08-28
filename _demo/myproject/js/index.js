
require(["config"],function() {
	require(["jquery","banner","common","jqy-ui"],function(jq,banner,cm){
		jq(function() {
			jq('#search').autocomplete({
				source: function(request,response) {
					window.test = function(data) {
						response(data.s);
					}
					var script_ = document.createElement("script");
					script_.src = "http://suggestion.baidu.com/su?wd="+ request.term +"&cb=test";
					document.body.appendChild(script_);
				}
			});
		});
	});
});