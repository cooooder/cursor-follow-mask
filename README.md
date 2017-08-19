# cursor-follow-mask
a jQuery plugin for creating mask tooltips that hover over the images and follow mouse movement。

## demo
try a demo , look here <a href="https://cooooder.github.io/cursor-follow-mask/" target="_blank">https://cooooder.github.io/cursor-follow-mask/</a>

 ## Installation
 
Include  jQuery and cursor-follow-mask.js in the <head> of your HTML document:

```
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/cursor-follow-mask.js"></script>  
``` 

 ## How to Use

### html
The layout of the images can be either a picture gallery or a grid of images.

```
<div id="container">
  <div class="section">
  <img src="http://img5.imgtn.bdimg.com/it/u=3576283734,1694787135&amp;fm=200&amp;gp=0.jpg" alt="图片标题0">
  </div>
  <div class="section">
  <img src="http://img4.imgtn.bdimg.com/it/u=1408347702,1391492710&amp;fm=26&amp;gp=0.jpg" alt="图片标题1">
  </div>
  <div class="section">
  <img src="http://img0.imgtn.bdimg.com/it/u=3380970902,2431800410&amp;fm=26&amp;gp=0.jpg" alt="图片标题2">
  </div>
  <div class="section">
  <img src="http://img0.imgtn.bdimg.com/it/u=3380970902,2431800410&amp;fm=26&amp;gp=0.jpg" alt="图片标题3">
  </div>
  ......
</div>  
```

 ### jQuery config

After the page DOM element is loaded, you can initialize the plug-in through the cursorFM() method.

```
$(function () {
	$('#container .section').cursorFM({
		//some configuration items
	});
})
``` 

              
 ## options
cursor-follow-mask has the following options：

|args	|type	|default 	|description |
|:-----:|:-----:|:---------:|:----------:|
|caption	|Array	|['title']|图片悬浮标题|
|duration|String|'slow'|animate-speed|
|easing|String|'swing'|animate-easing|
|fontColor|String|'#fff'|图片悬浮标题字体颜色|
|textAlign|String|'center'|图片悬浮标题文本排版|
|backgroundColor|String|'rgba(0,0,0,.5)'|Mask颜色|

