function runSequential(tasks, delay){
    return new Promise(async (resolve, reject) => {
        let results = [];
        
        try {
            for (let i = 0; i < tasks.length; i++){
                //Execution of the task
                let result = await tasks[i]();
                results.push(result);

                //wating delay milliseconds betwwen the tasks

                if ( i < tasks.length - 1) {
                    await new Promise(res => setTimeout(res, delay));
                }
            }
            resolve(results);
        } catch (error) {
            //stops execution if any task fails
            reject(error);
        }
    });
}

const tasks = [
    () => Promise.resolve('Task 1 completed'),
    () => Promise.resolve('Task 2 completed'),
    () => Promise.resolve('Task 3 completed')
]

runSequential(tasks, 2000)
    .then(results => console.log(results))
    .catch(error => console.error(error));