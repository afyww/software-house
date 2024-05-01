

function Contactus() {
    return (
        <div className='grid grid-cols-1  bg-black'>
            <div className="my-32 xl:my-36 2xl:my-52 mx-5 xl:mx-48 2xl:mx-52">
                <div className="space-y-8 xl:space-y-24 2xl:space-y-36">
                    <div className="space-y-2 xl:space-y-4">
                    <h1 className="text-2xl text-center xl:text-center xl:text-6xl 2xl:text-7xl text-white  font-medium">Contact Us</h1>
                    </div>
                    <form className="space-y-2 xl:space-y-8 2xl:space-y-16">
                        <div className="grid grid-cols-1 xl:grid-cols-2 space-y-5 xl:space-y-0">
                            <div className="mx-10">
                                <div className="">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">*Name</label>
                                </div>
                                <div className="">
                                    <input
                                        type="text"
                                        name="name"
                                        value=''
                                        onChange=''
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">*Email</label>
                                </div>
                                <div className="">
                                    <input
                                        type="text"
                                        name="name"
                                        value=''
                                        onChange=''
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-white outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mx-10">
                                <div className="">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-white text-left">*Pesan</label>
                                </div>
                                <div className="">
                                    <textarea
                                        type="text"
                                        name="name"
                                        value=''
                                        onChange=''
                                        rows="8"
                                        className="w-full text-white rounded-none py-2 bg-transparent border-b-2 border-white outline-none"
                                    >

                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 mx-auto w-fit xl:p-4 hover:scale-110 hover:bg-gradient-to-l from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl duration-200 delay-150">
                            <button className="text-white text-center px-6 text-base xl:text-xl font-bold">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactus
