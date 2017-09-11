$(function(){
    //初始加载
	var h=null;
	var t=0;
	var fisrtnode=$(".main_right")[t].getElementsByTagName("img")
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
				txt=$(".main_right li").eq(that).attr("title");
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
				txt=$(".main_right li").eq(that).attr("title");
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


	//移动加载
	$(".main_left_top li").mousemove(function(){
		var index=$(this).index();
		$(".bottom ul li").remove();
//		console.log(index)
		$(this).addClass("active")
			.children("span").addClass("sj").end()
			.children("a").css("color","white");
		
		$(this).siblings().removeClass("active")
			.children("span").removeClass("sj")
			.end().children("a").css("color","black");
		
		$(".main_right").eq(index).addClass("block").siblings().removeClass("block")
//		console.log($(".main_right").eq(index).children().children().children()[index])
		var t=$(".main_right")[index];		
		var imgs=t.getElementsByTagName("img");
		$(imgs).each(function(index,ele){
			var pp=ele.cloneNode("img")	
			var li=$("<li>");
			li.append(pp)
			var spans=$("<span>")			
			li.append(spans);
			$(".bottom ul").append(li)
		})	
		
		
		
		
		
		var olist=$(".main_right")[index];
     	var li=olist.getElementsByTagName("img"); 
     	var num=li.length;
     	console.log(num)
   			$(li).each(function(i,j){  				
   				var that =i;
   				$(this).on("click",function(){
   				
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
					txt=$(".main_right li").eq(that).attr("title");
					$("h3").html(txt);
		//			console.log(txt)
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
					txt=$(".main_right li").eq(that).attr("title");
					$("h3").html(txt);
					
				})
					
				
	

			    console.log(that)
		
		})
   			})
		
		
		
		$(".main_right li img").each(function(index,ele){
				var kk=index;
				$(this).on("click",function(){
				var kk=ele.cloneNode("img")
//				console.log(kk)
		   		 $(".top .left").append(kk)	
   				})
		})
		
	
	})
	//关闭窗口
	$(".close").on("click",function(){
		$(".box").css("display","none");
//		$(".bottom ul li").remove();		
		$(".top .left").children().remove()
	})
	
})
