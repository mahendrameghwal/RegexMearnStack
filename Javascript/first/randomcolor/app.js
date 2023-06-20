

const box = document.querySelectorAll('.box')
console.log(box);
box.forEach((item) => {



        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        const randomcolr = `rgb(${red},${green},${blue})`
   
            

        item.onmouseover = function () {
                item.style.backgroundColor = randomcolr ;
                item.innerText = `rgb(${red}, ${green}, ${blue})`
                item.style.boxShadow = ` rgba(0, 0, 0, 0.3) 0px 14px 10px,${randomcolr} 0px 15px 12px`
                item.style.border = `5px solid ${randomcolr}`
        }
})
let a = [1,2,3,4,5];
console.log(a);
let b = a.forEach   (function(z){
        return z;
})
console.log(b);