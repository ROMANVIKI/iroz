"use client";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Users,
  Target,
  TrendingUp,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Strategic Business Advisory
                <span className="block text-blue-600">
                  for Sustainable Company Success
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Recognising opportunities, minimising risks and setting a clear
                direction for the entire team
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600">
                We develop the right strategy with you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Market Positioning
                </h3>
                <p className="text-gray-600">
                  What are you really better at than your competitors - only
                  "unique" is better than "best"
                </p>
              </div>

              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Analysing the Real Competition
                </h3>
                <p className="text-gray-600">
                  Realise who you are really dealing with - both your direct and
                  indirect competitors.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Value Mining</h3>
                <p className="text-gray-600">
                  Identify your benefits that not only differentiate you from
                  the competition, but also set you apart.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Partner & Challenger
                </h3>
                <p className="text-gray-600">
                  Examine your strategy with us - we'll put you to the test.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  100+
                </div>
                <div className="text-gray-600 text-lg">Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  10+
                </div>
                <div className="text-gray-600 text-lg">Years</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  95%
                </div>
                <div className="text-gray-600 text-lg">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Strategists
              </h2>
              <p className="text-xl text-gray-600">
                Creative minds who really know what they are doing
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">DJ</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Dimitar Jauch</h3>
                <p className="text-blue-600 font-semibold mb-4">CEO</p>
                <p className="text-gray-600 italic">
                  "Being an entrepreneur is not easy. It's good to be able to
                  talk to someone who understands you."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Did we appeal to you?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We would be happy to discuss your concerns with you and work out
              your next strategy together.
            </p>
            <p className="text-lg mb-6">
              Define goals and plan the path to success:
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              We look forward to hearing from you!
            </a>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Succeeding Together: Your Goals, Our Mission
            </p>
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Our Clients Are Satisfied
              </h3>
              <p className="text-gray-600">
                We've helped numerous companies achieve their strategic goals
                and sustainable growth.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
