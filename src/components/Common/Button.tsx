import React from "react";

interface ButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ startIcon, children, endIcon, ...props }) => {
  return (
    <button
      className={
        "tracking-wide font-semibold bg-green-400 text-white-500 w-full py-3 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      }
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="ml-2">{endIcon}</span>}{" "}
    </button>
  );
};

export default Button;
