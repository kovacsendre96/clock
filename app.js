var currentdate = new Date(); 
let minutes=currentdate.getMinutes();
let hours=currentdate.getHours();
let seconds= currentdate.getSeconds();



var secondStart = {'transform': 'rotate('+seconds*6+'deg)'};
            
                    
$(".clock__second").css(secondStart)

var minuteStart = {'transform': 'rotate('+minutes*6+'deg)'};
            
                    
$(".clock__minute").css(minuteStart)


var hourStart = {'transform': 'rotate('+hours*30+'deg)'};
            
                    
$(".clock__hour").css(hourStart)

console.log(hours)




          
setInterval (function(){ 
 
                     
    var currentdate = new Date(); 
    let seconds= currentdate.getSeconds()*6;


        var secondStart = {'transform': 'rotate('+seconds+'deg)'};
            
                    
                    $(".clock__second").css(secondStart)
                    

            
            },1000)



setInterval (function(){ 
        
    var currentdate = new Date(); 
    let minutes=currentdate.getMinutes()*6;


        var minuteStart = {'transform': 'rotate('+minutes+'deg)'};
            
                    
                    $(".clock__minute").css(minuteStart)
                    

            
            },6000)

            

            
setInterval (function(){ 

    var currentdate = new Date(); 
    let hours=currentdate.getHours()*30;


        var hourStart = {'transform': 'rotate('+hours+'deg)'};
            
                    
                    $(".clock__hour").css(hourStart)
                    

            
            },60000)            
   

           


