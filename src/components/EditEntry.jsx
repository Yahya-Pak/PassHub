import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useRef, useState } from "react";

import { useNavigate, useParams } from 'react-router-dom';

const EditEntry = () => {

  const { id } = useParams();
  const ref = useRef();

      const [form, setform] = useState({ site: "", username: "", password: "" });

      const [passwordArray, setpasswordArray] = useState([]);
    
              const passwordRef = useRef();
      
    const navigate = useNavigate();

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
    
        if (passwords) {
            const parsed = JSON.parse(passwords);
          setpasswordArray(parsed);

          const match = parsed.find((i) => i.id === id);
            if (match) setform(match);
        }

                
      }, []);

 
  const showPassword = () => {
    if (ref.current.src.includes("/icons/eyecross.png")) {
      ref.current.src = "/icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "/icons/eyecross.png";
      passwordRef.current.type = "text";
    }
  };
      const editPassword = () => {
    
     const updated = passwordArray.map((entry) =>
    entry.id === form.id ? { ...form } : entry
  );

  localStorage.setItem("passwords", JSON.stringify(updated));
  };
    
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <>
    <ToastContainer
            position="bottom-right"
            autoClose={3000}
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
      <h1 className='font-bold text-center text-2xl'>Edit Your Password Here.</h1>
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
                  src="/icons/eye.png"
                  alt="eye"
                />
                

              </span>
            </div>
          </div>

          <button
            className="flex justify-center items-center gap-2 bg-green-500 rounded-full px-8 py-2 w-fit
           hover:bg-green-400 border border-green-700 cursor-pointer"
            onClick={editPassword}
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

export default EditEntry
