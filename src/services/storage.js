let user = JSON.parse(localStorage.getItem("user"));
let Auth = user;

if (!Auth) {
  Auth = {
    name: "",
    email: "",
    password: "",
    department: "",
    role: 0,
  };
}

export default Auth;
