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
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Target,
} from "lucide-react";

export default function ModernSequencyPage() {
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
        "Streamlined banking solutions with our expert guidance. We connect you with the right financial partners for seamless account setup.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600",
      delay: "delay-100",
    },
    {
      title: "Company Formation & Restructuring",
      description:
        "Tailored corporate structures including Swiss holdings, family trusts, and foundations designed for your unique objectives.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      delay: "delay-200",
    },
    {
      title: "
