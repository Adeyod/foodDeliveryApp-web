const Form = ({
  title,
  placeholder,
  type,
  required,
  pattern,
  inputMode,
  value,
  setValue,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={title} className="uppercase font-bold text-black mb-1">
        {title}
      </label>
      <input
        className="border p-2 w-[50vw]"
        type={type}
        pattern={pattern}
        inputMode={inputMode}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Form;
