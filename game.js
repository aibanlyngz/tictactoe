let box=document.querySelectorAll(".box");
let rstbtn=document.querySelector(".reset");
let winner=document.querySelector(".winner")
let turn=true;
let flag=0;
let winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
rstbtn.addEventListener("click",()=>{
    renew();
})
box.forEach((element) => {
    element.addEventListener("click",()=>{
        if(turn){
            element.classList.remove("expandedO","boxO");
            element.classList.add("expandedX");
            element.innerText="X";
            turn=false;
        }
        else{
            element.classList.remove("expandedX","boxX");
            element.classList.add("expandedO");
            element.innerText="O";
            turn=true;
        }
        element.disabled=true; 
        flag++;
        if(checkwinner())
        {
            finished();
        }
        else if(checkdraw()){
            finished();
        }
    })
});
function checkdraw(){
    if(flag===9){
        winner.style.visibility="visible";
        document.getElementById("player").innerText="Game is draw!!";
        document.getElementById("player").style.color="grey";
        return true;
    }
}
function checkwinner(){
    for(pattern of winpattern){
        let val1=box[pattern[0]].innerText;
        let val2=box[pattern[1]].innerText;
        let val3=box[pattern[2]].innerText;
        if(val1!=""&&val2!=""&&val3!=""){
            if(val1==val2&&val2==val3){
                winner.style.visibility="visible";
                document.getElementById("player").innerText=`Winner is ${val1}!!`;
                document.getElementById("player").style.color="green";
                return true;
            }
        }
    }
}
function finished(){
    box.forEach((element)=>{
        element.disabled=true;
    })
}
function renew(){
    box.forEach((element)=>{
        element.disabled=false;
        element.classList.remove("expandedO","expandedX");
        element.classList.add("boxX","boxO");
        element.innerText="";
        turn=true;
        flag=0;
        winner.style.visibility="hidden";
    })
}