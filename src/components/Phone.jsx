import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Phone = ({ value, setValue }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="phoneNumber"
        className="uppercase font-bold text-black mb-1"
      >
        Phone number
      </label>
      <PhoneInput
        placeholder="Enter phone number"
        className="border p-2 w-[50vw]"
        value={value}
        onChange={(phone) => setValue(phone)}
      />
    </div>
  );
};

export default Phone;
