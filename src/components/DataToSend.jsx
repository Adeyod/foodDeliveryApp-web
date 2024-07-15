import { useState } from 'react';

const DataToSend = (role) => {
  // common
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // bike and customers
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');

  // // vendor specific
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  // biker specific
  const [bikeModel, setBikeModel] = useState('');
  const [bikeNumber, setBikeNumber] = useState('');

  let specificFields;
  let setSpecificFields;

  const commonFields = {
    email,
    referralCode,
    password,
    confirmPassword,
  };

  const setCommonFields = {
    setEmail,
    setReferralCode,
    setConfirmPassword,
    setPassword,
  };

  if (role === 'customer') {
    specificFields = {
      firstName,
      lastName,
      userName,
    };

    setSpecificFields = {
      setFirstName,
      setLastName,
      setUserName,
    };
  }

  if (role === 'vendor') {
    specificFields = {
      companyAddress,
      companyName,
    };

    setSpecificFields = {
      setCompanyAddress,
      setCompanyName,
    };
  }

  if (role === 'foodVendor') {
    specificFields = {
      firstName,
      lastName,
      userName,
      bikeModel,
      bikeNumber,
    };

    setSpecificFields = {
      setFirstName,
      setLastName,
      setUserName,
      setBikeNumber,
      setBikeModel,
    };
  }

  const formData = { ...commonFields, ...specificFields };
  const setFormData = { ...setCommonFields, ...setSpecificFields };

  return { formData, setFormData };
};

export default DataToSend;
