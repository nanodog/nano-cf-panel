
//update the records lists for customs after adding a new one or updating
function add_update(obj){
$(".ico_loading").show();
            $.ajax({
                 url:"/manage/dns_records",
                 timeout:20000,
                 type:"GET",
                 data:{
                 "action": "resolve_list",
                 "data_id": $("#drop_name").attr("data_zid"),
                    },
                 dataType:"json",
                  success:function(data) {
                       if (data[0].status=='success'){
                       zone_name=data[0].zone_name;
                       data_zid=data[0].data_zid;
                       list=data;
                       list.splice(0,1);
                       var tr;
                       for(var i in list){
                       if(list[i].type=="CNAME"){
                           if(list[i].proxied){
                               tr+="<tr data_recoed_id="+list[i].record_id+"><td><a class='rc' style='color:blue;' href='JavaScript:void(0);'><i class='fas fa-plus'></i></a></td><td><input type='text' placeholder="+list[i].name+" value="+list[i].name+" class='form-control name' readonly='readonly'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_type' disabled='true' data-default="+list[i].type+">"+list[i].type+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>A</a><a href='JavaScript:void(0);' class='dropdown-item'>AAAA</a><a href='JavaScript:void(0);' class='dropdown-item'>CNAME</a><a href='JavaScript:void(0);' class='dropdown-item'>TXT</a><a href='JavaScript:void(0);' class='dropdown-item'>MX</a><a href='JavaScript:void(0);' class='dropdown-item'>SPF</a><a href='JavaScript:void(0);' class='dropdown-item'>LOC</a><a href='JavaScript:void(0);' class='dropdown-item'>SRV</a></div></div></td><td><input type='text' readonly='readonly' placeholder="+list[i].value+" value="+list[i].value+" class='form-control valu'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_ttl' disabled='false' data-default="+list[i].ttl+">"+list[i].ttl+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>1</a><a href='JavaScript:void(0);' class='dropdown-item'>120</a><a href='JavaScript:void(0);' class='dropdown-item'>300</a><a href='JavaScript:void(0);' class='dropdown-item'>600</a><a href='JavaScript:void(0);' class='dropdown-item'>1800</a><a href='JavaScript:void(0);' class='dropdown-item'>3600</a></div></div></td><td>"+list[i].time+"</td><td id=id='pro'><img src='/static/img/proxied_y.svg' type='image/svg+xml' data-proxied='true' class='proxy btn btn-sm-diy' /></td><td style='display:none;' class='cancel'><input type='button' value='取消' class='btn btn-outline-primary'></td><td style='display:none;' class='update'><input type='button' value='提交' class='btn btn-outline-primary'></td><td id='im'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='btn btn-outline-primary dropdown-toggle'>操作</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(790px, 254px, 0px);'><a href='JavaScript:void(0);' class='dropdown-item rdedit'>编辑</a><div role='separator' class='dropdown-divider'></div><a href='JavaScript:void(0);' class='dropdown-item rd_del'>删除</a></div></td></tr>"
                               }else{
                                tr+="<tr data_recoed_id="+list[i].record_id+"><td><a class='rc' style='color:blue;' href='JavaScript:void(0);'><i class='fas fa-plus'></i></a></td><td><input type='text' placeholder="+list[i].name+" value="+list[i].name+" class='form-control name' readonly='readonly'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_type' disabled='true' data-default="+list[i].type+">"+list[i].type+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>A</a><a href='JavaScript:void(0);' class='dropdown-item'>AAAA</a><a href='JavaScript:void(0);' class='dropdown-item'>CNAME</a><a href='JavaScript:void(0);' class='dropdown-item'>TXT</a><a href='JavaScript:void(0);' class='dropdown-item'>MX</a><a href='JavaScript:void(0);' class='dropdown-item'>SPF</a><a href='JavaScript:void(0);' class='dropdown-item'>LOC</a><a href='JavaScript:void(0);' class='dropdown-item'>SRV</a></div></div></td><td><input type='text' readonly='readonly' placeholder="+list[i].value+" value="+list[i].value+" class='form-control valu'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_ttl' disabled='false' data-default="+list[i].ttl+">"+list[i].ttl+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>1</a><a href='JavaScript:void(0);' class='dropdown-item'>120</a><a href='JavaScript:void(0);' class='dropdown-item'>300</a><a href='JavaScript:void(0);' class='dropdown-item'>600</a><a href='JavaScript:void(0);' class='dropdown-item'>1800</a><a href='JavaScript:void(0);' class='dropdown-item'>3600</a></div></div></td><td>"+list[i].time+"</td><td id=id='pro'><img src='/static/img/proxied_n.svg'  type='image/svg+xml' data-proxied='false' class='proxy btn btn-sm-diy' /></td><td style='display:none;' class='cancel'><input type='button' value='取消' class='btn btn-outline-primary'></td><td style='display:none;' class='update'><input type='button' value='提交' class='btn btn-outline-primary'></td><td id='im'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='btn btn-outline-primary dropdown-toggle'>操作</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(790px, 254px, 0px);'><a href='JavaScript:void(0);' class='dropdown-item rdedit'>编辑</a><div role='separator' class='dropdown-divider'></div><a href='JavaScript:void(0);' class='dropdown-item rd_del'>删除</a></div></td></tr>"
                               }
                       }else{
                              if(list[i].proxied){
                               tr+="<tr data_recoed_id="+list[i].record_id+"><td> </td><td><input type='text' placeholder="+list[i].name+" value="+list[i].name+" class='form-control name' readonly='readonly'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_type' disabled='true' data-default="+list[i].type+">"+list[i].type+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>A</a><a href='JavaScript:void(0);' class='dropdown-item'>AAAA</a><a href='JavaScript:void(0);' class='dropdown-item'>CNAME</a><a href='JavaScript:void(0);' class='dropdown-item'>TXT</a><a href='JavaScript:void(0);' class='dropdown-item'>MX</a><a href='JavaScript:void(0);' class='dropdown-item'>SPF</a><a href='JavaScript:void(0);' class='dropdown-item'>LOC</a><a href='JavaScript:void(0);' class='dropdown-item'>SRV</a></div></div></td><td><input type='text' readonly='readonly' placeholder="+list[i].value+" value="+list[i].value+" class='form-control valu'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_ttl' disabled='true' data-default="+list[i].ttl+">"+list[i].ttl+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>1</a><a href='JavaScript:void(0);' class='dropdown-item'>120</a><a href='JavaScript:void(0);' class='dropdown-item'>300</a><a href='JavaScript:void(0);' class='dropdown-item'>600</a><a href='JavaScript:void(0);' class='dropdown-item'>1800</a><a href='JavaScript:void(0);' class='dropdown-item'>3600</a></div></div></td><td>"+list[i].time+"</td><td id='pro'><img src='/static/img/proxied_y.svg'  type='image/svg+xml' data-proxied='true' class='proxy btn btn-sm-diy' /></td><td style='display:none;' class='cancel'><input type='button' value='取消' class='btn btn-outline-primary'></td><td style='display:none;' class='update'><input type='button' value='提交' class='btn btn-outline-primary'></td><td id='im'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='btn btn-outline-primary dropdown-toggle'>操作</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(790px, 254px, 0px);'><a href='JavaScript:void(0);' class='dropdown-item rdedit'>编辑</a><div role='separator' class='dropdown-divider'></div><a href='JavaScript:void(0);' class='dropdown-item rd_del'>删除</a></div></td></tr>"
                               }else{
                               tr+="<tr data_recoed_id="+list[i].record_id+"><td> </td><td><input type='text' placeholder="+list[i].name+" value="+list[i].name+" class='form-control name' readonly='readonly'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_type' disabled='true' data-default="+list[i].type+">"+list[i].type+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>A</a><a href='JavaScript:void(0);' class='dropdown-item'>AAAA</a><a href='JavaScript:void(0);' class='dropdown-item'>CNAME</a><a href='JavaScript:void(0);' class='dropdown-item'>TXT</a><a href='JavaScript:void(0);' class='dropdown-item'>MX</a><a href='JavaScript:void(0);' class='dropdown-item'>SPF</a><a href='JavaScript:void(0);' class='dropdown-item'>LOC</a><a href='JavaScript:void(0);' class='dropdown-item'>SRV</a></div></div></td><td><input type='text' readonly='readonly' placeholder="+list[i].value+" value="+list[i].value+" class='form-control valu'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_ttl' disabled='true' data-default="+list[i].ttl+">"+list[i].ttl+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>1</a><a href='JavaScript:void(0);' class='dropdown-item'>120</a><a href='JavaScript:void(0);' class='dropdown-item'>300</a><a href='JavaScript:void(0);' class='dropdown-item'>600</a><a href='JavaScript:void(0);' class='dropdown-item'>1800</a><a href='JavaScript:void(0);' class='dropdown-item'>3600</a></div></div></td><td>"+list[i].time+"</td><td id='pro'><img src='/static/img/proxied_n.svg'  type='image/svg+xml' data-proxied='false' class='proxy btn btn-sm-diy' /></td><td style='display:none;' class='cancel'><input type='button' value='取消' class='btn btn-outline-primary'></td><td style='display:none;' class='update'><input type='button' value='提交' class='btn btn-outline-primary'></td><td id='im'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='btn btn-outline-primary dropdown-toggle'>操作</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(790px, 254px, 0px);'><a href='JavaScript:void(0);' class='dropdown-item rdedit'>编辑</a><div role='separator' class='dropdown-divider'></div><a href='JavaScript:void(0);' class='dropdown-item rd_del'>删除</a></div></td></tr>"
                               }
                       }


         };
                        $(".rd").show();
                        $("#table_body").html(tr);
//                        $(".domain_lists").html(att)
                        recordspages();
                        $(".ico_loading").hide();
                        $("#drop_name").html(zone_name);
//function for loading the CNAME detial that was seted at the CloudFlare Partner
         setTimeout(function(){
                    $.ajax({
                        'url':'/manage/cname_detail',
                        type:"GET",
                        data:{'name':zone_name},
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                   cname_tos=data[1].forward_tos
                                   t="CNAME detail of "+data[1].zone_name;
                                   var p="";
                                   for (key in cname_tos){
                                       p_add=key+"--> "+cname_tos[key]+'\n'
                                       p=p+p_add
                                   }
                                   p=p+'\n'+"ssl_status:"+data[1].ssl_status+'\n'+"ssl_meta_tag:"+data[1].ssl_meta_tag+'\n'+"sub_label:"+data[1].sub_label+'\n'+"sub_status:"+data[1].sub_status+'\n'
                                   $("#table_body").on("click",".rc",function(){
                                        swal({title:t,text:p});
                                   })
                                   $(".ico_loading").hide();
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Get cname timeout!','warning');
                                   },
              });
         },1500);
         }else if(data[0].status=='not_login'){
               setTimeout(function(){window.location.replace("manage/b")},"200");
         }else{
              swal("Wrong",data[0].message,"error");
         }
        },
    error:function(XMLHttpRequest, textStatus, errorThrown){
          swal('ERROR!','connection timeout!','error');
          $(".ico_loading").hide()
      },
      });
};

