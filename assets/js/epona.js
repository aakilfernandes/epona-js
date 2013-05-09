function Epona(syncHash){
	var epona = this;
	
	epona.rideTo =  function(hash){
		var epona = this,
			hash=hash.split('#').reverse()[0],
			hashparts,
			paths=epona.paths,
			routes=epona.routes;
		
		if(epona.syncHash && window.location.hash.replace('#','')!=hash){
			window.location.hash=("#"+hash);
			return; //the hashchange trigger will epona again
		}
		
		if(typeof hash=='array'){
			hashParts=hash;
		}else{
			hashParts=hash.split('/');
		}
		
		for(path in paths){
			var pathParts = path.split('/'),match=true,args=[];
			if(pathParts.length!=hashParts.length){continue;};
			for(var i=0;i<pathParts.length;i++){
				var hashPart = hashParts[i],
					pathPart = pathParts[i];
				if(pathPart[0]==':'){
					args.push(hashPart);
				}else if(pathPart!=hashPart){
					match=false;
				}
			}
			if(match){
				var path=path,route=paths[path];
				var history = {
					hash:hash,
					hashParts:hashParts,
					path:path,
					pathParts:pathParts,
					route:paths[path],
					args:args
				},histories;
				epona.histories.reverse().push(history)
				epona.histories.reverse();
				routes[route].apply(epona,args);
				if(typeof epona.callback=='function'){
					return epona.callback(history)
				}else{
					return history;
				}
				break;
			}
		}
		
	};
	
	epona.histories=[];
	epona.syncHash=syncHash;
	
	if(!syncHash){return epona;}
	
	if(typeof jQuery=='function'){
		$(window).bind('hashchange',function(){
			epona.rideTo(window.location.hash);
		})
		return epona;
	}	
	
	if ("onhashchange" in window) {
	    window.onhashchange=function(){
			epona.rideTo(window.location.hash)
		}
		return epona;
	}
}