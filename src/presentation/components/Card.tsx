import React from "react";

// Card Component
export const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden ${className || ""}`}
    >
      {children}
    </div>
  );
};

// CardContent Component
export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return <div className={`p-4 ${className || ""}`}>{children}</div>;
};

// Input Component
interface InputProps {
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, type = "text", value, onChange, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className || ""}`}
    />
  );
};

// Button Component
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "destructive";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = "default",
  disabled = false,
}) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium focus:outline-none transition-all";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400",
    destructive: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-400",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className || ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
