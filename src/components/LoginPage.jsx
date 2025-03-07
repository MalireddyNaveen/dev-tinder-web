import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [emailId, setEmailId] = useState("naveen@gmail.com");
  const [password, setPassword] = useState("Naveen@123");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/login",
        {
          emailID: emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/")
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="card bg-neutral-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Login</h2>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID : </legend>
              <input
                type="text"
                value={emailId}
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
                className="input"
                placeholder="Email ID"
              />
              <legend className="fieldset-legend">Password :</legend>
              <input
                type="text"
                className="input"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
            </fieldset>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
