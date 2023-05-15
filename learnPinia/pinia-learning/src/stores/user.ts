import { defineStore } from "pinia";
import useCounterStore from "./counter";

const useUserStore = defineStore("useUserStore", {
  state: () => {
    return {
      name: "chen",
      age: 10,
      level: 100,
      frients: [
        { id: 111, name: "why" },
        { id: 112, name: "kobe" },
        { id: 113, name: "james" },
      ],
    };
  },
  getters: {
    //1.基本使用
    doubleCount(state) {
      return state.age * 2;
    },
    doubleCountAddOne(): number {
      return this.doubleCount + 1;
    },
    getFriendById(state) {
      return function (id: number) {
        return state.frients.find((item) => {
          return item.id === id;
        });
      };
    },
    showMessage() {
      // 1.获取其他store信息
      const counterStore = useCounterStore();
      // 2.拼接信息
      return `name:${counterStore.count++}`;
    },
  },
  actions: {
    increment(num: number) {
      return this.age + num;
    },
  },
});

export default useUserStore;
