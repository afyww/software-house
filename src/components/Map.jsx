
function Map() {
    return (
        <div className="grid grid-cols-1 bg-gradient-to-br from-black to-amber-800">
            <div className="my-16 xl:my-20 2xl:my-32 mx-10 xl:mx-48 2xl:mx-60">
                <div className="px-10 lg:px-20 xl:px-20 2xl:px-32">
                    <div className='w-full mx-auto'>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0812443948676!2d110.46186207514846!3d-6.99971426855708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d89d0806255%3A0x8191745364eecf1e!2sPT.%20CUSTOMPEDIA!5e0!3m2!1sid!2sid!4v1713803478423!5m2!1sid!2sid"
                                width="500"
                                height="300"
                                style={{ border: "0" }}
                                allowfullscreen="1"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map
