/*
function display(param) {
    console.log(param);
}
display(25);
function run(param) {
    param();
}
run(function () {
    console.log("helooo..");
});
*/
setTimeout(function () {
    console.log('timeout');
}, 4000);
console.log('next line');

setInterval(function () {
    console.log('interval');
}, 30000);

console.log("next line2");