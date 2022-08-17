const got = require("got");

const url = "https://api.github.com/repos/sinatra/sinatra";

// class GithubApi {
//   fetchRepositoryData(url, response) {
//     (response) => response.json;
//     const repositoryData = JSON.parse(response.body);
//     console.log(repositoryData);
//   }
// }

// const api = new GithubApi();
// api.fetchRepositoryData(
//   "https://api.github.com/repos/sinatra/sinatra",
//   (repositoryData) => {
//     console.log(repositoryData);
//   }
// );
// got(url).then(fetchRepositoryData);

// class GithubApi {
//   fetchRepositoryData(url, repositoryData) {
//     const receivedResponse = JSON.parse(repositoryData);
//     console.log(receivedResponse);
//   }
// }

// const api = new GithubApi();
// api.fetchRepositoryData(url, (repositoryData) => {
//   console.log(repositoryData);
// });
// got(url).then(fetchRepositoryData);

class GithubApi {
  fetchRepositoryData(url, repositoryData) {
    const repoDataObject = JSON.parse(repositoryData.body);
    console.log(repoDataObject);
  }
}

const api = new GithubApi();
api.fetchRepositoryData(url, () => {
  console.log(repositoryData);
});
