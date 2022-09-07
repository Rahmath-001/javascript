function hotel(){
    return "going to hotel";
}


function ordering(){
    return  new Promise((res,rej)=>{
        setTimeout(()=>{
            res("mandi");
        }, 4000);
    })
}

function eating(food){
    return `eating ${food}`;
}

function home(){
    return "going home";
}

function goingtohotel(){
    console.log(hotel());

    ordering().then((res)=>{
        console.log(eating(res));
        console.log(home())
    })
}


goingtohotel()