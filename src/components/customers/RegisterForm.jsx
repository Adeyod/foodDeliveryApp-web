import Form from '../Form';
import { Link } from 'react-router-dom';
import Phone from '../Phone';
import Button from '../Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useState } from 'react';

const RegisterForm = ({
  value,
  setValue,
  handlePress,
  formData,
  setFormData,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const {
    email,
    firstName,
    lastName,
    userName,
    referralCode,
    password,
    confirmPassword,
  } = formData;

  const {
    setFirstName,
    setLastName,
    setUserName,
    setEmail,
    setReferralCode,
    setConfirmPassword,
    setPassword,
  } = setFormData;

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordShow2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className="flex justify-around items-center">
      <form
        action=""
        className="flex flex-col justify-center"
        onSubmit={handlePress}
      >
        <div className="flex my-3">
          <h1 className="italic">Have an account?</h1>
          <Link to="/login" className="text-secondary font-bold ml-1 italic">
            Login
          </Link>
        </div>

        <Phone value={value} setValue={setValue} />

        <Form
          title={'email address'}
          placeholder={'Enter email...'}
          type={'email'}
          value={email}
          required={true}
          setValue={setEmail}
        />

        <Form
          title={'First Name'}
          placeholder={'Enter your firste name...'}
          type={'text'}
          value={firstName}
          setValue={setFirstName}
          required={true}
        />

        <Form
          title={'last name'}
          placeholder={'Enter your last name...'}
          type={'text'}
          value={lastName}
          setValue={setLastName}
          required={true}
        />

        <Form
          title={'user name'}
          placeholder={'Enter your username...'}
          type={'text'}
          value={userName}
          setValue={setUserName}
          required={true}
        />

        <Form
          title={'referral code'}
          placeholder={'Enter Referral code...'}
          type={'text'}
          inputMode={'alpha-numeric'}
          pattern={'[0-9a-z-]*'}
          value={referralCode}
          setValue={setReferralCode}
        />

        <div className="relative">
          <Form
            title={'Password'}
            placeholder={'Enter Password...'}
            type={showPassword ? 'text' : 'password'}
            required={true}
            value={password}
            setValue={setPassword}
          />
          <span
            className="absolute right-4 top-10"
            onClick={handlePasswordShow}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </span>
        </div>

        <div className="relative">
          <Form
            title={'Confirm Password'}
            placeholder={'Confirm Password...'}
            type={showPassword2 ? 'text' : 'password'}
            required={true}
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          <span
            className="absolute right-4 top-10"
            onClick={handlePasswordShow2}
          >
            {showPassword2 ? <IoMdEye /> : <IoMdEyeOff />}
          </span>
        </div>

        <Button title={'Register'} />
      </form>
    </div>
  );
};

export default RegisterForm;
