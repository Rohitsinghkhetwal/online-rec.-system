
import { Link } from "react-router-dom";

const Register = () => {

    



  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-violet-400 to-violet-800 w-full h-[800px] font-mono ">
        <div className="text-[40px] text-white text-center py-[40px]">
          <h1>Register</h1>
        </div>

        <div className="bg-slate-300 mx-[50px] px-[30px] py-[40px] rounded-xl h-[550px] opacity-75">
          <form>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col text-[20px]">
                <label htmlFor="Firstname">First Name</label>
                <input
                  type="text"
                 
                  name="Firstname"
                  placeholder="First name*"
                  className="bg-slate-300"
                />
                <div className="border-[1.5px] border-black"></div>
              </div>

              <div className="flex flex-col text-[20px]">
                <label htmlFor="Lastname">Last Name</label>
                <input
                  type="text"
                  
                  name="lastname"
                  placeholder="Last name*"
                  className="bg-slate-300"
                />
                <div className="border-[1.5px] border-black"></div>
              </div>

              <div className="flex flex-col text-[20px]">
                <label htmlFor="jobrole">Jobrole</label>
                {/* <select name="jobrole" id="job" className="bg-slate-200">
                  <option value="select">select</option>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                  <option value="Javascript">Javascript</option>
                  <option value="cpp">C++</option>
                </select> */}
                <input
                  type="text"
                  name="jobrole"
                  
                  placeholder="jobrole*"
                  className="bg-slate-300"
                  
                />
                <div className="border-[1.5px] border-black"></div>
              </div>
              <div className="flex flex-col text-[20px]">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                 
                  placeholder="Email*"
                  className="bg-slate-300"
                />
                <div className="border-[1.5px] border-black"></div>
              </div>
              <div className="flex flex-col text-[20px]">
                <label htmlFor="PhoneNo">Phone No.</label>
                <input
                  type="number"
                  name="phonenumber"
                 

                  placeholder="Phone No*"
                  className="bg-slate-300"
                />
                <div className="border-[1.5px] border-black"></div>
              </div>
              <div className="flex flex-col text-[20px]">
                <label htmlFor="Location">Location</label>
                <input
                  type="text"
                  name="location"
                 
                  placeholder="location*"
                  className="bg-slate-300"
                />
                <div className="border-[1.5px] border-black"></div>
              </div>
              <div className="flex flex-col text-[20px]">
                <label htmlFor="message">Message</label>
                <input type="text" name="message" className="bg-slate-300"    />
                <div className="border-[1.5px] border-black"></div>
              </div>
            </div>
            <div className="flex flex-col pt-[40px] w-[400px]">
              <button className="bg-violet-400 py-[7px] rounded-xl hover:bg-slate-200">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-row items-center justify-center pt-[30px] text-[20px]">
          <h3>If already registerd please - </h3>
          <br />
          <Link to="/login" className="text-violet-200">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
