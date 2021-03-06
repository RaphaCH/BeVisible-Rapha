

export default function AppInput({name, value, onChange, placeholder, type = 'text', required = false, minLength, pattern, title}) {
  return (
    <input
      type={type}
      id={name}
      className="app-input"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
      pattern={pattern}
      title={title}
    />
  )
}