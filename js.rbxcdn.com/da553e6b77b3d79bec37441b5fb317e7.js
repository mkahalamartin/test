;// bundle: Widgets___DropdownMenu___dfeda54bfdbf36a5d337691638a22c8f_m
;// files: modules/Widgets/DropdownMenu.js

;// modules/Widgets/DropdownMenu.js
Roblox.define("Widgets.DropdownMenu",[],function(){function n(n){$(n).on("click",".button",function(){var n=$(this),t,i;return n.hasClass("init")||(t=$(this).outerWidth()-parseInt(n.css("border-left-width"))-parseInt(n.css("border-right-width")),n.siblings(".dropdown-list").css("min-width",t),i=n.siblings('.dropdown-list[data-align="right"]').first(),i.css("right",0),n.addClass("init")),n.hasClass("active")?(n.removeClass("active"),n.siblings(".dropdown-list").hide()):(n.addClass("active"),n.siblings(".dropdown-list").show()),$(document).click(function(){$(".button.init.active").removeClass("active"),$(".dropdown-list").hide()}),!1})}function t(){var n=$(".button").not(".init");n.each(function(){var t=$(this).outerWidth()-parseInt($(this).css("border-left-width"))-parseInt($(this).css("border-right-width")),n;$(this).siblings(".dropdown-list").css("min-width",t),n=$(this).siblings('.dropdown-list[data-align="right"]').first(),n.css("right",0)}),$(".dropdown-list").hide(),n.click(function(){return $(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".dropdown-list").hide()):($(this).addClass("active"),$(this).siblings(".dropdown-list").show()),!1}),$(document).click(function(){n.removeClass("active"),$(".dropdown-list").hide()}),n.addClass("init")}return{InitializeDropdown:t,LazyInitializeDropdown:n}});

;//Bundle detector
Roblox && Roblox.BundleDetector && Roblox.BundleDetector.bundleDetected('Widgets___DropdownMenu');