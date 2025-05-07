function Footer() {
    return(
        <>
        <div className="bg-black w-full h-[100vh] md:h-[60vh]">
        <h1 className="text-white pt-14 pl-8 md:pl-[5%]">Follow us on</h1>
        <div className="flex flex-row gap-x-4 pt-4 pl-8 md:pl-[5%]">
            <img src="./images/some_youtube.6b5d0c55.webp" className="w-8 md:w-10 md:h-8" alt="" />
            <img src="./images/some_facebook.49531fac.webp" className="w-8 md:w-10 md:h-8" alt="" />
            <img src="./images/some_instagram.2eaa320b.webp" className="w-8 md:w-10 md:h-8" alt="" />
            <img src="./images/some_twitter.c380be0d.webp" className="w-8 md:w-10 md:h-8" alt="" />
            <img src="./images/some_linkedin.c11ee8b3.webp" className="w-8 md:w-10 md:h-8" alt="" />
            <img src="./images/some_glassdoor.3e4af2f0.webp" className="w-8 md:w-10 md:h-8" alt="" />
        </div>
        <hr className="text-zinc-400 w-[90%] ml-8 mt-8 md:hidden" />
        <div>
            <h1 className="text-white pl-8 pt-8 md:hidden">Download our games from</h1>
        </div>
        <div className="flex flex-row gap-x-4 pt-4 md:justify-end md:mt-[-5%] md:pr-[5%]">
            <img src="./images/appstore.c44572b2.webp" className="w-[28%] md:w-[10%]  md:h-[9vh] ml-8 pt-4" alt="" />
            <img src="./images/googleplay.4ced544f.webp" className="w-[28%] md:w-[10%] md:h-[9vh] ml-8 pt-4" alt="" />
        </div>
        <hr className="text-zinc-400 w-[90%] md:ml-[5%] ml-8 mt-8" />
        <div>
            <ul className="text-white pl-8 pt-8 flex flex-col md:flex-row md:space-x-8 space-y-4 font-bold md:pl-[5%]">
                <a href="Terms of Service"><li>Terms of Service</li></a>
                <a href="Privacy Policy"><li>Privacy Policy</li></a>
                <a href="Parent's Guide"><li>Parent's Guide</li></a>
                <a href="Safe and Fair Play policy"><li>Safe and Fair Play policy</li></a>
                <a href="Others Legals Docs"><li>Others Legals Docs</li></a>
                <a href="Media Center"><li>Media Center</li></a>
                <a href="Our Domains"><li>Our Domains</li></a>
                <a href="Manage Cookies"><li>Manage Cookies</li></a>
            </ul>
        </div>
        <div>
            <ul className="text-zinc-500 pl-8 pt-7 flex flex-col space-y-1 md:pl-[5%]">
                <a href="Supercell Oy"><li>Supercell Oy</li></a>
                <a href="Jätkäsaarenlaituri 1"><li>Jätkäsaarenlaituri 1</li></a>
                <a href="00180 Helsinki"><li>00180 Helsinki</li></a>
                <a href="Finland"><li>Finland</li></a>
            </ul>
        </div>
        </div>
        </>
    )
}
export default Footer;