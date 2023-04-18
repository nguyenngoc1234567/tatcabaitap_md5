// import styles from "../styles/Login.module.css";
import styles from "../styles/Home.module.css";
function Login() {
  return (
    <form className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Login" className={styles["submit-button"]} />
    </form>
  );
}

export default Login;
