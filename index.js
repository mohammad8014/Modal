let clos=document.getElementById('close')
let modal=document.getElementById('modal')
let btn=document.getElementById('btn')
let done=document.getElementById('done')
let input=document.getElementById('textinput')
let cancel=document.getElementById('cancel')
btn.addEventListener('click',()=>{
    modal.style.display='block'
    
})
clos.addEventListener('click',()=>{
    modal.style.display='none'
})
done.addEventListener('click',()=>{
    if(input.value==null || input.value=='  '){
        return false

    }
    else{
        modal.style.display='none'

        alert(input.value)
        input.value=''
    }
})
cancel.addEventListener('click',()=>{
    if(input.value==null || input.value==''){
        modal.style.display='none'

        alert(null)
    }
})
input.addEventListener('keypress',(e)=>{
    if(e.keyCode==13){
        modal.style.display='none'

        alert(input.value)
        input.value=''    
    }
})