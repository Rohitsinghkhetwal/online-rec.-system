import myPhoto from "../Photos/img4.jpg";

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-violet-400 to-violet-800 w-full h-[300px]">
        <div className="text-[45px] text-white text-center pt-[40px] font-mono">
          <h1>
            Transforming Lives and <br />
            Organizations
          </h1>
        </div>
        <div className="text-[20px] text-white text-center pt-[15px] font-mono">
          <p>
            Learn more about principles , cultures peoples who support our
            endeavour
          </p>
        </div>
      </div>
      <div>
        <img src={myPhoto} />
      </div>
      <div className="bg-slate-200 h-[400px] font-mono">
        <div className="text-[35px] px-[45px] pt-[35px] text-white opacity-75 font-semibold">
        <h5>
          Learn more about things are aware that the secret to making sensible
          stuff
        </h5>
        </div>
        <div className="font-mono w-1/2 text-[20px] pt-[40px] pl-[40px] text-slate-400 font-semibold">
        <p>
          The accounts of individuals who had mental health problems at work
          have had an influence on all of us. The workplace has the potential to
          provide meaning and vigour while also promoting wellbeing. But
          frequently, businesses are confused about what to do and how to design
          a workplace that supports these results while simultaneously achieving
          business goals.
        </p>
      </div>
       
      </div>
      
    </>
  );
};

export default About;
