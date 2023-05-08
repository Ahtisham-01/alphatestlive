import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
    const router = useRouter()
    // console.log("router",router);
    return (
        <>
            <div className="bg-transparent pt-[48px] relative z-10">
                <div className="flex justify-between items-center px-20">
                    <Link href="/">
                       
                            <div className="logo">
                                <img
                                    src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/logo.svg"
                                    alt="logo"
                                />
                            </div>
                     
                    </Link>
                    <div className="header-btns  flex  space-x-6 ">
                        <Link href="/the-alpha-way">
                            <div
                                className={`${
                                    router.pathname == "/the-alpha-way"
                                        ? "font-bold"
                                        : "font-light"
                                } text-white font-Archivo text-sm leading-[14px]  tracking-[-1%]`}
                            >
                                THE ALPHA WAY
                            </div>
                        </Link>
                        <Link href="/dope-stuff">
                            <div
                                className={`${
                                    router.pathname == "/dope-stuff"
                                        ? "font-bold"
                                        : "font-light"
                                } text-white font-Archivo text-sm leading-[14px]  tracking-[-1%]`}
                            >
                                DOPE STUFF
                            </div>
                        </Link>
                        <Link href="/people">
                            <div
                                className={`${
                                    router.pathname == "/people"
                                        ? "font-bold"
                                        : "font-light"
                                } text-white font-Archivo text-sm leading-[14px]  tracking-[-1%]`}
                            >
                                THE PEOPLE
                            </div>
                        </Link>
                        {/* <Link href="/talk-to-me"> */}
                        <div
                            className={`${
                                router.pathname == "/talk-to-me"
                                    ? "font-bold"
                                    : "font-light"
                            } text-white font-Archivo text-sm leading-[14px] tracking-[-1%] cursor-pointer`}
                        >
                            TALK TO ME
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
