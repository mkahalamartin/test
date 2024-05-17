;// bundle: Pages___Catalog___bc403912f9c486b8272e4aae4bd69d4d_m
;// files: modules/Pages/Catalog.js

;// modules/Pages/Catalog.js
Roblox.define("Pages.Catalog",["Widgets.ItemImage","Widgets.HierarchicalDropdown","Pages.CatalogShared"],function(n){function l(t,f,l){o=l,n.populate(),$(".roblox-item-image[data-retry-url]").loadRobloxThumbnails(),i=t,i.TotalNumberOfPages=f,i.EmptyStringSearchEnabled=$("#catalog").data("empty-search-enabled"),v(),$(".Paging_Input").keypress(function(n){n.which=="13"&&y()}),$("#keywordTextbox").keypress(function(n){if(n.which=="13")return e(),!1}),$("#creatorTextbox").keypress(function(n){if(n.which=="13")return s(),!1}),$(".pxInput").keypress(function(n){if(n.which=="13")return h(),!1}),$("select#categoriesForKeyword").change(function(){i.EmptyStringSearchEnabled&&e(!1)});var a=$("#legendcontent").css("display")!="none";$("#legendheader").click(function(){a?($("#legendcontent").hide(),$(this).removeClass("expanded")):($("#legendcontent").show(),$(this).addClass("expanded")),a=!a});$(".assetTypeFilter").on("click",function(){var t=$(this).data("category"),f=$(this).data("keepfilters"),n;return t!==undefined&&(f!==undefined?u({types:!0,category:!0}):c(),i.Category=t),n=$(this).data("types"),n!==undefined&&(i.Subcategory=n),r(!1),!1});$(".gearFilter").click(function(){var n=$(this).data("types"),t=$(this).data("category");t!==undefined?(c(),i.Category=t,n!="All"&&(i.Gears=n)):i.Gears=n=="All"?null:n,r(!1)}),$(".genreFilter").click(function(){return i.Genres=$("input.genreFilter:checked").map(function(){return $(this).data("genreid")}).get().toString().split(","),i.Genres==""&&(i.Genres=null),r(!1),!0}),$(".creatorFilter").click(function(){var n=$(this).data("creatorid");i.CreatorID=n,r(!1)}),$(".breadCrumbFilter").click(function(){var n=$(this).data("filter");switch(n){case"category":u({types:!0,gears:!0,genres:!0,creator:!0,prices:!0,keyword:!0});break;case"subcategory":u({gears:!0,genres:!0,creator:!0,prices:!0,keyword:!0});break;case"gears":u({genres:!0,creator:!0,prices:!0,keyword:!0});break;case"genres":u({creator:!0,prices:!0,keyword:!0});break;case"creator":u({prices:!0,keyword:!0});break;case"px":u({keyword:!0})}r(!1)}),$(".priceFilter").click(function(){i.CurrencyType=$(this).data("currencytype"),r(!1)}),$("#submitCreatorButton").click(s),$("#creatorTextbox").focus(function(){$(this).val()=="Name"&&$(this).val(""),$(this).removeClass("Watermark")}),$("#creatorTextbox").blur(function(){$(this).val()==""&&($(this).val("Name"),$(this).addClass("Watermark"))}),$(".pxInput").focus(function(){($(this).val()=="Min"||$(this).val()=="Max")&&$(this).val(""),$(this).removeClass("Watermark")}),$(".pxInput").blur(function(){var n=$(this).data("watermarktext");$(this).val()==""&&($(this).val(n),$(this).addClass("Watermark"))}),$("#submitPxButton").click(h),$("a#submitSearchButton").click(e),$("select#SortMain").change(function(){i.SortType=document.getElementById("SortMain").value,r(!1)}),$("select#SortAggregation").change(function(){i.SortAggregation=document.getElementById("SortAggregation").value,i.SortCurrency=null,r(!1)}),$("select#SortCurrency").change(function(){i.SortCurrency=document.getElementById("SortCurrency").value,i.SortAggregation=null,r(!1)}),$("#pagingprevious").click(function(){$(this).hasClass("disabled")||(i.PageNumber--,i.PageNumber>=1&&r(!0))}),$("#pagingnext").click(function(){$(this).hasClass("disabled")||(i.PageNumber++,r(!0))}),Roblox.AdsHelper!=undefined&&Roblox.AdsHelper.AdRefresher!=undefined&&Roblox.AdsHelper.AdRefresher.registerAd("AdvertisingLeaderboard")}function s(){f=document.getElementById("creatorTextbox").value,f!=""&&(i.CreatorID=null,r(!1))}function h(){i.CurrencyType=$("#submitPxButton").data("currencytype");var t=document.getElementById("pxMinInput").value,n=document.getElementById("pxMaxInput").value,u=isNaN(n);i.PxMin=t!=""&&parseInt(t)>0?t:null,i.PxMax=n==""||n=="0"||u?null:n,r(!1)}function e(n){if(n=typeof n=="undefined"?o:n,i.Keyword=encodeURIComponent(document.getElementById("keywordTextbox").value),i.Keyword==""&&!i.EmptyStringSearchEnabled)return!1;var t=$("#categoriesForKeyword").val();return n?t=="Custom"?u({sorts:!0}):(u({category:!0,types:!0,gears:!0}),i.Category=t):t=="Custom"?u({genres:!0,creator:!0,prices:!0,sorts:!0}):(u({category:!0,types:!0,gears:!0,genres:!0,creator:!0,prices:!0}),i.Category=t),r(!1),!1}function a(){u({genres:!0}),r(!1)}function c(){u({category:!0,types:!0,gears:!0,genres:!0,creator:!0,prices:!0,keyword:!0})}function u(n){n.category&&(i.Category=""),n.types&&(i.Subcategory=""),n.gears&&(i.Gears=null),n.genres&&(i.Genres=null),n.creator&&(i.CreatorID=null),n.prices&&(i.CurrencyType=null,i.PxMin=null,i.PxMax=null,i.IncludeNotForSale=null),n.keyword&&(i.Keyword=null),n.sorts&&(i.SortType=null,i.SortAggregation=null,i.SortCurrency=null)}function v(){i.PageNumber==1?$("#pagingprevious").addClass("disabled"):i.PageNumber==i.TotalNumberOfPages&&$("#pagingnext").addClass("disabled")}function y(){i.PageNumber=Math.round($("input.Paging_Input").val()),i.PageNumber>=1&&(i.PageNumber>i.TotalNumberOfPages&&(i.PageNumber=i.TotalNumberOfPages),r(!0))}function r(n){var t="/catalog/browse.aspx?",u,o=!1,r,e;if(Roblox.CatalogValues&&(Roblox.CatalogValues.CatalogContentsUrl&&Roblox.CatalogValues.ContainerID&&(u=$("#"+Roblox.CatalogValues.ContainerID),u.length!==0&&(t=Roblox.CatalogValues.CatalogContentsUrl+"?",o=!0)),Roblox.CatalogValues.CatalogContext!==undefined&&(t+="CatalogContext="+Roblox.CatalogValues.CatalogContext+"&")),i.Subcategory!=null&&i.Subcategory!=""&&(t+="Subcategory="+i.Subcategory+"&"),i.Gears!=null&&(t+="Gears="+i.Gears+"&"),i.Genres!=null)for(r=0;r<i.Genres.length;r++)t+="Genres="+i.Genres[r]+"&";i.CreatorID!=null&&i.CreatorID!=0?t+="CreatorID="+i.CreatorID+"&":f!=null&&(t+="CreatorName="+f+"&"),i.Keyword!=null&&i.Keyword!=""&&(t+="Keyword="+i.Keyword+"&"),i.CurrencyType!=null&&i.CurrencyType!==0&&i.CurrencyType!=="0"&&(t+="CurrencyType="+i.CurrencyType+"&"),i.PxMin!=null&&i.PxMin!==0&&i.PxMin!=="0"&&(t+="pxMin="+i.PxMin+"&"),i.PxMax!=null&&i.PxMax!==0&&i.PxMax!=="0"&&(t+="pxMax="+i.PxMax+"&"),i.SortType!=null&&i.SortType!==0&&i.SortType!=="0"&&(t+="SortType="+i.SortType+"&"),i.SortAggregation!=null&&(t+="SortAggregation="+i.SortAggregation+"&"),i.SortCurrency!=null&&i.SortCurrency!==0&&i.SortCurrency!=="0"&&(t+="SortCurrency="+i.SortCurrency+"&"),n&&i.PageNumber>=0&&(t+="PageNumber="+i.PageNumber+"&"),e=($("#legendcontent").css("display")!="none").toString(),e!="false"&&(t+="LegendExpanded="+e+"&"),t+="Category="+i.Category,o?Roblox.CatalogShared.LoadCatalogAjax(t,null,u):window.location=t}var i,f,o=!1;return{ClearGenres:a,pagestate:i,init:l}});

;//Bundle detector
Roblox && Roblox.BundleDetector && Roblox.BundleDetector.bundleDetected('Pages___Catalog');