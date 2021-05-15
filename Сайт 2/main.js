document.addEventListener('DOMContentLoaded', ()=>{

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    
    const btn = document.querySelector('.btn')
    const firstMat = document.querySelector('.first-mat')
    const ansMat = document.querySelector('.ans-mat')

    btn.addEventListener('click', ()=>{
        firstMat.innerHTML = ''
        ansMat.innerHTML = ''
        const columns = 15
        let mass = []
        for (let i=0; i<columns;i++){
                mass[i]= randomInteger(0,99)
                firstMat.innerHTML += mass[i] + '  '
        }
      
   var s = 0;
   for (i = 0; i < mass.length; i++){
      s += mass[i]
	
   }


            ansMat.innerHTML = s
        
        

    })
})