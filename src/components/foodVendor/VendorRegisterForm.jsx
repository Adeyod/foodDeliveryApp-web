import Form from '../Form';
import { Link } from 'react-router-dom';
import Phone from '../Phone';
import Button from '../Button';

const VendorRegisterForm = ({
  value,
  setValue,
  handlePress,
  formData,
  setFormData,
}) => {
  const {
    email,
    referralCode,
    password,
    confirmPassword,
    companyName,
    companyAddress,
  } = formData;
  const {
    setEmail,
    setReferralCode,
    setPassword,
    setConfirmPassword,
    setCompanyName,
    setCompanyAddress,
  } = setFormData;

  return (
    <div className="flex justify-around items-center">
      <form action="" className="flex flex-col justify-center">
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
          setValue={setEmail}
        />

        <Form
          title={'Company Name'}
          placeholder={'Enter your company name...'}
          type={'text'}
          value={companyName}
          setValue={setCompanyName}
        />

        <Form
          title={'company address'}
          placeholder={'Enter your company address...'}
          type={'text'}
          value={companyAddress}
          setValue={setCompanyAddress}
        />

        <Form
          title={'referral code'}
          placeholder={'Enter Referral code...'}
          type={'number'}
          value={referralCode}
          setValue={setReferralCode}
        />

        <Form
          title={'Password'}
          placeholder={'Enter Password...'}
          type={'password'}
          value={password}
          setValue={setPassword}
        />

        <Form
          title={'Confirm Password'}
          placeholder={'Confirm Password...'}
          type={'password'}
          value={confirmPassword}
          setValue={setConfirmPassword}
        />

        <Button title={'Register'} handlePress={handlePress} />
      </form>
    </div>
  );
};

export default VendorRegisterForm;
