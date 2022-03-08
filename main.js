let NumeriElement=document.querySelector("h2");
let arrNumeri=[];
let RndNum= () => Math.floor(Math.random() * 10);
for(let i=0;i<5;i++){
    arrNumeri[i]=RndNum();
    NumeriElement.innerHTML+=arrNumeri[i]+" ";
}

let arrVerifica=[];
let counter=0;
let insertNum= function (){
    for(let i=0;i<5;i++){
        arrVerifica[i]=prompt('Inserisci un numero');
        for(let a=0;a<5;a++){
            if(arrVerifica[i]==arrNumeri[a])
                counter++;
        }
    }
}
let timeOut=()=> NumeriElement.innerHTML="Time is out";
setTimeout(timeOut,29000);
setTimeout(insertNum,30000);
let Ris= () => alert(`Hai inserito ${counter} numeri giusti`);
setTimeout(Ris,35000);
