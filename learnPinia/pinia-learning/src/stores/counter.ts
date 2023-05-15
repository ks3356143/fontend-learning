// 定义一个counter的store
// 定义一个user的store
import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 99,
    };
  },
});

export default useCounterStore
