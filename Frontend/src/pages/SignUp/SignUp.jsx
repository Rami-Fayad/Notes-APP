import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import InputPassword from "../../components/Inputpassword/InputPassword";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/validate";

const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);
  const handlesignup = async (e) => {
    e.preventDefault();
    if (!name){
      seterror("Please Enter a name.")
      return;
    }
    if (!validateEmail(email))
    {
      seterror("Please Enter a valid email.")
      return;
    }
    if(!password)
    {
      seterror("Please Enter a password.")
      return;
    }
    seterror("");

    // SignUp API Call
  }
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white py-10 px-7">
          <form onSubmit={handlesignup}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input
              type="text"
              placeholder="Enter your Name"
              className="input-box"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter your Email"
              className="input-box"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <InputPassword
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            {error && <p className="text-red-500 text-sm pb-1"> {error}</p>}
            <button type="submit" className="btn-primary">
              SignUp
            </button>
             <p className="text-sm text-center mt-4">
              Already have an account? {""}
              <Link
                to={"/login"}
                className="font-medium text-primary underline"
              >
                Login
              </Link>
              </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
