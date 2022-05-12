

export default function CheckBox({ name, value, onChange }) {
  return (
    <label className="flex items-center space-x-3 mb-3">
      <input type="checkbox" name={name} value={value} checked={value} onChange={onChange} className="h-6 w-6" />
      <span className="text-gray-700 dark:text-white font-normal">
        {name}
      </span>
    </label>
  )
}