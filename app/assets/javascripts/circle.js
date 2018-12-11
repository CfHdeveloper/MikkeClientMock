$(document).ready(()=>{
    function isLiked(){
        //サークル番号を取得
        const id = $('#circle_id').text();
        console.log(id);
        //ブラウザに保存されているidを取得
        const userKeepId = localStorage.getItem("user") || false;
        console.log(userKeepId);
        
        //保存されてない場合そのまま
        if (!userKeepId) return

        if(userKeepId.match(String(id))){
            console.log("like");
            $('#like').css("background","#d7847e");
        }else{
            //このページのIdは保存されていない
            console.log("dislike");
            $('#like').css("background","#e1e1e1");
        }
    }
    isLiked();

    $('#like').click(()=>{
        //サークル番号を取得
        const id = $('#circle_id').text();
        console.log(id);

        //ブラウザに保存されているidを取得
        const userKeepId = localStorage.getItem("user") || false;
        console.log(userKeepId);

        if(userKeepId && !userKeepId.match(String(id))){
            //ブラウザにすでにuserKeepIdが保存されていて、かつこのページのIdは保存されていない
            localStorage.setItem("user", userKeepId + id);
            $('#like').css("background","#d7847e");
        }else if(!userKeepId){
            //ブラウザにuserKeepIdが保存されていない
            localStorage.setItem("user", id);
            $('#like').css("background","#d7847e");
        }else{
            var userKeepIdDel = userKeepId.replace(String(id),"");
            localStorage.setItem("user", userKeepIdDel);
            $('#like').css("background","#e1e1e1");
        }
    });

    $('#back').click(()=> history.back())
});
