import React, { useState } from "react"
const Mediocrity = () => {
    const initialText = "Go Alpha"
    const [name, setName] = useState(initialText)
    return (
        <>
            <div className="bg-black py-[147px] flex flex-col h-[790px] justify-between border-t border-zinc-700">
                <div className="text-center flex justify-center items-center">
                    <h2 className="text-white  text-[72px] leading-[140%] tracking-[-0.03em] font-extrabold uppercase w-full max-w-[1536px] basement-bold">
                        A no-bs team of a-players that focuses on the last 20%, which gets 80% of the results.
                    </h2>
                </div>

                <div className="text-center italic text-zinc-100 font-Archivo font-light tracking-[-2%] text-xl leading-[30px] ">
                    <p>Why settle for mediocore?</p>
                </div>

                {/* <hr className="border-zinc-700 h-[1px] mt-[147px]" /> */}
            </div>
            <div className='w-full  imgfooter '>

                <p className='w-full text-[20px] leading-6 text-center border-zinc-700 border text-white uppercase py-14 '>Book a call now</p>
            </div>
        </>
    )
}

export default Mediocrity
