"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Full Image */}
      <section className="relative h-[100vh] sm:h-[90vh] md:h-[85vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gray-900">
        <Image
            src="/hero.jpg"
            alt="Luxury background"
            fill
          priority
            className="object-cover"
          />
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Minimal Floating Navbar */}
        <nav className="absolute top-4 sm:top-8 left-0 right-0 z-50 px-4 sm:px-8 md:px-16">
          <div className="flex items-center justify-between">
            {/* Left Side - Brand */}
            <div className="text-white text-xl sm:text-2xl font-light tracking-wide">
              <span className="font-bold">E</span>evolution
            </div>

            {/* Center - Navigation Links - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/80 hover:text-white text-sm font-light tracking-widest uppercase transition-all duration-300 relative group">
                <span className="relative z-10">Home</span>
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
              </button>
              <button onClick={() => scrollToSection('collection')} className="text-white/80 hover:text-white text-sm font-light tracking-widest uppercase transition-all duration-300 relative group">
                <span className="relative z-10">Collection</span>
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-white/80 hover:text-white text-sm font-light tracking-widest uppercase transition-all duration-300 relative group">
                <span className="relative z-10">About</span>
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white text-sm font-light tracking-widest uppercase transition-all duration-300 relative group">
                <span className="relative z-10">Contact</span>
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
              </button>
            </div>

            {/* Right Side - Bag Button and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button className="text-white/80 hover:text-white transition-all duration-300 relative group">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                </svg>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="lg:hidden text-white/80 hover:text-white transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="h-full flex items-center justify-center px-4" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col items-center space-y-8">
                <button 
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-white/80 hover:text-white text-xl font-light tracking-widest uppercase transition-all duration-300 relative group py-3 text-center"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('collection')}
                  className="text-white/80 hover:text-white text-xl font-light tracking-widest uppercase transition-all duration-300 relative group py-3 text-center"
                >
                  <span className="relative z-10">Collection</span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-white/80 hover:text-white text-xl font-light tracking-widest uppercase transition-all duration-300 relative group py-3 text-center"
                >
                  <span className="relative z-10">About</span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white text-xl font-light tracking-widest uppercase transition-all duration-300 relative group py-3 text-center"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Hero Content - Bottom Left */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-4 sm:left-8 md:left-16 z-10 pr-4 sm:pr-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              Luxury that speaks
              <br />
              your vibe
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="text-white hover:text-gray-900 border border-white/50 hover:border-white rounded-2xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-light tracking-wide transition-all duration-500 relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  <span className="hidden sm:inline">Explore Collection</span>
                  <span className="sm:hidden">Explore</span>
                  <svg className="ml-2 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scrollable Carousel Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="px-4 sm:px-8 md:pl-16 md:pr-4 lg:pl-20 lg:pr-6 xl:pl-24 xl:pr-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-orange-700 mb-4 sm:mb-6 tracking-wide">
              Slay. Repeat. Eevolve.
            </h2>
          </div>

          {/* Horizontal Scrollable Cards */}
          <div className="relative">
            <div className="flex space-x-3 sm:space-x-2 overflow-x-auto scrollbar-hide pb-6 sm:pb-10">
              {/* Card 1 */}
              <div className="flex-shrink-0 w-64 sm:w-72 h-[24rem] sm:h-[28rem] border border-orange-700 rounded-2xl hover:border-orange-800 transition-colors duration-300 relative overflow-hidden">
                <Image
                  src="/3.png"
                  alt="Black Long Coat"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card 2 */}
              <div className="flex-shrink-0 w-64 sm:w-72 h-[24rem] sm:h-[28rem] border border-orange-700 rounded-2xl hover:border-orange-800 transition-colors duration-300 relative overflow-hidden">
                <Image
                  src="/8.png"
                  alt="Beige T-Shirt"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card 3 */}
              <div className="flex-shrink-0 w-64 sm:w-72 h-[24rem] sm:h-[28rem] border border-orange-700 rounded-2xl hover:border-orange-800 transition-colors duration-300 relative overflow-hidden">
                <Image
                  src="/1.png"
                  alt="Navy Band Collar Shirt"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card 4 */}
              <div className="flex-shrink-0 w-64 sm:w-72 h-[24rem] sm:h-[28rem] border border-orange-700 rounded-2xl hover:border-orange-800 transition-colors duration-300 relative overflow-hidden">
                <Image
                  src="/6.png"
                  alt="Dark Vest"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card 5 */}
              <div className="flex-shrink-0 w-64 sm:w-72 h-[24rem] sm:h-[28rem] border border-orange-700 rounded-2xl hover:border-orange-800 transition-colors duration-300 relative overflow-hidden">
                <Image
                  src="/5.png"
                  alt="Navy Shirt"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card 6 */}
              <div className="flex-shrink-0 w-64 sm:w-72 h-[24rem] sm:h-[28rem] border border-orange-700 rounded-2xl hover:border-orange-800 transition-colors duration-300 relative overflow-hidden">
                <Image
                  src="/2.png"
                  alt="Vintage Denim Jacket"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card 7 */}
              <div className="flex-shrink-0 w-64 sm:w-72 h-[24rem] sm:h-[28rem] border border-orange-700 rounded-2xl hover:border-orange-800 transition-colors duration-300 relative overflow-hidden">
                <Image
                  src="/7.png"
                  alt="Dusty Rose Suit"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card 8 */}
              <div className="flex-shrink-0 w-64 sm:w-72 h-[24rem] sm:h-[28rem] border border-orange-700 rounded-2xl hover:border-orange-800 transition-colors duration-300 relative overflow-hidden">
                <Image
                  src="/4.png"
                  alt="Grey Wool Jacket"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Grid Section */}
      <section id="collection" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-orange-700 mb-4 sm:mb-6 tracking-wide">
              Collection
            </h2>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-2">
            {/* Product 1 */}
            <div className="w-full">
              <div className="w-full aspect-square bg-white relative overflow-hidden">
                <Image
                  src="/1.png"
                  alt="Minimal White Tee"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-orange-700 text-sm font-light tracking-wide">Navy Band Collar Shirt</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <p className="text-orange-700 text-lg font-light">$89</p>
                  <span className="text-orange-700">|</span>
                  <button className="text-orange-700 text-sm font-light hover:text-orange-800 transition-colors duration-300">Add to Cart</button>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="w-full">
              <div className="w-full aspect-square bg-white relative overflow-hidden">
                <Image
                  src="/2.png"
                  alt="Denim Jacket"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-orange-700 text-sm font-light tracking-wide">Vintage Denim Jacket</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <p className="text-orange-700 text-lg font-light">$129</p>
                  <span className="text-orange-700">|</span>
                  <button className="text-orange-700 text-sm font-light hover:text-orange-800 transition-colors duration-300">Add to Cart</button>
                </div>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="w-full">
              <div className="w-full aspect-square bg-white relative overflow-hidden">
                <Image
                  src="/3.png"
                  alt="Black Coat with Bag"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-orange-700 text-sm font-light tracking-wide">Black Long Coat</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <p className="text-orange-700 text-lg font-light">$299</p>
                  <span className="text-orange-700">|</span>
                  <button className="text-orange-700 text-sm font-light hover:text-orange-800 transition-colors duration-300">Add to Cart</button>
                </div>
              </div>
            </div>
            
            {/* Product 4 */}
            <div className="w-full">
              <div className="w-full aspect-square bg-white relative overflow-hidden">
                <Image
                  src="/4.png"
                  alt="Grey Wool Jacket"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-orange-700 text-sm font-light tracking-wide">Grey Wool Jacket</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <p className="text-orange-700 text-lg font-light">$199</p>
                  <span className="text-orange-700">|</span>
                  <button className="text-orange-700 text-sm font-light hover:text-orange-800 transition-colors duration-300">Add to Cart</button>
                </div>
              </div>
            </div>
            
            {/* Product 5 */}
            <div className="w-full">
              <div className="w-full aspect-square bg-white relative overflow-hidden">
                <Image
                  src="/5.png"
                  alt="Navy Shirt"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-orange-700 text-sm font-light tracking-wide">Navy Shirt</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <p className="text-orange-700 text-lg font-light">$89</p>
                  <span className="text-orange-700">|</span>
                  <button className="text-orange-700 text-sm font-light hover:text-orange-800 transition-colors duration-300">Add to Cart</button>
                </div>
              </div>
            </div>
            
            {/* Product 6 */}
            <div className="w-full">
              <div className="w-full aspect-square bg-white relative overflow-hidden">
                <Image
                  src="/6.png"
                  alt="Dark Vest"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-orange-700 text-sm font-light tracking-wide">Dark Vest</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <p className="text-orange-700 text-lg font-light">$149</p>
                  <span className="text-orange-700">|</span>
                  <button className="text-orange-700 text-sm font-light hover:text-orange-800 transition-colors duration-300">Add to Cart</button>
                </div>
              </div>
            </div>
            
            {/* Product 7 */}
            <div className="w-full">
              <div className="w-full aspect-square bg-white relative overflow-hidden">
                <Image
                  src="/7.png"
                  alt="Dusty Rose Suit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-orange-700 text-sm font-light tracking-wide">Dusty Rose Suit</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <p className="text-orange-700 text-lg font-light">$399</p>
                  <span className="text-orange-700">|</span>
                  <button className="text-orange-700 text-sm font-light hover:text-orange-800 transition-colors duration-300">Add to Cart</button>
                </div>
              </div>
            </div>
            
            {/* Product 8 */}
            <div className="w-full">
              <div className="w-full aspect-square bg-white relative overflow-hidden">
                <Image
                  src="/8.png"
                  alt="Beige T-Shirt"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-orange-700 text-sm font-light tracking-wide">Beige T-Shirt</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <p className="text-orange-700 text-lg font-light">$79</p>
                  <span className="text-orange-700">|</span>
                  <button className="text-orange-700 text-sm font-light hover:text-orange-800 transition-colors duration-300">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-3 sm:space-x-4 mt-12 sm:mt-16">
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white transition-all duration-300 flex items-center justify-center text-base sm:text-lg font-light">
              1
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white transition-all duration-300 flex items-center justify-center text-base sm:text-lg font-light">
              2
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white transition-all duration-300 flex items-center justify-center text-base sm:text-lg font-light">
              3
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white transition-all duration-300 flex items-center justify-center text-base sm:text-lg font-light">
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-orange-700 mb-4 sm:mb-6 tracking-wide">
              Featured
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto px-4">
              Discover our most coveted pieces, carefully curated for the modern fashion enthusiast
            </p>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Featured Product 1 */}
            <div className="group">
              <div className="aspect-[4/5] bg-gray-100 hover:bg-gray-200 transition-colors duration-300 mb-4 relative overflow-hidden">
                <Image
                  src="/7.png"
                  alt="Dusty Rose Suit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-2">Dusty Rose Suit</h3>
                <p className="text-orange-700 text-lg font-light">$399</p>
              </div>
            </div>

            {/* Featured Product 2 */}
            <div className="group">
              <div className="aspect-[4/5] bg-gray-100 hover:bg-gray-200 transition-colors duration-300 mb-4 relative overflow-hidden">
                <Image
                  src="/2.png"
                  alt="Vintage Denim Jacket"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-2">Vintage Denim Jacket</h3>
                <p className="text-orange-700 text-lg font-light">$129</p>
              </div>
            </div>

            {/* Featured Product 3 */}
            <div className="group">
              <div className="aspect-[4/5] bg-gray-100 hover:bg-gray-200 transition-colors duration-300 mb-4 relative overflow-hidden">
                <Image
                  src="/4.png"
                  alt="Grey Wool Jacket"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-2">Grey Wool Jacket</h3>
                <p className="text-orange-700 text-lg font-light">$199</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-orange-700 mb-4 sm:mb-6 tracking-wide">
              FAQ
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light px-4">
              Everything you need to know about our brand and products
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3">What is your return policy?</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                We offer a 30-day return policy for all items in original condition. Items must be unworn, with tags attached, and in original packaging.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3">How do I determine my size?</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                We provide detailed size charts for each product. If you&apos;re between sizes, we recommend sizing up for a more comfortable fit.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3">Do you ship internationally?</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                Yes, we ship worldwide. International shipping costs and delivery times vary by location. Free shipping on orders over $200.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3">What materials do you use?</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                We prioritize sustainable and high-quality materials including organic cotton, recycled polyester, and ethically sourced fabrics.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div>
              <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3">How can I track my order?</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                Once your order ships, you&apos;ll receive a tracking number via email. You can also track your order in your account dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-orange-700 mb-4 sm:mb-6 tracking-wide">
            Stay Updated
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Be the first to discover new collections, exclusive offers, and fashion insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto px-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-700 transition-colors duration-300 text-sm sm:text-base"
            />
            <button className="bg-orange-700 text-white hover:bg-orange-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-light transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}