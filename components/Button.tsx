import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

