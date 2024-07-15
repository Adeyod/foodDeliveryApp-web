import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import placeholderImage from '../assets/images/placeholderImage.jpg';
import RegisterForm from '../components/customers/RegisterForm';
import BikerRegisterForm from '../components/biker/BikerRegisterForm';
import VendorRegisterForm from '../components/foodVendor/VendorRegisterForm';
import { customerRegistrationRoute } from '../components/ApiRoutes';
import DataToSend from '../components/DataToSend';

const RegisterScreen = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const device = 'web';

  const [role, setRole] = useState('customer');

  let { formData, setFormData } = DataToSend(role);

  formData = { ...formData, role: role, phoneNumber: value, device };

  const handleRoleChange = (e) => {
    e.preventDefault();
    setRole(e.target.value);
  };
  const submit = async (e) => {
    e.preventDefault();

    if (role === 'customer') {
      // send to backend

      try {
        const { data } = await axios.post(
          `${customerRegistrationRoute}`,
          formData
        );

        console.log(data);

        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
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
        Register an account
      </h1>
      <div className="items-center content-center flex justify-center">
        <select name="role" id="" onChange={handleRoleChange}>
          <option value="customer">Customer</option>
          <option value="biker">Biker</option>
          <option value="foodVendor">Food Vendor</option>
        </select>
      </div>

      <div className="flex justify-around items-center">
        {role === 'customer' ? (
          <RegisterForm
            value={value}
            setValue={setValue}
            formData={formData}
            setFormData={setFormData}
            handlePress={submit}
          />
        ) : role === 'biker' ? (
          <BikerRegisterForm
            value={value}
            setValue={setValue}
            formData={formData}
            setFormData={setFormData}
            handlePress={submit}
          />
        ) : role === 'foodVendor' ? (
          <VendorRegisterForm
            value={value}
            setValue={setValue}
            formData={formData}
            setFormData={setFormData}
            handlePress={submit}
          />
        ) : (
          <div className="">
            <h1>You must choose one role to proceed</h1>
          </div>
        )}

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

export default RegisterScreen;
