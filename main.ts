//  main.py
//  by FuchsCrafter
//  license: cc-by
function sleep(time: string) {
    let tmp: number;
    //  Function
    try {
        tmp = parseInt(time)
        tmp = tmp * 1000
        basic.pause(tmp)
    }
    catch (_) {
        console.log("Error: Cant convert " + time + " to a number!")
        basic.showString("Error: Cant convert " + time + " to a number!")
    }
    
}

