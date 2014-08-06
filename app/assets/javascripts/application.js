// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require jquery-ui


var myApp = myApp || {} 





myApp.setUpEventListeners = function(){

   $( "#challenged_div" ).on( "mouseover", function(){
    $( "#challenged_table" ).slideDown()
  }).on("mouseout", function(){
    $( "#challenged_table" ).hide( "slow" )
  });
   $( "#challenger_title" ).on( "mouseover", function(){
    $( "#challenger_table" ).slideDown()
  }).on("mouseout", function(){
    $( "#challenger_table" ).hide( "slow" )
  });



}

$(document).ready(function(){
 myApp.setUpEventListeners();
})





