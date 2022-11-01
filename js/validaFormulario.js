
   const form = document.getElementById('formulario');
   const campos =document.querySelectorAll('.required');
   const spans = document.querySelectorAll('.span-required')
   const emmailRegex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ;
   
   function setError(index){
     campos[index].style.border = '2px solid  hsl(0, 100%, 74%)'
     spans[index].style.display = 'block'
   }
   

   function nameValidate (){
       if(campos[0].value.length < 3)
       {
           setError(0);
       }
       else
       {
           console.log('validando nome')
       }
   }