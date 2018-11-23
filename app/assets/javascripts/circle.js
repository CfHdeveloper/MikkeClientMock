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
            $('#like').html("<i class='fa fa-heart mr-2'></i>お気に入り解除");
        }else{
            //このページのIdは保存されていない
            console.log("dislike");
            $('#like').html("<i class='fa fa-heart mr-2'></i>お気に入り");
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
            $('#like').html("<i class='fa fa-trash mr-2'></i>お気に入り解除");
        }else if(!userKeepId){
            //ブラウザにuserKeepIdが保存されていない
            localStorage.setItem("user", id);
            $('#like').html("<i class='fa fa-trash mr-2'></i>お気に入り解除");
        }else{
            var userKeepIdDel = userKeepId.replace(String(id),"");
            localStorage.setItem("user", userKeepIdDel);
            $('#like').html("<i class='fa fa-heart mr-2'></i>お気に入り");
        }
    });
});
