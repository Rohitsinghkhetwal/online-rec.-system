import { useState } from "react";
import { Data } from "./Data";


const Search = () => {
  console.log(Data);
  const [searchJob, setSearchJob] = useState("");
  return (
    <div className="bg-gradient-to-r from-purple-300 via-violet-400 to-violet-800 w-full h-[800px] ">

        <div className="text-center h-[100px] text-white text-[20px] pt-[15px]">
            <label className="pr-[15px]">Search</label>
            <input className="bg-slate-300 p-[10px] rounded-xl"
            onChange={(e) => setSearchJob(e.target.value)}
            />

        </div>








      <div className="flex items-center justify-center">
        <table className="border px-[20px] text-[20px] text-center">
          <thead>
            <tr>
              <th className="border px-[20px]">Name</th>
              <th className="border px-[20px]">Jobrole</th>
              <th className="border px-[20px]">Location</th>
            </tr>
          </thead>
          <tbody>
            {Data.filter((value) => {
                if(searchJob === ""){
                    return value
                }else if(
                    value.jobRole.toLowerCase().includes(searchJob.toLowerCase()) || 
                    value.Location.toLowerCase().includes(searchJob.toLowerCase()) ||
                    value.name.toLowerCase().includes(searchJob.toLowerCase())
                ){
                    return value
                }
            }).map((person) => (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.jobRole}</td>
                <td>{person.Location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
