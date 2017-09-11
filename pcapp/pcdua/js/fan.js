//返回顶部
	var fan = document.getElementById("fan");
			var fixed=document.getElementById("fixed")
			var timer = null,st;				
			window.onscroll = function() {
				st = document.documentElement.scrollTop || document.body.scrollTop;
				var h = document.documentElement.clientHeight || document.body.clientHeight;
				console.log(h,fixed.offsetHeight)
				var pos = h - fixed.offsetHeight + st; //console.log(pos)
				fixed.style.top = pos + "px"; //没有动画;				
				if(pos <= h) {
					fixed.style.display = "none";
					pos = h - fixed.offsetHeight + st;
				} else {
					fixed.style.display = "block"
				}
				//animate(pos)
			}
			function myfunction() {			
				console.log(st)
				animate(st)
			}
			
			function animate(st) {
				clearInterval(timer);
				var speed = 5;
				timer = setInterval(function() {
					if(st == 0) {
						clearInterval(timer);
					} 
					else {
					    if(st>0){
					    	st = (st - speed)/2;
					    }
					    if(st<0){
					    	st=0;
					    }
					console.log(st)
						//st=st>0?Math.ceil(st):Math.floor(st);
						this.scroll(0, st);
					}
				}, 30)
			}
			
			window.onscroll();
	