//this function is to request the domain lists and get data from server
$(document).ready(function(){
    y_wait="<img src='/static/img/proxied_y.svg'  type='image/svg+xml' data-proxied='true' class='proxy_wait_for_ajax btn btn-sm-diy' />";
    n_wait="<img src='/static/img/proxied_n.svg'  type='image/svg+xml' data-proxied='false' class='proxy_wait_for_ajax btn btn-sm-diy' />";
    y="<img src='/static/img/proxied_y.svg'  type='image/svg+xml' data-proxied='true' class='proxy btn btn-sm-diy' />";
    n="<img src='/static/img/proxied_n.svg'  type='image/svg+xml' data-proxied='false' class='proxy btn btn-sm-diy' />";
    $(".c_c, .s_zone").click(function(){
      if($(this).attr("data-act")=="resolve_list"){
        $("#ico_loading").css('display','block');
        current_zone($(this).parent());
        $("#drop_name").attr("data_zid",$(this).parent().attr("data_id"));
            $.ajax({
                 url:"/manage/dns_records",
                 timeout:20000,
                 type:"GET",
                 data:{
                 "action": "resolve_list",
                 "data_id": $(".current_zone").attr('data_id'),
                    },
                 dataType:"json",
                  success:function(data) {
                       if (data[0].status=='success'){
                       $(".all_menu");
                       $("#pnProductNav").css('display','block');
                       $(".zone_cards").css('display','none');
                       zone_name=data[0].zone_name;
                       data_zid=data[0].data_zid;
                       list=data;
                       list.splice(0,1);
                       var tr;
                       for(var i in list){
                       if(list[i].type=="CNAME"){
                           if(list[i].proxied){
                               tr+="<tr data_recoed_id="+list[i].record_id+"><td><a class='rc' style='color:blue;' href='JavaScript:void(0);'><i class='fas fa-plus'></i></a></td><td><input type='text' placeholder="+list[i].name+" value="+list[i].name+" class='form-control name' readonly='readonly'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_type' disabled='true' data-default="+list[i].type+">"+list[i].type+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>A</a><a href='JavaScript:void(0);' class='dropdown-item'>AAAA</a><a href='JavaScript:void(0);' class='dropdown-item'>CNAME</a><a href='JavaScript:void(0);' class='dropdown-item'>TXT</a><a href='JavaScript:void(0);' class='dropdown-item'>MX</a><a href='JavaScript:void(0);' class='dropdown-item'>SPF</a><a href='JavaScript:void(0);' class='dropdown-item'>LOC</a><a href='JavaScript:void(0);' class='dropdown-item'>SRV</a></div></div></td><td><input type='text' readonly='readonly' placeholder="+list[i].value+" value="+list[i].value+" class='form-control valu'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_ttl' disabled='false' data-default="+list[i].ttl+">"+list[i].ttl+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>1</a><a href='JavaScript:void(0);' class='dropdown-item'>120</a><a href='JavaScript:void(0);' class='dropdown-item'>300</a><a href='JavaScript:void(0);' class='dropdown-item'>600</a><a href='JavaScript:void(0);' class='dropdown-item'>1800</a><a href='JavaScript:void(0);' class='dropdown-item'>3600</a></div></div></td><td>"+list[i].time+"</td><td id=id='pro'><img src='/static/img/proxied_y.svg' type='image/svg+xml' data-proxied='true' class='proxy btn btn-sm-diy' /></td><td style='display:none;' class='cancel'><input type='button' value='取消' class='btn btn-outline-primary'></td><td style='display:none;' class='update'><input type='button' value='提交' class='btn btn-outline-primary'></td><td id='im'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='btn btn-outline-primary dropdown-toggle'>操作</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(790px, 254px, 0px);'><a href='JavaScript:void(0);' class='dropdown-item rdedit'>编辑</a><div role='separator' class='dropdown-divider'></div><a href='JavaScript:void(0);' class='dropdown-item rd_del'>删除</a></div></td></tr>"
                               }else{
                                tr+="<tr data_recoed_id="+list[i].record_id+"><td><a class='rc' style='color:blue;' href='JavaScript:void(0);'><i class='fas fa-plus'></i></a></td><td><input type='text' placeholder="+list[i].name+" value="+list[i].name+" class='form-control name' readonly='readonly'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_type' disabled='true' data-default="+list[i].type+">"+list[i].type+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>A</a><a href='JavaScript:void(0);' class='dropdown-item'>AAAA</a><a href='JavaScript:void(0);' class='dropdown-item'>CNAME</a><a href='JavaScript:void(0);' class='dropdown-item'>TXT</a><a href='JavaScript:void(0);' class='dropdown-item'>MX</a><a href='JavaScript:void(0);' class='dropdown-item'>SPF</a><a href='JavaScript:void(0);' class='dropdown-item'>LOC</a><a href='JavaScript:void(0);' class='dropdown-item'>SRV</a></div></div></td><td><input type='text' readonly='readonly' placeholder="+list[i].value+" value="+list[i].value+" class='form-control valu'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_ttl' disabled='false' data-default="+list[i].ttl+">"+list[i].ttl+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>1</a><a href='JavaScript:void(0);' class='dropdown-item'>120</a><a href='JavaScript:void(0);' class='dropdown-item'>300</a><a href='JavaScript:void(0);' class='dropdown-item'>600</a><a href='JavaScript:void(0);' class='dropdown-item'>1800</a><a href='JavaScript:void(0);' class='dropdown-item'>3600</a></div></div></td><td>"+list[i].time+"</td><td id=id='pro'><img src='/static/img/proxied_n.svg'  type='image/svg+xml' data-proxied='false' class='proxy btn btn-sm-diy' /></td><td style='display:none;' class='cancel'><input type='button' value='取消' class='btn btn-outline-primary'></td><td style='display:none;' class='update'><input type='button' value='提交' class='btn btn-outline-primary'></td><td id='im'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='btn btn-outline-primary dropdown-toggle'>操作</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(790px, 254px, 0px);'><a href='JavaScript:void(0);' class='dropdown-item rdedit'>编辑</a><div role='separator' class='dropdown-divider'></div><a href='JavaScript:void(0);' class='dropdown-item rd_del'>删除</a></div></td></tr>"
                               }
                       }else{
                              if(list[i].proxied){
                               tr+="<tr data_recoed_id="+list[i].record_id+"><td> </td><td><input type='text' placeholder="+list[i].name+" value="+list[i].name+" class='form-control name' readonly='readonly'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_type' disabled='true' data-default="+list[i].type+">"+list[i].type+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>A</a><a href='JavaScript:void(0);' class='dropdown-item'>AAAA</a><a href='JavaScript:void(0);' class='dropdown-item'>CNAME</a><a href='JavaScript:void(0);' class='dropdown-item'>TXT</a><a href='JavaScript:void(0);' class='dropdown-item'>MX</a><a href='JavaScript:void(0);' class='dropdown-item'>SPF</a><a href='JavaScript:void(0);' class='dropdown-item'>LOC</a><a href='JavaScript:void(0);' class='dropdown-item'>SRV</a></div></div></td><td><input type='text' readonly='readonly' placeholder="+list[i].value+" value="+list[i].value+" class='form-control valu'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_ttl' disabled='true' data-default="+list[i].ttl+">"+list[i].ttl+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>1</a><a href='JavaScript:void(0);' class='dropdown-item'>120</a><a href='JavaScript:void(0);' class='dropdown-item'>300</a><a href='JavaScript:void(0);' class='dropdown-item'>600</a><a href='JavaScript:void(0);' class='dropdown-item'>1800</a><a href='JavaScript:void(0);' class='dropdown-item'>3600</a></div></div></td><td>"+list[i].time+"</td><td id='pro'><img src='/static/img/proxied_y.svg'  type='image/svg+xml' data-proxied='true' class='proxy btn btn-sm-diy' /></td><td style='display:none;' class='cancel'><input type='button' value='取消' class='btn btn-outline-primary'></td><td style='display:none;' class='update'><input type='button' value='提交' class='btn btn-outline-primary'></td><td id='im'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='btn btn-outline-primary dropdown-toggle'>操作</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(790px, 254px, 0px);'><a href='JavaScript:void(0);' class='dropdown-item rdedit'>编辑</a><div role='separator' class='dropdown-divider'></div><a href='JavaScript:void(0);' class='dropdown-item rd_del'>删除</a></div></td></tr>"
                               }else{
                               tr+="<tr data_recoed_id="+list[i].record_id+"><td> </td><td><input type='text' placeholder="+list[i].name+" value="+list[i].name+" class='form-control name' readonly='readonly'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_type' disabled='true' data-default="+list[i].type+">"+list[i].type+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>A</a><a href='JavaScript:void(0);' class='dropdown-item'>AAAA</a><a href='JavaScript:void(0);' class='dropdown-item'>CNAME</a><a href='JavaScript:void(0);' class='dropdown-item'>TXT</a><a href='JavaScript:void(0);' class='dropdown-item'>MX</a><a href='JavaScript:void(0);' class='dropdown-item'>SPF</a><a href='JavaScript:void(0);' class='dropdown-item'>LOC</a><a href='JavaScript:void(0);' class='dropdown-item'>SRV</a></div></div></td><td><input type='text' readonly='readonly' placeholder="+list[i].value+" value="+list[i].value+" class='form-control valu'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle d_ttl' disabled='true' data-default="+list[i].ttl+">"+list[i].ttl+"</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>1</a><a href='JavaScript:void(0);' class='dropdown-item'>120</a><a href='JavaScript:void(0);' class='dropdown-item'>300</a><a href='JavaScript:void(0);' class='dropdown-item'>600</a><a href='JavaScript:void(0);' class='dropdown-item'>1800</a><a href='JavaScript:void(0);' class='dropdown-item'>3600</a></div></div></td><td>"+list[i].time+"</td><td id='pro'><img src='/static/img/proxied_n.svg'  type='image/svg+xml' data-proxied='false' class='proxy btn btn-sm-diy' /></td><td style='display:none;' class='cancel'><input type='button' value='取消' class='btn btn-outline-primary'></td><td style='display:none;' class='update'><input type='button' value='提交' class='btn btn-outline-primary'></td><td id='im'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='btn btn-outline-primary dropdown-toggle'>操作</button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(790px, 254px, 0px);'><a href='JavaScript:void(0);' class='dropdown-item rdedit'>编辑</a><div role='separator' class='dropdown-divider'></div><a href='JavaScript:void(0);' class='dropdown-item rd_del'>删除</a></div></td></tr>"
                               }
                       }


         };
                       if($(".lang_mark").html()=="logout"){
                          var att="<div class='col-lg-3 col-xl-3'>  <div class='ssl-card'><div class='ssl-card-header'><h3 class='ssl-card-title'><p>Under Attack mode</p><p>Show visitors a JavaScript challenge when visiting your site.</p></h3></div><div class='ssl-card-header attack_header'>            <div class='ssl-card-options'>        <label class='custom-switch  attack_switch' statue='off' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div>    <div class='ssl-card-body' style='display:none'>    <div class='ssl-card-header'> <div class='' style='margin auto; text-align:center; left: 50%;'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle attack_button' data-default='1'>off</button><div class='dropdown-menu attack_options' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 444px, 0px);' x-out-of-boundaries=''><div class='cttl_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item' h_long='off'>off(only Enterprise)</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='essentially_off'>essentially_off</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='low'> low</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='medium'> medium</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='high'>high</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='under_attack'>under_attack</a></div></div> </div><a href='#' class='btn btn-outline-primary attack_save'>Save</a></div><p> Security Level</p>    <p>Adjust your website’s Security Level to determine which visitors will receive a challenge page.</p>    </div>  </div></div>"
                         }else{
                          var att="<div class='col-lg-3 col-xl-3'>  <div class='ssl-card'><div class='ssl-card-header'><h3 class='ssl-card-title'><p>被攻击模式</p><p>开启后将向访问者展示challenge脚本页面</p></h3></div><div class='ssl-card-header attack_header'>            <div class='ssl-card-options'>        <label class='custom-switch  attack_switch' statue='off' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input' disabled='disabled'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div>    <div class='ssl-card-body' style='display: none;'>    <div class='ssl-card-header'> <div class='' style='margin auto; text-align:center; left: 50%;'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle attack_button' data-default='1'>essentially_off</button><div class='dropdown-menu attack_options' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(32px, 44px, 0px);'><div class='cttl_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item' h_long='off'>off(only Enterprise)</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='essentially_off'>essentially_off</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='low'> low</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='medium'> medium</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='high'>high</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='under_attack'>under_attack</a></div></div> </div><a href='#' class='btn btn-outline-primary attack_save'>Save</a></div><p>安全等级</p>    <p>调整您网站的安全级别，以确定哪些访客将收到challenge页面。</p>    </div>  </div></div>"
                          }
                        $(".domain_lists").html(att);
                        $(".rd").show();
                        $("#table_body").html(tr);
                        recordspages();
                        $(".ico_loading").hide();
                        $("#drop_name").html(zone_name);



                   $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'get_attack_mode',
                               'zone_id':$(".current_zone").attr('data_id'),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      if(data[0].value=="under_attack"){
                                      $(".attack_switch").attr("statue","on")
                                      $(".attack_switch").children("input").prop("checked",true);
                                      $(".attack_switch").find("input").attr("disabled","true")
                                      }else{
                                        $(".attack_switch").attr("statue","off");
                                        $(".attack_switch").children("input").prop("checked",false);
                                      }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                    print(data);
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });
//function for loading the CNAME detial that was setted at the CloudFlare Partner
         setTimeout(function(){
                    $(".ico_loading").show()
                    $.ajax({
                        'url':'/manage/cname_detail',
                        type:"GET",
                        data:{'name':zone_name},
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                   cname_tos=data[1].forward_tos
                                   t="CNAME detail of "+data[1].zone_name;
                                   var p="";
                                   for (key in cname_tos){
                                       p_add=key+"--> "+cname_tos[key]+'\n'
                                       p=p+p_add
                                   }
                                   p=p+'\n'+"ssl_status:"+data[1].ssl_status+'\n'+"ssl_meta_tag:"+data[1].ssl_meta_tag+'\n'+"sub_label:"+data[1].sub_label+'\n'+"sub_status:"+data[1].sub_status+'\n'
                                   $("#table_body").on("click",".rc",function(){
                                        swal({title:t,text:p});
                                   })
                                   $(".ico_loading").hide();
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Get cname timeout!','warning');
                                   $(".ico_loading").hide()
                                   },
              });
         },1500);
         }else if(data[0].status=='not_login'){
               setTimeout(function(){window.location.replace("manage/b")},"200");
         }else if(data[0].status=='no_records'){
                        $("#pnProductNav").css('display','block');
                        $(".zone_cards").css('display','none');
                        $(".rd").show();
                        $("#table_body").html("<p>no records for this domain</p>");
                        $(".ico_loading").hide();
         }
        },
    error:function(XMLHttpRequest, textStatus, errorThrown){
          swal('ERROR!','connection timeout!','error');
          $(".ico_loading").hide()
          $('.more_zone .zone').removeClass('selected');
          $('.current_zone .zone-txt').text('');
          $('.current_zone img').attr('src', '/static/img/select.svg');
      },
      });
      }
    });
  $(".fa-times").click(function(){
         if($(this).attr("data-act")=="zone_delete"){  //function for deleting a zone name
             zone_name=$(this).parent().parent().attr("zone_name");
             console.log(zone_name);
         if($(".lang_mark").html()=="logout"){
            var t="Are you sure?"
            var text="deleted it!"
         }else{
            var t="你确定了吗?"
            var text="删除它!"
         }
             swal({
             title: t,
             text: text,
             icon: "warning",
             buttons: true,
             dangerMode: true,
             }).then((willDelete) => {

                      if (willDelete) {
                      $.ajax({
                      url:"/manage/zone_delete",
                      timeout:50000,
                      type:"POST",
                      data:{
                             "action": "zone_delete",
                             "zone_name": zone_name,
                            },
                      dataType:"json",
                      beforeSend:function(xhr){
                                var csrftokens = $.cookie('csrftoken');
                                xhr.setRequestHeader("X-CSRFToken",csrftokens);
                                $(".ico_loading").css('display','block');
                      },
                      success:function(data){
                                if(data[0].status=="success"){
                                   swal({title:data[0].zone_name,text:data[0].message,icon: "success",button: true,},
                                   ).then(function(){
                                    setTimeout(function(){window.location.replace("/")},"200");}
                                   );
                                   $(".ico_loading").hide();
                                }else if(data[0].status=="not_login"){
                                   setTimeout(function(){window.location.replace("/")},"200");
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                                },
                      error:function(XMLHttpRequest, textStatus, errorThrown){
                                swal('ERROR!','connection timeout!','error');
                                $(".ico_loading").hide();
                                },
                        });
                        }else{
                           return false;
                        }
       });

      }else{
           swal("Coming soon");
      }

  });
//function for activating the input lable to update domain information
           $("#table_body").on("click",".rdedit",function(){
                var input=$(this).parent().parent().siblings().find(".form-control");
                var button1=$(this).parent().parent().siblings().find(".d_type");
                var button2=$(this).parent().parent().siblings().find(".d_ttl");
                $(this).parent().parent().hide();
                $(this).parent().parent().siblings(".cancel").show();
                $(this).parent().parent().siblings(".update").show();
                input.removeAttr("readonly");
                button1.removeAttr("disabled");
                button2.removeAttr("disabled");
                input.css("background-color","#fff");
             });
//function for cancelling editor
            $("#table_body").on("click",".cancel",function(){
            $(this).siblings().find(".form-control").each(function(){
                 $(this).attr("readonly","true");
                 $(this).css("background-color","#e9ecef");
                 $(this).val($(this).val());
            });
            button1=$(this).siblings().find(".d_type")
            button1.attr("disabled","true");
            button2=$(this).siblings().find(".d_ttl")
            button2.attr("disabled","true");
            button1.html(button1.attr("data-default"));
            button2.html(button2.attr("data-default"));
            $(this).siblings(".update").hide();
            $(this).hide();
            $(this).siblings("#im").show();
            });
 //function for selecting a record type
            $("#table_body").on("click",".s_type a",function(){
               var button=$(this).parent().parent().siblings("button");
               button.html($(this).text());
            });
//function for selecting a record ttl
            $("#table_body").on("click",".d_ttl a",function(){
               var button=$(this).parent().parent().siblings("button");
               button.html($(this).text());
            });
//function for adding inputs for a new record
             $(".add_r").click(function(){
                 tr="<tr><td> </td><td><input type='text' placeholder='' value='' class='form-control name' style='background-color: #fff;'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' class='btn btn-outline-primary dropdown-toggle d_type' data-default=''> </button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>A</a><a href='JavaScript:void(0);' class='dropdown-item'>AAAA</a><a href='JavaScript:void(0);' class='dropdown-item'>CNAME</a><a href='JavaScript:void(0);' class='dropdown-item'>TXT</a><a href='JavaScript:void(0);' class='dropdown-item'>MX</a><a href='JavaScript:void(0);' class='dropdown-item'>SPF</a><a href='JavaScript:void(0);' class='dropdown-item'>LOC</a><a href='JavaScript:void(0);' class='dropdown-item'>SRV</a></div></div></td><td><input type='text' placeholder='' value='' class='form-control valu' style='background-color: #fff;'></td><td><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'  class='btn btn-outline-primary dropdown-toggle d_ttl'  data-default=''></button><div class='dropdown-menu' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(236px, 254px, 0px);'><div class='s_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item'>1</a><a href='JavaScript:void(0);' class='dropdown-item'>120</a><a href='JavaScript:void(0);' class='dropdown-item'>300</a><a href='JavaScript:void(0);' class='dropdown-item'>600</a><a href='JavaScript:void(0);' class='dropdown-item'>1800</a><a href='JavaScript:void(0);' class='dropdown-item'>3600</a></div></div></td><td></td><td><img src='/static/img/proxied_n.svg'  type='image/svg+xml'data-proxied='false' data-proxied='false' class='add_proxy btn btn-sm-diy' /></td><td style='' class='add_cancel'><input type='button' value='取消' class='btn btn-outline-primary '></td><td style='' class='add_submit'><input type='button' value='提交' class='btn btn-outline-primary'></td></tr>"
                  $("#table_body").prepend(tr);
             });
//function for updating the record
      $("#table_body").on("click",".update",function(){
                                $(".ico_loading").show();
                                update=$(this).children("input")
                                cancel=$(this).siblings(".cancel").children("input")
                                cancel.attr("disabled",true)
                                update.attr("disabled",true)
                                update_data={
                               'action':'update_record',
                               'dns_record_id':$(this).parent().attr("data_recoed_id"),
                               'zone_id':$("#drop_name").attr("data_zid"),
                               'name':$(this).siblings().find(".name").val(),
                               'type':$(this).siblings().find(".d_type").html(),
                               'content':$(this).siblings().find(".valu").val(),
                               'ttl':$(this).siblings().find(".d_ttl").html(),
                               'proxied':$(this).siblings().find(".proxy").attr("data-proxied")
                               };
                       $.ajax({
                        url:"/manage/update_record",
                        type:"POST",
                        data:update_data,
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                   swal({title: "success",icon: "success",button: false,timer:1500,});
                                   $(".ico_loading").hide();
                                   add_update();
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                      update.attr("disabled",false)
                                      cancel.attr("disabled",false)
                                }
                                },
                        error:function(XMLHttpRequest, textStatus, errorThrown){
                                swal('ERROR!','connection timeout!','error');
                                $(".ico_loading").hide();
                                update.attr("disabled",false)
                                cancel.attr("disabled",false)
                                },
                       });
      })
