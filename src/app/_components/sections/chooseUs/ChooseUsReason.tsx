import React from "react";

export default function ChooseUsReason() {
  return (
    <section className=" w-full min-h-screen min-w-full bg-[#F3ECEC] py-48">
      <div className="lg:flex">
        <div className="w-1/2 px-10 lg:bg-[url('/axtra/coose-01.png')] lg:bg-[length:110px] lg:bg-[position:left_20px_bottom_140px] lg:bg-no-repeat">
          <p className="uppercase text-xl font-medium">
            Why <br /> Choose Us
          </p>
          <h2 className="uppercase font-medium text-5xl text-slate-900 mt-8">
            Keword,Research Strategy, Survey, & Analytics
          </h2>
          <p className="mt-6 lg:mt-14 w-96 lg:ml-36 text-slate-600">
            Attention, we take out our round glasses and our sweater with elbow
            patches to go back to the origins of the user experience: the first
            mention of the user and its importance was born in the
          </p>
          <div className="flex items-center mt-6 lg:mt-14 lg:ml-36">
            <button className="uppercase px-4 bg-transparent border border-gray-500 rounded-full">
              Google
            </button>
            <button className="uppercase px-4 bg-transparent border border-gray-500 rounded-full">
              Pinterest
            </button>
            <button className="uppercase px-4 bg-transparent border border-gray-500 rounded-full">
              Instagram
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="">
            <div className="flex gap-2 md:gap-6 ml-14 md:ml-20 mt-10 md:mt-0">
              <div className=" ">
                <p className="text-4xl md:text-5xl text-gray-900 border-4 border-gray-900 inline-block p-5 md:p-9 py-8 md:py-14 rounded-full">
                  60%
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-medium text-gray-900">Strategy</h2>
                <p className="md:w-64 text-gray-700 mt-3">
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>

            <div className="flex gap-6 ml-14 md:ml-0 my-8">
              <div className=" ">
                <p className="text-4xl md:text-5xl text-gray-900 border-4 border-gray-900 inline-block p-5 md:p-9 py-8 md:py-14 rounded-full">
                  90%
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-medium text-gray-900">Audience</h2>
                <p className="md:w-64 text-gray-700 mt-3">
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>

            <div className="flex gap-6 ml-14 md:ml-20">
              <div className=" ">
                <p className="text-4xl md:text-5xl text-gray-900 border-4 border-gray-900 inline-block p-5 md:p-9 py-8 md:py-14 rounded-full">
                  70%
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-medium text-gray-900">Keyword</h2>
                <p className="w-64 text-gray-700 mt-3">
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
