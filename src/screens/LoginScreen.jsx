import { Link, useNavigate } from 'react-router-dom';
import placeholderImage from '../assets/images/placeholderImage.jpg';
import { useState } from 'react';
import LoginForm from '../components/customers/LoginForm';
import axios from 'axios';
import { customerLoginRoute } from '../components/ApiRoutes';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess } from '../redux/userSlice';

axios.defaults.withCredentials = true;
const LoginScreen = () => {
  const [role, setRole] = useState('customer');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);

  const device = 'web';
  let [info, setInfo] = useState('');
  let [password, setPassword] = useState('');

  const formData = { info, password, device };

  const handleRoleChange = (e) => {
    e.preventDefault();
    setRole(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();

    dispatch(loginStart());

    if (role === 'customer') {
      // send to backend

      try {
        const { data } = await axios.post(`${customerLoginRoute}`, formData);

        console.log(data);

        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
          dispatch(loginSuccess(data.customer));
          // navigate('/login');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="flex-1 flex-col justify-center items-center">
      <h1 className="text-center mt-5 mb-3 uppercase font-bold underline text-2xl">
        Login into your account
      </h1>

      <div className="items-center content-center flex justify-center">
        <select name="role" id="" onChange={handleRoleChange}>
          <option value="customer">Customer</option>
          <option value="biker">Biker</option>
          <option value="foodVendor">Food Vendor</option>
        </select>
      </div>

      <div className="flex justify-around items-center">
        <div className="">
          <div className="lg:flex gap-10 mt-3 justify-between">
            <div className="flex mb-3">
              <h1 className="italic">Don&#39;t have an account?</h1>
              <Link
                to="/register"
                className="text-secondary font-bold ml-1 italic"
              >
                Register
              </Link>
            </div>

            <div className="flex mb-3">
              <h1 className="italic">Forgot Password?</h1>
              <Link
                to="/forgot-password"
                className="text-secondary font-bold ml-1 italic"
              >
                Click Here
              </Link>
            </div>
          </div>

          <LoginForm
            handlePress={submit}
            info={info}
            setInfo={setInfo}
            password={password}
            setPassword={setPassword}
            device={device}
            loading={loading}
          />
        </div>

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

export default LoginScreen;
