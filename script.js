let imgs = Array.from(document.querySelectorAll('img')) 
let visible = document.querySelector('.fixed')
var currentIndex = 0;

for (var i = 0 ; i<imgs.length ; i++){

    imgs[i].addEventListener('click' , function(e){
        visible.classList.replace('fixed' , 'fixed2' )
         targetImg = e.target.getAttribute('src')
         document.getElementById('imgOp').setAttribute( 'src' , targetImg)
         currentIndex = imgs.indexOf(e.target)
    })
}
closeit.addEventListener('click' ,close )
slideN.addEventListener('click', next)
slideP.addEventListener('click', perv)

function close(){
   
        visible.classList.replace('fixed2' , 'fixed' )
 
}
function next(){
    
 currentIndex++

 if (currentIndex == imgs.length){
    currentIndex = 0;
  }
  var imgSrc =  imgs[currentIndex].getAttribute('src')
  document.getElementById('imgOp').setAttribute( 'src' , imgSrc)
  
   
}
function perv(){
    
    currentIndex--
   
    if (currentIndex == -1){
       currentIndex = imgs.length-1;
     }
     var imgSrc =  imgs[currentIndex].getAttribute('src')
     document.getElementById('imgOp').setAttribute( 'src' , imgSrc)
     
      
   }


   document.addEventListener('keydown',function(e){
      if(e.key == 'ArrowRight'){
         next()
      }
      else if (e.key == 'ArrowLeft'){
     perv()
      }
      else if(e.key == 'Escape') {
        close()
      }
   })