const Home = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-purple-300 via-violet-400 to-violet-800 w-full h-[1000px]">
        <div className="flex items-center justify-center  h-[350px]">
          <h1 className="text-[50px] text-white font-mono pt-[100px] ">
            Welcome to our Online <br />
            <span className="mx-[20px]">Recruitment System</span>{" "}
          </h1>
        </div>

        <div className="flex items-center justify-center text-white">
          <div>
            <p className="text-[18px] font-mono">
              Our Online recruitment solution is intended effective
              <br /> platform using technology to streamline the entire hiring
              <br />
              process, making it simpler than ever to find
            </p>
          </div>
        </div>

        <div className="my-[100px] grid grid-cols-3 gap-10 mx-[40px] font-mono">
          <div className="bg-slate-300  px-[10px] rounded-xl flex flex-col items-center py-[20px] h-[300px] hover:bg-slate-200">
            <div className="text-[25px] text-center">
              <h5 className="text-violet-700">Professional  </h5>
            </div>
            <div className="mt-[20px] mb-[40px]">
              <p className="text-[20px]">
                Employee you need to start creating
                <br />a better working experience
              </p>
            </div>
            <button className="rounded-xl text-[20px] bg-violet-400 p-[10px] hover:bg-violet-200">
              Get Started
            </button>
          </div>

          <div className="bg-slate-300 px-[10px] rounded-xl flex flex-col items-center py-[20px] h-[300px] hover:bg-slate-200">
            <div className="text-[25px] text-center">
              <h5 className="text-violet-700">Enterprize</h5>
            </div>
            <div className="mt-[20px] mb-[40px]">
              <p className="text-[20px] text-center">
              Create impactful change by understanding your employees experience.
              </p>
            </div>
            <button className="rounded-xl text-[20px] bg-violet-400 hover:bg-violet-200 p-[10px]">
              Get Started
            </button>
          </div>

          <div className="bg-slate-300 px-[10px] rounded-xl flex flex-col items-center py-[20px] h-[300px] hover:bg-slate-200">
            <div className="text-[25px] text-center">
              <h5 className="text-violet-700">Corporate   </h5>
            </div>
            <div className="mt-[20px] mb-[40px]">
              <p className="text-[20px] text-center">
              Unlock the full potential of your workforce with our innovative software.
              </p>
            </div>
            <button className="rounded-xl text-[20px] bg-violet-400 p-[10px] hover:bg-violet-200">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center hover:bg-slate-200 ">
        <div className="absolute px-[30px] bg-slate-300 font-mono rounded-xl">
          <div className="my-[40px]  rounded-xs">
            <h5 className="text-[20px]">
              Find out how our advising , facilitation , and consulting services
              may help your company succeed.
            </h5>
            <button className="p-[8px] bg-violet-400 rounded-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 h-[700px] font-mono flex items-center justify-center">
        <div className="pt-[100px] grid gap-x-1.5 grid-cols-2 px-[50px] ">
          <div className="ml-[40px] flex flex-col justify-center">
            <h2 className="text-[35px] pb-[25px]">Benifits and Perks</h2>
            <p className="text-[20px]">
              We consider people to be foundation of our organization , mission,
              and values. The numerous incentives and previleges offered to
              inhance the wellbeing and security of our employees around the
              world reflect this belief.
            </p>
          </div>
          <div className="flex justify-end">
            <div >
            <img
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="image" height="600px" width="500px"
              className="rounded-xl"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
