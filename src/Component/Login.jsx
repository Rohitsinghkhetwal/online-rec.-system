import { Link } from "react-router-dom"


const Login = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-violet-400 to-violet-800 w-full h-[800px] font-mono">
        <div className="text-[40px] text-white text-center py-[40px]">
          <h1>Login</h1>
        </div>


        <div className="flex items-center justify-center">

        <div className="bg-slate-300 mx-[50px] w-1/3 px-[30px] py-[40px] rounded-xl h-[500px] opacity-75">
          <form>
            <div className="flex flex-col text-[20px]">
              <label htmlFor="Firstname">Email</label>
              <input
                type="Email"
                placeholder="Email*"
                className="bg-slate-300"
              />
              <div className="border-[1.5px] border-black"></div>
            </div>


            <div className="flex flex-col text-[20px] pt-[30px]">
              <label htmlFor="Password">Password</label>
              <input
                type="text"
                placeholder="Password*"
                className="bg-slate-300"
              />
              <div className="border-[1.5px] border-black"></div>
            </div>

            <div className="flex items-center justify-center pt-[50px]">
                <button className="bg-violet-400 text-[20px] px-[20px] py-[5px] rounded-xl hover:bg-slate-200">LogIn</button>
            </div>

            <div className="text-center pt-[40px]">
                <h3>If you have not registered yet. </h3>
                <Link to="/register" className="text-slate-700">Register Now</Link>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Login;
