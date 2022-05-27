
export default function AppTextArea({name, value, onChange, placeholder, type = 'text', required = false, minLength, pattern, title}) {
  return (
    <textarea
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