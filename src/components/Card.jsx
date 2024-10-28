import React from "react";

const Card = () => {
  return (
    <>
      <h2 className="text-orange-400 bg-blue-500 hover:bg-slate-600 max-sm:bg-orange-400 max-lg:bg-green-800">
        hello
      </h2>
      <div className="relative bg-red-400 h-50">
        <div className="absolute ">1</div>
      </div>
      <div className="h-30 p-3 max-w-sm mx-auto my-auto bg-green-500 shadow-lg mt-3 border-4 border-red-600 rounded-lg">
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          veniam blanditiis, esse ab deserunt maiores ducimus quibusdam aliquid
          repellat modi molestias iusto, debitis dignissimos optio ad itaque
          asperiores, aperiam qui.
        </p>
      </div>
      <img
        className="brightness-75 hover:brightness-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioEI4ukddcJtBu_a_D5oMI49OLkLSBXPyNw&s"
        alt=""
      />
      <p className="select-all">hello wer werwe rwer</p>
      <div className="flex justify-between  bg-slate-100 p-3 rounded-lg">
        <div className="bg-blue-500">Home</div>
        <div className="bg-blue-500">About</div>
        <div className="bg-blue-500">Services</div>
      </div>

      <div class="grid gap-2 md:grid-cols-3 sm:grid-cols-1 grip-col-1">
        <div className="bg-green-600">01</div>
        <div className="bg-green-600">01</div>
        <div className="bg-green-600">01</div>
        <div className="bg-green-600">01</div>
      </div>
      <i class="fa-solid fa-spinner"></i>
      <button className="bg-blue-500 mt-3 hover:bg-violet-500 hover:text-blue-500 py-2 px-3  text-white rounded-md">
        Tailwind Button
      </button>
    </>
  );
};

export default Card;
