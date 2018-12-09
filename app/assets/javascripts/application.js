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

$(function(){
    $('#nav-open').click(function(){
        console.log("navigation open");
        $('#blackout').css('display','block');
        $('.gnav').css('transform','translateX(0%)');
    });

    $('#blackout').click(function(){
        $('#blackout').css('display','none');
        $('.gnav').css('transform','translateX(-105%)');
    });

    $('#search').click(function(e){
        if ($(window).width()<960){
            $('.menu').slideToggle();
        }
    });   

    //.accordion1の中のp要素がクリックされたら
    $('.menu-index-title').click(function(e){
        if ($(window).width()<960){
            //クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
            $(this).next('ul').slideToggle();
            e.stopPropagation();
        }
    });
});
