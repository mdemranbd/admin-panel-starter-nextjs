import React from "react";

const ListAppProfile = () => {
  return (
    <div>
      <h1 className="text-3xl">List Of Apps Profile</h1>
      {/* Contents Publishing */}
      <div className="lg:m-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-1</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-2</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-3</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-4</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-5</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-1</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-2</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-3</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-4</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-5</h1>
          </div>
        </div>
      </div>
      {/* Overall Form */}
      <div className="grid grid-cols-1 ">
        <div className="border-2 border-black flex justify-between">
          <h1>Profile 1</h1>
          <h1>
            6236
            <sub className="font-features subs text-red-900">
              (Apps Profile)
            </sub>
          </h1>
          <h1>
            2344
            <sub className="font-features subs text-red-900">(Blog Post)</sub>
          </h1>
          <h1>
            3727
            <sub className="font-features subs text-red-900">
              (review on Profile)
            </sub>
          </h1>
          <h1>
            3727
            <sub className="font-features subs text-red-900">
              (review on Blog Post)
            </sub>
          </h1>
        </div>
        <div className="border-2 border-black">Profile 2</div>
        <div className="border-2 border-black">Profile 3</div>
        <div className="border-2 border-black">Profile 4</div>
        <div className="border-2 border-black">Profile 5</div>
        <div className="border-2 border-black">Profile 6</div>
        <div className="border-2 border-black">Profile 7</div>
        <div className="border-2 border-black">Profile 8</div>
        <div className="border-2 border-black">Profile 9</div>
        <div className="border-2 border-black">Profile 10</div>
      </div>
    </div>
  );
};

export default ListAppProfile;
