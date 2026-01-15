"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

import EliteLogo from "./assets/Elite logo .png";
import PsIcon from "./assets/Ps.jpeg";
import AiIcon from "./assets/Ai.jpeg";
import AeIcon from "./assets/Ae.jpeg";
import IdIcon from "./assets/Id.jpeg";
import PrIcon from "./assets/Pr.jpeg";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programs = [
    {
      name: "Photoshop",
      text: "احترف تعديل الصور والتلاعب بالألوان وتصميم بوستات السوشيال ميديا بطريقة إبداعية",
      img: PsIcon,
      gradient: "from-blue-400/20 to-cyan-400/20",
      features: ["تعديل احترافي", "دمج الصور", "التلاعب بالألوان"]
    },
    {
      name: "Illustrator",
      text: "صمم الشعارات والهويات البصرية والرسومات الفيكتورية باحترافية عالية",
      img: AiIcon,
      gradient: "from-indigo-400/20 to-blue-400/20",
      features: ["شعارات احترافية", "رسومات فيكتور", "هويات بصرية"]
    },
    {
      name: "After Effects",
      text: "أبدع في الموشن جرافيك والانيميشن وإضافة المؤثرات البصرية المذهلة.",
      img: AeIcon,
      gradient: "from-sky-400/20 to-blue-400/20",
      features: ["موشن جرافيك", "انيميشن", "مؤثرات بصرية"],
    },
  ];

  const features = [
    {
      icon: "🎯",
      title: "تطبيق عملي 100%",
      text: "مشاريع حقيقية وتطبيق فوري لكل ما تتعلمه",
    },
    {
      icon: "👨‍🏫",
      title: "مدربين خبراء",
      text: "نخبة من المحترفين في مجال التصميم والجرافيك",
    },
    {
      icon: "📜",
      title: "شهادة معتمدة",
      text: "شهادة احترافية معتمدة من أكاديمية ELITE",
    },
    {
      icon: "💼",
      title: "فرص عمل",
      text: "دعم في الحصول على فرص عمل بعد التخرج",
    },
    {
      icon: "🚀",
      title: "تطور سريع",
      text: "منهج متطور يواكب أحدث اتجاهات السوق",
    },
    {
      icon: "🤝",
      title: "مجتمع داعم",
      text: "انضم لمجتمع من المصممين المحترفين",
    },
  ];

  const stats = [
    { number: "500+", label: "خريج متميز" },
    { number: "95%", label: "نسبة التوظيف" },
    { number: "4.9", label: "تقييم الطلاب" },
    { number: "24/7", label: "دعم فني" },
  ];

  // Program icons for Mini Elite section
  const miniElitePrograms = [
    { program: "Adobe Photoshop", icon: PsIcon },
    { program: "Adobe Illustrator", icon: AiIcon },
    { program: "Adobe InDesign", icon: IdIcon },
  ];

  // Program icons for Super Elite section
  const superElitePrograms = [
    { program: "Adobe Photoshop Advanced", icon: PsIcon, level: "متقدم" },
    { program: "Adobe Illustrator Pro", icon: AiIcon, level: "احترافي" },
    { program: "Adobe InDesign", icon: IdIcon, level: "متقدم" },
    { program: "Adobe After Effects", icon: AeIcon, level: "موشن جرافيك" },
    { program: "Adobe Premiere Pro", icon: PrIcon, level: "مونتاج" },
  ];

  return (
    <div className="font-sans bg-[#0a1225] text-white overflow-x-hidden" dir="rtl">
      {/* Enhanced Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a1225]/95 shadow-2xl shadow-blue-950/50 py-2" : "bg-[#0a1225]/80 backdrop-blur-xl py-4"
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            {/* Updated Logo - Using imported image */}
            <img 
              src={EliteLogo} 
              alt="ELITE Academy Logo" 
              className="h-10 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {["عن الأكاديمية", "البرامج", "المميزات", "تواصل معنا"].map((item, i) => (
              <Link
                key={i}
                to={["about", "programs", "features", "contact"][i]}
                smooth={true}
                duration={600}
                className="cursor-pointer text-gray-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/201555441846"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
          >
            <span>سجل الآن</span>
            <span>←</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0d1730] border-t border-blue-800/30"
            >
              <div className="flex flex-col gap-4 p-6">
                {["عن الأكاديمية", "البرامج", "المميزات", "تواصل معنا"].map((item, i) => (
                  <Link
                    key={i}
                    to={["about", "programs", "features", "contact"][i]}
                    smooth={true}
                    duration={600}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <a
                  href="https://wa.me/201555441846"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-5 py-2.5 rounded-full text-center"
                >
                  سجل الآن
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="about"
        className="min-h-screen flex items-center relative overflow-hidden pt-20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[#0a1225]">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-sky-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                </span>
                التسجيل مفتوح الآن
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-sky-400 bg-clip-text text-transparent">
                  دبلومة  الجرافيك
                </span>
                <br />
                <span className="text-white">بوابتك للاحتراف</span>
              </h1>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                انضم لأكثر من 500 خريج واحترف أهم برامج التصميم الجرافيكي
                من خلال منهج عملي متكامل ومشاريع حقيقية تؤهلك لسوق العمل
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/201555441846"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                >
                  <span>ابدأ رحلتك الآن</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-3xl transform rotate-3 blur-sm"></div>
                <div className="relative bg-[#0f1a35] rounded-3xl shadow-2xl p-8 border border-blue-700/30">
                  <div className="grid grid-cols-2 gap-4">
                    {programs.map((program, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="flex flex-col items-center justify-center p-4 bg-[#132042] rounded-2xl border border-blue-700/30 hover:border-blue-500/40 transition-all"
                      >
                        <img src={program.img} alt={program.name} className="w-12 h-12 mb-2 rounded-lg object-cover" />
                        <span className="text-sm font-medium text-gray-200">{program.name}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-blue-700/30">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">مدة الدبلومة</span>
                      <span className="font-bold text-white">3 شهور</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-500">عدد المحاضرات</span>
                      <span className="font-bold text-white">48 محاضرة</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0d1730] relative overflow-hidden border-y border-blue-800/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-indigo-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-[#0a1225]" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-blue-400 to-sky-400 bg-clip-text text-transparent">
              لماذا أكاديمية ELITE؟
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              نقدم لك تجربة تعليمية متكاملة تجمع بين الجودة والاحترافية والدعم المستمر
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-[#0f1a35] rounded-2xl p-6 border border-blue-800/30 hover:border-blue-500/40 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative">
                  <div className="bg-[#132042] w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform border border-blue-700/30">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Programs Section */}
      <section id="programs" className="py-20 bg-[#0c1528]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-blue-400 to-sky-400 bg-clip-text text-transparent">
              البرامج التي ستتقنها
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              تعلم أقوى برامج Adobe Creative Suite واحترف التصميم الجرافيكي والموشن جرافيك
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#0f1a35] rounded-3xl overflow-hidden border border-blue-800/30 hover:border-blue-500/40 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-[#132042] p-4 rounded-2xl group-hover:scale-110 transition-transform border border-blue-700/30">
                      <img src={program.img} alt={program.name} className="w-16 h-16 rounded-lg object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">{program.name}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">{program.text}</p>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature, idx) => (
                          <span key={idx} className="bg-[#132042] text-gray-300 px-3 py-1 rounded-full text-sm border border-blue-700/30">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Elite Diploma Section */}
      <section className="py-20 bg-[#0a1225] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-gray-300">دبلومة متخصصة</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 text-white">دبلومة Mini Elite</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              رحلتك المكثفة نحو احتراف التصميم الجرافيكي مع خصم 50%
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-[#0f1a35] rounded-3xl p-8 border border-blue-800/30">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                  <span className="text-3xl">📚</span>
                  محتوى الدبلومة - 3 برامج
                </h3>
                <div className="space-y-4">
                  {miniElitePrograms.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between bg-[#132042] rounded-xl p-4 hover:bg-[#162548] transition-all border border-blue-700/30"
                    >
                      <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.program} className="w-10 h-10 rounded-lg object-cover" />
                        <span className="font-medium text-gray-200">{item.program}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Pricing & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-[#0f1a35] rounded-3xl p-8 border border-blue-800/30">
                {/* Discount Badge */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-bold text-lg animate-pulse shadow-lg shadow-blue-500/25">
                    🔥 خصم 50% لفترة محدودة 🔥
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "شهادة معتمدة من أكاديمية ELITE",
                    "دعم فني طوال فترة الدراسة",
                    "تسجيلات المحاضرات متاحة",
                    "مجموعة دعم خاصة على واتساب",
                    "مشاريع عملية حقيقية",
                    "متابعة فردية مع المدربين",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <motion.a
                    href="https://wa.me/201555441846?text=مرحباً، أريد التسجيل في دبلومة Mini Elite"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                  >
                    سجل عبر واتساب 📱
                  </motion.a>
                  <motion.a
                    href="tel:201555441846"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full bg-[#132042] text-gray-200 py-4 rounded-2xl font-bold text-center border border-blue-700/30 hover:border-blue-500/40 transition-all"
                  >
                    اتصل الآن 📞
                  </motion.a>
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                  الأماكن محدودة • التسجيل ينتهي قريباً ⏰
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Super Elite Diploma Section */}
      <section className="py-20 bg-[#0c1528] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-indigo-400 text-[#0a1225] px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg shadow-blue-500/25">
              <span>⭐</span>
              البرنامج الأشمل والأقوى
              <span>⭐</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 text-white">دبلومة Super Elite</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              البرنامج الأكثر شمولاً - احترف جميع مجالات التصميم والموشن جرافيك مع خصم 50%
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Comprehensive Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-[#0f1a35] rounded-3xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                  <span className="text-3xl">🚀</span>
                  محتوى شامل ومتقدم - 5 برامج
                </h3>
                <div className="space-y-4">
                  {superElitePrograms.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between bg-[#132042] rounded-xl p-4 hover:bg-[#162548] transition-all group border border-blue-700/30"
                    >
                      <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.program} className="w-10 h-10 rounded-lg object-cover group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-medium text-gray-200">{item.program}</div>
                          <div className="text-xs text-gray-400">{item.level}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Premium Pricing & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-[#0f1a35] rounded-3xl p-8 border-2 border-blue-400/50 shadow-xl shadow-blue-500/10">
                {/* Discount Badge */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-bold text-lg animate-pulse shadow-lg shadow-blue-500/25">
                    🔥 خصم 50% لفترة محدودة 🔥
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "شهادة معتمدة من أكاديمية ELITE",
                    "دعم فني مدى الحياة",
                    "تسجيلات جميع المحاضرات",
                    "مجموعة VIP على واتساب",
                    "مشاريع متقدمة على شركات حقيقية",
                    "ورش عمل حصرية شهرية",
                    "بناء Portfolio احترافي كامل",
                    "دعم في الحصول على فرص عمل",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <motion.a
                    href="https://wa.me/201555441846?text=مرحباً، أريد التسجيل في دبلومة Super Elite"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-4 rounded-2xl font-bold text-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                  >
                    سجل عبر واتساب 📱
                  </motion.a>
                  <motion.a
                    href="tel:201555441846"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full bg-[#132042] text-gray-200 py-4 rounded-2xl font-bold text-center border border-blue-700/30 hover:border-blue-500/40 transition-all"
                  >
                    اتصل للاستفسار 📞
                  </motion.a>
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                  • سجل الآن لضمان مكانك ⚡
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-[#0a1225] relative overflow-hidden border-y border-blue-800/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-indigo-900/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-blue-400 to-sky-400 bg-clip-text text-transparent">رحلتك التعليمية</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              خطة دراسية محكمة تأخذك من البداية حتى الاحتراف
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { month: "الشهر الأول", title: "الأساسيات", desc: "تعلم أساسيات التصميم والألوان" },
              { month: "الشهر الثاني", title: "التطبيق", desc: "مشاريع عملية ومتنوعة" },
              { month: "الشهر الثالث", title: "الاحتراف", desc: "مشاريع متقدمة ومعقدة" },
              { month: "التخرج", title: "Portfolio", desc: "بناء معرض أعمال احترافي" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-[#0f1a35] rounded-2xl p-6 border border-blue-800/30 hover:border-blue-500/40 transition-all">
                  <div className="text-gray-400 text-sm font-medium mb-2">{step.month}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-blue-700/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-[#0c1528]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#0f1a35] rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-800/30">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-blue-400 to-sky-400 bg-clip-text text-transparent">
                ابدأ رحلتك نحو الاحتراف
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                لا تضيع الفرصة! الأماكن محدودة والتسجيل مفتوح لفترة محدودة فقط مع خصم 50%
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/201555441846"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all font-medium"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>احجز مقعدك عبر واتساب</span>
                </motion.a>
                <motion.a
                  href="tel:201555441846"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-[#132042] text-gray-200 border border-blue-700/30 px-8 py-4 rounded-2xl hover:border-blue-500/40 transition-all font-medium"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>اتصل مباشرة</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080e1c] text-white py-12 border-t border-blue-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              {/* Footer Logo - Using imported image */}
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src={EliteLogo} 
                  alt="ELITE Academy Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400">
                أكاديمية رائدة في تعليم التصميم الجرافيكي والموشن جرافيك
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-200">روابط سريعة</h4>
              <div className="flex flex-col gap-2">
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">عن الأكاديمية</a>
                <a href="#programs" className="text-gray-400 hover:text-white transition-colors">البرامج</a>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">المميزات</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">تواصل معنا</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-200">تواصل معنا</h4>
              <div className="flex flex-col gap-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span dir="ltr">+20 155 544 1846</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@elite-academy.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-200">تابعنا</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-[#0f1a35] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors border border-blue-800/30">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#0f1a35] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors border border-blue-800/30">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#0f1a35] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors border border-blue-800/30">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800/30 mt-8 pt-8 text-center text-gray-500">
            <p>© 2025 ELITE Design Academy — جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}