//function for submitting the data to add a new record
             $("#table_body").on("click",".add_submit",function(){
             $(".ico_loading").show();
             $(this).children("input").attr("disabled",true);
             $(this).siblings(".add_cancel").children("input").attr("disabled",true)
                  add_data={
                               'action':'add_record',
                               'zone_id':$("#drop_name").attr("data_zid"),
                               'name':$(this).siblings().find(".name").val(),
                               'type':$(this).siblings().find(".d_type").html(),
                               'content':$(this).siblings().find(".valu").val(),
                               'ttl':$(this).siblings().find(".d_ttl").html(),
                               'proxied':$(this).siblings().find(".add_proxy").attr("data-proxied")
                               };

                $.ajax({
                        url:"/manage/new_record",
                        type:"POST",
                        data:add_data,
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                   swal({title: "success",icon: "success",button: false,timer:1500,});
                                   $(".ico_loading").hide();
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                                add_update();
                                },
                        error:function(XMLHttpRequest, textStatus, errorThrown){
                                swal('ERROR!','connection timeout!','error');
                                $(".ico_loading").hide();
                                },
                       });

           });

// function for cancel adding edictor
            $("#table_body").on("click",".add_cancel",function(){
                  $(this).parent().remove();
           });
//funtion for change proxied_status at being adding new record
$("#table_body").on("click",".add_proxy",function(){
     parent=$(this).parent();
     if($(this).attr("data-proxied")=="true"){
          $(this).remove();
          parent.html("<img src='/static/img/proxied_n.svg'  type='image/svg+xml' data-proxied='false' class='add_proxy btn btn-sm-diy' />");
     }else{
          $(this).remove();
          parent.html("<img src='/static/img/proxied_y.svg'  type='image/svg+xml' data-proxied='true' class='add_proxy btn btn-sm-diy' />");
     }
});
//function for deleting a record
     $("#table_body").on("click",".rd_del",function(){
             dns_record_id=$(this).parent().parent().parent().attr("data_recoed_id")
             zone_id=$("#drop_name").attr("data_zid")
                           swal({
             title: "Are you sure?",
             text: "deleted it!",
             icon: "warning",
             buttons: true,
             dangerMode: true,
             }).then((willDelete) => {
                      if (willDelete) {
                      $.ajax({
                      url:"/manage/delete_record",
                      timeout:20000,
                      type:"POST",
                      data:{
                             "action": "record_delete",
                             "dns_record_id":dns_record_id,
                             "zone_id":zone_id,
                            },
                      dataType:"json",
                      beforeSend:function(xhr){
                                var csrftokens = $.cookie('csrftoken');
                                xhr.setRequestHeader("X-CSRFToken",csrftokens);
                                $(".ico_loading").css('display','block');
                      },
                      success:function(data){
                                if(data[0].status=="success"){
                                   swal({title: "success",icon: "success",button: false,timer:1500,});
                                   $(".ico_loading").hide();
                                   add_update();
                                }else if(data[0].status=="not_login"){
                                   setTimeout(function(){window.location.replace("/")},"200");
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                      add_update();
                                }
                                },
                      error:function(XMLHttpRequest, textStatus, errorThrown){
                                swal('ERROR!','connection timeout!','error');
                                $(".ico_loading").hide();
                                add_update();
                                },
                        });
                        }else{
                           return false;
                        }
       });
     });
//function for changing the proxied status
           $("#table_body").on("click",".proxy",function(){
              parent=$(this).parent();
              $(".ico_loading").show();
              if($(this).attr("data-proxied")=="true"){
                  proxied_data={
                               'action':'proxied',
                               'dns_record_id':$(this).parent().parent().attr("data_recoed_id"),
                               'zone_id':$("#drop_name").attr("data_zid"),
                               'name':$(this).parent().siblings().find(".name").val(),
                               'type':$(this).parent().siblings().find(".d_type").html(),
                               'content':$(this).parent().siblings().find(".valu").val(),
                               'ttl':$(this).parent().siblings().find(".d_ttl").html(),
                               'proxied':"false"
                               };
                  $(this).remove();
                  parent.html(n_wait);
                  $.ajax({
                        url:"/manage/proxied_set",
                        type:"POST",
                        data:proxied_data,
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                   swal({title: "success",icon: "success",button: false,timer:1500,});
                                   parent.html(n);
                                   $(".ico_loading").hide();
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      parent.html(y);
                                      $(".ico_loading").hide();
                                }
                               },
                        error:function(XMLHttpRequest, textStatus, errorThrown){
                                swal('ERROR!','connection timeout!','error');
                                $(".ico_loading").hide();
                                parent.html(y);
                                },
                  });
              }else{
                  proxied_data={
                               'action':'proxied',
                               'dns_record_id':$(this).parent().parent().attr("data_recoed_id"),
                               'zone_id':$("#drop_name").attr("data_zid"),
                               'name':$(this).parent().siblings().find(".name").val(),
                               'type':$(this).parent().siblings().find(".d_type").html(),
                               'content':$(this).parent().siblings().find(".valu").val(),
                               'ttl':$(this).parent().siblings().find(".d_ttl").html(),
                               'proxied':'true'
                               };
                  $(this).remove();
                  parent.html(y_wait);
                  $.ajax({
                        url:"/manage/proxied_set",
                        type:"POST",
                        data:proxied_data,
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                   swal({title: "success",icon: "success",button: false,timer:1500,});
                                   parent.html(y);
                                   $(".ico_loading").hide();
                                }else if(data[0].status=="not_login"){
                                   setTimeout(function(){window.location.replace("manage/b")},"200");
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      parent.html(n);
                                      $(".ico_loading").hide();
                                }
                                },
                        error:function(XMLHttpRequest, textStatus, errorThrown){
                                swal('ERROR!','connection timeout!','error');
                                $(".ico_loading").hide();
                                parent.html(n);
                                },
                  });
              }
           });
//function for adding a new domain
   $(".add_zone").click(function(){
              swal({
              title:"Add a new domain",
              content: {
              element: "input",
              attributes: {
              placeholder: "input a domain here",
                 },},
              closeOnClickOutside:false,
              buttons:{
                      cancel: {
                      text: "Cancel",
                      value: null,
                      visible: true,
                      className: "",
                      closeModal: true,
                             },
                      confirm: {
                      text: "ADD",
                      value: true,
                      visible: true,
                      className: "",
                      closeModal: false,
                              }
                      },
              }).then(value =>{
                   if ((value) == "") {
                                swal("You need to input a domain");
                                return false
                       }else if((value) == null){
                                return false
                       };
                   $(".ico_loading").show();
                   $(".swal-button--cancel").hide()

                    var add_zone={
                    'action':'add_zone',
                    'zone_name':value,
                    };
                   $.ajax({
                        url:"/manage/add",
                        type:"POST",
                        data:add_zone,
                        dataType:"json",

                        success:function(data){
                                if(data[0].status=="success"){
                                   swal({title:data[0].zone_name,text:data[0].message,icon: "success",button: true,},
                                   ).then(function(){
                                    setTimeout(function(){window.location.replace("/")},"200");}
                                   );
                                   $(".ico_loading").hide();
                                }else if(data[0].status=="not_login"){
                                   setTimeout(function(){window.location.replace("/")},"200");
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                                },
                        error:function(XMLHttpRequest, textStatus, errorThrown){
                                swal('ERROR!','connection timeout!','error');
                                $(".ico_loading").hide();
                                },
                  });
                });
                 });
//function for cname input window
  $(".add_cname").click(function(){
      var input_div = document.createElement("div");
       input_div.innerHTML = "<h>域名：</p> <input class='swal-content__input c_zone_name' placeholder='examlpe.com'> <h>记录：</p><input class='swal-content__input c_records' placeholder='blog:a.example.com'><br /><button class='swal-button swal-button--cancel c_cancel'>cancel</button>        <button class='swal-button swal-button--confirm c_add'>ADD</button>";
       swal({title:"Example: records(www,blog,nano),all are resolved to three back-to-source address(eg:a,b,c.example.com),write like that(www:a.example,blog:b-to.example,nano:c-to.example)",
       content: input_div,
       buttons:false,
  });
  });
  $("body").on("click",".c_cancel",function(){
       $(this).parents(".swal-overlay--show-modal").remove()
  })
//function for adding the cname through CloudFalre partner
  $("body").on("click",".c_add",function(){
           data={
           "action":"add_cname",
           "zone_name":$(".c_zone_name").val(),
           "subdomains":$(".c_records").val(),
           };
           $(this).parents(".swal-overlay").remove()
           $(".ico_loading").show();
             $.ajax({
                        url:"/manage/add_cname",
                        type:"POST",
                        data:data,
                        dataType:"json",
                        success:function(data){
                                if(data[0].status=="success"){
                                   swal({title:"sucess",text:data[0].message,icon: "success",button: true,},
                                   ).then(function(){
                                    setTimeout(function(){window.location.replace("/")},"200");}
                                   );
                                   $(".ico_loading").hide();
                                }else if(data[0].status=="not_login"){
                                   setTimeout(function(){window.location.replace("/")},"200");
                                }else{
                                      console.log(data)
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                                },
                        error:function(XMLHttpRequest, textStatus, errorThrown){
                                swal('ERROR!','connection timeout!','error');
                                $(".ico_loading").hide();
                                },
                  });

  })

 function current_zone(that){
    $('.more_zone').removeClass('active');
    $('.domain_lists').html('');
    var did = that.attr('data_id');
    var img = that.find('img').attr('src');
    var name = that.attr('zone_name');

    $('.current_zone .zone-txt').text(name);
    $('.current_zone').attr('data_id',did)
    $('.current_zone img').attr('src', img);
    $('.pn-ProductNav_Link').removeAttr("style")

 };
   $('.more_zone .zone').click(function(){
   current_zone($(this));
   });
 //for purging caching windows
$('.caching').click(function(){
  $(".ssl_menu").css("display","none");
  var a,b,c,d,e,f,g,h;
        if($(".lang_mark").html()=="logout"){
           a="Purge caching"
           b="Purge Cache Clear cached files to force Cloudflare to fetch a fresh version of those files from your web server. You can purge files selectively or all at once."
           c="Note: Purging the cache may temporarily degrade performance for your website and increase load on your origin."
           d="Development Mode";
           e="Temporarily bypass our cache allowing you to see changes to your origin server in realtime."
           f="Note: Enabling this feature can significantly increase origin server load. Development mode does not purge the cache so files will need to be purged after development mode expires.";
           h="Browser Cache TTL";
           i="Determine the length of time Cloudflare instructs a visitor’s browser to cache files. During this period, the browser loads the files from its local cache, speeding up page loads."
         }else{
           a="清除缓存"
           b="清除缓存清除缓存的文件以强制Cloudflare从Web服务器中获取这些文件的新版本。您可以有选择地或一次清除所有文件"
           c="注意：清除缓存可能会暂时降低网站的性能，并增加来源负载"
           d="开发模式"
           e="暂时绕过我们的缓存，使您可以实时查看对原始服务器的更改";
           f="注意：启用此功能会大大增加原始服务器的负载。开发模式不会清除缓存，因此在开发模式到期后将需要清除文件"
           h="浏览器缓存周期(TTL)"
           i="确定Cloudflare指示访问者的浏览器缓存文件的时间。在此期间，浏览器从其本地缓存中加载文件，从而加快了页面加载速度"
         }
  var html="<div class='col-lg-4 col-md-4'><div class='ssl-card'><div class='ssl-card-header'><h3 class='ssl-card-title'>"+a+"</h3></div><div class='ssl-card-body'><div class='ssl-card-options'><a href='#' class='btn btn-outline-primary btn-sm purge_all'>Purge All</a><a href='#' class='btn btn-outline-primary btn-sm'>Others</a></div><p>"+b+"</p><p>"+c+"</p></div> </div></div> <div class='col-lg-3 col-xl-3'>  <div class='ssl-card'><div class='ssl-card-header'><h3 class='ssl-card-title'>cache level</h3></div><div class='ssl-card-header '>      <h1 class='cache-card-title' style=''>Standard</h1>      <div class='ssl-card-options'>        <label class='custom-switch agg c_switch 'setting='aggressive' ty='agg'  style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input' current_status='none'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div><div class='ssl-card-header '>      <h1 class='cache-card-title' style=''>Ignore query string</h1>      <div class='ssl-card-options'>        <label class='custom-switch bas c_switch' setting='basic' ty='bas' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input' current_status='none'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div><div class='ssl-card-header'>      <h1 class='cache-card-title' style=''>No query string</h1>      <div class='ssl-card-options'>        <label class='custom-switch sim c_switch' setting='simplified' ty='sim' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input' current_status='none'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div>    <div class='ssl-card-body'>Determine how much of your website’s static content you want Cloudflare to cache. Increased caching can speed up page load time.</div>  </div></div><div class='col-lg-3 col-xl-3'><div class='ssl-card'><div class='ssl-card-header'><h3 class='ssl-card-title'>"+h+"</h3></div><div class='ssl-card-header'> <div class='' style='margin auto; text-align:center; left: 50%;'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle cttl_options' data-default='1'>none</button><div class='dropdown-menu cache_ttl' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(24px, 92px, 0px);'><div class='cttl_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item' h_long='0'>none</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='1800'>30minutes</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='3600'>1hours</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='7200'>2hours</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='180'>3hours</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='14400'>4hours</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='18000'>5hours</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='28800'>8hours</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='43200'>12hours</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='57600'>16hours</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='72000'>20hours</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='86400'>1day</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='172800'>2days</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='259200'>3days</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='345600'>4days</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='432000'>5days</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='691200'>8days</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='2678400'>1month</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='5356800'>2months</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='16070400'>6months</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='31536000'>1year</a></div></div> </div><a href='#' class='btn btn-outline-primary cttl_save'>Save</a></div><div class='ssl-card-body'>"+i+"</div></div></div><div class='col-lg-4 col-xl-4'>  <div class='ssl-card'><div class='ssl-card-header'><h3 class='ssl-card-title'>"+d+"</h3></div><div class='ssl-card-header'>            <div class='ssl-card-options'>        <label class='custom-switch  dm_switch' statue='on' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div>    <div class='ssl-card-body'><p>"+e+"</p><p>"+f+"</p></div>  </div></div><div class='col-lg-3 col-xl-3'>  <div class='ssl-card'><div class='ssl-card-header'><h3 class='ssl-card-title'>Always Online</h3></div><div class='ssl-card-header'>            <div class='ssl-card-options'>        <label class='custom-switch  always_switch' statue='' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div>    <div class='ssl-card-body'>If your server goes down, Cloudflare will serve your website’s static pages from our cache.</div>  </div></div>";
  $('.rd').css('display','none');
  $('.domain_lists').html(html);
                      $.ajax({
                        'url':'/manage/cache',
                        type:"GET",
                        data:{ 'action':'cache_level',
                               'zone_id':$(".current_zone").attr('data_id'),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                  if(data[0].value=="aggressive"){
                                    $(".agg").children("input").prop("checked",true);
                                    $(".agg").parent().parent().siblings().find("input").prop("checked",false);
                                    $(".agg").parent().parent().siblings().find("input").attr("current_status","false")
                                  }else if(data[0].value=="basic"){
                                    $(".bas").children("input").prop("checked",true);
                                    $(".bas").parent().parent().siblings().find("input").prop("checked",false);
                                    $(".bas").parent().parent().siblings().find("input").attr("current_status","false")
                                  }else{
                                     $(".sim").children("input").prop("checked",true);
                                    $(".sim").parent().parent().siblings().find("input").prop("checked",false);
                                    $(".sim").parent().parent().siblings().find("input").attr("current_status","false")
                                  }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Get cache_level timeout!','warning');
                                   },
              });
                 $.ajax({
                        'url':'/manage/cache',
                        type:"GET",
                        data:{ 'action':'get_ttl',
                               'zone_id':$(".current_zone").attr('data_id'),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".cttl_options").html(data[0].value)
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   },
              });
                    $.ajax({
                        'url':'/manage/cache',
                        type:"GET",
                        data:{ 'action':'get_always_online',
                               'zone_id':$(".current_zone").attr('data_id'),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      if(data[0].value=="on"){
                                      $(".always_switch").attr("statue","on")
                                      $(".always_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".always_switch").attr("statue","off");
                                        $(".always_switch").children("input").prop("checked",false);
                                      }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                    print(data);
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });



               $.ajax({
                        'url':'/manage/cache',
                        type:"GET",
                        data:{ 'action':'get_dm',
                               'zone_id':$(".current_zone").attr('data_id'),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      if(data[0].value=="on"){
                                      $(".dm_switch").attr("statue","on")
                                      $(".dm_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".dm_switch").attr("statue","off");
                                        $(".dm_switch").children("input").prop("checked",false);
                                      }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                    print(data);
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });

});
//for purging all caching\
$(".page-holder").on("click",".purge_all",function(){
       swal({
             title: "Are you sure?",
             text: "Purge ALL!",
             icon: "warning",
             buttons: true,
             dangerMode: true,
             }).then((willpurge) => {
                      if (willpurge) {
                      $.ajax({
                      url:"/manage/purge_cache",
                      timeout:20000,
                      type:"POST",
                      data:{
                             "action": "purge_all",
                             "zone_id":$(".current_zone").attr('data_id'),
                            },
                      dataType:"json",
                      beforeSend:function(xhr){
                                var csrftokens = $.cookie('csrftoken');
                                xhr.setRequestHeader("X-CSRFToken",csrftokens);
                                $(".ico_loading").css('display','block');
                      },
                      success:function(data){
                                if(data[0].status=="success"){
                                   swal({title: "success",icon: "success",button: false,timer:1500,});
                                   $(".ico_loading").hide();
                                }else if(data[0].status=="not_login"){
                                   setTimeout(function(){window.location.replace("/")},"200");
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                                },
                      error:function(XMLHttpRequest, textStatus, errorThrown){
                                swal('ERROR!','connection timeout!','error');
                                $(".ico_loading").hide();
                                },
                        });
                        }else{
                           return false;
                        }
       });
});

//for purging cache by other ways
 $(".page-holder").on("click",".purge_other",function(){
      var input_div = document.createElement("div");
       input_div.innerHTML = "<div class='swal-title' style=''><p>Purge by:</p><p>URL: Any assets in the Cloudflare cache that match the URL(s) exactly will be purged from the cache.(https://www.example.com/cat.jpg)</p><p>Hostname: Any assets at URLs with a host that matches one of the provided values will be purged from the cache. (Enterprise only)</p><p>Tag: Any assets served with a Cache-tag response header that matches one of the provided values will be purged from the cache. (Enterprise only)</p></div><h>By URL(free),Hostname,Tag(Enterprise only)</p> <input class='swal-content__input purge_type' placeholder='URL,Hostname or Tag'> <h>Separate URL(s) by (,)</p><input class='swal-content__input purge_url' placeholder='https://www.example.com/cat.jpg,https://www.example.com'><br /><button class='swal-button swal-button--cancel p_cancel'>cancel</button>        <button class='swal-button swal-button--confirm p_ok'>Purge it</button>";
       swal({title:"",
       content: input_div,
       buttons:false,
  });
  });
  $("body").on("click",".p_cancel",function(){
       $(this).parents(".swal-overlay--show-modal").remove()
  });
$('.pn-ProductNav_Link').click(function(){
       $(this).attr("style","color:#004ef9;");
       $(this).siblings().removeAttr("style");
});

//function for purge cache by other ways
  $("body").on("click",".p_ok",function(){
           data={
           "action":"purge_url",
           "zone_id":$(".current_zone").attr('data_id'),
           "purge_urls":$(".purge_url").val(),
           };
           $(this).parents(".swal-overlay").remove()
           $(".ico_loading").show();
             $.ajax({
                        url:"/manage/purge_cache",
                        type:"POST",
                        data:data,
                        dataType:"json",
                        success:function(data){
                                if(data[0].status=="success"){
                                   swal({title:"sucess",text:data[0].message,icon: "success",button: true,},
                                   ).then(function(){
                                    setTimeout(function(){window.location.replace("/")},"200");}
                                   );
                                   $(".ico_loading").hide();
                                }else if(data[0].status=="not_login"){
                                   setTimeout(function(){window.location.replace("/")},"200");
                                }else{
                                      console.log(data)
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                                },
                        error:function(XMLHttpRequest, textStatus, errorThrown){
                                swal('ERROR!','connection timeout!','error');
                                $(".ico_loading").hide();
                                },
                  });

  });
//function for cache level
$("body").on('click','.c_switch',function(){
  that=$(this);
  $(this).children("input").prop("checked",true);
  $(this).parent().parent().siblings().find("input").prop("checked",false);
  if($(this).children("input").attr("current_status")=="true"){
      return 0
  }else{
                      $.ajax({
                        'url':'/manage/cache_level',
                        type:"GET",
                        data:{ 'action':$(this).attr("ty"),
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':$(this).attr("setting"),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                  if(data[0].value=="aggressive"){
                                    $(".agg").children("input").prop("checked",true);
                                    $(".agg").children("input").attr("current_status",true);
                                    $(".agg").parent().parent().siblings().find("input").prop("checked",false);
                                    $(".agg").parent().parent().siblings().find("input").attr("current_status","false");
                                  }else if(data[0].value=="basic"){
                                     $(".bas").children("input").prop("checked",true);
                                     $(".bas").children("input").attr("current_status","true");
                                     $(".bas").parent().parent().siblings().find("input").prop("checked",false);
                                     $(".bas").parent().parent().siblings().find("input").attr("current_status","false");
                                  }else{
                                     $(".sim").children("input").prop("checked",true);
                                     $(".sim").children("input").attr("current_status","true");
                                     $(".sim").parent().parent().siblings().find("input").prop("checked",false);
                                     $(".sim").parent().parent().siblings().find("input").attr("current_status","false");
                                  }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                      that.children("input").prop("checked",false);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   that.children("input").prop("checked",false);
                                   },
              });
  }
});
//function for cache ttl
            $("body").on("click",".cache_ttl a, tls_version a",function(){
               var button=$(this).parent().parent().siblings("button");
               button.html($(this).attr('h_long'));
            });
//function to change cache_ttl
$("body").on("click",".cttl_save",function(){
                 $(".ico_loading").show();
                 data={'action':'set_ttl','zone_id':$(".current_zone").attr('data_id'),'value':$(".cttl_options").text()};
                 console.log(data);
                 $.ajax({
                        'url':'/manage/cache',
                        type:"GET",
                        data:{ 'action':'set_ttl',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':$(".cttl_options").text()
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".ico_loading").hide();
                                      $(".cttl_options").html(data[0].value)
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });
});

$("body").on('click','.always_switch',function(){
       if ($(this).attr("statue")=="on"){
             $(this).children("input").prop("checked",false);
                   $.ajax({
                        'url':'/manage/cache',
                        type:"GET",
                        data:{ 'action':'always_online',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'off'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".always_switch").attr("statue","off")
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".always_switch").children("input").prop("checked",true);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".always_switch").children("input").prop("checked",true);
                                   },
              });
       }else{
                 $(this).children("input").prop("checked",true);
                                    $.ajax({
                        'url':'/manage/cache',
                        type:"GET",
                        data:{ 'action':'always_online',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'on'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".always_switch").attr("statue","on");
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".always_switch").children("input").prop("checked",false);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set function timeout!','warning');
                                   $(".always_switch").children("input").prop("checked",false);
                                   },
              });
       }
});


$("body").on('click','.dm_switch',function(){
       if ($(this).attr("statue")=="on"){
             $(this).children("input").prop("checked",false);
                   $.ajax({
                        'url':'/manage/cache',
                        type:"GET",
                        data:{ 'action':'set_dm',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'off'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".dm_switch").attr("statue","off")
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".dm_switch").children("input").prop("checked",true);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".dm_switch").children("input").prop("checked",true);
                                   },
              });
       }else{
                 $(this).children("input").prop("checked",true);
                 $.ajax({
                        'url':'/manage/cache',
                        type:"GET",
                        data:{ 'action':'set_dm',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'on'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".dm_switch").attr("statue","on");
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".dm_switch").children("input").prop("checked",false);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".dm_switch").children("input").prop("checked",false);
                                   },
              });
       }
});

