import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  let navigate = useNavigate()
  let email = useRef(null);
  let password = useRef(null);

  //validate admin credentials
  let adminLogin = () => {
    if (email.current.value == "admin@gmail.com" && password.current.value == 12345) {
        navigate('/admin')
    } else {
      alert('Invalid Credentials')
    }
  };
  return (
    <div className="AdminLogin">
      <h1 className="text-center">Admin Login</h1>
      <div className="loginForm d-flex flex-direction-column justify-content-center container">
        <form action="" className="w-50" onSubmit={adminLogin}>
          <div className="email">
            <input
              ref={email}
              className="form-control my-3 w-100"
              type="email"
              placeholder="enter email address"
            />
          </div>
          <div className="password">
            <input
              ref={password}
              className="form-control my-3 w-100"
              type="password"
              placeholder="enter your password"
            />
          </div>
          <div className="button text-center">
            <button className="btn btn-primary btn-lg">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
