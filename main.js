let NumeriElement=document.querySelector("h2");
let arrNumeri=[];
let RndNum= function(){
    let blackList=[];
    let temp;
    let ver=0;
    let rep=0;
    while(rep==0){
        temp=Math.floor(Math.random() * 9 + 1);
        if(!(blackList.includes(temp))){
            rep=1;
            blackList.push(temp);
            return temp;
        }
    }
}
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
