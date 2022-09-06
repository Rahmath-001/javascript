import axios from "axios";
import readlineSync from "readline-sync";



async function getWeather() {
    try {
        let cityname = readlineSync.question("\nEnter Cityname : \n");
        while (!cityname) {
            cityname = readlineSync.question("City name cant be Empty please Re-enter the Name : ");
        }

        const appid = 'ffdd323148e1c6a474a68dad2741d561';
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${appid}`)


    console.log(`\n CHOICES :  \n 0) EXIT \n 1) MAX-Temperature\n 2) MIN-Temperature\n 3) HUMIDITY\n 4) SUNSET\n 5) SUNRISE\n `)

        
        let choice=readlineSync.questionInt("Enter choice to get details : ")
        switch (choice){
            case 0: 
            console.log(`\n -----------------------------------------`)
            console.log(" THNAK YOU FOR USING WEATHER CLI ")
            console.log(` -----------------------------------------\n`)
            procress.exit();
            break;

            case 1: 
            console.log(`\n -----------------------------------------`)
            console.log(`  The MAX-Temperature in ${cityname} is ${(res.data.main.temp_max - 273).toFixed(2)} Centigrade`);
            console.log(` -----------------------------------------\n`)
            break;

            case 2: 
            console.log(`\n -----------------------------------------`)
            console.log(`   The MIN-Temperature in ${cityname} is ${(res.data.main.temp_min - 273).toFixed(2)} Centigrade`);
            console.log(` -----------------------------------------\n`)
            break;


            case 3:
                console.log(`\n -----------------------------------------`)
                console.log(`  The HUMIDITY in ${cityname} is ${(res.data.main.humidity).toFixed(2)} Centigrade`);
                console.log(` -----------------------------------------\n`)
            break;    

            case 4:
                console.log(`\n -----------------------------------------`)
                console.log(`  The SUNSET in ${cityname} is ${(res.data.sys.sunset)} Centigrade`);
                console.log(` -----------------------------------------\n`)
            break;
            
            case 5:
                console.log(`\n -----------------------------------------`)
                console.log(`  The SUNRISE in ${cityname} is ${(res.data.sys.sunrise)} Centigrade`);
                console.log(` -----------------------------------------\n`)
            break;

            default: 
            console.log("Invalid input ")
        }


        let shouldcontinue=readlineSync.question("\nDo you want to continue ? (y/n) : ")
        if(shouldcontinue == "y"  || shouldcontinue== "Y" || shouldcontinue== "yes"  || shouldcontinue== "YES" ) {
           getWeather();
        }
        else {
           console.log("\nTHANK YOU for using our Application......\n")
        }


    } catch (error) {
        console.error(error);
        console.error(error.response.data);
    }
}

getWeather();