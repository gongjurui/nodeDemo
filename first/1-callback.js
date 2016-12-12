/**
 * Created by gong on 2016/12/11.
 */

function read(cb){
    setTimeout(function(){
        cb();
    },5000)
}
function write(){
    console.log(111);

}
read(write);
console.log(global);
console.log(this);
a = 100
console.log(global.a)