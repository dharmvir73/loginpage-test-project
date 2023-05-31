import "./index.css";

const Login = () => {
  return (
    <div className="w-1/2 h-full flex flex-col justify-center items-center ">
      <div id="petals" className="w-[60px] h-[50px]"></div>
      <div className="text-black flex gap-2 text-4xl font-semibold">
        <h1 className="text-[#020100]">Welcome</h1>
        <h1 className="text-[#08A593]">Back!</h1>
      </div>
      <p className="text-[#667085] text-md leading-7 mb-5">
        Glad to see you, Again!
      </p>
      <div className="flex flex-col">
        <input
          placeholder="Enter your email"
          type="text"
          className="w-[360px] h-[49px] px-5 py-2 border-[1px] border-[#a4a4a5] rounded-lg outline-none  mb-5"
        />
        <input
          placeholder="Enter your password"
          type="password"
          className="w-[360px] h-[49px] px-5 py-2 border-[1px] border-[#a4a4a5] outline-none rounded-lg"
        />
        <a href="#" className="self-end text-[#a4a4a5] text-sm py-1 mb-10">
          Forgot Password?
        </a>
        <button className="w-[360px] h-[49px] px-5 py-2 bg-black rounded-lg text-white text-lg font-semibold mb-20 drop-shadow-2xl">
          Log In
        </button>
      </div>
      <label className="text-[#464660]">
        Don't have an account yet?&nbsp;
        <a href="#" className="text-[#08A593]">
          Sign Up
        </a>
      </label>
    </div>
  );
};

export default Login;
