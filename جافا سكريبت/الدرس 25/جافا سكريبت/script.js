class Translate{
    constructor(){

      document.getElementById("arabic").addEventListener("click",()=>{
        this.translate("arabic");
      });  
      document.getElementById("english").addEventListener("click",()=>{
        this.translate("english");
      });  
      this.translate(localStorage.getItem("Language"));
    }
    translate(language){
        if(language == "arabic"){
            document.getElementById("title").innerHTML = "مبرمج شيار";
            document.getElementById("p").innerHTML = "تعلم جافا سكريبت";
        }
        else if(language == "english"){
            document.getElementById("title").innerHTML ="Coder Shiyar";
            document.getElementById("p").innerHTML ="Learn JavaScript";
        }
        localStorage.setItem("Language",language);
    }
}
onload = new Translate();

// var color;
// class Change_Background{
//     constructor(){
        
//         document.getElementById("color_black").addEventListener("click", ()=>{
//             this.change_background("black");
//         });

//         document.getElementById("color_red").addEventListener("click", ()=>{
//             this.change_background("red");
//         });

//         this.change_background(localStorage.getItem("color"));
        
//     }
//     change_background(color){
       
//         if(color =="black"){
//             document.getElementById("body").style.background = color;
//         }
//         else if(color =="red"){
//             document.getElementById("body").style.background = color;
//         }

//         localStorage.setItem("color",color);
//     }

// }

// onload = new Change_Background();