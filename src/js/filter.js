//先引入 Vue再 开始过滤设置
import Vue from 'vue';
                            //val=>是插值表达式的初始值 
Vue.filter('formatDate',function(val,format){
    //创建匹配年月日的三个不同正则
    let yreg=/YYYY/i;
    let mreg=/MM/i;
    let dreg=/DD/i;

    //获取相应的年月日时间 
    let data=new Date(val);
    let y=data.getFullYear();
    let m=data.getMonth()+1;
    let d=data.getDate();
     //根据得到的年月日 先正则匹配后 再 进行字符串拼接 
    return format.replace(yreg,y).replace(mreg,m).replace(dreg,d);
 }
);