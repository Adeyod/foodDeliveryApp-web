import placeholderImage from '../assets/images/placeholderImage.jpg';

const ResetPasswordScreen = () => {
  return (
    <div className="flex-1 flex-col justify-center items-center">
      <h1 className="text-center mt-5 mb-3 uppercase font-bold underline text-2xl">
        reset password
      </h1>

      <div className="flex justify-around items-center mt-10">
        <form action="" className="flex flex-col justify-center gap-5">
          <div className="flex flex-col">
            <label
              htmlFor="Password"
              className="uppercase font-bold text-black mb-1"
            >
              New Password
            </label>
            <input
              className="border p-2 w-[50vw]"
              type="password"
              placeholder="Enter new password..."
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="Password"
              className="uppercase font-bold text-black mb-1"
            >
              Confirm New Password
            </label>
            <input
              className="border p-2 w-[50vw]"
              type="password"
              placeholder="Confirm new password..."
            />
          </div>

          <button className="text-white uppercase font-bold  bg-secondary rounded-lg p-3 my-5 w-[50vw]">
            reset password
          </button>
        </form>

        <div className="hidden md:flex">
          <img
            src={placeholderImage}
            alt="Image"
            className="h-[300px] w-[300px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
