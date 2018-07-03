class Github {
  constructor() {
    this.client_id = "4b187a66f867538f082e";
    this.client_secret = "e2664c8a70ce18eba2bcc50e7312fedc34dab982";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
      // the same as:
      //                profile: profile
      //                repos: repos
    }
  }
}