class UI {
  constructor() {
    this.profile = document.getElementById("profileOutput");
  }

  showProfile(user) {
    // console.log(user);
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-6 mb-3">
            <img
              src="${user.avatar_url}"
              alt="User Avatar Image"
              class="img-fluid mb-2"
            />
            <div class="row">
              <div class="col-md-6">
                <a
                  href="${user.html_url}"
                  target="_blank"
                  class="btn btn-primary btn-block"
                  >View Porfile</a
                >
              </div>
              <div class="col-md-6">
                <a
                  href="${user.repos_url}"
                  target="_blank"
                  class="btn btn-secondary btn-block"
                  >Check Repos</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="row">
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
              <li class="list-group-item active">${user.name}</li>
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
}
