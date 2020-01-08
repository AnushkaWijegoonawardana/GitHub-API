// GitHub Class
class GitHub {
  constructor() {
    this.client_id = "9fdfe494444697923810";
    this.client_secret = "    49fccc08a9fa3a7954c02040918ef3bba17204e4";
  }

  //   Get User Data Method
  async getUser(user) {
    const userPofileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const userProfileData = await userPofileResponse.json();

    return {
      userProfileData
    };
  }
}
