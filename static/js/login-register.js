/*
 *
 * login-register modal
 * Autor: Creative Tim
 * Web-autor: creative.tim
 * Web script: #
 * 
 */
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function loading(div1,input1) {
  input1.disabled='disabled'
  div1.style.display = 'block';
}
function ban1c(divban){
divban.style.display='block';
}
function click_login(){
    lang=$(".current_lang").find("span").html();
    var user_mail= $("#email").val();
    var user_pass= $("#pass").val();
    var div1=document.getElementById("login-loading");
    var input1= document.getElementById("login_s");
    var divban=document.getElementById("ban1c");
    ban1c(divban);
    loading(div1,input1);
    $.ajax({
    url:"/login",
    type:"POST",
    data:{
    "usermail": user_mail,
    "userpass": user_pass,
    "language":lang,
    },
    timeout:20000,
    dataType:"json",
    success:function(data) {
      var div1=document.getElementById("login-loading");
      var input1= document.getElementById("login_s");
            if(data.result=='success'){
                div1.style.display = 'none';
                divban.style.display= 'none';
                setTimeout(function(){window.location.replace("manage/b")},"200");
            }else if(data.result=="error"){
                div1.style.display = 'none';
                divban.style.display= 'none';
                input1.disabled='';
                shakeModal(data.msg);
            }else{
                div1.style.display = 'none';
                divban.style.display= 'none';
                input1.disabled='';
                shakeModal("Server error: fail to request from CloudFlare.")
            }
        },
    error:function(XMLHttpRequest, textStatus, errorThrown){
            div1.style.display = 'none';
            divban.style.display= 'none';
            input1.disabled='';
            shakeModal('Server error: Connection timed out');
     },

      });
}
function click_register(){
    lang=$(".current_lang").find("span").html();
    var user_mail=$("#regmail").val();
    var user_pass=$("#regpass").val();
    var user_pass2=$("#regpass2").val();
    var div1=document.getElementById("register-loading");
    var input1= document.getElementById("register_s");
    var divban=document.getElementById("ban1c");
    loading(div1,input1);
    ban1c(divban);
    if(user_pass!=user_pass2){
        div1.style.display = 'none';
        input1.disabled='';
        divban.style.display= 'none';
        shakeModal("the password is not matched");
        }else{
                  $.ajax({
    url:"/register",
    type:"POST",
    data:{
    "usermail": user_mail,
    "userpass": user_pass,
    "language":lang,
    },
    timeout:20000,
    dataType:"json",
    success:function(data) {
      var div1=document.getElementById("register-loading");
      var input1= document.getElementById("register_s");
       console.log(data)
       console.log(data.result)
            if(data.result=="success"){
                div1.style.display = 'none';
                divban.style.display= 'none';
                setTimeout(function(){window.location.replace("manage/b")},"200");
            }else if(data.result=="error"){
                div1.style.display = 'none';
                divban.style.display= 'none';
                input1.disabled='';
                shakeModal(data.msg);
            }else{
                div1.style.display = 'none';
                divban.style.display= 'none';
                input1.disabled='';
                shakeModal("Server error: fail to request from CloudFlare.")
            }
        },
    error:function(XMLHttpRequest, textStatus, errorThrown){
      shakeModal('Connection timed out');
      input.disabled='false';
     }
      });
      }

}

function shakeModal(data){
   setTimeout(function(){
      $('#loadingModal').modal('show');
       }, 0);
    $('#loginModal .modal-dialog').addClass('shake');
             var href_info=data.match(/http.*html/g);
             var tips_info=data.replace(/<.*[^>]*>.*/g,"");
             var link_tips=data.match(/>.*</g);
             if(href_info==null){
                 var cont="<p>"+tips_info+"</p>"
             }else{
                 var cont="<p>"+tips_info+"</p><a href="+href_info+" target='_blank'>"+link_tips+"</a>"
             }
             $('#err').html(cont);
             $('.error').addClass('alert alert-danger');
             $('input[type="password"]').val('');
             setTimeout( function(){
                $('#loginModal .modal-dialog').removeClass('shake');
    }, 1000 );
}


   
