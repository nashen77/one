$(function(){
	function add(that){
		 var num=li.length;
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
	}
	
	
})
