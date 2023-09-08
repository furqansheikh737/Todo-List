"use client";

import { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [task, settask] = useState([]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    settask([...task, { title }]);
    settitle("");
  };
  const deleteHandler = (i) => {
    let copytask = [...task];
    copytask.splice(i, 1);
    settask(copytask);
  };

  let tempText = <h1>No task available</h1>;

  if (task.length > 0) {
    tempText = task.map((t, i) => {
      return (
        <li className="flex justify-between pb-2">
          <div>
            <h5>{t.title}</h5>
          </div>
          <button onClick={()=>{deleteHandler(i)}} className="rounded p-1 bg-green-500 text-white">Delete</button>
        </li>
      );
    });
  }
  
  return (
    <div>
      <h1 className="text-white font-bold text-6xl text-center pt-20">
        Todo List
      </h1>
      <div className="flex items-center justify-center pt-20 relative">
        <form
          onSubmit={onSubmitHandler}
          className=" w-4/5 md:w-2/5 h-10 p-6 mb-3 bg-gray-800 rounded-full relative"
        >
          <input
            type="text"
            required 
            placeholder="Add you text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="absolute top-0 left-3 p-3 outline-none text-white rounded-full bg-transparent w-3/5 md:2/4 border-none"
          ></input>
          <button className="bg-transparent p-3 text-white absolute right-3 top-0 ">
            Add
          </button>
        </form>
      </div>

      <div className="m-auto w-4/5 md:w-2/5 p-4">
          <ul className=" text-white pt-3">{tempText}</ul>
      </div>
    </div>
  );
};

export default page;
