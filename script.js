// menu 
let menuicon=document.querySelector(".mi")
let menu =document.querySelector(".h2")
let icon=document.querySelector(".mi i")

menuicon.addEventListener("click",()=>{
    
        menu.classList.toggle("mm1")
        // menu.classList.add("mm1")

        // menu.classList.remove("mm1")

        if(menu.classList.contains("mm1")){
        icon.classList.add("bi-x")
            icon.classList.remove("bi-list")

        }
        else{
             icon.classList.remove("bi-x")
            icon.classList.add("bi-list")

        }

})



//menu for the more demos

let more=document.querySelector(".h02")
let morechild=document.querySelector(".h02 ul")

more.addEventListener("click",()=>{
    more.classList.toggle("h002")
})

// formvalidation
const form=document.getElementById("forminfo")
const fname=document.getElementById("name")
const fphone=document.getElementById("phone")
const femail=document.getElementById("email")
const fmessage=document.getElementById("message")


form.addEventListener("submit",(e)=>{
    if(!validinfo()){
   
        e.preventDefault()
    }
    else{
        alert("sent it...!")
    }
})



 function validinfo(){
    let valid=true

    const fnameval=fname.value.trim()
    const fphoneval=fphone.value.trim()
    const femailval=femail.value.trim()
    const fmessageval=fmessage.value.trim()



    if(!fnameval){
          valid=false
        seterror(fname,"name is required")
     
    }
    else{
        setsuccess(fname)
    }


    let pattern=/^[0-9]{10}$/
    if(!fphoneval){
        valid=false
        seterror(fphone,"phone no is required")

    }
    else if(!pattern.test(fphoneval)){
         valid=false
               seterror(fphone,"enter the valid phonen no")
    }
    else {
        setsuccess(fphone)
    }



 let pattern1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!femailval){
        seterror(femail,"mail is required")

    }
    else if(!pattern1.test(femailval)){
        valid=false
         seterror(femail,"enter the valid email")


    }
    else{
        setsuccess(femail)
    }

    if(!fmessageval){
        seterror(fmessage,"say something atleat 100 words")
    }
    else{
        setsuccess(fmessage)
    }


return valid


 }


 function seterror(element,message){
    const parent=element.parentElement
    const child=parent.querySelector(".error")
    child.innerText=message

 }
 function setsuccess(element){
    const parent=element.parentElement
    const child=parent.querySelector(".error")
    child.innerText=""
 }