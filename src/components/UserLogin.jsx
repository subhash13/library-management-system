const UserLogin = () => {
    return ( 
        <div className="UserLogin">
            <h1>User Login</h1>
            <div className="loginForm d-flex flex-direction-column justify-content-center container">
        <form action="" className="w-50">
          <div className="email">
            <input
              className="form-control my-3 w-100"
              type="email"
              placeholder="enter email address"
            />
          </div>
          <div className="password">
            <input
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
}
 
export default UserLogin;