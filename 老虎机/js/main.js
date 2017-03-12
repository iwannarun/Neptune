var gRunning = false;
$(".btn-start").click(function(e){
//如果在运行返回
  if(gRunning){
    return;
  }
  gRunning = true;
  //开始循环
  next(parseInt(Math.random()*50));
});

//下面是循环函数，大致就是每次传入一个时间，在这个时间上增加一点进行回调
function next(time){
  var activeItem = $(".item.active"),
      activeIndex = activeItem.data("index"),
      max = $(".item").length,
      nextTime = time + 5 * time/50,
      nextIndex = 1,
      nextItem = null;
  //如果激活了最后一个，则下一个变为第一个
  if(activeIndex == max){
    nextIndex = 1;
  }
  else{
    nextIndex = activeIndex + 1;
  }
  //为当前激活元素移除状态，激活下一个元素
  activeItem.removeClass("active");
  nextItem = $(".item[data-index="+nextIndex+"]").addClass("active");
  //如果时间超过阀值就结束回调
  if(time>800){
    gRunning = false;
    var info = nextItem.text();
    alert("恭喜您获得"+ info);
  }
  else{
    window.setTimeout(function(){
      next(nextTime);
    },nextTime);
  }
}