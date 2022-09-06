import axios from "axios";
import readlineSync from "readline-sync";

// function getWeather() {
//     try {
//         let cityname = readlineSync.question("Enter Cityname : ");
//         while (!cityname) {
//             cityname = readlineSync.question("City name cant be Empty please Re-enter the Name : ");
//         }

//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a06f7a0d0fae7926aa6e13224d71923f`)
//             .then((res) => {
//                 console.log(res.data);
//             })
//             .catch((err) => {
//                 // console.error(err);
//                 console.error(err.response.data);
//             })

//     } catch (error) {
//         console.error(error);
//     }
// }


async function getWeather() {
    try {
        let cityname = readlineSync.question("\nEnter Cityname : \n");
        while (!cityname) {
            cityname = readlineSync.question("City name cant be Empty please Re-enter the Name : ");
        }


        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a06f7a0d0fae7926aa6e13224d71923f`)


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


        // console.log(res.data);

        //The Temperature in X city is _ Centrigrade
        // console.log(`\n -----------------------------------------`)
        // console.log(`  The Temperature in ${cityname} is ${(res.data.main.temp - 273).toFixed(2)} Centigrade`)
        // console.log(`  The MAX-Temperature in ${cityname} is ${(res.data.main.temp_max - 273).toFixed(2)} Centigrade`)
        // console.log(`  The MIN-Temperature in ${cityname} is ${(res.data.main.temp_min - 273).toFixed(2)} Centigrade`)
        // console.log(`  The HUMIDITY in ${cityname} is ${(res.data.main.humidity).toFixed(2)} Centigrade`)
        // console.log(`  The sunset in ${cityname} is ${(res.data.sys.sunset)} Centigrade`)
        // console.log(`  The sunrise in ${cityname} is ${(res.data.sys.sunrise)} Centigrade`)

        // console.log(` -----------------------------------------\n`)

    } catch (error) {
        console.error(error);
        console.error(error.response.data);
    }
}

getWeather();