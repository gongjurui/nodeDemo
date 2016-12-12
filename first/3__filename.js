/**
 * Created by gong on 2016/12/11.
 */
console.log(__filename);
console.log(__dirname);

setTimeout(function(){
    console.log('setTimeout')
},10);

setImmediate(function(){
    console.log('立即')
});
process.nextTick(function(){
    console.log('nextTick')
});