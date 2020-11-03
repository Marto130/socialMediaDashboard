
const checkbox= document.querySelector('#checkbox');
console.log('funciona');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.checked = true;
} else {
  checkbox.checked=false;
}


checkbox.addEventListener('change', (e)=>{
  console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
  console.log('Chequeado: ',checkbox.checked);

    if(!e.target.checked) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');

  } else {

    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }
})
