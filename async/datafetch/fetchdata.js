import axios from "axios";

function fetchData() {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            let data = res.data;
            // console.log(data);
            let names = data.map((ele) => {
                return {
                    name: ele.name,
                    username: ele.username
                }
            })
            console.log(names);
        }).catch((error) => {
            console.error(error.response.data);
            console.error("I am Handling Errors")
        })

}
fetchData();


// function abcFunction() {
//     try {
//         console.log("All Good!");
//         let obj = {
//             a: 1,
//             b: 2,
//             c: 3
//         }
//         obj.forEach(element => {
//             console.log(element);
//         });
//         // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//         // arr.forEach((ele) => {
//         //     console.log(ele);
//         // })
//     } catch (error) {
//         // console.error(error);
//         console.log("SOMETHING WENT WRONG")
//     }
// }

// abcFunction();