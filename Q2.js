function createRateLimiter(limit, interval){
    let count = 0;
    let timer = false;

    return function() {
        if (!timer) {
            timer = true;
            setTimeout(() => {
                count = 0;
                timer = false;
            }, interval)
        }
    

        if (count < limit){
            count++;
            console.log("Call allowed:", count);
            return true;
        } else {
            console.log("Rate limit excceded");
            return false;
        }
    }
}

let limit = 8;
let interval = 6000; // 6 seconds
 
const limiter = createRateLimiter(limit, interval)

limiter(); // Call allowed: 1
limiter();
limiter();
limiter();
limiter();
limiter();
limiter();