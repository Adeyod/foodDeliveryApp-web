import Form from '../Form';
import { Link } from 'react-router-dom';
import Phone from '../Phone';
import Button from '../Button';

const BikerRegisterForm = ({
  value,
  setValue,
  handlePress,
  formData,
  setFormData,
}) => {
  const {
    email,
    firstName,
    lastName,
    userName,
    referralCode,
    password,
    confirmPassword,
    bikeModel,
    bikeNumber,
  } = formData;

  const {
    setFirstName,
    setLastName,
    setUserName,
    setEmail,
    setReferralCode,
    setConfirmPassword,
    setPassword,
    setBikeModel,
    setBikeNumber,
  } = setFormData;

  return (
    <div className="flex justify-around items-center">
      <form
        action=""
        onSubmit={handlePress}
        className="flex flex-col justify-center"
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
          setValue={setEmail}
        />

        <Form
          title={'First Name'}
          placeholder={'Enter your firste name...'}
          type={'text'}
          value={firstName}
          setValue={setFirstName}
        />

        <Form
          title={'last name'}
          placeholder={'Enter your last name...'}
          type={'text'}
          value={lastName}
          setValue={setLastName}
        />

        <Form
          title={'user name'}
          placeholder={'Enter your username...'}
          type={'text'}
          value={userName}
          setValue={setUserName}
        />

        <Form
          title={'bike model'}
          placeholder={'Enter bike model...'}
          type={'text'}
          value={bikeModel}
          setValue={setBikeModel}
        />

        <Form
          title={'referral code'}
          placeholder={'Enter Referral code...'}
          type={'text'}
          inputMode={'numeric'}
          pattern={'[0-9]*'}
          value={referralCode}
          setValue={setReferralCode}
        />

        <Form
          title={'bike number'}
          placeholder={'Enter bike registration number...'}
          type={'number'}
          value={bikeNumber}
          setValue={setBikeNumber}
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

        <Button title={'Register'} />
      </form>
    </div>
  );
};

export default BikerRegisterForm;
