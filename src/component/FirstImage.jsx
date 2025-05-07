function FirstImage() {
    return (
        <>
        <div className="w-full md:h-[83vh]">
            <img src="./images/clans.jpg" className="w-full h-[50vh] md:hidden" alt="" />
            <img src="./images/clans d.jpg" className="w-full h-[85vh] hidden md:inline bottom-[15%]" alt="" />
            <img src="./images/clash.webp" className="w-[50%] absolute bottom-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden" alt="" />
            <img src="./images/clash.webp" className="w-[20%] absolute bottom-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:inline" alt="" />
        </div>
        </>
    )
}
export default FirstImage