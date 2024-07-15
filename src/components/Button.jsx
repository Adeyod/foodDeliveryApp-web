import React from 'react';
import Spinner from './Spinner';

const Button = ({ title, handlePress, loading }) => {
  console.log(loading);
  const status = 'LOADING...';
  return (
    <button
      onClick={handlePress}
      className="text-white uppercase font-bold  bg-secondary rounded-lg p-3 my-5 w-[50vw]"
    >
      {loading ? status : title}
    </button>
  );
};

export default Button;

/*
I HAVE BEEN ABLE TO REGISTER CUSTOMER, VERIFY CUSTOMER AND ALSO LOGIN CUSTOMER ON THE WEB PART. I ALSO STORE THE CUSTOMER IN REDUX

*/
