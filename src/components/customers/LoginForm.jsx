import { useState } from 'react';
import Button from '../Button';
import Form from '../Form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const LoginForm = ({
  handlePress,
  info,
  setInfo,
  password,
  setPassword,
  device,
  loading,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-around items-center">
      <form
        action=""
        onSubmit={handlePress}
        className="flex flex-col justify-center"
      >
        <Form
          title={'email or username'}
          placeholder={'Enter email or username...'}
          type={'text'}
          required={true}
          value={info}
          setValue={setInfo}
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

        <Button title={'Login'} loading={loading} />
      </form>
    </div>
  );
};

export default LoginForm;
