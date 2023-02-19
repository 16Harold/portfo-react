import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="w-full  flex-col  items-center ">
      {/* heading */}
      <h1 className="uppercase font-bold text-designColor tracking-wide text-2xl p-2 md:p-0">
        my resume
      </h1>
      {/* heading end */}

      {/* main container */}
      <div className="grid  md:grid-cols-2 gap-4">
        {/* left container */}
        <div className="md:mt-10 uppercase w-full">
          <div className="w-full grid  p-2 md:p-0 gap-2">
            <h2 className="resumeLi text-sm md:text-xl h-10 md:h-20 rounded-lg ">
              Education
            </h2>
          </div>

          <div className="w-full md:flex p-2 md:p-0 md:gap-20 h-auto border-l-[6px] border-l-[#0e1f1e]  ">
            <div className="flex-1">
              {/* zyberlab solutions card */}
              <div className="mt-3 h-auto   flex-col">
                <div className="w-full h-1/3 group flex ">
                  <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black">
                      <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                    </span>
                  </div>
                  <div className="w-full bgOpacity hover:bg-opacity-30 duration-300 rounded-lg px-10 py-3 flex flex-col justify-center gap-10 shadow-shadowOne">
                    <div>
                      <h3 className="text-xl  text-[#89dee6] font-semibold group-hover:text-designColor duration-300 uppercase">
                        Zyberlab Solutions
                      </h3>
                      <p className="text-md my-3 md:my-0 md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        Ux / Ui Designer Upcoming Bootcamp .....
                      </p>
                      <p className="text-md md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300 ">
                        march 2022 - april-2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* zyberlab solutions end */}

              {/* Kodego card */}
              <div className="mt-3 h-auto   flex-col gap-15">
                <div className="w-full h-1/3 group flex ">
                  <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black">
                      <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                    </span>
                  </div>

                  <div className="w-full bgOpacity hover:bg-opacity-30 duration-300 rounded-lg px-10 py-3 flex flex-col justify-center gap-10   shadow-shadowOne">
                    <div>
                      <h3 className="text-xl text-[#89dee6] font-semibold group-hover:text-designColor duration-300 uppercase">
                        Kodego
                      </h3>
                      <p className="text-md my-3 md:my-0 md:leading-10  font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        Fullstack Web Development
                      </p>
                      <p className="text-md md:leading-10  font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        sept. 2022 - Jan. 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* kodego card end */}

              {/* college - 2 card */}
              <div className="mt-3 h-auto flex-col gap-15">
                <div className="w-full h-1/3 group flex ">
                  <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black">
                      <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                    </span>
                  </div>
                  <div className="w-full bgOpacity hover:bg-opacity-30 duration-300 rounded-lg px-10 py-3 flex flex-col justify-center gap-10 shadow-shadowOne">
                    <div>
                      <h3 className="text-xl text-[#89dee6] font-semibold group-hover:text-designColor duration-300 uppercase">
                        Philippine Merchant Marine Academy
                      </h3>
                      <p className="text-md my-3 md:my-0 md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        Bs Marine Engineering
                      </p>
                      <p className="text-md md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        1997-1999
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* college - 2 card end */}

              {/* college - 1 card */}
              <div className="mt-3 h-auto  flex-col gap-15">
                <div className="w-full h-1/3 group flex ">
                  <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black">
                      <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                    </span>
                  </div>
                  <div className="w-full bgOpacity hover:bg-opacity-30 duration-300 rounded-lg px-10 py-3 flex flex-col justify-center gap-10 shadow-shadowOne">
                    <div>
                      <h3 className="text-xl text-[#89dee6] font-semibold group-hover:text-designColor duration-300 uppercase">
                        Adamsom University
                      </h3>
                      <p className="text-sm my-3 md:my-0 md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        Bs Civil Engineering
                      </p>
                      <p className="text-md md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        1996-1997
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* college - 1 card end */}

              {/* high school card */}
              <div className="mt-3    flex-col gap-15">
                <div className="w-full h-1/3 group flex ">
                  <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black">
                      <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                    </span>
                  </div>

                  <div className="w-full bgOpacity hover:bg-opacity-30 duration-300 rounded-lg px-10 py-3 flex flex-col justify-center gap-10   shadow-shadowOne">
                    <div>
                      <h3 className="text-xl text-[#89dee6] font-semibold group-hover:text-designColor duration-300 uppercase">
                        Don Bosco High School
                      </h3>
                      <p className="text-md my-3 md:my-0 md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        Lagawe, Ifugao
                      </p>
                      <p className="text-md md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        1991 - 1995
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* high school card end */}
            </div>
          </div>
          {/* left container end*/}
        </div>

        {/* left container */}
        <div className="md:mt-10 uppercase w-full">
          <div className="w-full grid  p-2 md:p-0 gap-2">
            <h2 className="resumeLi text-sm md:text-xl h-10 md:h-20 rounded-lg ">
              Achiievements
            </h2>
          </div>

          <div className="w-full md:flex p-2 md:p-0 md:gap-20 h-auto border-l-[6px] border-l-[#0e1f1e]  ">
            <div className="flex-1">
              {/* zyberlab solutions card */}
              <div className="mt-3 h-auto   flex-col">
                <div className="w-full h-1/3 group flex ">
                  <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black">
                      <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                    </span>
                  </div>
                  <div className="w-full bgOpacity hover:bg-opacity-30 duration-300 rounded-lg px-10 py-3 flex flex-col justify-center gap-10 shadow-shadowOne">
                    <div>
                      <h3 className="text-xl  text-[#89dee6] font-semibold group-hover:text-designColor duration-300 uppercase">
                        best in capstone project
                      </h3>
                      <p className="text-md my-3 md:my-0 md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        kodego boot Bootcamp
                      </p>
                      <p className="text-md md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300 ">
                        march 2022 - april-2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* zyberlab solutions end */}

              {/* Kodego card */}
              <div className="mt-3 h-auto   flex-col gap-15">
                <div className="w-full h-1/3 group flex ">
                  <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black">
                      <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                    </span>
                  </div>

                  <div className="w-full bgOpacity hover:bg-opacity-30 duration-300 rounded-lg px-10 py-3 flex flex-col justify-center gap-10   shadow-shadowOne">
                    <div>
                      <h3 className="text-xl text-[#89dee6] font-semibold group-hover:text-designColor duration-300 uppercase">
                        Kodego
                      </h3>
                      <p className="text-md my-3 md:my-0 md:leading-10  font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        Fullstack Web Development graduate
                      </p>
                      <p className="text-md md:leading-10  font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        sept. 2022 - Jan. 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* kodego card end */}

              {/* college - 2 card */}
              <div className="mt-3 h-auto flex-col gap-15">
                <div className="w-full h-1/3 group flex ">
                  <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black">
                      <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                    </span>
                  </div>
                  <div className="w-full bgOpacity hover:bg-opacity-30 duration-300 rounded-lg px-10 py-3 flex flex-col justify-center gap-10 shadow-shadowOne">
                    <div>
                      <h3 className="text-xl text-[#89dee6] font-semibold group-hover:text-designColor duration-300 uppercase">
                        Philippine Merchant Marine Academy
                      </h3>
                      <p className="text-md my-3 md:my-0 md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        Parading element member
                      </p>
                      <p className="text-md md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        1997-1999
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* college - 2 card end */}

              {/* college - 1 card */}
              <div className="mt-3 h-auto  flex-col gap-15">
                <div className="w-full h-1/3 group flex ">
                  <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black">
                      <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                    </span>
                  </div>
                  <div className="w-full bgOpacity hover:bg-opacity-30 duration-300 rounded-lg px-10 py-3 flex flex-col justify-center gap-10 shadow-shadowOne">
                    <div>
                      <h3 className="text-xl text-[#89dee6] font-semibold group-hover:text-designColor duration-300 uppercase">
                        Adamsom University
                      </h3>
                      <p className="text-sm my-3 md:my-0 md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        Basketball department Varsity
                      </p>
                      <p className="text-md md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        1996-1997
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* college - 1 card end */}

              {/* high school card */}
              <div className="mt-3    flex-col gap-15">
                <div className="w-full h-1/3 group flex ">
                  <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black">
                      <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                    </span>
                  </div>

                  <div className="w-full bgOpacity hover:bg-opacity-30 duration-300 rounded-lg px-10 py-3 flex flex-col justify-center gap-10   shadow-shadowOne">
                    <div>
                      <h3 className="text-xl text-[#89dee6] font-semibold group-hover:text-designColor duration-300 uppercase">
                        Don Bosco High School
                      </h3>
                      <p className="text-md my-3 md:my-0 md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        Basketball varsity member
                      </p>
                      <p className="text-md md:leading-10 font-semibold text-gray-400 group-hover:text-[#89dee6] duration-300">
                        1991 - 1995
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* high school card end */}
            </div>
          </div>
          {/* left container end*/}
        </div>
      </div>
      {/* maincard container end*/}
    </section>
  );
};

export default Resume;
