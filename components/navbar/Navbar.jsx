

import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
const Navbar=({ setSidebarOpen, showIcon }) => {
    return (
        <div className='h-full flex items-center justify-between sm:px-8 px-3 border-b-2 border-white border-opacity-40 bg-lightblue'>

            <div className="flex items-center gap-x-6">
                {showIcon&&(
                    <div
                        onClick={() => setSidebarOpen(true)}
                    >
                        <GiHamburgerMenu className="text-[1.5rem]" />
                    </div>
                )}
            </div>
            <div className="flex items-center gap-x-5">
                <div className="sm:flex hidden items-center w-[220px] h-[38px] rounded-2xl bg-slate-200 border-2 border-grey px-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent focus:outline-none w-full"
                    />
                    <IoSearchOutline className="text-2xl text-slate-500" />
                </div>
                <div className="relative">
                    <div className="w-[0.7rem] h-[0.7rem] absolute right-[2px] top-[1px] bg-red-600 rounded-full">
                    </div>
                    <IoMdNotificationsOutline className="text-2xl text-slate-500 " />
                </div>

            </div>
        </div>
    )
}

export default Navbar