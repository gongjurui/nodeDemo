/**
 * Created by gong on 2016/12/11.
 */


console.log(222)
setInterval(function () {
    process.exit()
}, 4000);
console.log(3333)
console.log(process.pid)
process.kill(3300)