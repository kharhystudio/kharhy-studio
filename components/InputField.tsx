"use client";

type InputFieldProps = {
  id: string;
  label: string;
  helper: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
  step?: number;
};

export function InputField({
  id,
  label,
  helper,
  value,
  onChange,
  placeholder,
  min = 0,
  step = 0.01,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-800" htmlFor={id}>
        {label}
      </label>
      <input
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
        id={id}
        min={min}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        step={step}
        type="number"
        value={value}
      />
      <p className="mt-1.5 text-sm leading-5 text-slate-500">{helper}</p>
    </div>
  );
}
