//引入配置的设置和获取localstorage的文件
import storage from '../common/storage.js';
  const storagekey='goodstotal';
  let goodstotal=storage.get(storagekey)||{};
export default{
   set(id,total){
       goodstotal[id]=total;
       storage.set(storagekey,goodstotal);
   },
   get(id){
       if(id){
           return goodstotal[id]||0;
       }else{
           let totals=this.getTotalList();
           return totals.length&&totals.reduce((v1,v2)=>(+v1)+(+v2));
       }
   },
   //根据商品Id删除相应的storage 并且重新记录持久化最新的结果
   remove(id){
      delete goodstotal[id];
      storage.set(storagekey,goodstotal);
   },
   getIDlist(){
       return Object.keys(goodstotal);
   },
   getTotalList(){
       return Object.values(goodstotal);
   }
}