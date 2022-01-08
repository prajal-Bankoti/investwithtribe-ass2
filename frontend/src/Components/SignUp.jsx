import { useState } from "react";
import axios from "axios";
import "./style.css";
const SignUp = () => {
  const [data, setData] = useState();
  const [login, setLogin] = useState();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:4000/post", data)
      .then((res) => setLogin(res.data))
      .catch((err) => console.log("err: ", err));
  };
  return (
    <div>
      {login ? (
        <div>{login.userName}</div>
      ) : (
        <div className="box">
          <label htmlFor="">Username</label>
          <input type="text" name="username" id="" onChange={handleChange} />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id=""
            onChange={handleChange}
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
