import { ArrowRight } from "lucide-react";

const Button = ({ name }) => {
  return (
    <div className="flex space-x-2 items-center justify-center text-center">
      <div className="hover:text-gray-500 cursor-pointer">{name}</div>
      <div className="transform transition-all duration-300 ease-in-out group">
        <ArrowRight size={18} className="group-hover:translate-x-2" />
      </div>
    </div>
  );
};

export default Button;
