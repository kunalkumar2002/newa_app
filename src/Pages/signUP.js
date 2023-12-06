import { useState } from "react";
import styles from "../Styles/signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const initialFormValues = {
    name: "",
    email: "",
    Mobile: "",
    pass: "",
  };
  const [input, setInput] = useState(initialFormValues);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(input);

    createUserWithEmailAndPassword(auth, input.email, input.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: input.name,
        });
        //console.log(user);
        navigate("/");
      })
      .catch((err) => {
        console.log("geting error", err);
      });
    setInput(initialFormValues);
    //console.log(input);
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
            value={input.name}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={input.email}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            value={input.pass}
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
