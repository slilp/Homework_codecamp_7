

$('#imgPostUrl').change(()=>{
    $('#imgPost').attr('src',$('#imgPostUrl').val());
});

$('#postBtn').click(()=>{

    var reWhiteSpace = new RegExp("/^\s+$/");

    if($('#textPost').val().length == 0){
        alert('กรุณากรอกข้อความ');
    }else{
        const newPost = contentElement($('#textPost').val(),$('#imgPostUrl').val());
        $('section').prepend(newPost);
        $('#imgPostUrl').val('');
        $('#textPost').val('');
        $('#imgPost').attr('src','');
    }

});


// $('button[name="btn-like"]').click(function(){
//     $(this).toggleClass('active-like');
// });


const contentElement =(content,img)=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy + '  ' + today.getHours() + ':' + today.getMinutes();

    const element = `<div class='container'> 
    <div class='content'> 
        <p>${today}</p> 
    <span class='text-contenr'>
          ${content}
      </span>
    </div>
    <div class='img-content'>
      <img
        src='${img}'
      />
    </div>
    <hr />` + 
    "<button class='btn-like'  name='btn-like'> <i class='far fa-thumbs-up'></i> ถูกใจ</button></div>"
  ;

  return element;
}

$('body').on('click', 'button[name="btn-like"]', function() {
    $(this).toggleClass('active-like');
 });
