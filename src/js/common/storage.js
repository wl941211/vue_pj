//对localstorage原生的封装
export default{
    //调用这里的方法 传入两个参数 就可以设置localstorage
    set(key,info){
       let strdata;
       try{
          strdata=JSON.stringify(info);
       }catch(e){
          strdata=info;
       }finally{
          localStorage.setItem(key,strdata);
       }
    },
    //传入 key值 就可以根据key 得到相应的缓存的值
    get(key){
       let strdata=localStorage.getItem(key);
       let result;
       try{
          result=JSON.parse(strdata);
       }catch(e){
          result={};
       }finally{
          return result||{};
       }
    }
}