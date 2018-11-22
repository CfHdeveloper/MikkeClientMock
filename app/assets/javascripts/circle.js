$(document).ready(function(){
    function isLiked(){
        //サークル番号を取得
        var id = $('#circle_id').text();
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
            $('#like').html("<i class='fa fa-heart mr-2'></i>お気に入り解除");
            $('#like').css('background-color','#FF5964');
            $('#like').css('border-color','#FF5964');
        }else{
            //このページのIdは保存されていない
            console.log("dislike");
            $('#like').html("<i class='fa fa-heart mr-2'></i>お気に入り");
            $('#like').css('background-color','#F5BB1C');
            $('#like').css('border-color','#F5BB1C');
        }

    }
    isLiked();

    $('#like').click(function(){
        //サークル番号を取得
        var id = $('#circle_id').text();
        console.log(id);
        //ブラウザに保存されているidを取得
        var userKeepId = localStorage.getItem("user");
        console.log(userKeepId);

        if(userKeepId&&!userKeepId.match(String(id))){
            //ブラウザにすでにuserKeepIdが保存されていて、かつこのページのIdは保存されていない
            localStorage.setItem("user",userKeepId+id);
            this.innerHTML="<i class='fa fa-trash mr-2'></i>お気に入り解除";
            this.style.backgroundColor='#FF5964';
            this.style.borderColor='#FF5964';
        }else if(!userKeepId){
            //ブラウザにuserKeepIdが保存されていない
            localStorage.setItem("user",id);
            this.innerHTML="<i class='fa fa-trash mr-2'></i>お気に入り解除";
            this.style.backgroundColor='#FF5964';
            this.style.borderColor='#FF5964';
        }else{
            var userKeepIdDel = userKeepId.replace(String(id),"");
            localStorage.setItem("user",userKeepIdDel);
            this.innerHTML="<i class='fa fa-heart mr-2'></i>お気に入り";
            this.style.backgroundColor='#f5bb1c';
            this.style.borderColor='#f5bb1c';
        }


    });

});
