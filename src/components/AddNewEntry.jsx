import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";


const AddNewEntry = () => {
const ref = useRef();
      const [form, setform] = useState({ site: "", username: "", password: "" });
      const [passwordArray, setpasswordArray] = useState([]);

        const passwordRef = useRef();
         const navigate = useNavigate();

          useEffect(() => {
            let passwords = localStorage.getItem("passwords");
        
            if (passwords) {
              setpasswordArray(JSON.parse(passwords));
            }
            
          }, []);


    
  const showPassword = () => {
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {

    
    if(form.site.length > 3 && form.username.length> 3 && form.password.length> 3){
      
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);

    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );

    setform({ site: "", username: "", password: "" });
    toast("Password Saved!", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
    setTimeout(() => {
  navigate("/");
}, 1000);

    
    
    }
    else{
      toast.error("Error: Password not Saved!");
    }


  };

  
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

 


  return (
    <>
    <ToastContainer
            position="bottom-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
      <div className='mx-auto max-w-lg bg-green-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-center text-2xl'>Add Your New Password</h1>
      <div className='flex flex-col gap-5'>


        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            placeholder="Enter Website URL"
            value={form.site}
            onChange={handleChange}
            className="rounded-full bg-white border border-green-500 w-full p-4 py-1 text-black focus:outline-none focus:ring-1 focus:ring-green-500"
            type="text"
            name="site"
            id="site"
          />
          <div className="flex flex-col w-full gap-8 justify-between">
            <input
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              className="bg-white rounded-full border border-green-500 w-full p-4 py-1 text-black focus:outline-none focus:ring-1 focus:ring-green-500"
              type="text"
              name="username"
              id="user"
            />
            <div className="relative ">
              <input
                ref={passwordRef}
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                className="bg-white rounded-full border border-green-500 w-full p-4 py-1 text-black focus:outline-none focus:ring-1 focus:ring-green-500"
                type="password"
                name="password"
                id="pass"
              />

              <span
                className="absolute top-[4px] right-[3px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={28}
                  src="icons/eye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>

          <button
            className="flex justify-center items-center gap-2 bg-green-500 rounded-full px-8 py-2 w-fit
           hover:bg-green-400 border border-green-700 cursor-pointer"
            onClick={savePassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>

      </div>
      </div>
       
    </>
  )
}

export default AddNewEntry
