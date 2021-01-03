






var currentdate = new Date(); 
let seconds= currentdate.getSeconds()*6;
let minutes=currentdate.getMinutes()*6;
let hours=(currentdate.getHours()*30)+(currentdate.getMinutes())


var secondStart = {'transform': 'translateX(100%)'+'rotate('+seconds+'deg)'};

            
                    
$(".clock__second").css(secondStart)

var minuteStart = {'transform': 'rotate('+minutes+'deg)'};

            
                    
$(".clock__minute").css(minuteStart)


var hourStart = {'transform': 'translateX(-100%)'+'rotate('+hours+'deg)'};
            
                    
$(".clock__hour").css(hourStart)



setInterval (function(){ 






seconds+=6
minutes+=0.1
hours+=0.00833333334



var secondStart = {'transform': 'translateX(100%)'+'rotate('+seconds+'deg)'};

            
                    
$(".clock__second").css(secondStart)

var minuteStart = {'transform': 'rotate('+minutes+'deg)'};

            
                    
$(".clock__minute").css(minuteStart)


var hourStart = {'transform': 'translateX(-100%)'+'rotate('+hours+'deg)'};
            
                    
$(".clock__hour").css(hourStart)






          

 
                     
    

$(".clock__second").css(secondStart)
$(".clock__minute").css(minuteStart)
$(".clock__hour").css(hourStart)
    
console.log(minutes)
},1000)



           


