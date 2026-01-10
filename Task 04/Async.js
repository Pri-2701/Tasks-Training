function asyncTask(name, time, shouldFail=false) {
    return new Promise((reslove, reject) => {  //Retuen a promuse used for async work
       setTimeout(() => {
        if(shouldFail) {
            reject(new Error(name +"failed"));
        }
        else{
        console.log(name +" completed"); //print when task is completed
        reslove(name);
        }
       },time);

    
    })

}
async function runSerial() {  //serial task run one after another 
    try  {
        await asyncTask("task 1" , 2000);

    } catch(e) {
        console.log("task 1:", e.message);
    }

     try  {
        //await asyncTask("task 2" , 2000, true);   //error 
        await asyncTask("task 2",2000);

    } catch (e) {
         console.log("task 2:", e.message);
    }
     try  {
        await asyncTask("task 3" , 2000);

    } catch(e) {
        console.log("task 3:" , e.message);
    }
    console.log("serial execution")
};

async function runParallel() {

       const tasks = [
         asyncTask("Task 4", 5000).catch(e => console.log("task 4: ", e.message)),
         asyncTask("Task 5", 7000,true).catch(e => console.log("task 5: ", e.message)),
          asyncTask("Task 6", 8000).catch(e =>  console.log("task 6: ", e.message))
       ];
       const results = await Promise.all(tasks);
       results.forEach(result => console.log(result));
    console.log("parallel execution");
}


async function main() {
    await runSerial();  //wait for serial task finish
    await runParallel(); //then run parallel task
}
main();