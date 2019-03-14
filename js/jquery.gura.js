(function($){
			// .gura() 라는 동작 정의하기
			$.fn.gura = function(options){
				//default 값 정의하기
				var settings = $.extend({
					msg:"안녕! 나는 gura야!"
				}, options);

				this
				.text(settings.msg)
				.css("width","200px")
				.css("height","200px")
				.css("border","10px solid red")
				.click(function(){
					$(this).animate({marginLeft:"+=100px"});
				});


				//return this;
			};
		})(jQuery);