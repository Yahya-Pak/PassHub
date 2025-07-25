import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Manager = () => {
  const [passwordArray, setpasswordArray] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");

    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
    // else{
    //     setpasswordArray = []
    // }
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  const filteredPasswords = passwordArray.filter((item) => {
    const keyword = debouncedSearch?.trim().toLowerCase() || "";

    if (keyword === "") return true; // show all when search is empty

    return (
      item.site.toLowerCase().includes(keyword) ||
      item.username.toLowerCase().includes(keyword)
    );
  });

  const copyText = (text) => {
    toast("Copied to Clipboard!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const deletePassword = (id) => {
    let cnfrm = confirm("Do you realy want to delete this password");

    if (cnfrm) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );

      toast.warning("Password Deleted!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const editPassword = (id) => {
    navigate(`edit-entry/${id}`);

    // setform(passwordArray.filter((i) => i.id === id)[0]);

    // setpasswordArray(passwordArray.filter((item) => item.id !== id));
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

      <div className="flex flex-col gap-1"> 
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">Hub/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager
        </p>

        <div className="hidden md:block">
          <h2 className="font-bold text-2xl py-1">Your Passwords</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between align-center items-center py-4 mt-1 mb-3">
          <div className="w-full w-xs relative mb-3 md:mb-0">
            <input
              type="text"
              placeholder="Search by site or username"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-green-500 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <span className="absolute top-[4px] right-[3px] ">
              <lord-icon
                src="https://cdn.lordicon.com/hoetzosy.json"
                trigger="hover"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            </span>
          </div>
          <div>
            <button
              className="flex justify-center items-center gap-2 bg-green-500 rounded-full px-8 py-2 w-fit
           hover:bg-green-400 border border-green-700 cursor-pointer"
              onClick={() => navigate("/add-new-entry")}
            >
              <lord-icon
                src="https://cdn.lordicon.com/efxgwrkc.json"
                trigger="hover"
              ></lord-icon>
              Add
            </button>
          </div>
        </div>

        <div>
          {passwordArray.length === 0 && (
            <div className="text-gray-500 text-center font-bold">
              No Passwords to Show.
            </div>
          )}

          {passwordArray.length != 0 && (
            <div className="overflow-x-auto w-full rounded-md shadow">
            <table className="min-w-[600px] table-auto w-full rounded-md overflow-hidden mb-1">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2 px-4">Site</th>
                  <th className="py-2 px-4">Username</th>
                  <th className="py-2 px-4">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100 text-sm ">
                {filteredPasswords.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" py-2 border border-white text-center w-xs md:w-lg">
                        <div className="flex items-center justify-center gap-2">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="copyicon cursor-pointer size-7"
                            onClick={() => copyText(item.site)}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center ">
                        <div className="flex items-center justify-center">
                          <span>{item.username}</span>

                          <div
                            className="copyicon cursor-pointer size-7"
                            onClick={() => copyText(item.username)}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center ">
                        <div className="flex items-center justify-center">
                          <span>{"*".repeat(item.password.length)}</span>

                          <div
                            className="copyicon cursor-pointer size-7"
                            onClick={() => copyText(item.password)}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center  gap-2 ">
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => editPassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => deletePassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/xyfswyxf.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
