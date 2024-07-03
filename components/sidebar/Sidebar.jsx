'use client'
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
const Sidebar=({ showIcon, setSidebarOpen }) => {

    return (
        <div className="w-full h-screen flex flex-col items-center p-5 gap-y-5 border-r-[1px] border-white border-opacity-40">
            {showIcon&&(
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="ml-auto">
                    <RxCross2 className="text-[2rem] text-white" />
                </div>
            )}
            <div className="flex items-center gap-x-3 h-[3rem]">
                <p className="text-md font-[400] text-white">Arbro Assignment</p>
            </div>
            {/* <div className="h-[1px] bg-white w-full opacity-15">
            </div> */}
            {/* <Link
                className={`flex items-center gap-x-3 h-[35px] w-full p-2 hover:bg-white hover:bg-opacity-20 ${pathname==="/"? 'bg-opacity-20 bg-white':''} rounded-lg cursor-pointer`}
                href={"/"}
            >
                <AiOutlineHome className="text-white text-[1rem]" />
                <p className="text-sm font-[400] text-white">Dashboard</p>
            </Link> */}
            <div className="w-full flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-3">
                    {/* <h2 className="font-[600] text-lg text-white">Heading</h2> */}
                    <div className="flex flex-col gap-y-3">
                        <Link
                            href={"/"}
                        >
                            <div
                                className={`text-white flex items-center gap-x-3 h-[35px] w-full p-2 hover:bg-white hover:bg-opacity-20 bg-opacity-20 bg-white  rounded-lg cursor-pointer`}
                            >
                                <p className="text-sm font-[400] text-white">Students</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-[1px] bg-white w-full opacity-15">
            </div>
        </div>
    )
}

export default Sidebar