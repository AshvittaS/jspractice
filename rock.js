let choice;
function RandomiseNumber(n){
    const random=Math.random();
    if(random>=0&&random<1/3) 
    {

        choice="Rock";
    }
    else if(random>=1/3&&random<2/3){
        choice="Paper";
    }
    else if(random>=2/3&&random<1){

        choice="Scissors";
    }
   if (choice == n) {
     alert(`Draw You choose ${n} : Computer Choose ${choice}`);
   } else if (choice == "Rock" && n == "Scissors")
     alert(`You lose.You choose ${n} : Computer Choose ${choice}`);
   else if (choice == "Paper" && n == "Rock")
     alert(`You lose.You choose ${n} : Computer Choose ${choice}`);
   else if (choice == "Scissors" && n == "Paper")
     alert(`You lose.You choose ${n} : Computer Choose ${choice}`);
   else alert(`You win.You choose ${n} : Computer Choose ${choice}`);
}
