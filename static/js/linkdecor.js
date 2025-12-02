$( function() {
	var rl_img = '<img src="http://mementoweb.org/static/css/images/robustlinks.png" ';
	rl_img += 'class="rl_embed" style="width:15px; height: 15px; vertical-align: middle;" />';

	//$(".result_heading").append(rl_html);
	
	var ld_dialog = $("#link_decoration_dialog");
	ld_dialog.css("padding", "10 0");
	ld_dialog.css("margin", "0");
	ld_dialog.css("font-size", "0.9em");

	ld_dialog.dialog({
		autoOpen: false,
		height: 300,
		width: 650,
		modal: true,
		title: "Embed as HTML via Robust Links"
	});

	var rl_button = $('<button/>',
	{
		text: "Embed",
		class: "rl_button",
		click: function(event) {
			event.preventDefault();
			var uri_m = $(this).parent().find("a").attr("href");
			if (uri_m.search("//") == 0) {
				uri_m = "http:" + uri_m;
			}
			var org_url = $("#url").val();
			var mdt = $(this).parent().next().next()[0].innerHTML.split("[")[0];
			mdt = mdt.replace("&nbsp;", "");
			var dt = new Date(mdt);
			var mem_dt = getDisplayDate(dt) + " " + getDisplayTime(dt);

			var robustlink_html = "<a href=\"" + uri_m + "\" data-originalurl=\""+ org_url +"\" data-versiondate=\""+ mem_dt +"\">Robust Link for " + uri_m + "</a>";
			var textarea = "<textarea id='rl_text' rows='6' cols='65' readonly>" + robustlink_html + "</textarea>";
			var text = textarea;
			text += "<p>Copy and paste the HTML code above to decorate the Memento URL: <br/><i>" + uri_m + "</i>.</p>";
			text += "<a href=\"http://robustlinks.mementoweb.org\" style='font-size: 0.7em; color: gray;'>Powered by Robust Links.</a>";
			ld_dialog.html(text);
			ld_dialog.dialog( "open" );
			$("#rl_text").select();
		}
	});
	$(".result_heading").append("&nbsp;&nbsp;");
	$(".result_heading").append(rl_button);
	//$(".result_heading").append(rl_img);

});
