var color;
class Change_Background{
    constructor(){
        
        document.getElementById("color_black").addEventListener("click", ()=>{
            this.change_background("black");
        });

        document.getElementById("color_red").addEventListener("click", ()=>{
            this.change_background("red");
        });

        this.change_background(localStorage.getItem("color"));
        
    }
    change_background(color){
       
        if(color =="black"){
            document.getElementById("body").style.background = color;
        }
        else if(color =="red"){
            document.getElementById("body").style.background = color;
        }

        localStorage.setItem("color",color);
        document.getElementById("remove")
        .addEventListener("click",function removeData(){
            localStorage.removeItem("color");
        });
    }



}

onload = new Change_Background();