const URL = "http://api.openweathermap.org/data/2.5/weather?q=Bucaramanga&units=metric&appid="
const API_KEY = "eef1bee8e136427c52e09919160c87de"

console.log(`${URL}${API_KEY}`)

async function getData(){
  
    try{
        const response = await fetch(`${URL}${API_KEY}`)
        
        const data = await response.json();
        console.log(data) 

    }catch(e){
        console.log(e)
    }

}


getData()