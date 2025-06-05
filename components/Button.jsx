import { ArrowRight } from "lucide-react";

const Button = ({ name }) => {
  return (
    <div className="flex items-center justify-center text-center group space-x-2 cursor-pointer">
      <div className="opacity-50 transform scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 text-gray-700">
        {name}
      </div>
      <div className="transform transition-all duration-300 ease-in-out group-hover:translate-x-2 text-gray-800">
        <ArrowRight size={18} />
      </div>
    </div>
  );
};

export default Button;
