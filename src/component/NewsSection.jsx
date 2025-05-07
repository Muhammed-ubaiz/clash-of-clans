function NewsSection() {
    return (
        <>
        <div className="pt-24 text-center">
        <h1 className="text-4xl font-bold">NEWS</h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center md:flex-col items-center pt-16 flex-col space-y-5">
         <img src="./images/clash of clans news images.jpg" className="w-[90%]" alt="" />
         <h1 className="text-[#fb4a9d] font-bold">CLASH OF CLANS</h1>
         <a className="font-medium text-xl" href="A new Update is here!">A new Update is here!</a>
        </div>
        <div className="flex justify-center items-center pt-16 flex-col space-y-5">
            <img src="./images/clash of clans news 2.png" className="w-[90%]" alt="" />
            <h1 className="text-[#fb4a9d] font-bold">CLASH OF CLANS</h1>
            <a href="Snake Festival:Lunar New Year Medal Event" className="font-medium text-xl">Snake Festival:Lunar New Year Medal Event</a>
        </div>
        </div>
        <button className="bg-[#2d85f3] text-white font-bold py-3 px-4 rounded mt-14">CLASH OF CLANS NEWS</button>
        </div>
        </>
    )
}
export default NewsSection;