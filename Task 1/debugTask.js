function startProcess(){
    console.log("process started");
    start1();
}
function start1(){
    console.log("start1 executed");
    start2();
}
function start2(){
    console.log("start2 executed");
    console.trace("trace step2");  //prints call stack showing execution context tranisitions
}
startProcess();  //startProcess()->start1()->start2()
//console.trace() helps to print the stack helping debug flow