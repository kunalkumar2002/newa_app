import { useState } from "react";
import styles from "../Styles/signup.module.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>SignUp</h1>
        <form className={styles.form} onSubmit={handlesubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) =>
              setInput((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) =>
              setInput((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            onChange={(e) =>
              setInput((prev) => ({ ...prev, pass: e.target.value }))
            }
          />
          <button>signup</button>

          <div>
            <span>Already have an account?</span>
            <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
