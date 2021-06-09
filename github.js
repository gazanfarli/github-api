class Github {
    constructor(){
        this.url = "https://api.github.com/users/";
    }

    async getGithubData(userName) {
        const responseUser = await fetch(this.url + userName);
        const responseRepos = await fetch(this.url + userName + "/repos");

        const userData = await responseUser.json();
        const reposData = await responseRepos.json();
        return {
            user: userData,
            repos: reposData
        }
    }
}