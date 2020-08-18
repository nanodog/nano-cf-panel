var tnum = 'cn';

$(document).ready(function(){
if($(".current_lang").find("span").html()=="cn"){
  $(".tra1").html("一个简单的CloudFlare Partner辅助面板");
  $(".tra2").html("已经拥有CloudFlare账号，在下面登陆(支持API_Token登录）");
  $(".tra3").html("没有CloudFlare账号，请注册");
  $(".tra4").html("*请注意：此面板会短暂记录你的敏感信息，但只是为了获取API key用于接下来的操作");
  $(".tra5").html("登录");
  $(".tra6").html("已经拥有CloudFlare账号?");
  $(".tra7").html("登陆");
  $(".tra8").html("这里是通往全球最大同性交友开源网站gayhub");
  $(".log_1").html("登陆账号");
  $(".log_2").html("注册账号");
}else{
  $(".tra1").html("A nano-panel for CloudFlare");
  $(".tra2").html("Already had Cloudflare account,login here");
  $(".tra3").html("Not have account for Cloudflare,register");
  $(".tra4").html("*Note:This panel would not record your password.Login is only to request the API from Cloudflare");
  $(".tra5").html("create an account");
  $(".tra6").html("Already have an account?");
  $(".tra7").html("Login");
  $(".tra8").html("here a link to github for code");
  $(".log_1").html("account login");
  $(".log_2").html("Register account");
}
$(".more_lang .lang").click(function(){
if($(this).attr("data-value")=="cn"){
  $(".tra1").html("一个简单的CloudFlare Partner辅助面板");
  $(".tra2").html("已经拥有CloudFlare账号，在下面登陆");
  $(".tra3").html("没有CloudFlare账号，请注册");
  $(".tra4").html("*请注意：此面板会短暂记录你的敏感信息，但只是为了获取API key用于接下来的操作");
  $(".tra5").html("创建账号");
  $(".tra6").html("已经拥有CloudFlare账号?");
  $(".tra7").html("登陆");
  $(".tra8").html("这里是通往全球最大同性交友开源网站gayhub");
  $(".log_1").html("登陆账号");
  $(".log_2").html("注册账号");
}else{
  $(".tra1").html("A nano-panel for CloudFlare");
  $(".tra2").html("Already had Cloudflare account,login here");
  $(".tra3").html("Not have account for Cloudflare,register");
  $(".tra4").html("*Note:This panel would not record your password.Login is only to request the API from Cloudflare");
  $(".tra5").html("create an account");
  $(".tra6").html("Already have an account?");
  $(".tra7").html("Login");
  $(".tra8").html("here a link to github for code");
  $(".log_1").html("account login");
  $(".log_2").html("Register account");
}
});

  $(document).click( function(e) {
       $('.translate_wrapper, .more_lang').removeClass('active');
  });

  $('.translate_wrapper .current_lang').click(function(e){
    e.stopPropagation();
    $(this).parent().toggleClass('active');

    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 5);
  });


  /*TRANSLATE*/

  $('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');

    var img = $(this).find('img').attr('src');
    var lang = $(this).attr('data-value');
    var tnum = lang;
    $('.current_lang .lang-txt').text(lang);
    $('.current_lang img').attr('src', img);

    if(lang == 'ar'){
      $('body').attr('dir', 'rtl');
    }else{
      $('body').attr('dir', 'ltr');
    }

  });

  $(document).click( function(e) {
       $('.zone_wrapper, .more_zone, .translate_wrapper, .more_lang ').removeClass('active');
  });

  $('.zone_wrapper .current_zone, translate_wrapper .current_lang').click(function(e){
    e.stopPropagation();
    $(this).parent().toggleClass('active');

    setTimeout(function(){
      $('.more_zone, .more_lang').toggleClass('active');
    }, 5);
  });

    $('.more_zone > ul, .more_lang > ul').click(function(e){
    e.stopPropagation();
    $(this).parent().parent().addClass('active');;
  });
  /*TRANSLATE*/
/*  translate(tnum);*/

  $('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');

    var img = $(this).find('img').attr('src');
    var lang = $(this).attr('data-value');
    var tnum = lang;
/*    translate(tnum);*/

    $('.current_zone .zone-txt, .current_lang .lang-txt').text(lang);
    $('.current_zone img, .current_lang img').attr('src', img);

    if(lang == 'ar'){
      $('body').attr('dir', 'rtl');
    }else{
      $('body').attr('dir', 'ltr');
    }

  });

});

