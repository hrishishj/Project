// import React from 'react';


// interface SelectOption {
//   value: string;
//   label: string;
// }

// interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
//   options: SelectOption[];
//   label?: string;
//   error?: string;
//   onChange: (value: string) => void;
// }

// const Select: React.FC<SelectProps> = ({
//   options,
//   label,
//   error,
//   value,
//   onChange,
//   className = '',
//   id,
//   placeholder,
//   ...props
// }) => {
//   const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  
//   return (
//     <div className="mb-4 w-full">
//       {label && (
//         <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">
//           {label}
//         </label>
//       )}
//       <select
//         id={selectId}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
//           error ? 'border-red-500' : ''
//         } ${className}`}
//         {...props}
//       >
//         {placeholder && (
//           <option value="" disabled>
//             {placeholder}
//           </option>
//         )}
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//       {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default Select;


import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  label?: string;
  error?: string;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string; 
}

const Select: React.FC<SelectProps> = ({
  options,
  label,
  error,
  value = '',
  onChange,
  className = '',
  id,
  placeholder = '',
  ...props
}) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="mb-4 w-full">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        id={selectId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      >
        {placeholder && placeholder.trim() !== '' ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
