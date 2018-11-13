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

document.addEventListener("DOMContentLoaded", function(){

    
    document.querySelector('#user').addEventListener('click',function(){
        
        //ブラウザに保存されているidを取得
        var userKeepId = localStorage.getItem("user");
        
        console.log(userKeepId);
        //ブラウザに保存されているkeyがnullならそのまま保存、すでに入っているなら追加して保存
        if(userKeepId){
            //userKeepIdを配列に直す
            window.location.href = 'http://localhost:3000/user?ids='+userKeepId;

        }else{
        }
    });
}, false);
