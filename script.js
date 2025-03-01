const drop_down=document.querySelector('.drop-down');
const  carets=document.querySelectorAll('.fa-solid.fa-caret-down');
carets.forEach(caret=>{
    caret.addEventListener("click",()=>{
        drop_down.classList.toggle('active')
    })
})
const icon_navs=document.querySelector('.icon-nav');
const navbar=document.querySelector('.nav');
icon_navs.onclick=()=>{
navbar.classList.toggle('active')}


const buttons=document.querySelectorAll('.btn');
buttons.forEach(button=>{
    button.addEventListener("click",function(e){
        const x=e.clientX;
        const y=e.clientY;
       const buttonLeft=e.target.offsetLeft;
       const buttonTop=e.target.offsetTop;
      const xInside=x-buttonLeft;
      const yInside=y-buttonTop;
     const circle=document.createElement('span')
     circle.classList.add('ripple')
     circle.style.top=yInside+"px";
     circle.style.Left=xInside+"px";
     this.appendChild(circle)
     setTimeout(()=>{
        circle.remove()
     },500)
    })
})