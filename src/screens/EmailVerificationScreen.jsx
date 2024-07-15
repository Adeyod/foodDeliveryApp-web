import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import { GoVerified } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { FaRegHandPointRight } from 'react-icons/fa';
import { BiErrorAlt } from 'react-icons/bi';
import axios from 'axios';
import {
  BikerVerificationRoute,
  CustomerEmailVerificationRoute,
  foodVendorVerificationRoute,
} from '../components/ApiRoutes';
import { toast } from 'react-toastify';

const EmailVerificationScreen = () => {
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  const device = 'web';

  const searchParams = new URLSearchParams(location.search);

  const handleVerification = async () => {
    const userId = searchParams.get('userId');
    const token = searchParams.get('token');
    const type = searchParams.get('type');
    console.log(userId, token, type);

    let route;

    if (type === 'customer') {
      route = `${CustomerEmailVerificationRoute}`;
    } else if (type === 'biker') {
      route = `${BikerVerificationRoute}`;
    } else if (type === 'foodVendor') {
      route = `${foodVendorVerificationRoute}`;
    }

    try {
      const { data } = await axios.post(route, {
        userId,
        token,
        type,
        device,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.message);
        setVerified(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleVerification();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : verified ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-xl md:text-2xl lg:text-4xl">
            Your email has been verified successfully.
          </h1>
          <GoVerified className="text-8xl my-4 text-green-600" />
          <div className="flex items-center gap-3 justify-center">
            <h1 className="text-xl md:text-2xl lg:text-4xl">
              Click the button to login
            </h1>
            <FaRegHandPointRight className="text-3xl animate-ping" />
            <Link
              to="/login"
              className="uppercase bg-green-500 text-2xl font-bold text-white p-2 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-[-50px] min-h-screen">
          <h1 className="text-xl md:text-2xl lg:text-4xl">
            Email verification failed
          </h1>
          <BiErrorAlt className="text-8xl my-4 text-red-600" />
          <div className="flex items-center gap-3 justify-center">
            <h1 className="text-xl md:text-2xl lg:text-4xl">
              Click the button to go back home
            </h1>
            <FaRegHandPointRight className="text-3xl animate-ping" />
            <Link
              to="/"
              className="uppercase bg-red-500 text-2xl font-bold text-white p-2 rounded-lg"
            >
              Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailVerificationScreen;
