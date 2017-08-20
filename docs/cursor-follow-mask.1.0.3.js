;(function ($,window,document) {
	'use strict';
	var defaults = {
		target:'img',
		caption:'title',
		duration:'slow',
		easing:'swing',
		fontColor:'#fff',
		textAlign:'center',
		verticalMiddle:'true',
		backgroundColor:'rgba(0,0,0,.5)',
		backgroundColorAttr:null,
		reverse:false,
		height:'100%',
		withLink:true,
	};
	var CursorFollowMask = function (ele,opt) {
		this.element = ele;
		this.settings = $.extend({},defaults,opt);
		this.name = 'cursor-follow-mask';
		this.version = '1.0.3';
	}
	
	CursorFollowMask.prototype = {
		init:function () {
			var mx = null,my = null;
			var flag = false;
			$(document).on('mousemove',function (e) {
				if (flag === true) {
					return;
				}
				mx = e.pageX;
				my = e.pageY;
			})
				var self = this;
				$(this.element).on('mouseenter',function (ev) {
					flag = true;
					var w = $(this).width();
				    var h = $(this).height();

				    	$(this).css({'position':'relative'});
				    	if ($.isArray(self.settings.caption)) {
				    		$(this).append('<div id="mask">'+self.settings.caption[$(this).index()]+'</div>');
				    	}else{
				    		$(this).append('<div id="mask">'+self.settings.caption+'</div>');	
				    		}
				    var mfrom = '';
				    if ($(this).offset().left< mx < $(this).offset().left + w) {
					    	 if (my < $(this).offset().top) {
					    		mfrom = 'top';
					    }else if(my >= $(this).offset().top + h){
					    		mfrom = 'bottom';
					    }
				    }
				   
				    if (mx < $(this).offset().left) {
				    		mfrom = 'left';
				    }
				    if (mx >= $(this).offset().left + w) {
				    		mfrom = 'right';
				    }
				    switch (mfrom){
				    	case 'top':
				    		 $('#mask').css({
					    'background': self.settings.backgroundColor,
					    'position':'absolute',
					    'color':self.settings.fontColor,
					    'text-align':self.settings.textAlign,
					    'padding':'8px 2px',
					    'left':0,
					    'top':-h,
					    'width':w,
					    'height':h/5
					}).animate({top:4*h/5},self.settings.duration,self.settings.easing);
				    		break;
				    	case 'bottom':
				    	$('#mask').css({
					    'background': self.settings.backgroundColor,
					    'position':'absolute',
					    'color':self.settings.fontColor,
					    'text-align':self.settings.textAlign,
					    'padding':'8px 2px',
					    'left':0,
					    'top':h,
					    'width':w,
					    'height':h/5
					}).animate({top:4*h/5},self.settings.duration,self.settings.easing);
				    		break;
				    	case 'left':
				    		$('#mask').css({
					    'background': self.settings.backgroundColor,
					    'position':'absolute',
					    'color':self.settings.fontColor,
					    'text-align':self.settings.textAlign,
					    'padding':'8px 2px',
					    'left':-w,
					    'top':4*h/5,
					    'width':w,
					    'height':h/5
					}).animate({left:0},self.settings.duration,self.settings.easing);
				    		break;
				    	case 'right':
				    	$('#mask').css({
					    'background': self.settings.backgroundColor,
					    'position':'absolute',
					    'color':self.settings.fontColor,
					    'text-align':self.settings.textAlign,
					    'padding':'8px 2px',
					    'left':w,
					    'top':4*h/5,
					    'width':w,
					    'height':h/5
					}).animate({left:0},self.settings.duration,self.settings.easing);
				    		break;
				    	default:
				    		window.console.error('捕获鼠标方向出错！');//捕获异常 
				    }
 
			   }).on('mouseleave',function (ev) {
			   	
					$('#mask').remove();
					flag = false;
				});
		},
		direction:function () {
			
		}
	}
	$.fn.cursorFM = function (options) { 
		var cursorfm = new CursorFollowMask(this,options);
		return cursorfm.init();
	}
	
})(jQuery,window,document)
