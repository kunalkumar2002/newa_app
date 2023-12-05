import styles from "../Styles/signup.module.css";
import { Link, useNavigate } from "react-router-dom";
const Signin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Login</h1>
        <from className={styles.form}>
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
          <label>Password</label>
          <input type="text" placeholder="Enter Password" />
          <button>signup</button>
        </from>
      </div>
    </div>
  );
};
export default Signin;
