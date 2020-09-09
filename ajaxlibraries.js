cons = function(){
    this.xhr = new XMLHttpRequest()    
}

cons.prototype.get = function(url,callback){
    this.xhr.open('GET',url,true)
    this.xhr.send()
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
}