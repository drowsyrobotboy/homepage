window.onload=function(){
   var w= document.getElementById("wish");
   var i= parseInt(Math.random()*1000);
   i=i%15;
    switch(i){
    	case 0:w.innerHTML= "Hello Maruthi !";break;
    	case 1:w.innerHTML= "Hola Maruthi !";break;
    	case 2:w.innerHTML= "Bonjour Maruthi !";break;
    	case 3:w.innerHTML= "hallo Maruthi !";break;
    	case 4:w.innerHTML= "Ciao Maruthi !";break;
    	case 5:w.innerHTML= "salve Maruthi !";break;
    	case 6:w.innerHTML= "Hei Maruthi !";break;
    	case 7:w.innerHTML= "Witaj Maruthi !";break;
    	case 8:w.innerHTML= "Ol&aacute; Maruthi !";break;
    	case 9:w.innerHTML= "N&iacuten h&#462;o Maruthi de !";break;
    	case 10:w.innerHTML= "Namast&#275;  Maruthi !";break;
    	case 11:w.innerHTML= "Namaskaram Maruthi !";break;
    	case 12:w.innerHTML= "Maruthi kon'nichiwa !";break;
    	case 13:w.innerHTML= "hujambo Maruthi !";break;
    	case 14:w.innerHTML= "Dia duit Maruthi !";break;
    }
}
