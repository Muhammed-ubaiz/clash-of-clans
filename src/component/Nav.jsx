function Nav() {
  return (
    <>
      <div className=" flex justify-center items-center w-full">
        <nav className="bg-black w-[80%] h-[11vh] top-[0%] hidden md:flex text-center items-center gap-x-8 fixed justify-between">
        <img src="./images/supercell_logo.50e3c1ff.webp" className="w-[8%] p-4" alt="" />
        <ul className="flex flex-row text-white font-bold gap-x-8 pr-[40%]">
          <a href="Games"><li className="text-zinc-400 hover:text-white">Games</li></a>         
          <a href="Careers"><li className="text-zinc-400 hover:text-white">Careers</li></a>
          <a href="Support"><li className="text-zinc-400 hover:text-white">Support</li></a>
          <a href="About Us"><li className="text-zinc-400 hover:text-white">About Us</li></a>
        </ul>
        <div className="flex flex-row gap-x-8 pr-[5%]">
          <img src="./images/supercell_creators_grey.f699541d.svg" className="w-6" alt="" />
          <img src="./images/supercell_make_grey.964b2d8d.svg" className="w-8" alt="" /> 
          <img src="./images/supercell_id_grey.62affa0b.svg" className="w-6" alt="" />
        </div>
        </nav>
      </div>
    </>
  );
}
export default Nav;
 