//(".SSL").siblings().click(function(){
//  $(".ssl_menu").css("display","none");
//  })

//funstion SSL
$("body").on('click','.SSL, .ssl_overview',function(){
   $(".ssl_menu").css("display","block");
   $('.rd').css('display','none');
   $(".ssl_overview").css("color","#004ef9");
   var a,b,c,d,e,f,g,h
                          if($(".lang_mark").html()=="logout"){
                          a="Learn more about";
                          b="End-to-end encryption with Cloudflare";
                          c="off(not secure)";
                          d="Flexible";
                          e="FULL";
                          f="strict";
                          g="Always HTTPS";
                          h="Redirect all requests with scheme “http” to “https”. This applies to all http requests to the zone.";
                          i="Authenticated Origin Pulls";
                          k="TLS client certificate presented for authentication on origin pull.";
                         }else{
                           a="点击学习更多的";
                           b="Cloudflare端对端加密";
                           c="关(不安全)";
                           d="灵活模式";
                           e="全程加密";
                           f="全程严格加密";
                           g="保持HTTPS模式";
                           h="将所有使用方案“ http”的请求重定向到“ https”,适用于对该区域的所有http请求"
                           i="认证回源地址";
                           k="提供TLS客户端证书，用于在源位置拉取时进行身份验证。";
                          }
   html="<div class='col-lg-5 col-md-6'>  <div class='ssl-card '><div class='ssl-card-header'><h3 class='ssl-card-title'><p>"+a+" <a href='https://support.cloudflare.com/hc/en-us/categories/200276247' target='_blank'>"+b+"</a></p></h3></div>      <div class='ssl-card-body svg_status' svg='none'><p class='svg_full' style='display: none;'><svg width='100%' height='117.6470588235294' viewBox='0 0 720 161.58'><path fill='#404242' d='M123.52 83.27h144.9v-4.66h-144.9'></path><path d='M120.51 41h-90a4.13 4.13 0 00-4.07 4.08v71.47a4.13 4.13 0 004.07 4.07h90a4.13 4.13 0 004.07-4.07V45.11a4.13 4.13 0 00-4.07-4.11zm-60.6 4.13h55.86a3.6 3.6 0 110 7.19H59.91a3.6 3.6 0 010-7.19zm-12.6 1.47a2.17 2.17 0 11-2.17 2.16 2.17 2.17 0 012.17-2.16zm-6.4 0a2.17 2.17 0 11-2.17 2.16 2.16 2.16 0 012.17-2.16zm-6.41 0a2.17 2.17 0 11-2.16 2.16 2.17 2.17 0 012.16-2.16zm86.18 70l-.17.16h-90l-.17-.16V56.85h90.31z' fill='#404242'></path><path d='M55.3 99.85l19.49 11.26a1.55 1.55 0 001.56 0l.19-.14 19.22-11.35a1.56 1.56 0 00.76-1.36l-.19-21.74a1.57 1.57 0 00-.11-.53 1.55 1.55 0 00-.71-1l-19-11.56a1.59 1.59 0 00-1.59 0L55.47 74.55a1.64 1.64 0 00-.35.29 1.54 1.54 0 00-.5 1.13l-.1 22.52a1.58 1.58 0 00.78 1.36zm38.09-2.47L77.13 107V88l16.1-8.87zM75.72 66.59l15.89 9.69-16 9L68 80.9l-8.58-5zm-18 12.07l8.65 4.93L74 88v19l-16.35-9.4z' fill='#404242'></path><path d='M214.8 80.48a18.1 18.1 0 11-18.1-18.09 18.1 18.1 0 0118.1 18.09z' fill='#fff'></path><path d='M214.8 80.48h-2a16.08 16.08 0 11-4.71-11.38 16.06 16.06 0 014.71 11.38h4a20.1 20.1 0 10-20.1 20.1 20.09 20.09 0 0020.1-20.1z' fill='#404242'></path><path d='M188.62 90.73h16.12a1.07 1.07 0 001.11-1.12v-11a1.07 1.07 0 00-1.11-1.12h-1.59v-3.16a6.43 6.43 0 00-12.86 0v3.17h-1.58a1.08 1.08 0 00-1.12 1.12v11c-.19.55.41 1.11 1.03 1.11zm9.41-4.1a.6.6 0 01-.56.74h-1.68a.6.6 0 01-.56-.74l.56-2a1.8 1.8 0 01-1-1.77 2 2 0 113.91 0 2.2 2.2 0 01-1 1.77zm-4.66-12.3a3.26 3.26 0 116.52 0v3.17h-6.43z' fill='#79c698'></path><text transform='translate(49.83 135.89)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Browser</text><g><path fill='#404242' d='M424.94 83.27h144.89v-4.66H424.94'></path><path d='M693.24 54.15a4.29 4.29 0 00-2.24-2.33 4.17 4.17 0 00-1.63-.33h-120a4.13 4.13 0 00-1.63.33 4.19 4.19 0 00-1.37.94 4.2 4.2 0 00-1.21 3v41a4.22 4.22 0 004.21 4.22h120a4.2 4.2 0 004.2-4.22v-41a4.31 4.31 0 00-.33-1.61zm-4.52 42.11H569.9v-40h118.82z' fill='#404242'></path><path d='M671.06 68.56a1.43 1.43 0 011.44-1.44 1.43 1.43 0 011 .42 1.46 1.46 0 01.43 1V84a1.48 1.48 0 01-.43 1 1.43 1.43 0 01-1 .42 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.87 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.46 1.46 0 01.43-1 1.43 1.43 0 011-.42 1.43 1.43 0 011.44 1.44V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-1 .42 1.43 1.43 0 01-1-.42 1.48 1.48 0 01-.43-1zm-10.77 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1zm-10.77 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1zm-10.77 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.46 1.46 0 01-2 0 1.47 1.47 0 01-.42-1zm-10.8 0a1.45 1.45 0 012.9 0V84a1.48 1.48 0 01-.43 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1z' fill='#404242'></path><path d='M629.31 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 00-2.89 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM640.08 85.43a1.43 1.43 0 001.45-1.43V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.99.43zM650.86 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.43 1.43 0 00-1.44-1.44 1.43 1.43 0 00-1 .42 1.46 1.46 0 00-.43 1V84a1.48 1.48 0 00.43 1 1.43 1.43 0 001.02.43zM661.63 85.43a1.43 1.43 0 001.45-1.43V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.99.43zM586.19 85.43a1.45 1.45 0 001-.42 1.48 1.48 0 00.43-1V68.56a1.45 1.45 0 00-2.9 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM597 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 10-2.89 0V84a1.47 1.47 0 00.42 1 1.45 1.45 0 001.05.43zM607.76 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 00-2.89 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM618.53 85.43A1.43 1.43 0 00620 84V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.97.43zM672.5 85.43a1.43 1.43 0 001-.42 1.48 1.48 0 00.43-1V68.56a1.46 1.46 0 00-.43-1 1.43 1.43 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 001.02.43zM674 106.93a2.63 2.63 0 00-.54-.84 2.53 2.53 0 00-.79-.56 2.36 2.36 0 00-.95-.18H586.9a2.36 2.36 0 00-1.7.74 2.6 2.6 0 000 3.57 2.32 2.32 0 001.7.74h84.81a2.29 2.29 0 00.93-.17 2.64 2.64 0 00.79-.54 2.32 2.32 0 00.53-.81 2.43 2.43 0 00.2-1 2.55 2.55 0 00-.16-.95z' fill='#404242'></path><text transform='translate(590 135.89)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Origin Server</text><path d='M513.8 80.48a18.1 18.1 0 11-18.1-18.09 18.1 18.1 0 0118.1 18.09z' fill='#fff'></path><path d='M513.8 80.48h-2a16.08 16.08 0 11-4.71-11.38 16.06 16.06 0 014.71 11.38h4a20.1 20.1 0 10-20.1 20.1 20.09 20.09 0 0020.1-20.1z' fill='#404242'></path><path d='M487.62 90.73h16.12a1.07 1.07 0 001.11-1.12v-11a1.07 1.07 0 00-1.11-1.12h-1.59v-3.16a6.43 6.43 0 00-12.86 0v3.17h-1.58a1.08 1.08 0 00-1.12 1.12v11c-.19.55.41 1.11 1.03 1.11zm9.41-4.1a.6.6 0 01-.56.74h-1.68a.6.6 0 01-.56-.74l.56-2a1.8 1.8 0 01-1-1.77 2 2 0 113.91 0 2.2 2.2 0 01-1 1.77zm-4.66-12.3a3.26 3.26 0 116.52 0v3.17h-6.43z' fill='#79c698'></path></g><g><path d='M425.26 80.84h-2.21a76.07 76.07 0 11-22.28-53.77 75.79 75.79 0 0122.28 53.77h4.42a80.47 80.47 0 10-23.57 56.9 80.24 80.24 0 0023.57-56.9z' fill='#f5821f'></path><path d='M368.05 92.57a6.63 6.63 0 00-.69-5.85 5.92 5.92 0 00-4.72-2.32l-38.51-.5a.69.69 0 01-.59-.31.86.86 0 01-.1-.69 1.05 1.05 0 01.91-.69l38.85-.5c4.6-.22 9.61-3.94 11.36-8.51l2.22-5.79a1.21 1.21 0 00.06-.75 25.29 25.29 0 00-48.64-2.59A11.37 11.37 0 00310.05 72a12.21 12.21 0 00.28 4 16.16 16.16 0 00-15.7 16.17 18.68 18.68 0 00.16 2.35.76.76 0 00.75.65h71.07a1 1 0 00.91-.69z' fill='#f5821f'></path><path d='M380.32 67.82h-1.07a.63.63 0 00-.56.44l-1.5 5.22a6.63 6.63 0 00.69 5.85 5.92 5.92 0 004.72 2.32l8.2.5a.69.69 0 01.59.31.84.84 0 01.09.69 1 1 0 01-.9.69l-8.54.5c-4.63.22-9.61 3.94-11.36 8.51l-.63 1.59a.46.46 0 00.44.63h29.35a.78.78 0 00.75-.56 21.49 21.49 0 00.78-5.7 21.08 21.08 0 00-21.05-20.99z' fill='#fbae40'></path><text transform='translate(315.73 135.45)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Cloudflare</text></g></svg></p><p class='svg_flex' style='display: none;'><svg width='100%' height='117.6470588235294' viewBox='0 0 720 161.58'><path fill='#404242' d='M123.52 83.27h144.9v-4.66h-144.9'></path><path d='M120.51 41h-90a4.13 4.13 0 00-4.07 4.08v71.47a4.13 4.13 0 004.07 4.07h90a4.13 4.13 0 004.07-4.07V45.11a4.13 4.13 0 00-4.07-4.11zm-60.6 4.13h55.86a3.6 3.6 0 110 7.19H59.91a3.6 3.6 0 010-7.19zm-12.6 1.47a2.17 2.17 0 11-2.17 2.16 2.17 2.17 0 012.17-2.16zm-6.4 0a2.17 2.17 0 11-2.17 2.16 2.16 2.16 0 012.17-2.16zm-6.41 0a2.17 2.17 0 11-2.16 2.16 2.17 2.17 0 012.16-2.16zm86.18 70l-.17.16h-90l-.17-.16V56.85h90.31z' fill='#404242'></path><path d='M55.3 99.85l19.49 11.26a1.55 1.55 0 001.56 0l.19-.14 19.22-11.35a1.56 1.56 0 00.76-1.36l-.19-21.74a1.57 1.57 0 00-.11-.53 1.55 1.55 0 00-.71-1l-19-11.56a1.59 1.59 0 00-1.59 0L55.47 74.55a1.64 1.64 0 00-.35.29 1.54 1.54 0 00-.5 1.13l-.1 22.52a1.58 1.58 0 00.78 1.36zm38.09-2.47L77.13 107V88l16.1-8.87zM75.72 66.59l15.89 9.69-16 9L68 80.9l-8.58-5zm-18 12.07l8.65 4.93L74 88v19l-16.35-9.4z' fill='#404242'></path><path d='M214.8 80.48a18.1 18.1 0 11-18.1-18.09 18.1 18.1 0 0118.1 18.09z' fill='#fff'></path><path d='M214.8 80.48h-2a16.08 16.08 0 11-4.71-11.38 16.06 16.06 0 014.71 11.38h4a20.1 20.1 0 10-20.1 20.1 20.09 20.09 0 0020.1-20.1z' fill='#404242'></path><path d='M188.62 90.73h16.12a1.07 1.07 0 001.11-1.12v-11a1.07 1.07 0 00-1.11-1.12h-1.59v-3.16a6.43 6.43 0 00-12.86 0v3.17h-1.58a1.08 1.08 0 00-1.12 1.12v11c-.19.55.41 1.11 1.03 1.11zm9.41-4.1a.6.6 0 01-.56.74h-1.68a.6.6 0 01-.56-.74l.56-2a1.8 1.8 0 01-1-1.77 2 2 0 113.91 0 2.2 2.2 0 01-1 1.77zm-4.66-12.3a3.26 3.26 0 116.52 0v3.17h-6.43z' fill='#79c698'></path><text transform='translate(49.83 135.89)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Browser</text><g><path fill='#404242' d='M424.94 83.27h144.89v-4.66H424.94'></path><path d='M693.24 54.15a4.29 4.29 0 00-2.24-2.33 4.17 4.17 0 00-1.63-.33h-120a4.13 4.13 0 00-1.63.33 4.19 4.19 0 00-1.37.94 4.2 4.2 0 00-1.21 3v41a4.22 4.22 0 004.21 4.22h120a4.2 4.2 0 004.2-4.22v-41a4.31 4.31 0 00-.33-1.61zm-4.52 42.11H569.9v-40h118.82z' fill='#404242'></path><path d='M671.06 68.56a1.43 1.43 0 011.44-1.44 1.43 1.43 0 011 .42 1.46 1.46 0 01.43 1V84a1.48 1.48 0 01-.43 1 1.43 1.43 0 01-1 .42 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.87 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.46 1.46 0 01.43-1 1.43 1.43 0 011-.42 1.43 1.43 0 011.44 1.44V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-1 .42 1.43 1.43 0 01-1-.42 1.48 1.48 0 01-.43-1zm-10.77 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1zm-10.77 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1zm-10.77 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.46 1.46 0 01-2 0 1.47 1.47 0 01-.42-1zm-10.8 0a1.45 1.45 0 012.9 0V84a1.48 1.48 0 01-.43 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1z' fill='#404242'></path><path d='M629.31 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 00-2.89 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM640.08 85.43a1.43 1.43 0 001.45-1.43V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.99.43zM650.86 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.43 1.43 0 00-1.44-1.44 1.43 1.43 0 00-1 .42 1.46 1.46 0 00-.43 1V84a1.48 1.48 0 00.43 1 1.43 1.43 0 001.02.43zM661.63 85.43a1.43 1.43 0 001.45-1.43V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.99.43zM586.19 85.43a1.45 1.45 0 001-.42 1.48 1.48 0 00.43-1V68.56a1.45 1.45 0 00-2.9 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM597 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 10-2.89 0V84a1.47 1.47 0 00.42 1 1.45 1.45 0 001.05.43zM607.76 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 00-2.89 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM618.53 85.43A1.43 1.43 0 00620 84V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.97.43zM672.5 85.43a1.43 1.43 0 001-.42 1.48 1.48 0 00.43-1V68.56a1.46 1.46 0 00-.43-1 1.43 1.43 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 001.02.43zM674 106.93a2.63 2.63 0 00-.54-.84 2.53 2.53 0 00-.79-.56 2.36 2.36 0 00-.95-.18H586.9a2.36 2.36 0 00-1.7.74 2.6 2.6 0 000 3.57 2.32 2.32 0 001.7.74h84.81a2.29 2.29 0 00.93-.17 2.64 2.64 0 00.79-.54 2.32 2.32 0 00.53-.81 2.43 2.43 0 00.2-1 2.55 2.55 0 00-.16-.95z' fill='#404242'></path><text transform='translate(590 135.89)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Origin Server</text></g><g><path d='M425.26 80.84h-2.21a76.07 76.07 0 11-22.28-53.77 75.79 75.79 0 0122.28 53.77h4.42a80.47 80.47 0 10-23.57 56.9 80.24 80.24 0 0023.57-56.9z' fill='#f5821f'></path><path d='M368.05 92.57a6.63 6.63 0 00-.69-5.85 5.92 5.92 0 00-4.72-2.32l-38.51-.5a.69.69 0 01-.59-.31.86.86 0 01-.1-.69 1.05 1.05 0 01.91-.69l38.85-.5c4.6-.22 9.61-3.94 11.36-8.51l2.22-5.79a1.21 1.21 0 00.06-.75 25.29 25.29 0 00-48.64-2.59A11.37 11.37 0 00310.05 72a12.21 12.21 0 00.28 4 16.16 16.16 0 00-15.7 16.17 18.68 18.68 0 00.16 2.35.76.76 0 00.75.65h71.07a1 1 0 00.91-.69z' fill='#f5821f'></path><path d='M380.32 67.82h-1.07a.63.63 0 00-.56.44l-1.5 5.22a6.63 6.63 0 00.69 5.85 5.92 5.92 0 004.72 2.32l8.2.5a.69.69 0 01.59.31.84.84 0 01.09.69 1 1 0 01-.9.69l-8.54.5c-4.63.22-9.61 3.94-11.36 8.51l-.63 1.59a.46.46 0 00.44.63h29.35a.78.78 0 00.75-.56 21.49 21.49 0 00.78-5.7 21.08 21.08 0 00-21.05-20.99z' fill='#fbae40'></path><text transform='translate(315.73 135.45)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Cloudflare</text></g></svg></p><p class='svg_off' style='display: none;'><svg width='100%' height='117.6470588235294' viewBox='0 0 720 161.58'><path fill='#404242' d='M123.52 83.27h144.9v-4.66h-144.9'></path><path d='M120.51 41h-90a4.13 4.13 0 00-4.07 4.08v71.47a4.13 4.13 0 004.07 4.07h90a4.13 4.13 0 004.07-4.07V45.11a4.13 4.13 0 00-4.07-4.11zm-60.6 4.13h55.86a3.6 3.6 0 110 7.19H59.91a3.6 3.6 0 010-7.19zm-12.6 1.47a2.17 2.17 0 11-2.17 2.16 2.17 2.17 0 012.17-2.16zm-6.4 0a2.17 2.17 0 11-2.17 2.16 2.16 2.16 0 012.17-2.16zm-6.41 0a2.17 2.17 0 11-2.16 2.16 2.17 2.17 0 012.16-2.16zm86.18 70l-.17.16h-90l-.17-.16V56.85h90.31z' fill='#404242'></path><path d='M55.3 99.85l19.49 11.26a1.55 1.55 0 001.56 0l.19-.14 19.22-11.35a1.56 1.56 0 00.76-1.36l-.19-21.74a1.57 1.57 0 00-.11-.53 1.55 1.55 0 00-.71-1l-19-11.56a1.59 1.59 0 00-1.59 0L55.47 74.55a1.64 1.64 0 00-.35.29 1.54 1.54 0 00-.5 1.13l-.1 22.52a1.58 1.58 0 00.78 1.36zm38.09-2.47L77.13 107V88l16.1-8.87zM75.72 66.59l15.89 9.69-16 9L68 80.9l-8.58-5zm-18 12.07l8.65 4.93L74 88v19l-16.35-9.4z' fill='#404242'></path><text transform='translate(49.83 135.89)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Browser</text><g><path fill='#404242' d='M424.94 83.27h144.89v-4.66H424.94'></path><path d='M693.24 54.15a4.29 4.29 0 00-2.24-2.33 4.17 4.17 0 00-1.63-.33h-120a4.13 4.13 0 00-1.63.33 4.19 4.19 0 00-1.37.94 4.2 4.2 0 00-1.21 3v41a4.22 4.22 0 004.21 4.22h120a4.2 4.2 0 004.2-4.22v-41a4.31 4.31 0 00-.33-1.61zm-4.52 42.11H569.9v-40h118.82z' fill='#404242'></path><path d='M671.06 68.56a1.43 1.43 0 011.44-1.44 1.43 1.43 0 011 .42 1.46 1.46 0 01.43 1V84a1.48 1.48 0 01-.43 1 1.43 1.43 0 01-1 .42 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.87 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.46 1.46 0 01.43-1 1.43 1.43 0 011-.42 1.43 1.43 0 011.44 1.44V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-1 .42 1.43 1.43 0 01-1-.42 1.48 1.48 0 01-.43-1zm-10.77 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1zm-10.77 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1zm-10.77 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.46 1.46 0 01-2 0 1.47 1.47 0 01-.42-1zm-10.8 0a1.45 1.45 0 012.9 0V84a1.48 1.48 0 01-.43 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1z' fill='#404242'></path><path d='M629.31 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 00-2.89 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM640.08 85.43a1.43 1.43 0 001.45-1.43V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.99.43zM650.86 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.43 1.43 0 00-1.44-1.44 1.43 1.43 0 00-1 .42 1.46 1.46 0 00-.43 1V84a1.48 1.48 0 00.43 1 1.43 1.43 0 001.02.43zM661.63 85.43a1.43 1.43 0 001.45-1.43V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.99.43zM586.19 85.43a1.45 1.45 0 001-.42 1.48 1.48 0 00.43-1V68.56a1.45 1.45 0 00-2.9 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM597 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 10-2.89 0V84a1.47 1.47 0 00.42 1 1.45 1.45 0 001.05.43zM607.76 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 00-2.89 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM618.53 85.43A1.43 1.43 0 00620 84V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.97.43zM672.5 85.43a1.43 1.43 0 001-.42 1.48 1.48 0 00.43-1V68.56a1.46 1.46 0 00-.43-1 1.43 1.43 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 001.02.43zM674 106.93a2.63 2.63 0 00-.54-.84 2.53 2.53 0 00-.79-.56 2.36 2.36 0 00-.95-.18H586.9a2.36 2.36 0 00-1.7.74 2.6 2.6 0 000 3.57 2.32 2.32 0 001.7.74h84.81a2.29 2.29 0 00.93-.17 2.64 2.64 0 00.79-.54 2.32 2.32 0 00.53-.81 2.43 2.43 0 00.2-1 2.55 2.55 0 00-.16-.95z' fill='#404242'></path><text transform='translate(590 135.89)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Origin Server</text></g><g><path d='M425.26 80.84h-2.21a76.07 76.07 0 11-22.28-53.77 75.79 75.79 0 0122.28 53.77h4.42a80.47 80.47 0 10-23.57 56.9 80.24 80.24 0 0023.57-56.9z' fill='#f5821f'></path><path d='M368.05 92.57a6.63 6.63 0 00-.69-5.85 5.92 5.92 0 00-4.72-2.32l-38.51-.5a.69.69 0 01-.59-.31.86.86 0 01-.1-.69 1.05 1.05 0 01.91-.69l38.85-.5c4.6-.22 9.61-3.94 11.36-8.51l2.22-5.79a1.21 1.21 0 00.06-.75 25.29 25.29 0 00-48.64-2.59A11.37 11.37 0 00310.05 72a12.21 12.21 0 00.28 4 16.16 16.16 0 00-15.7 16.17 18.68 18.68 0 00.16 2.35.76.76 0 00.75.65h71.07a1 1 0 00.91-.69z' fill='#f5821f'></path><path d='M380.32 67.82h-1.07a.63.63 0 00-.56.44l-1.5 5.22a6.63 6.63 0 00.69 5.85 5.92 5.92 0 004.72 2.32l8.2.5a.69.69 0 01.59.31.84.84 0 01.09.69 1 1 0 01-.9.69l-8.54.5c-4.63.22-9.61 3.94-11.36 8.51l-.63 1.59a.46.46 0 00.44.63h29.35a.78.78 0 00.75-.56 21.49 21.49 0 00.78-5.7 21.08 21.08 0 00-21.05-20.99z' fill='#fbae40'></path><text transform='translate(315.73 135.45)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Cloudflare</text></g></svg></p><p class='svg_strict' style='display: none'><svg width='100%' height='117.6470588235294' viewBox='0 0 720 161.58'><path fill='#404242' d='M123.52 83.27h144.9v-4.66h-144.9'></path><path d='M120.51 41h-90a4.13 4.13 0 00-4.07 4.08v71.47a4.13 4.13 0 004.07 4.07h90a4.13 4.13 0 004.07-4.07V45.11a4.13 4.13 0 00-4.07-4.11zm-60.6 4.13h55.86a3.6 3.6 0 110 7.19H59.91a3.6 3.6 0 010-7.19zm-12.6 1.47a2.17 2.17 0 11-2.17 2.16 2.17 2.17 0 012.17-2.16zm-6.4 0a2.17 2.17 0 11-2.17 2.16 2.16 2.16 0 012.17-2.16zm-6.41 0a2.17 2.17 0 11-2.16 2.16 2.17 2.17 0 012.16-2.16zm86.18 70l-.17.16h-90l-.17-.16V56.85h90.31z' fill='#404242'></path><path d='M55.3 99.85l19.49 11.26a1.55 1.55 0 001.56 0l.19-.14 19.22-11.35a1.56 1.56 0 00.76-1.36l-.19-21.74a1.57 1.57 0 00-.11-.53 1.55 1.55 0 00-.71-1l-19-11.56a1.59 1.59 0 00-1.59 0L55.47 74.55a1.64 1.64 0 00-.35.29 1.54 1.54 0 00-.5 1.13l-.1 22.52a1.58 1.58 0 00.78 1.36zm38.09-2.47L77.13 107V88l16.1-8.87zM75.72 66.59l15.89 9.69-16 9L68 80.9l-8.58-5zm-18 12.07l8.65 4.93L74 88v19l-16.35-9.4z' fill='#404242'></path><path d='M214.8 80.48a18.1 18.1 0 11-18.1-18.09 18.1 18.1 0 0118.1 18.09z' fill='#fff'></path><path d='M214.8 80.48h-2a16.08 16.08 0 11-4.71-11.38 16.06 16.06 0 014.71 11.38h4a20.1 20.1 0 10-20.1 20.1 20.09 20.09 0 0020.1-20.1z' fill='#404242'></path><path d='M188.62 90.73h16.12a1.07 1.07 0 001.11-1.12v-11a1.07 1.07 0 00-1.11-1.12h-1.59v-3.16a6.43 6.43 0 00-12.86 0v3.17h-1.58a1.08 1.08 0 00-1.12 1.12v11c-.19.55.41 1.11 1.03 1.11zm9.41-4.1a.6.6 0 01-.56.74h-1.68a.6.6 0 01-.56-.74l.56-2a1.8 1.8 0 01-1-1.77 2 2 0 113.91 0 2.2 2.2 0 01-1 1.77zm-4.66-12.3a3.26 3.26 0 116.52 0v3.17h-6.43z' fill='#79c698'></path><text transform='translate(49.83 135.89)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Browser</text><g><path fill='#404242' d='M424.94 83.27h144.89v-4.66H424.94'></path><path d='M693.24 54.15a4.29 4.29 0 00-2.24-2.33 4.17 4.17 0 00-1.63-.33h-120a4.13 4.13 0 00-1.63.33 4.19 4.19 0 00-1.37.94 4.2 4.2 0 00-1.21 3v41a4.22 4.22 0 004.21 4.22h120a4.2 4.2 0 004.2-4.22v-41a4.31 4.31 0 00-.33-1.61zm-4.52 42.11H569.9v-40h118.82z' fill='#404242'></path><path d='M671.06 68.56a1.43 1.43 0 011.44-1.44 1.43 1.43 0 011 .42 1.46 1.46 0 01.43 1V84a1.48 1.48 0 01-.43 1 1.43 1.43 0 01-1 .42 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.87 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.46 1.46 0 01.43-1 1.43 1.43 0 011-.42 1.43 1.43 0 011.44 1.44V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-1 .42 1.43 1.43 0 01-1-.42 1.48 1.48 0 01-.43-1zm-10.77 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1zm-10.77 0a1.43 1.43 0 011.44-1.44 1.47 1.47 0 011 .42 1.45 1.45 0 01.42 1V84a1.43 1.43 0 01-1.45 1.45 1.45 1.45 0 01-1-.42 1.47 1.47 0 01-.42-1zm-10.78 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1zm-10.77 0a1.45 1.45 0 112.89 0V84a1.47 1.47 0 01-.42 1 1.46 1.46 0 01-2 0 1.47 1.47 0 01-.42-1zm-10.8 0a1.45 1.45 0 012.9 0V84a1.48 1.48 0 01-.43 1 1.45 1.45 0 01-2 0 1.48 1.48 0 01-.43-1z' fill='#404242'></path><path d='M629.31 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 00-2.89 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM640.08 85.43a1.43 1.43 0 001.45-1.43V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.99.43zM650.86 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.43 1.43 0 00-1.44-1.44 1.43 1.43 0 00-1 .42 1.46 1.46 0 00-.43 1V84a1.48 1.48 0 00.43 1 1.43 1.43 0 001.02.43zM661.63 85.43a1.43 1.43 0 001.45-1.43V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.99.43zM586.19 85.43a1.45 1.45 0 001-.42 1.48 1.48 0 00.43-1V68.56a1.45 1.45 0 00-2.9 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM597 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 10-2.89 0V84a1.47 1.47 0 00.42 1 1.45 1.45 0 001.05.43zM607.76 85.43a1.45 1.45 0 001-.42 1.47 1.47 0 00.42-1V68.56a1.45 1.45 0 00-2.89 0V84a1.48 1.48 0 00.43 1 1.45 1.45 0 001.04.43zM618.53 85.43A1.43 1.43 0 00620 84V68.56a1.45 1.45 0 00-.42-1 1.47 1.47 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 00.97.43zM672.5 85.43a1.43 1.43 0 001-.42 1.48 1.48 0 00.43-1V68.56a1.46 1.46 0 00-.43-1 1.43 1.43 0 00-1-.42 1.43 1.43 0 00-1.44 1.44V84a1.47 1.47 0 00.42 1 1.45 1.45 0 001.02.43zM674 106.93a2.63 2.63 0 00-.54-.84 2.53 2.53 0 00-.79-.56 2.36 2.36 0 00-.95-.18H586.9a2.36 2.36 0 00-1.7.74 2.6 2.6 0 000 3.57 2.32 2.32 0 001.7.74h84.81a2.29 2.29 0 00.93-.17 2.64 2.64 0 00.79-.54 2.32 2.32 0 00.53-.81 2.43 2.43 0 00.2-1 2.55 2.55 0 00-.16-.95z' fill='#404242'></path><text transform='translate(590 135.89)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Origin Server</text><path d='M513.8 80.48a18.1 18.1 0 11-18.1-18.09 18.1 18.1 0 0118.1 18.09z' fill='#fff'></path><path d='M513.8 80.48h-2a16.08 16.08 0 11-4.71-11.38 16.06 16.06 0 014.71 11.38h4a20.1 20.1 0 10-20.1 20.1 20.09 20.09 0 0020.1-20.1z' fill='#404242'></path><path d='M487.62 90.73h16.12a1.07 1.07 0 001.11-1.12v-11a1.07 1.07 0 00-1.11-1.12h-1.59v-3.16a6.43 6.43 0 00-12.86 0v3.17h-1.58a1.08 1.08 0 00-1.12 1.12v11c-.19.55.41 1.11 1.03 1.11zm9.41-4.1a.6.6 0 01-.56.74h-1.68a.6.6 0 01-.56-.74l.56-2a1.8 1.8 0 01-1-1.77 2 2 0 113.91 0 2.2 2.2 0 01-1 1.77zm-4.66-12.3a3.26 3.26 0 116.52 0v3.17h-6.43z' fill='#79c698'></path><path d='M706.69 75.7a17.61 17.61 0 00-2.63-2.76 17.55 17.55 0 00-11.06-4 17.28 17.28 0 00-14.62 26.52 18 18 0 002 2.64 17.8 17.8 0 002.58 2.24v15.4l9.74-7.64 10.3 8.55v-16.32a17.23 17.23 0 003.68-24.63z' fill='#fff'></path><path d='M702.62 74.76a15 15 0 00-22.34 19.58 15.26 15.26 0 001.78 2.29 15.5 15.5 0 002.24 2l.52.37v12.58l8-6.23 8.4 7V99l.52-.37a15 15 0 003.21-21.43l1-.76-1 .76a14.9 14.9 0 00-2.33-2.44zM702 88.9a9.61 9.61 0 01-2.77 4.57 9.43 9.43 0 01-12.21.57 9.56 9.56 0 01-3.74-7.55A9.53 9.53 0 01702 84.06a9.77 9.77 0 01.32 2.44 9.58 9.58 0 01-.32 2.4z' fill='#71c492'></path></g><g><path d='M425.26 80.84h-2.21a76.07 76.07 0 11-22.28-53.77 75.79 75.79 0 0122.28 53.77h4.42a80.47 80.47 0 10-23.57 56.9 80.24 80.24 0 0023.57-56.9z' fill='#f5821f'></path><path d='M368.05 92.57a6.63 6.63 0 00-.69-5.85 5.92 5.92 0 00-4.72-2.32l-38.51-.5a.69.69 0 01-.59-.31.86.86 0 01-.1-.69 1.05 1.05 0 01.91-.69l38.85-.5c4.6-.22 9.61-3.94 11.36-8.51l2.22-5.79a1.21 1.21 0 00.06-.75 25.29 25.29 0 00-48.64-2.59A11.37 11.37 0 00310.05 72a12.21 12.21 0 00.28 4 16.16 16.16 0 00-15.7 16.17 18.68 18.68 0 00.16 2.35.76.76 0 00.75.65h71.07a1 1 0 00.91-.69z' fill='#f5821f'></path><path d='M380.32 67.82h-1.07a.63.63 0 00-.56.44l-1.5 5.22a6.63 6.63 0 00.69 5.85 5.92 5.92 0 004.72 2.32l8.2.5a.69.69 0 01.59.31.84.84 0 01.09.69 1 1 0 01-.9.69l-8.54.5c-4.63.22-9.61 3.94-11.36 8.51l-.63 1.59a.46.46 0 00.44.63h29.35a.78.78 0 00.75-.56 21.49 21.49 0 00.78-5.7 21.08 21.08 0 00-21.05-20.99z' fill='#fbae40'></path><text transform='translate(315.73 135.45)' font-size='14' font-family='SFProDisplay-Regular,SF Pro Display,sans-serif'>Cloudflare</text></g></svg></p></div><div class='ssl-card-header'>      <h1 class='cache-card-title' style=''>"+c+"</h1>      <div class='ssl-card-options'>        <label class='custom-switch ssl_off ssl_switch ' setting='off' ty='off' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input' current_status='none'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div><div class='ssl-card-header'>      <h1 class='cache-card-title' style=''>"+d+"</h1>      <div class='ssl-card-options'>        <label class='custom-switch ssl_flex ssl_switch ' setting='flexible' ty='flex' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input' current_status='none'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div><div class='ssl-card-header'>      <h1 class='cache-card-title' style=''>"+e+"</h1>      <div class='ssl-card-options'>        <label class='custom-switch ssl_full ssl_switch' setting='full' ty='full' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input' current_status='none'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div><div class='ssl-card-header '>            <h1 class='cache-card-title' style=''>"+f+"</h1><div class='ssl-card-options'>        <label class='custom-switch ssl_strict ssl_switch' setting='strict' ty='strict' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input' current_status='none'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div></div></div><div class='col-lg-3 col-xl-3'>  <div class='ssl-card'><div class='ssl-card-header'><h3 class='ssl-card-title'>"+g+"</h3></div><div class='ssl-card-header'>            <div class='ssl-card-options'>        <label class='custom-switch  https_switch' statue='none' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div>    <div class='ssl-card-body'><p>Always Use HTTPS</p><p>"+h+"</p></div>  </div></div><div class='col-lg-3 col-xl-3'>  <div class='ssl-card'><div class='ssl-card-header'><h3 class='ssl-card-title'>"+i+"</h3></div><div class='ssl-card-header'>            <div class='ssl-card-options'>        <label class='custom-switch  aop_switch' statue='off' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div>    <div class='ssl-card-body'>"+k+"</div>  </div></div>";
   $('.domain_lists').html(html);
                    $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'get_ssl',
                               'zone_id':$(".current_zone").attr('data_id'),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      if (data[0].value=="full"){
                                         $(".svg_status").attr("svg","full");
                                         $(".svg_full").css("display","block");
                                         $(".svg_full").siblings().css("display","none");
                                         $(".ssl_full").children("input").prop("checked",true);
                                         $(".ssl_full").children("input").attr("current_status","true");
                                         $(".ssl_full").parent().parent().siblings().find("input").prop("checked",false);
                                         $(".ssl_full").parent().parent().siblings().find("input").attr("current_status","false");
                                      }else if(data[0].value=="off"){
                                         $(".svg_status").attr("svg","off");
                                         $(".svg_off").css("display","block");
                                         $(".svg_off").siblings().css("display","none");
                                         $(".ssl_off").children("input").prop("checked",true);
                                         $(".ssl_off").children("input").attr("current_status","true");
                                         $(".ssl_off").parent().parent().siblings().find("input").prop("checked",false);
                                         $(".ssl_off").parent().parent().siblings().find("input").attr("current_status","false");
                                      }else if(data[0].value=="flexible"){
                                         $(".svg_status").attr("svg","flex");
                                         $(".svg_flex").css("display","block");
                                         $(".svg_flex").siblings().css("display","none");
                                         $(".ssl_flex").children("input").prop("checked",true);
                                         $(".ssl_flex").children("input").attr("current_status","true");
                                         $(".ssl_flex").parent().parent().siblings().find("input").prop("checked",false);
                                         $(".ssl_flex").parent().parent().siblings().find("input").attr("current_status","false");
                                      }else if(data[0].value=="strict"){
                                         $(".svg_status").attr("svg","strict");
                                         $(".svg_strict").css("display","block");
                                         $(".svg_strict").siblings().css("display","none");
                                         $(".ssl_strict").children("input").prop("checked",true);
                                         $(".ssl_strict").children("input").attr("current_status","true");
                                         $(".ssl_strict").parent().parent().siblings().find("input").prop("checked",false);
                                         $(".ssl_strict").parent().parent().siblings().find("input").attr("current_status","false");
                                      }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','get ssl timeout!','warning');
                                   },
              });

                    $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'get_always_https',
                               'zone_id':$(".current_zone").attr('data_id'),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      if(data[0].value=="on"){
                                      $(".https_switch").attr("statue","on")
                                      $(".https_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".https_switch").attr("statue","off");
                                        $(".https_switch").children("input").prop("checked",false);
                                      }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                    print(data);
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });


                     $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'get_aop',
                               'zone_id':$(".current_zone").attr('data_id'),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      if(data[0].value=="on"){
                                      $(".aop_switch").attr("statue","on")
                                      $(".aop_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".aop_switch").attr("statue","off");
                                        $(".aop_switch").children("input").prop("checked",false);
                                      }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                    print(data);
                                   swal('warning','Set function timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });



});


