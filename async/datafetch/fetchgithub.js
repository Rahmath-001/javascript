import axios from "axios";

function fetchAPI() {
    let keys = {
        auth: {
            username: "aliqasim54321",
            password: "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"
        }
    }
    axios.get("https://api.github.com/users", keys)
        // {
        //     auth: {
        //         username: "adnanali-in",
        //         password: "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"
        //     }
        // }
        // )
        .then((res) => {
            // console.log(res.data);

            // let data = res.data;
            // let images_array = data.map((asd) => {
            //     return asd.avatar_url
            // })
            // console.log(images_array)
            let data = res.data;
            let usernames = data.map((ele) => ele.login)
            console.log(usernames);
            usernames.forEach(element => {
                axios.get(`https://api.github.com/users/${element}`, keys)
                    .then((res) => {
                        let data = res.data;
                        // console.log({
                        //     username: data.login,
                        //     fullname: data.name,
                        //     followers: data.followers,
                        //     following: data.following,
                        //     profile_pic: data.avatar_url
                        // })
                        // console.log(res.data);
                        console.log(`${data.login} has ${data.followers} Followers`)

                    })
                    .catch((err) => {
                        console.error(err);
                    })
            });
        })
        .catch((err) => {
            console.error(err.response.status);
            console.error(err.response.data);
        })
}

fetchAPI();



//Extract all the Avatar URLs from the Given API and stroe them into another array called images_array