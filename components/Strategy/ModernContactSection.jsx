import React from "react";
import { Phone, Mail } from "lucide-react";

const PhoneCall = () => (
  <div className="group p-4 bg-white rounded-full shadow-sm border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
    <Phone className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
  </div>
);

const MailComponent = () => (
  <div className="group p-4 bg-white rounded-full shadow-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
    <Mail className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
  </div>
);

export default function ModernContactSection() {
  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-light text-gray-900 leading-tight">
            Define goals and plan the path to{" "}
            <span className="text-green-600 font-medium">success:</span>
          </h2>
          <p className="text-lg sm:text-xl mb-10 text-gray-600 font-normal">
            We look forward to hearing from you!
          </p>
          <div className="flex gap-6 justify-center items-center">
            <PhoneCall />
            <MailComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