//function ssl setting
$("body").on('click','.ssl_switch',function(){
  that=$(this);
  $(this).children("input").prop("checked",true);
  $(this).parent().parent().siblings().find("input").prop("checked",false);
  if($(this).children("input").attr("current_status")=="true"){
      return 0
  }else{
  console.log({ 'action':that.attr("ty"),
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':that.attr("setting"),
                              },);
                      $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':that.attr("ty"),
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':that.attr("setting"),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                  if(data[0].value=="strict"){
                                    $(".ssl_strict").children("input").prop("checked",true);
                                    $(".ssl_strict").children("input").attr("current_status",true);
                                    $(".ssl_strict").parent().parent().siblings().find("input").prop("checked",false);
                                    $(".ssl_strict").parent().parent().siblings().find("input").attr("current_status","false");
                                  }else if(data[0].value=="off"){
                                     $(".ssl_off").children("input").prop("checked",true);
                                     $(".ssl_off").children("input").attr("current_status","true");
                                     $(".ssl_off").parent().parent().siblings().find("input").prop("checked",false);
                                     $(".ssl_off").parent().parent().siblings().find("input").attr("current_status","false");
                                  }else if(data[0].value=="full"){
                                     $(".ssl_full").children("input").prop("checked",true);
                                     $(".ssl_full").children("input").attr("current_status","true");
                                     $(".ssl_full").parent().parent().siblings().find("input").prop("checked",false);
                                     $(".ssl_full").parent().parent().siblings().find("input").attr("current_status","false");
                                  }else if(data[0].value=="flexible"){
                                     $(".ssl_flex").children("input").prop("checked",true);
                                     $(".ssl_flex").children("input").attr("current_status","true");
                                     $(".ssl_flex").parent().parent().siblings().find("input").prop("checked",false);
                                     $(".ssl_flex").parent().parent().siblings().find("input").attr("current_status","false");
                                  }
                                }else{
                                      that.children("input").prop("checked",false);
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   that.children("input").prop("checked",false);
                                   swal('warning','Set cache_level timeout!','warning');
                                   },
              });
  }
});
$("body").on('mouseenter mouseout',".ssl-card-header",function(event){
     if(event.type=="mouseenter"){
          if($(this).children().find(".ssl_switch").attr("ty")=="off"){
            $(".svg_off").css("display","block");
            $(".svg_off").siblings().css("display","none");
     }else if($(this).children().find(".ssl_switch").attr("ty")=="full"){
            $(".svg_full").css("display","block");
            $(".svg_full").siblings().css("display","none");
     }else if($(this).children().find(".ssl_switch").attr("ty")=="flex"){
            $(".svg_flex").css("display","block");
            $(".svg_flex").siblings().css("display","none");
      }else if($(this).children().find(".ssl_switch").attr("ty")=="strict"){
            $(".svg_strict").css("display","block");
            $(".svg_strict").siblings().css("display","none");
      }
     }else if(event.type=="mouseout"){
                if($(".svg_status").attr("svg")=="off"){
                           $(".svg_off").css("display","block");
                           $(".svg_off").siblings().css("display","none");
                }else if($(".svg_status").attr("svg")=="full"){
                           $(".svg_full").css("display","block");
                           $(".svg_full").siblings().css("display","none");
                }else if($(".svg_status").attr("svg")=="flex"){
                           $(".svg_flex").css("display","block");
                           $(".svg_flex").siblings().css("display","none");
                }else if($(".svg_status").attr("svg")=="strict"){
                           $(".svg_strict").css("display","block");
                           $(".svg_strict").siblings().css("display","none");
                }

      }

});
//always use https set
$("body").on('click','.https_switch',function(){
       if ($(this).attr("statue")=="on"){
             $(this).children("input").prop("checked",false);
                   $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'always_use_https',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'off'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".https_switch").attr("statue","off")
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".https_switch").children("input").prop("checked",true);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".https_switch").children("input").prop("checked",true);
                                   },
              });
       }else{
                 $(this).children("input").prop("checked",true);
                                    $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'always_use_https',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'on'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".https_switch").attr("statue","on");
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".https_switch").children("input").prop("checked",false);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".https_switch").children("input").prop("checked",false);
                                   },
              });
       }
});
//function for edge certificates
$("body").on('click',' .ssl_edge',function(){
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,r,s,t,u,v;
         if($(".lang_mark").html()=="logout"){
          a="HTTP Strict Transport Security";
          b="FOR help";
          c="What is HTTP Strict Transport Security?";
          d="HTTP Strict Transport Security (HSTS, RFC 6797) is a header which allows a website to specify and enforce security policy in client web browsers. This policy enforcement protects secure websites from downgrade attacks, SSL stripping, and cookie hijacking. It allows a web server to declare a policy that browsers will only connect using secure HTTPS connections, and ensures end users do not “click through” critical security warnings. HSTS is an important security mechanism for high security websites. HSTS headers are only respected when served over HTTPS connections, not HTTP.";
          e="HSTS generally has the following behavior in user web browsers:";
          f="Insecure HTTP links become secure HTTPS links";
          g="SSL certificate warnings or other errors show an error message and cannot be bypassed by the user";
          h="Considerations";
          i="One critical consideration when using HSTS on Cloudflare is that once HSTS is turned on, your website must continue to have a valid HTTPS configuration conforming with the HSTS header to avoid making the website inaccessible to users. If SSL is disabled through other means (“grey clouding” a Flexible SSL website, or moving a website off Cloudflare), it is possible the website will be inaccessible to users for the duration of cached max-age headers, or until HTTPS is re-established and an HSTS header with value 0 is served. Consequently, HSTS configuration requires reading and acknowledging understanding of a warning message.";
          j="Max-Age Header"
          k="HSTS includes a “max-age” parameter which specifies the duration HSTS will continue to be cached and enforced by the web browser. This parameter generally is set at 6 months by default, however you must use a minimum of 12 months if you wish to be included in the HSTS Preload list (see below). The special value of “0” means HSTS is disabled and will no longer be cached by the client web browser. For the amount of time specified in the max-age header after a website is successfully accessed over HTTPS, the browser will enforce this HSTS policy, requiring HTTPS with correctly-configured certificates."
          l="Including Subdomains with HSTS"
          m="HSTS Preload"
          n="Cloudflare supports HSTS preload. This flag signals to web browsers that a website’s HSTS configuration is eligible for preloading, that is, inclusion into the browser’s core configuration. Without preload, HSTS is only set after an initial successful HTTPS request, and thus if an attacker can intercept and downgrade that first request, HSTS can be bypassed. With preload, this attack is prevented."
          o="Once HSTS is configured, you must visit each browser’s preload submission URL manually. For Chrome, Firefox/Mozilla and Safari use the"
          p="Microsoft IE HSTS support is being updated."
          r=" allows browsers to benefit from the improved performance of HTTP/2 by letting them know that your site is available over an encrypted connection. Browsers will continue to show “http” in the address bar, not “https"
          s="If your site contains links or references to HTTP URLs that are also available securely via HTTPS, Automatic HTTPS Rewrites can help. If you connect to your site over HTTPS and the lock icon is not present, or has a yellow warning triangle on it, your site may contain references to HTTP assets (“mixed content”).";
          t="Mixed content is often due to factors not under the website owner’s control such as embedded third-party content or complex content management systems. By rewriting URLs from “http” to “https”, Automatic HTTPS Rewrites simplifies the task of making your entire website available over HTTPS, helping to eliminate mixed content errors and ensuring that all data loaded by your website is protected from eavesdropping and tampering."
         }else{
           a="HTTP严格传输安全";
           b="点击获取帮助";
           c="什么是HTTP的严格传输安全？";
           d="HTTP严格传输安全性（HSTS，RFC 6797）是一个标头，允许网站在客户端Web浏览器中指定和实施安全策略。此策略实施可保护安全网站免受降级攻击，SSL剥离和cookie劫持。它允许Web服务器声明一个策略，即浏览器将仅使用安全的HTTPS连接进行连接，并确保最终用户不会“点击”关键的安全警告。HSTS是高安全性网站的重要安全机制。仅在通过HTTPS连接（而不是HTTP）提供服务时，才遵守HSTS标头。"
           e="HSTS在用户Web浏览器中通常具有以下行为:"
           f="不安全的HTTP链接变为安全的HTTPS链接";
           g="SSL证书警告或其他错误显示错误消息，并且用户无法绕过";
           h="注意事项";
           i="在Cloudflare上使用HSTS时，一个重要的考虑因素是，一旦打开HSTS，您的网站必须继续具有符合HSTS标头的有效HTTPS配置，以避免使用户无法访问该网站。如果通过其他方式禁用SSL（“灰色云化” Flexible SSL网站，或将网站从Cloudflare移出），则在缓存的最大使用期限标头期间或直到重新启动HTTPS之前，用户可能无法访问该网站。 -建立并提供值为0的HSTS标头。因此，HSTS配置需要阅读并确认对警告消息的理解。";
           j="Max-Age头";
           k="HSTS包含一个“ max-age”参数，该参数指定HSTS将继续由Web浏览器缓存和实施的持续时间。默认情况下，此参数通常设置为6个月，但是如果希望包含在“ HSTS预加载”列表中，则必须至少使用12个月（请参见下文）。特殊值“ 0”表示HSTS已禁用，并且将不再由客户端Web浏览器缓存。在通过HTTPS成功访问网站后，在max-age标头中指定的时间内，浏览器将强制执行此HSTS策略，要求HTTPS带有正确配置的证书。"
           l="包括具有HSTS的子域"
           m="预载HSTS"
           n="Cloudflare支持HSTS预加载。该标志向Web浏览器发出信号，表明网站的HSTS配置可以进行预加载，即包含在浏览器的核心配置中。如果没有预加载，则仅在初始成功的HTTPS请求之后设置HSTS，因此，如果攻击者可以拦截并降级该第一个请求，则可以绕过HSTS。通过预加载，可以防止这种攻击。"
           o="配置HSTS后，您必须手动访问每个浏览器的预加载提交URL。对于Chrome，Firefox / Mozilla和Safari，请使用"
           p="微软IE浏览器的HSTS即将支持更新"
           r="使浏览器知道通过加密连接可以访问您的站点，从而使他们能够从HTTP / 2的改进性能中受益。浏览器将继续在地址栏中显示“ http”，而不是“ https”"
           s="如果您的站点包含对HTTP URL的链接或引用，这些链接或引用也可以通过HTTPS安全地使用，则自动HTTPS重写可以提供帮助。如果您通过HTTPS连接到站点，但不存在锁定图标，或者其上带有黄色警告三角形，则您的站点可能包含对HTTP资产（“混合内容”）的引用"
           t="混合内容通常是由于不受网站所有者控制的因素引起的，例如嵌入式第三方内容或复杂的内容管理系统。通过将URL从“ http”重写为“ https”，“自动HTTPS重写”简化了通过HTTPS使整个网站可用的任务，有助于消除混合内容错误，并确保保护您的网站加载的所有数据免遭窃听和篡改"
          }
html="<div class='col-lg-3 col-xl-5'>  <div class='ssl-card'><div><div class='ssl-card-header hsts_show'><h3 class='ssl-card-title'>"+a+"</h3><div class='ssl-card-options '>        <label class='custom-switch hsts_all_switch' style='float:right;'>                    <a href='#' class='btn btn-outline-primary btn-sm'>Open</a>        </label>      <label class='custom-switch hsts_save_switch ' style='float:right;'>                    <a href='#' class='btn btn-outline-primary btn-sm '>Save</a>        </label></div></div><div class='ssl-card-header' style='display: none;'>      <h1 class='cache-card-title' style=''>Enable HSTS (Strict-Transport-Security)</h1>      <div class='ssl-card-options'>        <label class='custom-switch bas hsts_en_switch' setting='basic' ty='bas' style='float:right;' statue='off'>          <input type='checkbox' value='1' class='custom-switch-input' current_status='false'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div><div class='ssl-card-header' style='display: none;'>      <h1 class='cache-card-title' style=''>Max Age Header (max-age)</h1>      <div class='ssl-card-options'> <div class='max_age' style='margin auto; text-align:center; left: 50%;'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle age_options' data-default='1'>5184000</button><div class='dropdown-menu cache_ttl' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(24px, 181px, 0px);'><div class='cttl_type' style='height:200px;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item' h_long='0'>none</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='2678400'>1month</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='5356800'>2months</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='8035200'>3months</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='10713600'>4months</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='13392000'>5months</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='16070400'>6months</a><a href='JavaScript:void(0);' class='dropdown-item' h_long='31536000'>1year</a></div></div> </div>             </div>    </div><div class='ssl-card-header' style='display: none;'>      <h1 class='cache-card-title' style=''>Apply HSTS policy to subdomains (includeSubDomains)</h1>      <div class='ssl-card-options'>        <label class='custom-switch sim hsts_in_switch' setting='simplified' ty='sim' style='float:right;' statue='off'>          <input type='checkbox' value='1' class='custom-switch-input' current_status='none'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div>    <div class='ssl-card-header' style='display: none;'>      <h1 class='cache-card-title' style=''>preload</h1>      <div class='ssl-card-options'>        <label class='custom-switch sim hsts_pr_switch' setting='simplified' ty='sim' style='float:right;' statue='off'>          <input type='checkbox' value='1' class='custom-switch-input' current_status='none'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div><div class='ssl-card-header' style='display: none;'>      <h1 class='cache-card-title' style=''>No-Sniff Header</h1>      <div class='ssl-card-options'>        <label class='custom-switch sim hsts_no_switch' setting='simplified' ty='sim' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input' current_status='none'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div></div><div class='ssl-card-header hsts_help card-options-collapse collapsed' data-toggle='collapse' data-target='#help_body'>      <h1 class='cache-card-title' style='font-weight:600;'>"+b+"</h1>      <div class='ssl-card-options' aria-expanded='true'></div>    </div><div class='ssl-card-body collapse' id='help_body' style=''><span><h5 id='what-is-http-strict-transport-security-'>"+c+"</h5><p>"+d+"</p><p>"+e+"</p><ul><li>"+f+"</li><li>"+g+"</li></ul><h4 id='considerations'>"+h+"</h4><p>"+i+"</p><h4 id='max-age-header'>"+j+"</h4><p>"+k+"</p><h4 id='including-subdomains-with-hsts'>"+l+"</h4><p>Cloudflare supports the “includeSubDomains” parameter in HSTS headers. This parameter applies the HSTS policy from a parent domain (such as example.com) to subdomains (such as <a href='http://www.development.example.com'>www.development.example.com</a> or api.example.com). Caution is encouraged with this header, as if any subdomains do not work with HTTPS they will become inaccessible.</p><h4 id='hsts-preload'>"+m+"</h4><p>"+n+"</p><p>"+o+" <a href='https://hstspreload.appspot.com/'>Chrome preload list.</a>. "+p+"</p></span>.</div>  </div></div><div class='col-lg-3 col-xl-3'>  <div class='ssl-card'><div class='ssl-card-header'><h3 class='ssl-card-title'>Opportunistic Encryption</h3></div><div class='ssl-card-header'>            <div class='ssl-card-options'>        <label class='custom-switch  oe_switch' statue='' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div>    <div class='ssl-card-body'>Opportunistic Encryption"+r+" .</div>  </div></div><div class='col-lg-4 col-xl-3'>  <div class='ssl-card'><div class='ssl-card-header'><h3 class='ssl-card-title'>Automatic HTTPS Rewrites</h3></div><div class='ssl-card-header'>            <div class='ssl-card-options'>        <label class='custom-switch  aht_switch' statue='off' style='float:right;'>          <input type='checkbox' value='1' class='custom-switch-input'>          <span class='custom-switch-indicator'></span>        </label>      </div>    </div>    <div class='ssl-card-body'><p>"+s+"</p>"+t+".</div>  </div></div>";
$(".domain_lists").html(html);
                     $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'get_oe',
                               'zone_id':$(".current_zone").attr('data_id'),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      if(data[0].value=="on"){
                                      $(".oe_switch").attr("statue","on")
                                      $(".oe_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".oe_switch").attr("statue","off");
                                        $(".oe_switch").children("input").prop("checked",false);
                                      }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   },
              });
                 $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'get_aht',
                               'zone_id':$(".current_zone").attr('data_id'),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      if(data[0].value=="on"){
                                      $(".aht_switch").attr("statue","on")
                                      $(".aht_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".aht_switch").attr("statue","off");
                                        $(".aht_switch").children("input").prop("checked",false);
                                      }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   },
              });
})
$("body").on('click',' .hsts_all_switch',function(){
if($(this).find("a").html()=="Open"){
  $(this).parent().parent().siblings().css("display","block");
  $(this).find("a").html("Close");
                      $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'security_header',
                               'zone_id':$(".current_zone").attr('data_id'),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                console.log(data);
                                if(data[0].status=="success"){
                                      if(data[0].value.enabled=="true"){
                                      $(".hsts_en_switch").attr("statue","on");
                                      $(".hsts_en_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".hsts_en_switch").attr("statue","off");
                                        $(".hsts_en_switch").children("input").prop("checked",false);
                                      }
                                      if(data[0].value.include_subdomains=="true"){
                                      $(".hsts_in_switch").attr("statue","on");
                                      $(".hsts_in_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".hsts_in_switch").attr("statue","off");
                                        $(".hsts_in_switch").children("input").prop("checked",false);
                                      }
                                      if(data[0].value.preload=="true"){
                                      $(".hsts_pr_switch").attr("statue","on");
                                      $(".hsts_pr_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".hsts_pr_switch").attr("statue","off");
                                        $(".hsts_pr_switch").children("input").prop("checked",false);
                                      }
                                      if(data[0].value.nosniff=="true"){
                                      $(".hsts_on_switch").attr("statue","on");
                                      $(".hsts_on_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".hsts_on_switch").attr("statue","off");
                                        $(".hsts_on_switch").children("input").prop("checked",false);
                                      }
                                                                             if(data[0].value.nosniff=="true"){
                                      $(".hsts_on_switch").attr("statue","on");
                                      $(".hsts_on_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".hsts_on_switch").attr("statue","off");
                                        $(".hsts_on_switch").children("input").prop("checked",false);
                                      }
                                      $(".max_age").find("button").html(data[0].value.max_age)
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                    print(data);
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });
}else if($(this).find("a").html()=="Close"){
  $(this).parent().parent().siblings().css("display","none");
  $(this).find("a").html("Open");
}

});
//function for save HSTS
$("body").on('click',' .hsts_save_switch',function(){
       $(".ico_loading").show();
                        $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'set_security_header',
                               'zone_id':$(".current_zone").attr("data_id"),
                               'enabled':$(".hsts_en_switch").find("input").prop("checked"),
                               'max_age':$(".max_age").find("button").html(),
                               'include_subdomains':$(".hsts_in_switch").find("input").prop("checked"),
                               'nosniff':$(".hsts_no_switch").find("input").prop("checked")
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".ico_loading").hide();
                                      swal({title:"sucess",text:data[0].message,icon: "success",button: true,},)
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });
});

$("body").on('click',' .tls_v_save',function(){
                        $(".ico_loading").show();
                               $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'set_tls_v',
                               'zone_id':$(".current_zone").attr("data_id"),
                               'value':$(".tls_options").html(),
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".ico_loading").hide();
                                      swal({title:"sucess",text:data[0].message,icon: "success",button: true,},)
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });
});

