$(function(){
	var idx = 0 ;
	var timer=null;
	var flag=true;
	//隐藏轮播图
	$(".device-banner").hide();
	
	//关闭与隐藏轮播图
	$("#signOut").on("click",function(){
		$(this).parents(".device-banner").hide();
		//关闭轮播图
		dbStop();
	})
	
	//下一张轮播图
	$("#next").on("click",function(){
		setTimeout(function(){  
	        if(!flag){
	        	flag=true;
	        	
	        }
	        console.log(flag)
	    },3000);  
		if(flag){
			flag=false
			idx++;
			$("#flash .list").css("transform","rotateY(-"+idx*60+"deg)");
		}
		
	})
	//上一张轮播图
	$("#prev").on("click",function(){
		setTimeout(function(){  
	        if(!flag){
	        	flag=true;
	        	
	        }
	        console.log(flag)
	    },3000); 
	    if(flag){
			idx--;
			$("#flash .list").css("transform","rotateY(-"+idx*60+"deg)");	
		}
	})
	
	
	//鼠标移上与移除的轮播效果
	$("#device-banner-lb").hover(function(){
		dbStop();
	},function(){
		dbPlay();
	})
	
	//显示3d轮播图并播放
	$("#device-banner").on("click","li",function(){
		idx=$(this).index();
		$("#flash .list").css({
			"transition": "all 3s",
			"transform":"rotateY(-"+idx*60+"deg)"
		});
		$(".device-banner").show();
		dbPlay();
	})
	
	
	//3d轮播图播放函数
	function dbPlay(){
		clearInterval(timer);
		timer=setInterval(function(){
			$("#next").click();
		},4000)
	}
	
	//3d轮播图暂停函数
	function dbStop(){
		clearInterval(timer);
	}
	
	
	
	
})
