"use client"

import { useState, useEffect, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import {
  Users,
  Target,
  Award,
  Zap,
  Heart,
  Code,
  Globe,
  Smartphone,
  Database,
  Brain,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Quote,
  Calendar,
  TrendingUp,
} from "lucide-react"

const teamMembers = [
  {
    name: "Ahmad Rahman",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Visionary leader with 10+ years in tech innovation",
    skills: ["Leadership", "Strategy", "Innovation"],
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack architect passionate about scalable solutions",
    skills: ["Architecture", "Cloud", "DevOps"],
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "David Chen",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in modern web technologies and mobile development",
    skills: ["React", "Node.js", "Mobile"],
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Maria Garcia",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creative designer focused on user-centered experiences",
    skills: ["Design", "Prototyping", "Research"],
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
]

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies to solve complex problems.",
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering exceptional results.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing ensures reliable, secure, and performant solutions.",
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description: "Fast, iterative development that adapts to your changing needs.",
  },
]

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started with a vision to transform digital experiences",
    icon: Rocket,
  },
  {
    year: "2020",
    title: "First Major Client",
    description: "Delivered our first enterprise-level solution",
    icon: Award,
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew to 15+ talented developers and designers",
    icon: Users,
  },
  {
    year: "2022",
    title: "100+ Projects",
    description: "Reached milestone of 100 successful project deliveries",
    icon: TrendingUp,
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Received industry awards for innovation and excellence",
    icon: Star,
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Leading the way in AI-powered development solutions",
    icon: Brain,
  },
]

const technologies = [
  { name: "React", level: 95, icon: Code },
  { name: "Node.js", level: 90, icon: Globe },
  { name: "Mobile Dev", level: 85, icon: Smartphone },
  { name: "Database", level: 88, icon: Database },
  { name: "Cloud", level: 92, icon: Zap },
  { name: "AI/ML", level: 80, icon: Brain },
]

