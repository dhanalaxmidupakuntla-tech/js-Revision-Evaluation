function mySetInterval(callback, deley){
    let timerId = {active: true};

    function fun() {
        if (!timerId.active) return;

        callback();
        setTimeout(fun, deley);
    }
    setTimeout(fun, deley);
    return timerId;
}
function myClearInterval(timerId) {
    id.active = false;
}

const id = mySetInterval(() => {
    console.log("Running...");
}, 2000);

setTimeout(() => {
    myClearInterval(id);
    console.log("Stopped.");
}, 9000);