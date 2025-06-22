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
  Shield,
  FileText,
  AlertCircle,
  TrendingUp,
  Target,
  Lightbulb,
  UserCheck,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Resident Director",
      description:
        "We provide dedicated resident director services to ensure local compliance and facilitate smooth operations in your chosen jurisdiction.",
      icon: <UserCheck className="w-8 h-8 text-white" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Corporate Secretarial",
      description:
        "Our corporate secretarial services help you maintain regulatory compliance and proper governance throughout your business lifecycle.",
      icon: <FileText className="w-8 h-8 text-white" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Compliance Support",
      description:
        "We offer robust compliance support to navigate legal and regulatory requirements, ensuring peace of mind for your business.",
      icon: <Shield className="w-8 h-8 text-white" />,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const whyChooseUs = [
    {
      title: "Bespoke Solutions",
      description:
        "We create tailored solutions for your specific needs, helping you navigate complex financial landscapes seamlessly.",
      icon: <Target className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Expert Team",
      description:
        "Our experienced team brings unparalleled expertise and innovative strategies to every client engagement.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Innovation First",
      description:
        "We focus on cutting-edge solutions that meet the evolving needs of your business while enhancing growth.",
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "Client-Centric",
      description:
        "Our client-first approach means we prioritize your goals and tailor our services to your vision.",
      icon: <Users className="w-6 h-6 text-emerald-600" />,
    },
  ];

  const teamMembers = [
    {
      name: "Andy Jenk",
      title: "Chief Client Officer",
      description:
        "Driven by commitment to client success, specializing in corporate structures and impactful sales strategies.",
      gradient: "from-violet-600 to-purple-600",
    },
    {
      name: "Dimitar Jauch",
      title: "CEO",
      description:
        "Understanding entrepreneurship isn't easy. It's valuable to connect with someone who truly gets it.",
      gradient: "from-blue-600 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Modern Header */}
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="relative pt-14 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg border border-white/20">
              <span className="text-sm font-medium text-slate-600">
                🚀 Professional Fiduciary Excellence
              </span>
            </div>

            <h1 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Fiduciary Services
              </span>
              <br />
              <span className="text-slate-700 text-3xl lg:text-5xl">
                for Your Business Success
              </span>
            </h1>

            <p className="text-md text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              With our expertise, we take the administrative burden off your
              shoulders so that you can concentrate fully on
              <span className="font-semibold text-purple-600">
                {" "}
                growing your business
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                Book a Call Today
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-slate-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/50 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg border border-white/20">
              <span className="text-sm font-medium text-slate-600">
                💼 What We Do
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Core Fiduciary Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At tokaz, we specialize in delivering top-notch corporate services
              tailored to your business needs. From offering directorship roles
              to managing corporate compliance, our experienced team is here to
              support you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white/30 backdrop-blur-xl">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg border border-white/20">
              <span className="text-sm font-medium text-slate-600">
                ⭐ Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Expert Services Tailored for You
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand that every business is unique. Our fiduciary
              services are designed to empower entrepreneurs to thrive with
              confidence and clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Did we appeal to you?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We would be happy to discuss your requirements with you and work out
            your next setup together.
          </p>
          <p className="text-lg text-white/80 mb-8">
            We look forward to hearing from you:
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            Contact Us Now
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg border border-white/20">
              <span className="text-sm font-medium text-slate-600">
                👥 Our Team
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Trustees
            </h2>
            <p className="text-xl text-slate-600">
              Creative minds who really know what they are doing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div
                  className={`w-32 h-32 bg-gradient-to-r ${member.gradient} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 mb-4 font-semibold">
                  {member.title}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                500
              </div>
              <div className="text-purple-300 font-medium">
                Financial Statements
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                0.6M
              </div>
              <div className="text-blue-300 font-medium">
                Accounting Records
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="text-cyan-300 font-medium">
                Coffee Machines in Use
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg border border-white/20">
              <span className="text-sm font-medium text-slate-600">
                🏆 Success Stories
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Client Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="h-32 bg-gradient-to-r from-purple-200 to-blue-200 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <TrendingUp className="w-12 h-12 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Client Success Story
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Transformative results achieved through our comprehensive
                  fiduciary services and strategic partnership approach.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Define goals and plan the path to success
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We look forward to hearing from you!
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            Book Your Call Now
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
