'use client'
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
const AppLayout=({ children }) => {
    const [isSidebarOpen, setSidebarOpen]=useState(false);
    const [showIcon, setShowIcon]=useState(false);
    const pathname=usePathname();
    useEffect(() => {
        const handleResize=() => {
            if (window.innerWidth>=768) {
                setShowIcon(false)
                setSidebarOpen(true)
            } else {
                setSidebarOpen(false)
                setShowIcon(true);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="flex bg-lightblue h-[100vh]">
            <div className={`min-w-[248px] z-20 h-full  bg-lightblue md:relative absolute transition-all duration-300 ${isSidebarOpen? 'left-0':'left-[-248px]'}`}>
                <Sidebar
                    setSidebarOpen={setSidebarOpen}
                    showIcon={showIcon}
                />
            </div>
            <div className={`flex flex-col  md:w-[calc(100%-248px)] w-full bg-[#f1f4f9] ${isSidebarOpen? 'rounded-tl-[2.5rem]':''} `}>
                <div className="min-h-[60px]">
                    <Navbar
                        showIcon={showIcon}
                        setShowIcon={setShowIcon}
                        isSidebarOpen={isSidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                    />
                </div>
                <div
                    className="p-5  z-0 bg-gradient-to-br from-[#0b326c]  to-pink-500">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppLayout