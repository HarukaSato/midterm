function findFirstEvenNumber(a){
	var n=0
	if(a.length==0){
		return null;
	}

	if(a instanceof Array){
		
		while(n<a.length){
			if(a[n]%2==0){
			 return a[n];
			 break;
			}
			n = n + 1;
		}

	}
}