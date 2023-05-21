const { isMainThread,
    workerData, 
    Worker } = require("worker_threads");

if (isMainThread) {
    console.log(`Main thread process id ${process.pid}`);
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
    });
    new Worker(__filename, {
        workerData: [1, 2, 3, 5]
    });
} else {
    console.log(`worker process id ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`)
}

