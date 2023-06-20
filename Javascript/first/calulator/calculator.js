const btn = document.querySelectorAll('.btn')
const output = document.querySelector('#output')
console.log(btn)
btn.forEach((button) => {
   button.addEventListener('click', (e) => {
      let clickedValue = e.target.value

      switch (clickedValue) {
         case 'c':
            output.value = ''
            break
         case '=':
            output.value = eval(output.value)
            break
         case 'X':
            output.value = output.value.slice(0, -1)
            break
         default:
            output.value = output.value + clickedValue
            break
      }
   })
})

const age = [ 22, 34, 56, 43, 23, 45, 19, 14, 15, 18, 13, 12, 11, 10 ]

let is18 = age.filter((x) => {
   return x < 18
})
console.log(is18)
