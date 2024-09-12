/* eslint-disable react/prop-types */
const fixedInputClass =
  "rounded-md bg-zinc-900 appearance-none mx-auto relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-yellow-400 m-2 focus:border-gray-400 focus:z-10 sm:text-sm";

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  options,
}) {
  return (
    <div className="mb-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      {type === "dropdown" ? (
        <select
          onChange={handleChange}
          value={value}
          id={id}
          name={name}
          required={isRequired}
          className={fixedInputClass + customClass}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      ) : (
        <input
          onChange={handleChange}
          value={value}
          id={id}
          name={name}
          type={type}
          required={isRequired}
          className={fixedInputClass + customClass}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
