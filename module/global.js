/**
 * Created by gong on 2016/12/12.
 */

//console.log(global.process);
console.log(process.pid);
console.log(process.cwd());
console.log(__dirname);
console.log(__filename);
process.chdir('../');
console.log('-----')
console.log(process.cwd());
console.log(__dirname);
console.log(__filename);

setTimeout(function(){console.log(22)},4000)
process.kill(4884)
process.exit();

console.log('退出进程，不在显示这里');