//set OE
$("body").on('click','.oe_switch',function(){
       if ($(this).attr("statue")=="on"){
             $(this).children("input").prop("checked",false);
                   $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'set_oe',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'off'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".oe_switch").attr("statue","off")
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".oe_switch").children("input").prop("checked",true);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set function timeout!','warning');
                                   $(".oe_switch").children("input").prop("checked",true);
                                   },
              });
       }else{
                 $(this).children("input").prop("checked",true);
                                    $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'set_oe',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'on'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".oe_switch").attr("statue","on");
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".oe_switch").children("input").prop("checked",false);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set function timeout!','warning');
                                   $(".oe_switch").children("input").prop("checked",false);
                                   },
              });
       }
});
//set AHT
$("body").on('click','.aht_switch',function(){
       if ($(this).attr("statue")=="on"){
             $(this).children("input").prop("checked",false);
                   $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'set_aht',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'off'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".aht_switch").attr("statue","off")
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".aht_switch").children("input").prop("checked",true);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set function timeout!','warning');
                                   $(".aht_switch").children("input").prop("checked",true);
                                   },
              });
       }else{
                 $(this).children("input").prop("checked",true);
                                    $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'set_aht',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'on'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".aht_switch").attr("statue","on");
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".aht_switch").children("input").prop("checked",false);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set function timeout!','warning');
                                   $(".aht_switch").children("input").prop("checked",false);
                                   },
              });
       }
});

