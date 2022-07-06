const token = localStorage.getItem("token");
const req = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

module.exports = req