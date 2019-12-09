$(function(){
  window.onload = function(){
    //获取文本域输入框对象
    var ot = document.getElementsByTagName('textarea')[0];
    //获取文本域输入框的上下文环境对象
    var weibotext = document.getElementsByClassName('weibo_text')[0];
    //获取数字提示语句对象
    var weibotextnum = document.getElementById('weibo_textnum');
    //获取数字
    var weibotextnumber = document.getElementById('weibo_number');
//    console.log(weibotextnum);
    //获取提交按钮
    var obtn = document.getElementsByClassName('post')[0];
    //技巧点一：判断是否为ie
    var ie = !-[1,];
    ot.onfocus = function(){//聚焦时的样式编程
//        alert("我是聚焦的");
      ot.style.border = '1px solid #40e0d0';
      ot.style.boxShadow = '0px 0px 10px #5cacee';
      weibotextnum.style.opacity = 1;
      var num = Math.ceil(getLength(ot.value)/2);
      if(num == ''){
        obtn.style.background = '#7f7f7f';
      }
    };
    ot.onblur = function(){//失焦时的样式编程
      ot.style.boxShadow = '';
      weibotextnum.style.opacity = 0;
      obtn.style.background = '#8bc528';
    }
    if(ie){//技巧点三：文本框内容发生变化事件不是onchange，标准浏览器是oninput，ie是onpropertychange
      ot.onpropertychange = toChange;
    }else{
      ot.oninput = toChange;
    }
    obtn.onmouseover = function(){
      ot.blur();
      obtn.style.background = '#7ccd7c';
    }
    obtn.onmouseout = function(){
      obtn.style.background = '#8bc528';
    }
    obtn.onclick = function(){
      var num = Math.ceil(getLength(ot.value)/2);
      if(num==0||num>140){
        alert("不符合发布要求，请检查");
      }else{
        alert("发布成功");
        ot.value = '';//技巧点二：文本域的值value就是其内的文本
        weibotextnumber.innerHTML = '140';
      }
    }
    function toChange(){//字数变化时执行的回调函数
      var num = Math.ceil(getLength(ot.value)/2);
      if(num<=140){
        weibotextnum.innerHTML = '还能输入<span id=\"weibo_number\"></span>字';
        weibotextnumber = document.getElementById('weibo_number');//重新获取数字
        weibotextnumber.innerHTML = 140-num;
        weibotextnumber.style.color = '';
      }else{
        weibotextnum.innerHTML = '超出<span id=\"weibo_number\"></span>字,您可以转为<a href=\"\">长微博</a>发送';
        weibotextnumber = document.getElementById('weibo_number');//重新获取数字
        weibotextnumber.innerHTML = num-140;
        weibotextnumber.style.color = 'red';
      }
      if(ot.value == ''||num>140){//如果文本域输入框为空或输入字数大于140
        obtn.style.background = '#7f7f7f';//则提交按钮为灰色
      }else{
        obtn.style.background = '#8bc528';//否则，提交按钮为绿色
      }
    }
    function getLength(str){//计算输入内容长度的函数
      return String(str).replace(/[^\x00-\xff]/g,'aa').length;//技巧点三：/[^\x00-\xff]/g表示全局匹配汉字
    }
  }
});
