import React from 'react';

const NameEmail = () => {
  return (
    <div>
      <div className="flex items-start md:items-center gap-4 md:gap-0 justify-between p-4 border-b flex-col md:flex-row">
        <h1 className="font-medium text-xl text-[#294E6D]">Name</h1>
        <div className="flex gap-4 flex-col md:flex-row">
          <input
            className="p-2 rounded-lg  text-sm font-[#294E6D]"
            type="text"
            placeholder="First name"
            name="name"
            id="name"
            required
          />
          <input
            className="p-2 rounded-lg text-sm font-[#294E6D]"
            type="text"
            placeholder="Last name"
            name="name"
            id="name"
            required
          />
        </div>
      </div>
      <div className="flex items-start md:items-center gap-4 md:gap-0 flex-col md:flex-row justify-between p-4 border-b">
        <h1 className="font-medium text-xl text-[#294E6D]">Email</h1>
        <input
          className="p-2 rounded-lg text-sm w-full md:w-1/2 font-[#294E6D]"
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          required
        />
      </div>
      <div className="flex items-start md:items-center  gap-4 md:gap-0 flex-col md:flex-row justify-between p-4 border-b">
        <h1 className="font-medium text-xl text-[#294E6D]">Your Photo</h1>
        <div className="flex gap-8 items-center justify-center flex-col md:flex-row">
          <div className="bg-[#294e6d] w-14 h-14 rounded"></div>
          <input
            className="p-2 rounded-lg text-sm w-72 border h-36 flex items-center justify-center  font-[#294E6D]"
            type="file"
            placeholder="Upload a photo"
            name="photo"
            id="photo"
            required
          />
        </div>
      </div>
      <div className="flex  justify-between p-4 border-b items-start md:items-center gap-4 md:gap-0 flex-col md:flex-row">
        <h1 className="font-medium text-xl text-[#294E6D]">Password</h1>
        <div className="flex gap-4  items-center justify-center w-full md:w-1/2 flex-col">
          <input
            className="p-2 rounded-lg text-sm  font-[#294E6D] w-full"
            type="password"
            placeholder="Current password"
            name="name"
            id="name"
            required
          />
          <input
            className="p-2 rounded-lg text-sm font-[#294E6D] w-full"
            type="password"
            placeholder="New password"
            name="name"
            id="name"
            required
          />
          <input
            className="p-2 rounded-lg text-sm font-[#294E6D] w-full"
            type="password"
            placeholder="Confirm new password"
            name="name"
            id="name"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default NameEmail;
