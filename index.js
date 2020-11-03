
const checkbox= document.querySelector('#checkbox');


if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.checked = true;
}


checkbox.addEventListener('change', (e)=>{

    if(!e.target.checked) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');

  } else {

    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }
})
