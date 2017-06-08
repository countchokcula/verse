$(document).ready(function(){
				$.fn.extend({
					animateCss: function (animationName) {
						var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
						this.addClass('animated ' + animationName).one(animationEnd, function() {
							$(this).removeClass('animated ' + animationName);
						});
					}
				});
				var stanzas = $("#poem").children();
				var max = stanzas.length;
				var index = 0;

				var slideOutLeft = (function(e){
					$(stanzas[e]).css({
						"transform": "translateX(-200px)",
						"opacity": "0"
					});
					setTimeout(function(){
						$(stanzas[e]).css({
							"transform": "none",
							"display": "none"
						});

					}, 400);
				});

				var slideOutRight = (function(e){
					//current index
					$(stanzas[e]).css({
						"transform": "translateX(200px)",
						"opacity": "0"
					});
					setTimeout(
						function(){
							$(stanzas[e]).css({
								"transform": "none",
								"display": "none"
							});
							//the index before current
							//$(stanzas[e-1]).css("transform", "none");
					}, 400);
				});
				var fade = (function(e){
					$(stanzas[e]).css("opacity", "0");
					$(stanzas[e]).css("display", "block");
					setTimeout(function(){
						$(stanzas[e]).css("opacity", "1");
					}, 1000);

				});
			   var progress = (function(i){
				   var width = (i/(max - 1)) * 100;
				   $("#progress").css("width",`${width}%`);
			   });

				var reset = (function(e){
					$(stanzas[e]).css("transform", "none");

				});

				var next = (function(){
					if(index < (max -1) ){
						slideOutLeft(index);
						index += 1;
						progress(index);
						fade(index);
						setTimeout(function(){
							color_change(index);
						}, 1000);
					}else{
						//scroll animation

					};
				});

				var previous = (function(){
					if (index > 0 ){
						//scroll animation
						slideOutRight(index);
						index -= 1;
						progress(index);
						fade(index);
						setTimeout(function(){
							color_change(index);
						}, 1500);
					}else{
						//scroll animation
					}
				});
				var color_change = (function(i){
					$(stanzas[i]).find("span").css("color", "#ff3b3f");
				});
				//deletes unused LI elements
				for(i = 0; i < max; i++){
					if(i != index) {
						$(stanzas[i]).css("display", "none");
					}
				}

				setTimeout(function(){
					$(stanzas).css("opacity", "1");
				}, 1000);
				setTimeout(function(){
					$("#poem_wrap").css("background-color", "black");
				}, 3000);
				setTimeout(function(){
					color_change(0);
				}, 3500);

				$(".rightbtn").click(function(){
					next();
				});

				$(".btn").click(function(){
					reset(index);
				});

				$(".leftbtn").click(function(){
					previous();
				});
});
