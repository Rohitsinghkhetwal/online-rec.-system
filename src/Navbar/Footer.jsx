const Footer = () => {
  return (
    <div className="bg-slate-300 font-mono  px-[50px] py-[40px]">
      <div className="grid grid-cols-3 gap-5 text-center ">
        <div className="p-[15px]">
          <h2 className="text-zinc-400 text-[20px]">Business solution</h2>
          <h2>Platform</h2>
          <h2>Service</h2>
        </div>
        <div className="p-[15px]">
          <h2 className="text-zinc-400 text-[20px]">Science</h2>
          <h2>Our approach</h2>
          <h2>Data science</h2>
        </div>
        <div className="p-[15px]">
          <h2 className="text-zinc-400 text-[20px]">Company</h2>
          <h2>About</h2>
          <h2>Pricing</h2>
        </div>
        </div>
        <div className="text-center pt-[20px]" >
            <h5 className="font-thin">copyright All right reserved</h5>
        </div>
      
    </div>
  );
};

export default Footer;
