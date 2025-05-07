function VideoSection() {
    return (
        <>
        <div className="flex md:flex-row flex-col justify-center items-center md:space-x-11">
        <div
        class="md:w-[40%] w-[100%] box-border bg-white shadow-md md:h-[60vh] h-[48vh] mt-20 md:mt-[5%]">
            <img src="./images/clash of clans video images.webp" className="w-[100%] md:w-[100%] h-[40vh] md:h-[50vh] p-4 md:p-0" alt="" />
            <div className="flex flex-row space-x-48">
            <a className="text-blue-600 hover:text-black pl-10 font-bold md:mt-7" href="The Great Goblin Heist">The Great Goblin Heist</a>
            <img src="./images/bg_logo_youtube.8cd16aeb.webp" className="w-22 md:w-22 md:mt-7" alt="" />
            </div>
            </div>
            <div
        class="md:w-[40%] w-[100%] box-border bg-white shadow-md md:h-[60vh] h-[48vh] mt-20 md:mt-[5%]">
            <img src="./images/imgaes 2.webp" className="w-[100%] md:w-[100%] h-[40vh] md:h-[50vh] p-4 md:p-0" alt="" />
            <div className="flex flex-row space-x-40">
            <a className="text-blue-600 hover:text-black pl-10 font-bold md:mt-7" href="The Tale of The Goblin Wizard">The Tale of The Goblin Wizard</a>
            <img src="./images/bg_logo_youtube.8cd16aeb.webp" className="w-20 md:w-22 md:mt-7" alt="" />
            </div>
        </div>
        </div>
        </>
    )
}
export default VideoSection