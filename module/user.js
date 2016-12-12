
/**
 * Created by gong on 2016/12/11.
 */
//文件模块，核心模块，第三方模块

//文件模块
function Person(){}
Person.prototype.eat = function(){
    console.log('eat')
};


module.exports = Person();