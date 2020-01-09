class UI {
  constructor() {
    this.profile = document.getElementById("profileOutput");
  }

  showProfile(user) {
    // console.log(user);
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4 mb-3">
            <img
              src="${user.avatar_url}"
              alt="User Avatar Image"
              class="img-fluid mb-2"
            />
            <div class="row">
              <div class="col-md-12 mb-2">
                <a
                  href="${user.html_url}"
                  target="_blank"
                  class="btn btn-primary btn-block"
                  >View Profile</a
                >
              </div>
              <div class="col-md-12">
                <a
                  href="${user.repos_url}"
                  target="_blank"
                  class="btn btn-secondary btn-block"
                  >Check Repos</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-8 mb-3">
            <div class="">
              <span class="badge badge-primary ml-1 mb-1"
                >Public Repos : ${user.public_repos}</span
              >
              <span class="badge badge-secondary ml-1 mb-1"
                >Public Gits : ${user.public_gists}</span
              >
              <span class="badge badge-success ml-1 mb-1"
                >Followers : ${user.followers}</span
              >
              <span class="badge badge-info ml-1 mb-1">Following : ${user.following}</span>
            </div>
            <hr />
            <ul class="list-group">
              <li class="list-group-item list-group-item-dark">${user.name}</li>
              <li class="list-group-item">${user.company}</li>
              <li class="list-group-item"><a href="${user.blog}" target="_blank">${user.blog}</a></li>
              <li class="list-group-item">${user.location}</li>
              <li class="list-group-item">${user.bio}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  showRepos(repos) {
    let repooutput = "";

    repos.forEach(repo => {
      repooutput += `<div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-8">
          <h3 class="car-title ">
            <a href="${repo.html_url}">${repo.name}</a>
          </h3>
          <!-- <hr /> -->
          <p class="card-text">${repo.description}</p>
          <p class="card-text">Created at ${repo.created_at}</p>
          <p class="card-text">Last Update at ${repo.updated_at}</p>
        </div>
        <div class="col-md-4">
          <a href="${repo.git_url}" class="btn btn-block btn-primary"
            >Git Files</a
          >
          <a href="${repo.clone_url}" class="btn btn-block btn-info"
            >Take a Clone</a
          >
        </div>
      </div>
      <hr>
      <div class="">
        <span class="badge badge-primary">Repo Size: ${repo.size}</span>
        <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
        <span class="badge badge-info">Forks: ${repo.forks}</span>
        <span class="badge badge-primary">Open Issues: ${repo.open_issues}</span>
      </div>
    </div>`;
    });

    document.getElementById("repoOutput").innerHTML = repooutput;
  }

  clearProfile() {
    this.profile.innerHTML = "";
    console.log("Profile Cleard");
  }

  clearShowMessage() {
    const curentShowMessage = document.querySelector(".alert");

    if (curentShowMessage) {
      curentShowMessage.remove();
    }
  }

  showMeasage(message, className) {
    // clear Current message
    this.clearShowMessage();

    const div = document.createElement("div");
    div.className = `alert alert-${className} mb-3`;
    div.appendChild(document.createTextNode(message));
    const parentContainer = document.querySelector(".search-container");
    const beforElement = document.querySelector(".search");
    parentContainer.insertBefore(div, beforElement);

    // Set Timeout
    setTimeout(() => {
      this.clearShowMessage();
    }, 3000);
  }
}
