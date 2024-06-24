import { defineStore } from "pinia";
import axios from "axios";

interface State {
  myProjectsState: Object;
  userColorScheme: string | null;
  allFiles: object;
}

export const useAllFilesStore = defineStore("store", {
  state: (): State => {
    return {
      userColorScheme: "",
      myProjectsState: {},
      allFiles: {
        homeFile: {
          link: "/",
          text: "MainPage.vue",
          icon: "logos:vue",
        },
        resumeFile: {
          link: "/resume",
          text: "resume.html",
          icon: "vscode-icons:file-type-html",
        },
        contactFile: {
          link: "/contacts",
          text: "contacts.ts",
          icon: "vscode-icons:file-type-typescript-official",
        },
        projectsFile: {
          link: "/projects",
          text: "projects.json",
          icon: "vscode-icons:file-type-light-json",
        },
        githubFile: {
          link: "/github",
          text: "github.md",
          icon: "material-symbols:markdown",
        },
      },
    };
  },
  getters: { myProjects: (state) => state.myProjectsState },
  actions: {
    async checkGithubInfo() {
      const result = (
        await axios.get(`https://api.github.com/users/GrigoriyShvagin`)
      ).data;
      this.$state.myProjectsState = result;
      await result;
    },
  },
});
