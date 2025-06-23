"use client";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Coffee,
  Building,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Zap,
  TrendingUp,
  Shield,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CEOImage from "../../../public/assets/images/ceo.jpeg";
import Image from "next/image";
import ModernContactSection from "@/components/Strategy/ModernContactSection";

export default function LightThemePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Bank Account Opening",
      description:
        "Streamlined banking solutions tailored to your business needs. We navigate complex requirements to get you connected with the right financial partners.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Company Formation & Restructuring",
      description:
        "Strategic corporate structures designed for growth. From Swiss holdings to family trusts, we architect your success.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Accounting & Tax Optimization",
      description:
        "Intelligent financial management that maximizes efficiency and ensures compliance across all jurisdictions.",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  // const testimonials = [
  //   {
  //     name: "Oliver Haas",
  //     title: "School Principal - LernCenter",
  //     quote:
  //       "My website now works the way I imagined it would. Traffic and leads have doubled. Thanks to tokaz and the team's expertise, I now feel that I'm in good hands.",
  //     website: "www.lerncenter.ch",
  //     avatar: "OH",
  //   },
  //   {
  //     name: "Alexander Radulow",
  //     title: "Architect - lowal",
  //     quote:
  //       "Thank you tokaz. The simple design draws attention to the important things. Exactly what I was looking for.",
  //     website: "www.lowal.ch",
  //     avatar: "AR",
  //   },
  //   {
  //     name: "Fabrizio Fuchs",
  //     title: "Board member - Academic Gateway",
  //     quote:
  //       "It's impressive how quickly our website went from zero to 100%. Thanks to the incredible work of this motivated team, we will achieve our sales targets for this year!",
  //     website: "www.academic-gateway.ch",
  //     avatar: "FF",
  //   },
  //   {
  //     name: "Serkan Dogan",
  //     title: "Entrepreneur - VIZ",
  //     quote:
  //       "I have trusted in the skills of Dimitar and his team for 14 years. I have always been able to rely on receiving great performance with every service for my companies.",
  //     website: "www.viz.ch",
  //     avatar: "SD",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-100/40 to-cyan-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/2 w-80 h-80 bg-gradient-to-br from-pink-100/40 to-orange-100/40 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center ">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight text-gray-900">
              Tailored
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Corporate Solutions
              </span>
              <span>for You Business Needs</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ensuring That Your Business Works - Our main goal is your success
              through comprehensive corporate services
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
      </section>

      {/* Services Section */}
      <section id="services" className="py-18 relative bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative mx-auto text-center bg-white p-8 rounded-3xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                <div className="relative z-10 text-center">
                  <div
                    className={`inline-flex p-4 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 text-white`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Account CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-12 rounded-3xl border border-gray-200 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Successful Business Starts with Your Bank Account
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Efficient bank account opening to enable seamless financial
              transactions and meet your financial needs worldwide. Our service
              ensures fast processing and customized solutions for international
              requirements.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              INITIATE NOW
            </button>
          </div>
        </div>
      </section>

      {/* Company Structures */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">
                Professional Approach
              </h2>
              <h3 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Company Structures that Cover Your Needs
              </h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We develop tailor-made strategies for your specific plans,
                whether for operating companies or to protect family assets.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Swiss Holding Companies",
                  "Trusts",
                  "Family Foundations",
                  "International SPV",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mr-4">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
                START NOW
              </button>
            </div>
            <div className="relative">
              <div className="bg-white p-12 rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
                <div className="relative z-10 h-80 flex items-center justify-center">
                  <div className="relative">
                    <Building className="w-32 h-32 text-blue-500 animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Services */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-cyan-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              We Uncover Profits
            </h2>
            <h3 className="text-3xl mb-8 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Customised to Your Company - Strengthening Your Financial
              Statements
            </h3>
            <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
              We shape your accounting and tax reports so that they promote
              efficiency and accuracy, meet legal requirements and ensure
              long-term financial stability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                number: "01",
                title: "Accounting & Reporting",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                number: "02",
                title: "Tax Return Preparation",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                number: "03",
                title: "Filing & Submission",
                gradient: "from-emerald-500 to-teal-500",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl font-bold text-white">
                    {item.number}
                  </span>
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
              CONTACT US TODAY
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              {
                number: "35+",
                label: "Projects",
                icon: <Zap className="w-8 h-8" />,
              },
              {
                number: "50+",
                label: "Entities",
                icon: <Globe className="w-8 h-8" />,
              },
              {
                number: "200+",
                label: "Coffee cups",
                icon: <Coffee className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-white mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-6xl font-bold mb-4 text-white">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-xl">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}

      {/* Team Section */}
      <section id="team" className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            OUR ADMINISTRATORS
          </h2>
          <p className="text-xl text-gray-600 mb-20">
            Analytical minds who really know what they are doing
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Image src={CEOImage} alt="founder's picture" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                RAGUNATHAN
              </h3>
              <p className="text-xl text-blue-600 mb-6">Chief Client Officer</p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From the start of my career, I've been driven by a commitment to
                helping clients succeed with their projects. My expertise lies
                in two key areas: building effective corporate structures and
                developing impactful sales strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ModernContactSection />

      {/* Footer */}
      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `,
        }}
      />
    </div>
  );
}
