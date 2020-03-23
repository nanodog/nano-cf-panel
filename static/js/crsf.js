var csrftokens = $.cookie('csrftoken'); //获取当前csrftoken值
function csrfSafeMethod(method) {
              // 根据请求方法判断加不加 CSRF protection
     return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
      }
     $.ajaxSetup({
     beforeSend: function(xhr, settings) { // xhr=XmlHttpRequest 对象，所有ajax请求底层操作都是使用的它来做的
         if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
           xhr.setRequestHeader("X-CSRFToken",csrftokens);
            }
         }
});

