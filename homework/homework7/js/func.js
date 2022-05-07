$(init) 
function init() {
  $('.u-photo').hide()
  $('.m-first').show()
  $('#b01').css('background-color','gray')
  $('.m-second').hide()
  $('.m-third').hide()

  $('.m-smallphoto').on('click','img',function(){
    $('.m-menu').css('opacity','0.2')
    var a=$(this).attr('src')
    $('.u-photo').css('content','url('+a+')')
    $('.u-photo').css('width','400px')
    $('.u-photo').css('height','400px')
    $('.u-photo').css('z-index','99')
    $('.u-photo').show(1000)
  })

  $('body').on('click','.u-photo',function(){
    $('.m-menu').css('opacity','1')
    $('.u-photo').hide(1000)
  })

  $('.m-button').on('click','button',function(){
    if($(this).text()=='图片展示'){
      $('.m-first').show()
      $('.m-second').hide()
      $('.m-third').hide()
      $('#b01').css('background-color','gray')
      $('#b02').css('background-color','white')
      $('#b03').css('background-color','white')
    }
    else if($(this).text()=='页面滑动'){
      $('.m-first').hide()
      $('.m-second').show()
      $('.m-third').hide()
      $('#b01').css('background-color','white')
      $('#b02').css('background-color','gray')
      $('#b03').css('background-color','white')
    }
    else if($(this).text()=='数据管理'){
      $('.m-first').hide()
      $('.m-second').hide()
      $('.m-third').show()
      $('#b01').css('background-color','white')
      $('#b02').css('background-color','white')
      $('#b03').css('background-color','gray')
    }
  })

  $('.u-line').on('click','button',function(){ 
    $(this).parent().remove()
    add()
  })

  $('.new-line').on('click','button',function(){
    var x=parseInt($('.u-line:last').find('span:first').text())
    if(isNaN(x)) {
      x=1
    }
    else {
      x+=1
    }
    $('.m-db').append('<div><span>'+x+'</span><span></span>'+
      '<button>delete</button></div>')
    $('.m-db').children('div:last').addClass('u-line')
    $('.u-line:last').find('span:last').addClass('input')
    $('.u-line').on('click','button',function(){ 
      $(this).parent().remove()
      add()
    })
  })
}

function add(){
  var n=$('.m-db').children('div').length
  for(var i=0;i<n;i++){
    $('.u-line').eq(i).find('span:first').text(i+1)
  }
}