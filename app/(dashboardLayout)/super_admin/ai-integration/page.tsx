import React from "react";

const AiIntegrationPage = () => {
  return (
    <div>
      <h1 className="text-3xl mb-2">Android Application </h1>
      {/* Overall Form */}
      <div className="grid grid-cols-1 ">
        <div className="border-2 border-black flex justify-between">
          <h1>Site 1</h1>
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
        <div className="border-2 border-black">Site 2</div>
        <div className="border-2 border-black">Site 3</div>
        <div className="border-2 border-black">Site 4</div>
        <div className="border-2 border-black">Site 5</div>
        <div className="border-2 border-black">Site 6</div>
        <div className="border-2 border-black">Site 7</div>
        <div className="border-2 border-black">Site 8</div>
        <div className="border-2 border-black">Site 9</div>
        <div className="border-2 border-black">Site 10</div>
      </div>

      <h1 className="text-3xl mb-2">Web Application </h1>
      {/* Web Application Details */}
      <div className="grid grid-cols-1 ">
        <div className="border-2 border-black flex justify-between">
          <h1>Profile 1</h1>
        </div>
        <div className="border-2 border-black">Site 2</div>
        <div className="border-2 border-black">Site 3</div>
        <div className="border-2 border-black">Site 4</div>
        <div className="border-2 border-black">Site 5</div>
        <div className="border-2 border-black">Site 6</div>
      </div>
    </div>
  );
};

export default AiIntegrationPage;
