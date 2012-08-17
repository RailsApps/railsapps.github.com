// Start Visual Website Optimizer Asynchronous Code
var _vwo_code=(function(){
var account_id=23877,
settings_tolerance=2000,
library_tolerance=1500,
use_existing_jquery=true,
// DO NOT EDIT BELOW THIS LINE
f=false,d=document;return{use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);this.load('//dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&r='+Math.random());var a=d.createElement('style'),b='body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);return settings_timer;}};}());_vwo_settings_timer=_vwo_code.init();
// End Visual Website Optimizer Asynchronous Code

$(document).ready(function() {
    $('#hobo').click(function() {
        _gaq.push(['_trackEvent', 'subscription', 'click', 'hobo']);
        if(typeof(_vis_opt_top_initialize) == "function") {
         _vis_opt_goal_conversion(200);
        }
    });
    $('#student').click(function() {
        _gaq.push(['_trackEvent', 'subscription', 'click', 'student']);
        if(typeof(_vis_opt_top_initialize) == "function") {
         _vis_opt_goal_conversion(201);
        }
    });
    $('#pro').click(function() {
        _gaq.push(['_trackEvent', 'subscription', 'click', 'pro']);
        if(typeof(_vis_opt_top_initialize) == "function") {
         _vis_opt_goal_conversion(202);
        }
    });
    $('#team').click(function() {
        _gaq.push(['_trackEvent', 'subscription', 'click', 'team']);
        if(typeof(_vis_opt_top_initialize) == "function") {
         _vis_opt_goal_conversion(203);
        }
    });
});