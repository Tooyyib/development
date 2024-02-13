import zully from "../../../assets/images/zully.jpeg"
import { useState } from "react";
import {  VscClose } from 'react-icons/vsc';
import {  GiHamburgerMenu } from 'react-icons/gi';




const Header = () => {
  const [drop, setDrop] = useState(false);

  const collapse = () => {
    setDrop(true);
  }
  const close = () => {
    setDrop(false);
  }
  
  


  return (
    <div className="flex justify-between p-3 bg-[#fbf5f9] items-center bg-white text-[#38103d] text-center drop-shadow-sm">
    <div className="flex items-center text-center gap-2">
      <img
        src={zully}
        alt="zully"
        className="sm:h-[3rem] w-[3rem] rounded-full lg:mx-auto  focus:animate-none hover:animate-none "
      />

      <div>
        <p className="text-[#3c1447] font-bold bg-[#38203d] p-[0.2rem] text-white rounded">
          أكاديمية زليخا العالمية
        </p>
        <p className="font-bold text-[0.8rem] text-white bg-[#38203d] rounded p-[0.3rem]">
          The Zulaykha Global Academy
        </p>
      </div>
    </div>
    <div className={`${drop ? 'block lg:flex absolute lg:static z-20  top-[75px] shadow-lg space-y-3 py-3': 'hidden lg:flex'} gap-10 bg-white w-full lg:bg-transparent lg:w-auto items-center text-[1.1rem]`}>
      <div>
        <a href="/">Home</a>
      </div>
      <div><button><a href="#contactus">Contact us</a></button></div>
      <div><button><a href="#aboutus">About us</a></button></div>
      {/* <div><a href="/Enlightment">Spiritual Enlightment</a></div> */}
      <div className="sm:my-[1rem] lg:my-[0rem]">
        <button className="py-2 px-4 bg-[#38103d] border-dotted border-2 focus:animate-none hover:animate-none  text-[#fdfdfd] font-bold rounded hover:-translate-y-1 duration-700 text-[1rem]">
          <a href="http://wa.me/2348133128088">Membership</a>
        </button>
      </div>
      <div className="sm:my-[1rem] lg:my-[0rem]">
        <button className="bg-[#fdb72f] py-2 px-4 border-dotted border-2 animate-bounce focus:animate-none hover:animate-none  rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
          <a href="https://gofund.me/539f99e0">Donate</a>
        </button>
      </div>
    </div>
     <div onClick={collapse} className={`${drop?'hidden':'block lg:hidden'}`}><GiHamburgerMenu/></div> 
    <div onClick={close} className={`${!drop?'hidden':'block lg:hidden'}`}><VscClose /> </div>   
  </div>
  // 
  )
}

export default Header