function randomise(n1){
    const random=Math.random();
    n=0
    if(random>=0&&random<1/3) 
    {
        n=1;
        console.log("Rock");
    }
    else if(random>=1/3&&random<2/3){
        n=2;
        console.log("Paper");
    }
    else if(random>=2/3&&random<1){
        n=3;
        console.log("Scissors");
    }
   if (n1 == n) {
     alert("Draw");
   } else if (n1 == 1 && n == 2) alert("Lose");
   else if (n1 == 2 && n == 3) alert("Lose");
   else if (n1 == 3 && n == 1) alert("Lose");
   else alert("You win");
}
