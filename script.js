//your JS code here. If required.
const pValue=document.getElementById('valueP');

const button=document.getElementById('buttonValue');

button.addEventListener('click',()=>{

    pValue.innerText='Entered Metaverse';
})


button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#ADD8E6'; 
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = ''; 
})