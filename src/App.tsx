import { BsSend } from "react-icons/bs";
import UserQuery from "./components/UserQuery";
import BotResponse from "./components/BotResponse";
import { IoSunnySharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { MdOpenInNew } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const App = () => {
  return (
    <div className="w-full h-full bg-primaryBackground flex">
      {/* sidebar */}
      <div className="w-[20%] h-full text-white p-4">
        {/* upper division */}
        <div className="w-full h-[70%] flex flex-col gap-4 border-b border-white/20">
          <div className="flex justify-start items-center border border-white/20 rounded-md px-4 py-2 gap-4 cursor-pointer">
            <FiEdit />
            <p className="">New Chat</p>
          </div>

          <div className="text-sm text-themeGray-8E italic text-center">
            History is temporarily unavailable We're working to restore this feature as soon as possible
          </div>
        </div>

        {/* lower division */}
        <div className="w-full h-[30%] flex flex-col justify-start gap-4 mt-4">
          <div className="flex justify-start items-center gap-4 cursor-pointer">
            <IoSunnySharp />
            <p>Light Mode</p>
          </div>
          <div className="flex justify-start items-center gap-4 cursor-pointer">
            <FaRegUser />
            <p>My Account</p>

          </div>
          <div className="flex justify-start items-center gap-4 cursor-pointer">
            <MdOpenInNew />
            <p>Updates & FAQ</p>
          </div>
          <div className="flex justify-start items-center gap-4 cursor-pointer">
            <MdLogout />
            <p>Logout</p>
          </div>

        </div>
      </div>

      {/* main content */}
      <div className="w-[80%] h-full bg-themeGray-44 flex flex-col">
        <div className="w-full h-[10%] flex items-center bg-themeGray-40 text-white relative">
          <div className="text-2xl px-4">
            Open AI
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 text-md text-center">
            Welcome to the openai chat
          </div>
        </div>

        <div className="w-full h-[75%] bg-themeGray-44 flex justify-center items-center">
          <div className="w-[80%] h-full overflow-y-scroll p-4 scrollbar-hide">
            <UserQuery />
            <BotResponse />
          </div>
        </div>
        <div className="w-full h-[15%] flex flex-col gap-2 p-4 justify-center items-center bg-themeGray-40 ">
          <div className="inline-flex justify-center items-center text-white text-md gap-2 border border-white rounded-md px-4 py-1 cursor-pointer">
            <img src="./images/regenerate-icon.png" alt="regenerate-icon" className="w-4 h-4" />
            <p>Regenarate response</p>
          </div>
          <div className="w-[60%] flex justify-center items-center bg-themeGray-20/50 rounded-md">
            <input type="text" placeholder="Ask anything" className="h-10 flex-1 text-white px-4 py-2 bg-transparent outline-none focus:outline-none" />
            <BsSend className="w-10 h-10 text-white cursor-pointer p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
