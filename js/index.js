document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",function(){
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
         document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline'
        },300)
        
    }
})
var typed = new Typed (".auto-type",{
    strings:["Tarun Guleria","Coding Enthusiast","Curious Developer","Curious Programmer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true

})