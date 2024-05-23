//generate a random color

const randomColor = ()=>{
    let hex = '123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*10)]
        
    }
    return color;
    
}

// var intervalId;
const startColorChanging = ()=>{


    // if (!intervalId) {
    //     intervalId = setInterval(changeBgColor, 1000);
    //   }
    
    const changeBgColor = ()=>{
        document.body.style.backgroundColor = randomColor();
    }

      setInterval(changeBgColor, 1000);
}



const stopColor = ()=>{
    clearInterval(intervalId);
    // intervalId = null;
}

document.querySelector('#start').addEventListener('click', startColorChanging)
document.querySelector('#stop'),addEventListener('click', stopColor)
