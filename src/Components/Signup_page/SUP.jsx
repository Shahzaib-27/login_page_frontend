import { useState } from 'react';
import SignUpcss from "./SUP.module.css";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

export default function SUP() {

  const navigate = useNavigate();


  const [UserName, setUserName] = useState("");
  const [UserEmail, setEmail] = useState("");
  const [UserPassWord, setPassWord] = useState("");
  const [UserError, setError] = useState("");

  // to show/hide password
  const [ShowUserPassword, setShowUserPassword] = useState(false);

   const Handle_SignUp_info_new = async (e) => {

        e.preventDefault();

        try {

           const response = await axios.post(
               `${import.meta.env.VITE_API_URL}/user/register`,
              {
                    name: UserName,
                    email: UserEmail,
                    password: UserPassWord
                }
            );   
            
            console.log(response.data);

            alert("User Created Successfully!");

            setUserName("");
            setEmail("");
            setPassWord("");

            navigate("/loginpage");

        } catch (error) {
            setError("Error Creating User");
            console.log(`Error Creating user... ${error}`);
        }
    };


  return (
    <>

      
      <div className={SignUpcss.outercon}>
        <div className={SignUpcss.innercon}>


          {/* Header */}
            <div className={SignUpcss.inner_con_Content_Text}>
              <h1>Welcome Back!</h1>
            </div>


            {/* Form */}
            <div className={SignUpcss.innerconContent}>
              <h2>Register</h2>

              <form onSubmit={Handle_SignUp_info_new}>
                  {/* Username */}
                  <div className="relative mb-4">

                    <input
                      type="text"
                      placeholder='Username'
                      required
                      value={UserName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full border-b border-white bg-transparent text-white pl-10 py-2 outline-none"
                    />
                    <i className="fa-regular fa-user absolute left-51 top-1/2 -translate-y-1/2 text-white"></i>
                  </div>


                  {/* Email */}
                  <div className="relative mb-4">
                    <input
                      type="email"
                      placeholder='Email'
                      required
                      value={UserEmail}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-white bg-transparent text-white pl-10 py-2 outline-none"
                    />
                    <i className="fa-regular fa-envelope absolute left-51 top-1/2 -translate-y-1/2 text-white"></i>
                  </div>


                  {/* Password */}
                  <div className="relative mb-4">
                    <input
                      type={ShowUserPassword ? "text" : "password"}
                      placeholder='Password'
                      required
                      value={UserPassWord}
                      onChange={(e) => setPassWord(e.target.value)}
                      className="w-full border-b border-white bg-transparent text-white pr-10 py-2 outline-none"
                      />

                    <i
                      onClick={() => setShowUserPassword(!ShowUserPassword)}
                      className={`fa-solid absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-white ${
                        ShowUserPassword ? "fa-lock-open" : "fa-lock"
                      }`}
                      ></i>
                  </div>


                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-blue-600 text-white rounded"
                  >
                    Register
                  </button>


                  <p className="mt-2 text-sm cursor-pointer" onClick={() => navigate("/loginpage")}>
                    Already have an account? Sign In
                  </p>


                  {UserError && <p className="text-red-500 mt-2">{UserError}</p>}
              </form>
            </div>
        </div>
      </div>
 
  </>
  );
}