//set AOP
$("body").on('click','.aop_switch',function(){
       if ($(this).attr("statue")=="on"){
             $(this).children("input").prop("checked",false);
                   $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'set_aop',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'off'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".aop_switch").attr("statue","off")
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".aop_switch").children("input").prop("checked",true);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set function timeout!','warning');
                                   $(".aop_switch").children("input").prop("checked",true);
                                   },
              });
       }else{
                 $(this).children("input").prop("checked",true);
                                    $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'set_aop',
                               'zone_id':$(".current_zone").attr('data_id'),
                               'value':'on'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $(".aop_switch").attr("statue","on");
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".aop_switch").children("input").prop("checked",false);
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set function timeout!','warning');
                                   $(".aop_switch").children("input").prop("checked",false);
                                   },
              });
       }
});
//function for waking Chartjs to depict line
function chart_line(what,data,id){
   lables=[]
   unique_all=[];
   request_all=[];
   request_cached=[];
   request_uncached=[];
   bandwidth_all=[];
   total_bandwidth=[];
   bandwidth_cached=[];
   bandwidth_uncached=[];
   total_request=[];
   bandwidth_request=[];
if(what=='request'){
   for(i in data.timeseries){
       lables.push(data.timeseries[i].since);
       request_all.push(data.timeseries[i].requests.all);
       bandwidth_all.push(data.timeseries[i].bandwidth.all);
   }
var ctx = document.getElementById('line_all').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: lables,
        datasets: [{
            label: 'request_total(time(s))',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255,182,193)',
            data: request_all
        },{
            label: 'bandwidth_total(unit:bit)',
            backgroundColor: 'rgb(30,144,255)',
            borderColor: 'rgb(30,144,255)',
            data: bandwidth_all
        }
        ]
    },

    // Configuration options go here
    options: {}
});
}else if(what=='re_total'){
total_request.push(data.totals.requests.cached,data.totals.requests.uncached);
var pie_request = document.getElementById('re_pie_all').getContext('2d');
var chart = new Chart(pie_request, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['request:cached','request:uncached'],
        datasets: [{
            label: 'request(cached and uncached)',
            backgroundColor: ['rgb(	127,255,170)','rgb(	255,99,132)'],
//            borderColor: 'rgb(255,182,193)',
            data: total_request
        }
        ]
    },

    // Configuration options go here
    options: {}
});
}else if(what=='bw_total'){
total_bandwidth.push(data.totals.bandwidth.cached,data.totals.bandwidth.uncached);
var pie_request = document.getElementById('bw_pie_all').getContext('2d');
var chart = new Chart(pie_request, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['cache','uncache'],
        datasets: [{
            label: 'bandwidth(cache and uncache)',
            backgroundColor: ['rgb(	127,255,170)','rgb(	255,99,132)'],
//            backgroundColor: 'rgb(255, 99, 132)',
//            borderColor: 'rgb(255,182,193)',
            data: total_bandwidth
        }
        ]
    },

    // Configuration options go here
    options: {}
});
}else if(what=='un_total'){
   for(i in data.timeseries){
       lables.push(data.timeseries[i].since);
       unique_all.push(data.timeseries[i].uniques.all);
   }
var ctx = document.getElementById('un_all').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: lables,
        datasets: [{
            label: 'unique_total(ip(s))',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255,182,193)',
            data: unique_all
        }
        ]
    },

    // Configuration options go here
    options: {}
});
}//else
};
//function
$("body").on("click",".gap a",function(){
               a=+$(this).attr('gap_long');
               var button=$(this).parent().parent().siblings("button");
               button.html($(this).html());
               $(".ico_loading").show();
                                       $.ajax({
                        'url':'/manage/analytics',
                        type:"GET",
                        data:{ 'action':'dashboard',
                               'zone_id':$(".current_zone").attr("data_id"),
                               'since':a
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $('.rd').css('display','none');
                                      chart_line('request',data[0].result,'line_all');
                                      $(".ico_loading").hide();
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set dashboard timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });
            });

//function
$("body").on("click",".re_gap a",function(){
               a=+$(this).attr('gap_long');
               var button=$(this).parent().parent().siblings("button");
               button.html($(this).html());
               $(".ico_loading").show();
                                       $.ajax({
                        'url':'/manage/analytics',
                        type:"GET",
                        data:{ 'action':'dashboard',
                               'zone_id':$(".current_zone").attr("data_id"),
                               'since':a
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $('.rd').css('display','none');
                                      chart_line('re_total',data[0].result,'re_pie_all');
                                      $(".ico_loading").hide();
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set dashboard timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });
            });
//function
$("body").on("click",".bw_gap a",function(){
               a=+$(this).attr('gap_long');
               var button=$(this).parent().parent().siblings("button");
               button.html($(this).html());
               $(".ico_loading").show();
                                       $.ajax({
                        'url':'/manage/analytics',
                        type:"GET",
                        data:{ 'action':'dashboard',
                               'zone_id':$(".current_zone").attr("data_id"),
                               'since':a
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $('.rd').css('display','none');
                                      chart_line('bw_total',data[0].result,'bw_pie_all');
                                      $(".ico_loading").hide();
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set dashboard timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });
            });
$("body").on("click",".un_gap a",function(){
               a=+$(this).attr('gap_long');
               var button=$(this).parent().parent().siblings("button");
               button.html($(this).html());
               $(".ico_loading").show();
                                       $.ajax({
                        'url':'/manage/analytics',
                        type:"GET",
                        data:{ 'action':'dashboard',
                               'zone_id':$(".current_zone").attr("data_id"),
                               'since':a
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $('.rd').css('display','none');
                                      chart_line('un_total',data[0].result,'un_pie_all');
                                      $(".ico_loading").hide();
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Set dashboard timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });
            });
//function for dashboard
$("body").on('click','.overview',function(){
var a,b,c,d;
                       if($(".lang_mark").html()=="logout"){
                          a="requests and bandwidth";
                          b="unique guest(ip）";
                          c="(un)cached about requests(unit:bit)";
                          d="(un)cached about bandwidth(unit:bit)";
                         }else{
                           a="请求和流量";
                           b="不重复访问(ip)";
                           c="请求响应的缓存比";
                           d="流量的缓存比"
                          }
       var html="<div class='col-lg-3 col-md-5'>  <div class='ssl-card''><div class='ssl-card-header'><h3 class='ssl-card-title'>"+a+"</h3></div><div class='ssl-card-header'> <div class='' style='margin auto; text-align:center; left: 50%;'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle gap_options' data-default='1'>7days</button><div class='dropdown-menu gap' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(24px, 92px, 0px);'><div class='gap_type' style='height:100%;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item' gap_long='-1440'>1day</a><a href='JavaScript:void(0);' class='dropdown-item' gap_long='-10080'>7days</a></div></div> </div></div><div class='ssl-card-body'><canvas id='line_all' width='100%' height='100%' aria-label='Hello ARIA World' role='img'></canvas></div></div></div><html> <head></head> <body>  <div class='col-lg-3 col-md-5'>    <div class='ssl-card' '=''>    <div class='ssl-card-header'>     <h3 class='ssl-card-title'>"+b+"</h3>    </div>    <div class='ssl-card-header'>      <div class='' style='margin auto; text-align:center; left: 50%;'>      <button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle gap_options' data-default='1'>7days</button>      <div class='dropdown-menu un_gap' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(24px, 92px, 0px);'>       <div class='gap_type' style='height:100%;width: auto;overflow-y:scroll;'>        <a href='JavaScript:void(0);' class='dropdown-item' gap_long='-1440'>1day</a>        <a href='JavaScript:void(0);' class='dropdown-item' gap_long='-10080'>7days</a>  <a href='JavaScript:void(0);' class='dropdown-item' gap_long='-43200'>30days</a>      </div>      </div>      </div>    </div>    <div class='ssl-card-body'>     <canvas id='un_all' width='100%' height='100%' aria-label='Hello ARIA World' role='img'></canvas>    </div>   </div>  </div> </body></html> <div class='col-lg-3 col-md-5'>  <div class='ssl-card''><div class='ssl-card-header'><h3 class='ssl-card-title'>"+c+"</h3></div><div class='ssl-card-header'> <div class='' style='margin auto; text-align:center; left: 50%;'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle gap_options' data-default='1'>7days</button><div class='dropdown-menu re_gap' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(24px, 92px, 0px);'><div class='gap_type' style='height:100%;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item' gap_long='-1440'>1day</a><a href='JavaScript:void(0);' class='dropdown-item' gap_long='-10080'>7days</a><a href='JavaScript:void(0);' class='dropdown-item' gap_long='-43200'>30days</a></div></div> </div></div><div class='ssl-card-body'><canvas id='re_pie_all' width='100%' height='100%' aria-label='Hello ARIA World' role='img'></canvas></div></div></div> <div class='col-lg-3 col-md-5'>  <div class='ssl-card''><div class='ssl-card-header'><h3 class='ssl-card-title'>"+d+"</h3></div><div class='ssl-card-header'> <div class='' style='margin auto; text-align:center; left: 50%;'><button type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' readonly='readonly' class='btn btn-outline-primary dropdown-toggle gap_options' data-default='1'>7days</button><div class='dropdown-menu bw_gap' x-placement='bottom-start' style='position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(24px, 92px, 0px);'><div class='gap_type' style='height:100%;width: auto;overflow-y:scroll;'><a href='JavaScript:void(0);' class='dropdown-item' gap_long='-1440'>1day</a><a href='JavaScript:void(0);' class='dropdown-item' gap_long='-10080'>7days</a><a href='JavaScript:void(0);' class='dropdown-item' gap_long='-43200'>30days</a></div></div> </div></div><div class='ssl-card-body'><canvas id='bw_pie_all' width='100%' height='100%' aria-label='Hello ARIA World' role='img'></canvas></div></div></div>"
   //       $(".align-items-stretch .row2").css("display","none")
       $('.rd').css('display','none');
       $(".ssl_menu").css("display","none");
       $('.domain_lists').html(html);
       $(".ico_loading").show();
                        $.ajax({
                        'url':'/manage/analytics',
                        type:"GET",
                        data:{ 'action':'dashboard',
                               'zone_id':$(".current_zone").attr("data_id"),
                               'since':-10080
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      $('.rd').css('display','none');
                                      chart_line('request',data[0].result,'line_all');
                                      chart_line('re_total',data[0].result,'re_pie_all');
                                      chart_line('bw_total',data[0].result,'bw_pie_all');
                                      chart_line('un_total',data[0].result,'un_all');
                                      $(".ico_loading").hide();
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                   swal('warning','Get dashboard timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });
});

//function attack mode
$("body").on('click','.attack_header',function(){
 if($(this).find(".attack_switch").attr("statue")=="on"){
      $(this).siblings(".ssl-card-body").css("display","block")
 }else{
                    $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'set_attack_mode',
                               'zone_id':$(".current_zone").attr('data_id'),
//                               'value':$(".attack_switch").siblings("button").html
                                'value':'under_attack'
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      if(data[0].value=="under_attack"){
                                      $(".attack_switch").attr("statue","on")
                                      $(".attack_switch").children("input").prop("checked",true);
                                      }else{
                                        $(".attack_switch").attr("statue","off");
                                        $(".attack_switch").children("input").prop("checked",false);
                                      }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                    print(data);
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });

 }
 });



 //function
 $("body").on('click','.attack_options a',function(){
    $(this).parent().parent().siblings(".attack_button").html($(this).attr("h_long"))
 })
$("body").on('click','.attack_save',function(){
$(".ico_loading").show();
                    $.ajax({
                        'url':'/manage/ssl',
                        type:"GET",
                        data:{ 'action':'set_attack_mode',
                               'zone_id':$(".current_zone").attr('data_id'),
//                               'value':$(".attack_switch").siblings("button").html
                                'value':$(".attack_button").html()
                              },
                        dataType:"json",
                        timeout:20000,
                        success:function(data){
                                if(data[0].status=="success"){
                                      if(data[0].value=="under_attack"){
                                      $(".attack_switch").attr("statue","on")
                                      $(".attack_switch").children("input").prop("checked",true);
                                      $(".ico_loading").hide();
                                      swal({title: "success",icon: "success",button: false,timer:1500,});
                                      }else{
                                        $(".attack_switch").attr("statue","off");
                                        $(".attack_switch").children("input").prop("checked",false);
                                        $(".ico_loading").hide();
                                        swal({title: "success",icon: "success",button: false,timer:1500,});
                                      }
                                }else{
                                      swal("Wrong",data[0].message,"error");
                                      $(".ico_loading").hide();
                                }
                        },
                         error:function(XMLHttpRequest, textStatus, errorThrown){
                                    print(data);
                                   swal('warning','Set cache_level timeout!','warning');
                                   $(".ico_loading").hide();
                                   },
              });

})
 })





