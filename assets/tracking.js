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