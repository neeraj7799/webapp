$(function(){
    var prev;
    var min=1;
    var max=100;
    var count=0;
    var number=[];
    var random;
    $("button").click(function(){
        prev=random;
        random = Math.floor(Math.random() * (max-min+1) )+min;
        console.log(random);
        random++;
        if(count==101){
            alert("Limit Exhausted");
        }
        else{
            while(number[random]=="true"){
                random = Math.floor(Math.random() * (max-min+1))+min;
                console.log(random);

            }
                number[random]="true";
            count++;
            if(count>1){
                
                 $(".previous").html(prev)         
        }
        
            $(".number").html(random)
         var a=$("td");
        var c=0;
      a.each(function(){
        if(c==random-1){
             random= (random).toString();
              console.log(typeof(random));
             
              $(this).html("<span>"+random.toString()+"</span>");    
          }
          c++;
      })

        }

    })
})