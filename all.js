const xhr = new XMLHttpRequest();


xhr.open('GET','https://newsapi.org/v2/top-headlines?country=us&apiKey=03292282c3014b21b770140e31267425',true);
xhr.getResponseHeader('Content-type','application/json');

xhr.onload = function () {
	if(this.status === 200){
		let json=JSON.parse(this.responseText);
		console.log(json);
	}else{
		console.log("abhijeet");
	}
}

xhr.send()