import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import logo from "/assets/shared/logo.svg"
import hamburger from "/assets/shared/icon-hamburger.svg"
import Destination from "../pages/Destination";
function Header() {
    const [menoVisibile, setVisibile] = useState(false) 
    return(
        <>
        <main className="   bg-[url(assets/home/background-home-mobile.jpg)] 
                            h-screen bg-cover px-header text-center">

{/* 
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 0px 32px;
gap: 48px;

position: absolute;
width: 254px;
right: 0px;
top: 0px;
bottom: 0px;

background: rgba(11, 13, 23, 0.15);
backdrop-filter: blur(40px);

flex: none;
order: 2;
flex-grow: 0;
z-index: 2; */}





        <div >
            <nav className="flex flex-col h-screen absolute  
                            right-0 w-[70vw] bg-[rgba(11,13,23,0.15)] backdrop-blur-[40px] z-999 ">
                <Link to="/crew.jsx">Crew</Link> 
                <Link to="/Destination.jsx">Destination</Link> 
                <Link to="/Technology.jsx">Technology</Link>
            </nav> 
        </div>
        
        <div className=" flex flex-row justify-between items-center py-header w-full">
            <img    className="w-[40px] h-[40px] "
                    src={logo} 
                    alt="logo of space travelling" />

            <img    
                    onClick={ () => setVisibile( prev => !prev)}
                    className=""
                    src={hamburger} 
                    alt=" a hamburger-meno icon" />
        </div>

        {/* this is the section holder*/}
        <div className="flex flex-col">

            {/* this is the upper part  */}
            <section className="text-white uppercase">

                <p className="text-[1rem]  barlow tracking-[0.15rem]">So, you want to travel to</p>
                <h1 className="text-[5rem] Bellefair py-6">Space</h1>
                <p className="normal-case text-[0.9375rem]">
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the edge 
                    of it. Well sit back, and relax because we’ll give you a truly 
                    out of this world experience!
                </p>

            </section>

            {/* this is the bottom part */}
            <section>

                <div className="flex justify-center items-center relative">
                    <Link
                        to="/destination"
                        className="
                            bg-white w-[244px] h-[244px] opacity-0
                            rounded-full flex mx-auto mt-[7.5rem]
                            justify-center items-center text-center absolute
                            hover:opacity-25
                        "
                    >
                    </Link>
                        <div 
                            className=" bg-white-Pure w-[144px] h-[144px] rounded-full flex mx-auto mt-[7.5rem] 
                                        justify-center items-center text-center cursor-pointer" >
                            <span className="Bellefair text-[1.25rem]">Explore</span>
                        </div>
                </div>
            </section>
        </div>

        </main>
        </>
    )
}
export default Header

