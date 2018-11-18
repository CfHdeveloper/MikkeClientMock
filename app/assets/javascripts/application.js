// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require rails-ujs
//= require jquery.turbolinks
//= require activestorage
//= require_tree 
//= require bootstrap-sprockets
$(document).ready(function(){

    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    $('#user').click(function(){
        console.log("redirect to user page");

         //ブラウザに保存されているidを取得
         var userKeepId = localStorage.getItem("user");
         
         console.log(userKeepId);
         //ブラウザに保存されているkeyがnullならそのまま保存、すでに入っているなら追加して保存
        if(userKeepId){
            //userKeepIdを配列に直す
            //現状、developとproductionのurlは主導切り替え
            window.location.href = '/user/?ids='+userKeepId;
        }else{
            window.location.href= '/user/'
        }
    });
});
