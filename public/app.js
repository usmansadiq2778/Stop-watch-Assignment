    //  setInterval : repeat running:
    //  settimeout :   after  sometime



    // function timr(){
    //     console.log("Hi mian")
    // }
    // setInterval(timr,2000)

    

    // function timr(){
    //     console.log("Hi mian")
    // }
    // setTimeout(timr,2000)






    // counter running
    

//     var count=0;
//     var interval;
//     function timr(){
//         count++;
//         console.log(count)
//     }
//     interval= setInterval(timr,1000)

// function timrout(){
        
//         clearInterval(interval)
//     }
//     setTimeout(timrout,5000)











                     //   stop watch


                     var min = 00 ;
                     var sec = 00 ;
                     var milsec=00;
                     var hour=00;
                     var hourheading=document.getElementById('hour')
                     var minheading=document.getElementById('min');
                     var secheading=document.getElementById('sec');
                     var milsecheading=document.getElementById('msec');

                     var interval;
                     function timr(){
                         milsec++;
                         milsecheading.innerHTML =milsec;
                         if(milsec>=100){
                             sec++;
                             secheading.innerHTML=sec
                             milsec=00;
                         }
                         else if(sec>=60){
                             min++;
                             minheading.innerHTML=min;
                             sec=00;
                         }
                         else if(min>=60){
                             hour++;
                             hourheading.innerHTML=hour;
                             min=00;
                         }
                         else if(hour>=12){
                           hour=00;
                           hour++;
                           hourheading.innerHTML=hour;

                         }
                     }
                     function start(){

                    document.getElementById('dis').disabled=true; 
                     interval=setInterval(timr,10)
                     
                     }
                     function stop(){
                        document.getElementById('dis').disabled=false;
                         clearInterval(interval)
                     }
                     function reset(){
                        document.getElementById('dis').disabled=false;
                         min=00;
                         sec=00;
                         msec=00;
                         hour=00;
                         milsecheading.innerHTML=msec;
                         minheading.innerHTML=min;
                         secheading.innerHTML=sec;
                         hourheading.innerHTML=hour;
                         stop();

                     }




                     // function btn1(){
//     document.getElementById('dis').style.backgroundColor='black';
    
// }
// function btnn(){
//     document.getElementById('dis').style.backgroundColor='white';
    
// }