const testimonials = [
  {
    name: "Bibek Adhikari ",
    role: "CEO, TechCorp",
    content:
      "Malang Coders transformed our digital presence completely. Their attention exceeded our expectations.",
    rating: 5,
    image: "/image/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  },
  {
    name: "Rahish",
    role: "Founder, StartupXYZ",
    content: "Working with this team was a game-changer. They delivered our MVP ahead of schedule and within budget.",
    rating: 5,
    image: "/image/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  },
  {
    name: "Om Pant",
    role: "CTO, InnovateLab",
    content:
      "The quality of code and architecture they provided is exceptional. Highly recommend for any serious project.",
    rating: 5,
    image: "/image/pexels-photo-2379004.jpeg",
  },
  {
    name: "Sudhin",
    role: "CTO, InnovateLab",
    content:
      "The quality of code and architecture they provided is exceptional. Highly recommend for any serious project.",
    rating: 5,
    image: "/image/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  },
  {
    name: "Suman Dhami",
    role: "CTO, InnovateLab",
    content:
      "The quality of code and architecture they provided is exceptional. Highly recommend for any serious project.",
    rating: 5,
    image: "/image/pexels-photo-2379004.jpeg",
  },
]

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0,
  })
  // Removed unused testimonialIndex and setTestimonialIndex (now handled by react-slick)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { projects: 500, clients: 150, experience: 5, satisfaction: 99 }
    const duration = 2000
    const steps = 60
    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, duration / steps)
    })
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className="relative py-20 " style={{ backgroundColor: "var(--bg-color)" }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),rgba(255,255,255,0))]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div
              className={`inline-flex items-center space-x-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-full px-4 py-2 text-sm mb-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Users className="w-4 h-4 text-blue-500" />
              <span className="" style={{color:"var(--text-color)"}}>About Malang Coders</span>
            </div>

            <h2
              className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{color:"var(--text-color)"}}>
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p
              className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{color:"var(--text-color)"}}>
              We are a passionate team of developers, designers, and innovators dedicated to transforming your ideas into
              powerful digital solutions that drive business growth and user engagement.
            </p>
          </div>

          {/* Stats Section */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {[
              { label: "Projects Completed", value: counters.projects, suffix: "+", icon: CheckCircle },
              { label: "Happy Clients", value: counters.clients, suffix: "+", icon: Heart },
              { label: "Years Experience", value: counters.experience, suffix: "+", icon: Calendar },
              { label: "Satisfaction Rate", value: counters.satisfaction, suffix: "%", icon: Star },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group text-center p-6 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-2xl hover:bg-white/20 dark:hover:bg-gray-800/30 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{color:"var(--text-color)"}}>
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm"style={{color:"var(--text-color)"}}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Company Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold "style={{color:"var(--text-color)"}}>Our Story</h3>
              <p className="text-lg  leading-relaxed" style={{color:"var(--text-color)"}}>
                Founded in 2019 with a mission to bridge the gap between innovative technology and real-world business
                solutions. We&apos;ve grown from a small team of passionate developers into a full-service digital agency.
              </p>
              <p className="text-lg  leading-relaxed" style={{color:"var(--text-color)"}}>
                We believe great software is about understanding your business, users, and goals. Every project is a
                partnership aimed at creating lasting digital success.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">200+</div>
                  <div className="text-sm "style={{color:"var(--text-color)"}}>Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                  <div className="text-sm "style={{color:"var(--text-color)"}}>Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">99%</div>
                  <div className="text-sm "style={{color:"var(--text-color)"}}>Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Why Choose Us?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Expert team with 5+ years experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Modern technologies and best practices</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>24/7 support and maintenance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Transparent pricing and communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
          
          {/* Timeline */}
          <div
            className={`mb-20 transition-all duration-1000 delay-1400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4"style={{color:"var(--text-color)"}}>Our Journey</h3>
              <p className="text-lg max-w-2xl mx-auto" style={{color:"var(--text-color)"}}>
                Key milestones that shaped our company&apos;s growth and success
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              <div className="space-y-12">
              {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <div className="group p-6 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-2xl hover:bg-white/20 dark:hover:bg-gray-800/30 transition-all duration-300 transform hover:scale-105">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{item.year}</div>
                        <h4 className="text-xl font-semibold mb-2"style={{color:"var(--text-color)"}}>{item.title}</h4>
                        <p className="" style={{color:"var(--text-color)"}}>{item.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div
            className={`mb-20 transition-all duration-1000 delay-1600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4"style={{color:"var(--text-color)"}}>Our Expertise</h3>
              <p className="text-lg max-w-2xl mx-auto" style={{color:"var(--text-color)"}}>
                Technologies and skills that power our innovative solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group p-6 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-2xl hover:bg-white/20 dark:hover:bg-gray-800/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <tech.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-semibold" style={{color:"var(--text-color)"}} >{tech.name}</span>
                    </div>
                    <span className="text-sm"style={{color:"var(--text-color)"}}>{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${tech.level}%` : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials - Carousel Slider */}
          <div
            className={`mb-20 transition-all duration-1000 delay-1800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-color)" }}>What Clients Say</h3>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-color)" }}>
                Real feedback from real clients who trusted us with their projects
              </p>
            </div>
            <div className="relative max-w-5xl w-full mx-auto">
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={3}
                slidesToScroll={1}
                arrows={true}
                autoplay={true}
                autoplaySpeed={4000}
                rtl={false}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ]}
                cssEase="cubic-bezier(0.4,0,0.2,1)"
                pauseOnHover={true}
                pauseOnFocus={false}
                swipeToSlide={true}
                draggable={true}
              >
                {testimonials.map((testimonial, i) => (
                  <div key={testimonial.name + i} className="px-5 testimonial-slide">
                    <div className="testimonial-card group p-6 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-2xl transition-all duration-300 h-full flex flex-col justify-between">
                      {/* Image at the top, centered, rounded, even larger size */}
                      <div className="flex justify-center mb-5">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={120}
                          height={120}
                          className="w-[120px] h-[120px] aspect-square rounded-full object-cover border-4 border-white shadow-lg"
                        />
                      </div>
                      <Quote className="w-8 h-8 text-blue-500 mb-4 mx-auto" />
                      <p className="mb-6 italic text-center" style={{ color: "var(--text-color)" }}>
                        &quot;{testimonial.content}&quot;
                      </p>
                      <div className="flex items-center justify-center space-x-4 mb-2" style={{ color: "var(--text-color)" }}>
                        <div>
                          <div className="font-semibold text-center" style={{ color: "var(--text-color)" }}>{testimonial.name}</div>
                          <div className="text-sm text-center" style={{ color: "var(--text-color)" }}>{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* CTA Section */}
          
        </div> {/* END: relative z-10 container mx-auto px-6 */}

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(180deg); }
          }
          
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          /* Testimonial slider hover effect: only scale up hovered card, do not affect others */
          .testimonial-slide {
            transition: z-index 0.2s;
          }
          .testimonial-card {
            transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s, background 0.3s, border-color 0.3s;
            z-index: 1;
          }
          .testimonial-card:hover {
            transform: scale(1.12);
            z-index: 10;
            box-shadow: 0 8px 32px 0 rgba(59,130,246,0.18);
            border-color: #3b82f6;
            background: rgba(59,130,246,0.08);
          }
          @media (max-width: 1024px) {
            .testimonial-card {
              transform: scale(1) !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default AboutSection
