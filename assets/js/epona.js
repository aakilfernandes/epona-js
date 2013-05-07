function Epona(){
	epona =  function(hash){
		var epona = arguments.callee,
			hash=hash?hash:window.location.hash.split('#').reverse()[0],
			hashparts,
			paths=epona.paths,
			routes=epona.routes;
				
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
				return history;
				break;
			}
		}
	};
	
	epona.histories=[]
	
	return epona;
}