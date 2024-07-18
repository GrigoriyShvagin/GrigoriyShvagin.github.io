import { defineStore } from "pinia";
import axios from "axios";
import profileData from "../data/myProfile.json";

interface State {
  myProjectsdata: Profile | null;
  userColorScheme: string | null;
  allFiles: object;
  myContributionsdata: Contributions | null;
}

export const useAllFilesStore = defineStore("store", {
  state: (): State => {
    return {
      userColorScheme: "",
      myProjectsdata: null,
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
      myContributionsdata: null,
    };
  },
  getters: {
    myProjects: (state) => state.myProjectsdata,
    myContributions: (state) => state.myContributionsdata,
  },
  actions: {
    async checkGithubInfo(): Promise<Profile> {
      const result = (
        await axios.get(`https://api.github.com/users/GrigoriyShvagin`)
      ).data;
      result
        ? (this.myProjectsdata = result)
        : (this.myProjectsdata = profileData);
      return result;
    },
    async getGithubContributions(): Promise<Contributions> {
      const result = (
        await axios.get(
          "https://github-contributions-api.jogruber.de/v4/GrigoriyShvagin?y=last"
        )
      ).data;
      this.myContributionsdata = result;
      return result;
    },
  },
});
