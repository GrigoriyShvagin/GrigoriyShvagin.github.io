interface Profile {
  avatar_url: string;
  login: string;
  html_url: string;
  public_repos: number;
}
interface Name {
  name: string;
  surname: string;
}
interface Contributions {
  total: { lastYear: number };
  contributions: Array;
}
