import type { ReactNode } from "react";

interface ErrorMessageProps {
  children: ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <div className="text-center text-sm my-4 bg-red-600 text-white font-bold p-2 uppercase rounded">
      {children}
    </div>
  );
};

export default ErrorMessage;