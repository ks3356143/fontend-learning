import { defineStore } from "pinia";
const useHomeStore = defineStore("home", {
  state: () => {
    return {
      banners: [],
      recomments: [],
    };
  },
  actions:{
    async fetchHomeMultidata(){
        const res = await setTimeout(()=>{
            console.log("我是异步调用");
        },2000)
    }
  }
});

export default useHomeStore;
