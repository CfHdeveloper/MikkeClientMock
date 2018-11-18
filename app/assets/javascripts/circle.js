document.addEventListener("DOMContentLoaded", function(){

    function isLiked(){
        //サークル番号を取得
        var id = document.querySelector('#circle_id').textContent;
        console.log(id);
        //ブラウザに保存されているidを取得
        var userKeepId = localStorage.getItem("user");
        console.log(userKeepId);
        
        //保存されてない場合そのまま
        if(!userKeepId){
            return;
        }
        
        
        if(userKeepId.match(String(id))){
            console.log("like");
            document.querySelector('#like').innerHTML="<i class='fa fa-heart mr-2'></i>お気に入り解除";
        }else{
            //このページのIdは保存されていない
            console.log("dislike");
            document.querySelector('#like').innerHTML="<i class='fa fa-heart mr-2'></i>お気に入り";
        }

    }
    isLiked();

    document.querySelector('#like').addEventListener('click',function(){
        //サークル番号を取得
        var id = document.querySelector('#circle_id').textContent;
        
        //ブラウザに保存されているidを取得
        var userKeepId = localStorage.getItem("user");
        console.log(userKeepId);

        if(userKeepId&&!userKeepId.match(String(id))){
            //ブラウザにすでにuserKeepIdが保存されていて、かつこのページのIdは保存されていない
            localStorage.setItem("user",userKeepId+id);
            this.innerHTML="<i class='fa fa-heart mr-2'></i>お気に入り解除";
        }else if(!userKeepId){
            //ブラウザにuserKeepIdが保存されていない
            localStorage.setItem("user",id);
            this.innerHTML="<i class='fa fa-heart mr-2'></i>お気に入り解除";
        }else{
            console.log("cc");
            var userKeepIdDel = userKeepId.replace(String(id),"");
            localStorage.setItem("user",userKeepIdDel);
            this.innerHTML="<i class='fa fa-heart mr-2'></i>お気に入り";
        }


    });

}, false);
