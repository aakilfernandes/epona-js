(function($){
	var $mainContainer = $('#mainContainer')
		,$navbar = $('#navbar')
		,$modal = $('#modal')
		,refreshNav = function(){$navbar.load(uncache('nav.php'));}
		,loadSelect=function(nav,url,callback){
			$('.nav a').removeClass('selected');
			$('.nav a.nav-'+nav).addClass('selected');
			url = uncache(url);
			$mainContainer.load(url,function(){					
				if(typeof callback=='function'){callback();};
			})
		},update$countdown=function(includeSeconds){
			if(includeSeconds && !isTouch){width=280}else{width=220;}
			
			$countdown = $('.countdown');
			if($countdown.length>0){
				$countdown.each(function(){
					var $this =$(this)
					$this.jCountdown({
						timeText:$this.data('time').split('-').join('/'),
						timeZone:$this.data('timezone'),
						style:"metal",
						color:"black",
						width:width,
						textGroupSpace:20,
						textSpace:0,
						reflection:false,
						//reflectionOpacity:10,
						//reflectionBlur:0,
						dayTextNumber:3,
						displayDay:true,
						displayHour:true,
						displayMinute:true,
						displaySecond:includeSeconds,
						displayLabel:true
					});
				})
			}
		},uncache=function(url){
			url.indexOf('?')==-1 ? url+='?rand=' : url+='&rand=';
			url+=Math.floor(Math.random()*10000)
			return url;
		},epona=Epona();
			
	$.extend(epona,{
		paths:{
			"":               			"home",
			"home":               		"home",
			"!home":        	       	"home",
			"modal":        	       	"modal",
			"modal/:arg0":        	    "modal",
			"modal/:arg0/:arg1":        "modal"
		},routes:{
			home: function() {
				loadSelect('home','docs/home.html')
			}
			,portfolio:function(username){
				username = username ? '?username='+username : '';
				loadSelect('portfolio','portfolio.php'+username);
			}
			,leaders:function(){loadSelect('leaders','leaders.php')}
		  	,orders: function() {loadSelect('orders','orders.php')}
		  	,stock: function(symbol) {
				loadSelect('market','stock.php?symbol='+symbol,function(){update$countdown(true)})
			},modal:function(path){
		  		if(this.histories.length==1){
					this.routes['home']();//if the user arrives directly at a modal, what load the "home" route in the bg
				}

	  			var url,callback;
	  			switch(path){
	  				case 'newPass':
	  					url='newPass.php?username='+arguments[1]
	  					+'&reset_code='+arguments[2];
	  					break;
	  				case 'reset':url='reset.php';break;
	  				case 'resendConfirm':url='resendConfirm.php';
	  					url=arguments[1]?url+'?username='+arguments[1]:url;
	  				break;
	  				case 'unsubscribe':
	  					url ='unsubscribe.php'
	  						+'?username='+arguments[1]
	  						+'&code='+arguments[2]
	  				break;
	  				case 'signup':url='register.php'; break;
	  				case 'settings':url='settings.php'; break;
	  				case 'confirm':url='confirm.php'; 
	  					if(arguments[1]){url+='?username='+arguments[1]}
	  					if(arguments[2]){url+='&code='+arguments[2]}
	  					break;
					case 'login':url='login.php';
						if(arguments[1]){url+='?username='+arguments[1]};
						break;
					case 'logout':url='logout.php';break;
	  			}

		  		$modal.load(url,function(){
		  			$modal.modal();

		  			function ajaxifyForm(){
		  				$modal.find('form').ajaxForm({success:function(data){
							$modal.html(data);
							ajaxifyForm();
						}});
		  			};
		  			ajaxifyForm();

	  				if(typeof callback=='function'){callback();}
	  			}
	  		)}
		}
	})
	
	//closing the modal after login or logout refreshes the nav
	$modal.on('hide',function(){
		var path = epona.histories[0].path;
		if(path.indexOf('login')>-1||path.indexOf('logout')>-1){
			refreshNav();
		};
	});
	
	refreshNav();
	epona();
	$(window).bind('hashchange',function(){epona()});

}(jQuery))