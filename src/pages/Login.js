import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../auth/Firebase";

const Login = () => {
  const [login, setLogin] = useState({});
  const navigate = useNavigate();

  // Calls UserLogin -function with given email and password
  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = login;

    UserLogin(email, password, navigate);
  };

  return (
    <div className="form-box">
      <form onSubmit={handleLogin}>
        <title>Login Page</title>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            placeholder="Email..."
            type="text"
            id="email"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password..."
            type="password"
            id="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
