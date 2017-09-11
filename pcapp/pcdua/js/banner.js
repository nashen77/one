$(function(){
	var index=0;
	var h=null;
	var t=0;
	var len = $(".banner ul li").length;
	var w = $(".banner .buttons").width()
//	$(".banner ul").width(len*w)
	$(".banner .buttons").css("margin-left",-w/len+"px");
	$(".banner ul li").eq(index).css("display","block")
		.siblings("li").css("display","none");
	var timer=null;
	function a(){		
		clearInterval(timer);
		timer=setInterval(function(){
			index++;
			if(index==len){
				index=0;
			}
			$(".banner ul li").eq(index).fadeIn()
				.siblings("li").fadeOut();
			$(".banner .buttons span").eq(index).addClass("show")
				.siblings("span").removeClass("show");
		},5000);
	}
	a();
	$(".banner").hover(function(){
		clearInterval(timer);
	},function(){
		a();
	})
	$(".buttons").on("click","span",function(){
		var that=$(this).index();
		$(".banner ul li").eq(that).fadeIn().siblings("li").fadeOut();
		$(this).addClass("show").siblings().removeClass("show")
	})
	$(".fz>div:nth-child(2)>div:first").show()
	$(".fz li").click(function(){
		var index=$(this).index();
//		console.log($(".fz>div.floatleft .de img"))
		$(this).addClass("border_left").siblings("li").removeClass("border_left");
		$(".fz>div:nth-child(2)>div").eq(index).fadeIn().siblings("div").hide();
		
		//开始
		var olist=$(".fz>div.floatleft .de")[index];
     	var li=olist.getElementsByTagName("img"); 
     	var num=li.length;
//   	console.log(num)
     	console.log(li)
     	$(".bottom ul li").remove();    	
   			$(li).each(function(i,j){  				
   				var that =i;   	
   				//复制
   				var pp=j.cloneNode("img")	
				var li=$("<li>");
				li.append(pp)
				var spans=$("<span>")			
				li.append(spans);
				$(".bottom ul").append(li)	
   				
   				$(this).on("click",function(){
   				console.log(that)
   				$(".top .left img").remove()  				
				$(".box").css("display","block")			
				$(".bottom ul li ").children("img").removeClass("b");
				$(".bottom ul li ").children("span").removeClass("sjh");
				$(".bottom ul li img").eq(that).addClass("b").siblings().addClass("sjh");	
				h=$(".bottom ul li img").eq(that).attr("src");
				$(".left img").attr("src",h)				
				//加
				$(".next").on("click",function(){
			    	that++;
					if(that==num){
						that=0;						
					}
				//console.log(that)
					$(".bottom ul li ").children("img").removeClass("b");
					$(".bottom ul li ").children("span").removeClass("sjh");
					$(".bottom ul li img").eq(that).addClass("b").siblings().addClass("sjh");	
					h=$(".bottom ul li img").eq(that).attr("src");
					$(".left img").attr("src",h)
					txt=$(".de img").eq(that).attr("title");
					$("h3").html(txt);
	//				console.log(txt)
				})
				//减
				$(".pevr").on("click",function(){
					that--;
					if(that==-1){
						that=num-1;
					}
					$(".bottom ul li ").children("img").removeClass("b");
					$(".bottom ul li ").children("span").removeClass("sjh");
					$(".bottom ul li img").eq(that).addClass("b").siblings().addClass("sjh");
					h=$(".bottom ul li img").eq(that).attr("src");
					$(".left img").attr("src",h)
					txt=$(".de img").eq(that).attr("title");
					$("h3").html(txt);
				})
	
		})
   			})
		
		
		
		$(li).each(function(index,ele){
				var kk=index;
				$(this).on("click",function(){
				var kk=ele.cloneNode("img")
//				console.log(kk)
		   		 $(".top .left").append(kk)	
   				})
		})
		
		//end
	
	})
	
	
	//关闭窗口
	$(".close").on("click",function(){
		$(".box").css("display","none");
//		$(".bottom ul li").remove();		
		$(".top .left").children().remove()
	})
	
	var fisrtnode=$(".de")[t].getElementsByTagName("img")
	
	var num=fisrtnode.length;
	$(fisrtnode).each(function(x,y){
		var that=x;
		//添加选项
		var pp=y.cloneNode("img")	
		var li=$("<li>");
		li.append(pp)
		var spans=$("<span>")			
		li.append(spans);
		$(".bottom ul").append(li)				
		$(this).on("click",function(){
		//加
			$(".next").on("click",function(){
				that++;
				if(that==num){
					that=0;						
				}
					//console.log(that)
				$(".bottom ul li ").children("img").removeClass("b");
				$(".bottom ul li ").children("span").removeClass("sjh");
				$(".bottom ul li img").eq(that).addClass("b").siblings().addClass("sjh");	
				h=$(".bottom ul li img").eq(that).attr("src");
				$(".left img").attr("src",h)
				txt=$(".de img").eq(that).attr("title");
				$("h3").html(txt);
		//		console.log(txt)
			})
			//减
			$(".pevr").on("click",function(){
				that--;
				if(that==-1){
					that=num-1;
				}
				$(".bottom ul li ").children("img").removeClass("b");
				$(".bottom ul li ").children("span").removeClass("sjh");
				$(".bottom ul li img").eq(that).addClass("b").siblings().addClass("sjh");
				h=$(".bottom ul li img").eq(that).attr("src");
				$(".left img").attr("src",h)
				txt=$(".de img").eq(that).attr("title");
				$("h3").html(txt);
				
			})
			
			
			
			console.log(that)
			var kk=y.cloneNode("img");
			$(".top .left").append(kk);	
			$(".box").css("display","block")				
			$(".bottom ul li ").children("img").removeClass("b");
			$(".bottom ul li ").children("span").removeClass("sjh");
			$(".bottom ul li img").eq(that).addClass("b").siblings().addClass("sjh");	
			h=$(".bottom ul li img").eq(that).attr("src");
//			$(".left img").attr("src",h)
		})
	})

	//动画
	$(".footer_top li").hover(function(){
		console.log('a')
		$(this).addClass("animated pulse").siblings().removeClass("pulse")
	})
	
	
})
