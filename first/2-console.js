/**
 * Created by gong on 2016/12/11.
 */
console.log('log');
console.info('info');
console.error('error');
console.warn('warn');

console.time('start');
for(var i=0;i<10000;i++){

}
console.timeEnd('start');

console.time('begin');

setTimeout(function(){
    console.timeEnd('begin');
    console.log(this);//this指向的是自己settimeout
},3000);

