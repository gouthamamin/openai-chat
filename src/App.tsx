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
      <div className="w-[80%] h-full bg-themeGray-44">

      </div>
    </div>
  );
}

export default App
