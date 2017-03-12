这是一个以《大众点评》中，下拉酷似动画的萌萌着包子脸效果作为参考，来实现的一个加载模块。这个效果实际是使用关键帧（即多张具有微小差别的图片）来完成完整的动画过程，此分享就拿这个包子脸作为实例分享给大家。基于这个效果大家可以在这之上再去做更复杂、更炫的效果，让你的应用更加的高炫拽。

按照官方对此模块的概述，所以这里我使用了 window + frame 的布局，如果你只是使用在独立的 window 布局，那么就需要在 config.xml 中配置 <preference name="customRefreshHeader' value="模块名称'/>。

1. 在 index.html 中使用 openFrame 打开 main.html，这个地方需要特别注意，此模块与其他模块引入方式不同，是不需要使用 require 去引用的，只需要在打开 openFrame 时，在其配置中新增 customRefreshHeader 字段即可，此字段接收一个字符串，因为使用 UIPullRefreshFlash 模块，所以填写模块名就行。

2. 在 main.html 初始化的 apiready 时使用 setCustomRefreshHeaderInfo 方法初始化好它的 UI( 当然你可以在任何你需要的时候在初始化加载 UI )，方法接收两个值，即参数与刷新完成后的回调。参数中的 pull 数组就是下拉过程中的图组，下拉会有一个固定的最大高度，模块实际就是将这组图片平均拆分到了各个高度的显示，所以你的图越多动画帧越细，则效果越流畅。load 这个字段是下拉为加载状态时的关键帧切换的图片，也是一样图越多动画帧越细则效果越流畅。灰常重要的提醒：所有图片都要以正方形作为素材，否则会引起变现、失真等情况！官方推荐使用 50*50、100*100 尺寸图片。

3. 当下拉为刷新加载状态时，会触发 setCustomRefreshHeaderInfo 方法的回调，这时就需要你去回调中做你的数据逻辑，最后当你确定数据加载完成，则调用 refreshHeaderLoadDone 方法结束加载，我这里用 3 秒定时器代替数据加载。

4. 很多场景需要程序自动刷新，所以此模块也提供了 refreshHeaderLoading 方法，具体效果你下载源码来试试。

源码：https://github.com/XM-Right/UIPullRefreshFlash-Example
演示视频：http://7xoo0e.com1.z0.glb.clouddn.com/apicloud/ed50574dfc2cd6036b2c34188b2772da.mp4