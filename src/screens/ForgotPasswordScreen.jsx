import { Link } from 'react-router-dom';
import placeholderImage from '../assets/images/placeholderImage.jpg';

const ForgotPasswordScreen = () => {
  return (
    <div className="flex-1 flex-col justify-center items-center">
      <h1 className="text-center mt-5 mb-3 uppercase font-bold underline text-2xl">
        request password reset
      </h1>

      <div className="flex justify-around items-center">
        <form action="" className="flex flex-col justify-center">
          <div className="flex mb-3">
            <h1 className="italic">Have an account?</h1>
            <Link to="/login" className="text-secondary font-bold ml-1 italic">
              Login
            </Link>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Email"
              className="uppercase font-bold text-black mb-1"
            >
              Email or Username
            </label>
            <input
              className="border p-2 w-[50vw]"
              type="email"
              placeholder="Enter email or username..."
            />
          </div>

          <button className="text-white uppercase font-bold  bg-secondary rounded-lg p-3 my-5 w-[50vw]">
            Submit
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

export default ForgotPasswordScreen;
