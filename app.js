const listes = document.querySelectorAll('ul li')
const added = document.querySelectorAll('.plus')

for(let liste of listes) {
   liste.addEventListener('click', (e) => {
     liste.classList.toggle('active')
   })
}
