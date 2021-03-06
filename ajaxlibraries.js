cons = function(){
    this.xhr = new XMLHttpRequest()    
}

//GET
cons.prototype.get = function(url,key,host,callback){
    this.xhr.open('GET',url,true)
    let self
    self = this.xhr
    this.xhr.onload = function(){
        if(self.status===200){
            callback(null,JSON.parse(self.responseText))
        }
        else{
            callback(`error found ${self.status}`)
        }
    }
    //Access-Control-Allow-Origin = 
    //wordsAPI
    this.xhr.setRequestHeader("x-rapidapi-host", host);
    this.xhr.setRequestHeader("x-rapidapi-key", key);
    
    //BAcon (sentences)
    // this.xhr.setRequestHeader("x-rapidapi-host", "baconator-bacon-ipsum.p.rapidapi.com");
    // this.xhr.setRequestHeader("x-rapidapi-key", "40a04830d2mshabe9414b355c6c4p11095djsnf22fde77863e");
    
    
    //BAcon (paragraphs)
    // this.xhr.setRequestHeader("x-rapidapi-host", "baconator-bacon-ipsum.p.rapidapi.com");
    // this.xhr.setRequestHeader("x-rapidapi-key", "40a04830d2mshabe9414b355c6c4p11095djsnf22fde77863e");

    //skate
    // this.xhr.setRequestHeader("x-rapidapi-host", "mashape-community-skate-ipsum.p.rapidapi.com");
    // this.xhr.setRequestHeader("x-rapidapi-key", "40a04830d2mshabe9414b355c6c4p11095djsnf22fde77863e");

    //use this
    // this.xhr.setRequestHeader("x-rapidapi-host", "contentai-net-text-generation.p.rapidapi.com");
    // this.xhr.setRequestHeader("x-rapidapi-key", "40a04830d2mshabe9414b355c6c4p11095djsnf22fde77863e");

    
    this.xhr.send()
}
