!function(){"use strict";angular.module("app",["app.controllers","app.filters","app.services","app.directives","app.routes","app.config","partialsModule"]),angular.module("app.routes",[]),angular.module("app.controllers",["ui.router","ngMaterial","ngStorage","restangular","angular-loading-bar"]),angular.module("app.filters",[]),angular.module("app.services",[]),angular.module("app.directives",[]),angular.module("app.config",[])}(),function(){"use strict";angular.module("app.routes").config(["$stateProvider","$urlRouterProvider",function(t,r){var e=function(t){return"./views/app/"+t+"/"+t+".html"};r.otherwise("/"),t.state("app",{"abstract":!0,views:{header:{templateUrl:e("header")},footer:{templateUrl:e("footer")},main:{}}}).state("app.landing",{url:"/",data:{},views:{"main@":{templateUrl:e("landing")}}})}])}(),function(){"use strict";angular.module("app.config").config(["cfpLoadingBarProvider",function(t){t.includeSpinner=!1}])}(),function(){"use strict";angular.module("app.config").config(["$mdThemingProvider",function(t){t.theme("default").primaryPalette("indigo").accentPalette("grey").warnPalette("red")}])}(),function(){"use strict";angular.module("app.filters").filter("capitalize",function(){return function(t){return t?t.replace(/([^\W_]+[^\s-]*) */g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}):""}})}(),function(){"use strict";angular.module("app.filters").filter("humanReadable",function(){return function(t){if(!t)return"";for(var r=t.split("_"),e=0;e<r.length;e++)r[e]=r[e].charAt(0).toUpperCase()+r[e].slice(1);return r.join(" ")}})}(),function(){"use strict";angular.module("app.filters").filter("truncateCharacters",function(){return function(t,r,e){if(isNaN(r))return t;if(0>=r)return"";if(t&&t.length>r){if(t=t.substring(0,r),e)for(;" "===t.charAt(t.length-1);)t=t.substr(0,t.length-1);else{var n=t.lastIndexOf(" ");-1!==n&&(t=t.substr(0,n))}return t+"..."}return t}})}(),function(){"use strict";angular.module("app.filters").filter("truncateWords",function(){return function(t,r){if(isNaN(r))return t;if(0>=r)return"";if(t){var e=t.split(/\s+/);e.length>r&&(t=e.slice(0,r).join(" ")+"...")}return t}})}(),function(){"use strict";angular.module("app.filters").filter("trustHtml",["$sce",function(t){return function(r){return t.trustAsHtml(r)}}])}(),function(){"use strict";angular.module("app.filters").filter("ucfirst",function(){return function(t){return t?t.substring(0,1).toUpperCase()+t.substring(1):null}})}(),function(){"use strict";angular.module("app.services").factory("API",["Restangular","ToastService","$localStorage",function(t,r,e){var n={"Content-Type":"application/json",Accept:"application/x.laravel.v1+json"};return t.withConfig(function(t){t.setBaseUrl("/api/").setDefaultHeaders(n).setErrorInterceptor(function(t){if(422===t.status)for(var e in t.data.errors)return r.error(t.data.errors[e][0])}).addFullRequestInterceptor(function(t,r,n,a,o){e.jwt&&(o.Authorization="Bearer "+e.jwt)})})}])}(),function(){"use strict";angular.module("app.services").factory("DialogService",["$mdDialog",function(t){return{fromTemplate:function(r,e){var n={templateUrl:"./views/dialogs/"+r+"/"+r+".html"};return e&&(n.scope=e.$new()),t.show(n)},hide:function(){return t.hide()},alert:function(r,e){t.show(t.alert().title(r).content(e).ok("Ok"))},confirm:function(r,e){return t.show(t.confirm().title(r).content(e).ok("Ok").cancel("Cancel"))}}}])}(),function(){"use strict";angular.module("app.services").factory("ToastService",["$mdToast",function(t){var r=6e3,e="top right",n="OK";return{show:function(a){return a?t.show(t.simple().content(a).position(e).action(n).hideDelay(r)):!1},error:function(a){return a?t.show(t.simple().content(a).position(e).theme("warn").action(n).hideDelay(r)):!1}}}])}(),function(){"use strict";function t(){}angular.module("app.controllers").controller("FooterController",t)}(),function(){"use strict";function t(){}angular.module("app.controllers").controller("HeaderController",t)}(),function(){"use strict";function t(){var t=this;t.laravel_description="Response macros integrated with your Angular app.",t.angular_description="Pre-configured Restangular service to query your API without having to worry about validations."}angular.module("app.controllers").controller("LandingController",t)}();