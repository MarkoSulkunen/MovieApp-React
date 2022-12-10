import { useState } from "react";
import { CreateUser } from "../auth/Firebase";

const Register = () => {
  const [register, setRegister] = useState({});

  // Calls CreateUser -function with given email, password, name and surname
  const handleRegister = (e) => {
    e.preventDefault();
    const { name, surname, email, password } = register;
    CreateUser(name, surname, email, password);
  };

  return (
    <div className="form-box">
      <form onSubmit={handleRegister}>
        <title> Register Page </title>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder="Enter your first name."
            type="text"
            id="firstName"
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="Enter your last name."
            type="text"
            id="lastName"
            onChange={(e) =>
              setRegister({ ...register, surname: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            placeholder="Email..."
            type="text"
            id="email"
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password..."
            type="password"
            id="password"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
