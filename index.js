var typed;

window.addEventListener("load", () => start());

start = () => {
    
    $( "#heart-2" ).click(function() {
        $( "#heart-2" ).fadeOut( "slow", function() {
          // Animation complete.
        });
    });
    document.getElementById('heart-2').onclick =function(){
        
    
        setTimeout(function(){   
            document.getElementById('heart-2').style.display="none";
            document.getElementById('words').style.display="flex";
            
         },2000);

         setTimeout(function(){   document.getElementById('element').style.display="flex";
            typed = new Typed('.element', { 
                strings: [" incroyable"," forte "," surprenante"," gentille"],
                typeSpeed: 80,
                backSpeed: 60,
                backDelay: 2500,
                startDelay: 1000,
                loop: false,
                showCursor: true,
                reset: function(self) { prettyLog('onReset ' + self) },
                    destroy: function(self) { prettyLog('onDestroy ' + self) },
                    onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
                });
            
        },2000);
       

        setTimeout(function(){ 
            document.getElementById('restart').style.display="flex";
            document.getElementById('print').style.display="flex";

        },10000);

        }
 document.getElementById('restart').onclick = function(){
            
        
                $( "#restart" ).fadeOut( "slow", function() {
                  // Animation complete.
                });
                $( "#print" ).fadeOut( "slow", function() {
                    // Animation complete.
                  });
                  $( "#element" ).fadeOut( "slow", function() {
                    // Animation complete.
                  });

        setTimeout(function(){typed.destroy();
                    document.getElementById('restart').style.display="none"; 
                    document.getElementById('print').style.display="none"; 
                    document.getElementById('heart-2').style.display="flex";
                document.getElementById('element').style.display="none";
                },700);


                }

                document.getElementById('print').onclick = function(){
                    typed.reset();}
}

