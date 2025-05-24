import { BsSend } from "react-icons/bs";

const App = () => {
  return (
    <div className="w-full h-full bg-primaryBackground flex">
      {/* sidebar */}
      <div className="w-[20%] h-full text-white p-4">
        {/* upper division */}
        <div className="w-full h-[40%] flex flex-col gap-4">
          <div className="flex justify-start items-center border border-white/20 rounded-md px-4 py-2 gap-2">
            <p className="text-2xl">+</p>
            <p className="">New Chat</p>
          </div>

          <div className="text-sm text-themeGray-8E italic text-center">
            History is temporarily unavailable We're working to restore this feature as soon as possible
          </div>
        </div>

      </div>

      {/* main content */}
      <div className="w-[80%] h-full bg-themeGray-44 flex flex-col">
        <div className="w-full h-[10%] flex justify-center items-center bg-themeGray-40 text-white">
          Welcome to openai chat
        </div>
        <div className="w-full h-[75%] bg-themeGray-44">

        </div>
        <div className="w-full h-[15%] flex flex-col gap-2 p-4 justify-center items-center bg-themeGray-40 ">
          <div className="inline-flex justify-center items-center text-white text-md gap-2 border border-white rounded-md px-4 py-1 cursor-pointer">
            <img src="./images/regenerate-icon.png" alt="regenerate-icon" className="w-4 h-4" />
            <p>Regenarate response</p>
          </div>
          <div className="w-[40%] flex justify-center items-center bg-themeGray-8E rounded-md">
            <input type="text" placeholder="Ask anything" className="h-10 flex-1 text-white px-4 py-2 bg-transparent outline-none focus:outline-none" />
            <BsSend className="w-10 h-10 text-white cursor-pointer p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
