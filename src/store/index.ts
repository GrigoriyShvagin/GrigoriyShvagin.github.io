import { defineStore } from "pinia";

interface State {
  myProjects: string[];
  userColorScheme: string | null;
}

export const useAllFilesStore = defineStore("store", {
  state: (): State => {
    return {
      userColorScheme: "",
      myProjects: [],
    };
  },
  actions: {},
});
