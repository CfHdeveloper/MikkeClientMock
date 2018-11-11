
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#like').addEventListener('click',function(){
        //サークル番号を取得
        var id = document.querySelector('#circle_id').textContent;
        
        //ブラウザに保存されているidを取得
        var userKeepId = localStorage.getItem("user");
        
        console.log(userKeepId);
        //ブラウザに保存されているkeyがnullならそのまま保存、すでに入っているなら追加して保存
        if(userKeepId){
            localStorage.setItem("user",userKeepId+id);
        }else{
            localStorage.setItem("user",id);
        }


    });
}, false);
