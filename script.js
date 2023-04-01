const mybut=document.querySelector('.mybut')
const x=document.querySelector('.main')
const y=document.querySelector('.main2')
const amine=document.querySelector('.cont1')
const quote=document.querySelector('.cont2')
const navbox=document.querySelector('.navbox')
mybut.addEventListener('click',myfunc)
function myfunc(){
    console.log('removed')
    x.classList.remove("active")
    y.classList.add("active")
    // navbox.removeChild(button)
    mybut.classList.add('removing')
    quotemake()
}
async function quotemake(){
    amine.innerText="Loading...";
    quote.innerText="Loading...";
    const response=await fetch('https://animechan.vercel.app/api/random')
    const data=await response.json()
    renderfunction(data)
}
function renderfunction(data){
    amine.innerText=data?.anime;
    quote.innerText=data?.quote;
}