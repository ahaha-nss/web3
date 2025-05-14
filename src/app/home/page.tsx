// src/app/page.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ConnectKitButton } from "connectkit";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <WhatIsSection />
      <HowItWorksSection />
      <TokenomicsSection />
      <FeaturedCoursesSection />
      <ContributorsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-indigo-600">
          YiDeng University
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium text-gray-800 hover:text-indigo-500 transition">Home</Link>
          <Link href="/courses" className="font-medium text-gray-800 hover:text-indigo-500 transition">Courses</Link>
          <Link href="/contribute" className="font-medium text-gray-800 hover:text-indigo-500 transition">Contribute</Link>
          <Link href="/credentials" className="font-medium text-gray-800 hover:text-indigo-500 transition">NFT Credentials</Link>
          <Link href="/about" className="font-medium text-gray-800 hover:text-indigo-500 transition">About</Link>
        </nav>
        
        {/* Connect Wallet Button */}
        <ConnectKitButton/>
        {/* <button className="hidden md:block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition transform hover:-translate-y-0.5">
          Connect Wallet
        </button> */}
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            <Link href="/" className="font-medium text-gray-800 hover:text-indigo-500 transition py-2">Home</Link>
            <Link href="/courses" className="font-medium text-gray-800 hover:text-indigo-500 transition py-2">Courses</Link>
            <Link href="/contribute" className="font-medium text-gray-800 hover:text-indigo-500 transition py-2">Contribute</Link>
            <Link href="/credentials" className="font-medium text-gray-800 hover:text-indigo-500 transition py-2">NFT Credentials</Link>
            <Link href="/about" className="font-medium text-gray-800 hover:text-indigo-500 transition py-2">About</Link>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition w-full">
              Connect Wallet
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Redefining Education on Web3</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10">
          YiDeng University is a decentralized learning platform where knowledge is rewarded, contributors are valued, and achievements are verified on-chain.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/courses" className="btn btn-secondary">
            Explore Courses
          </Link>
          <Link href="/contribute" className="btn btn-outline">
            Become a Contributor
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhatIsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">What is YiDeng University?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A decentralized educational ecosystem powered by blockchain technology, making learning more accessible, rewarding, and verifiable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h40A8,8,0,0,1,176,128Z"></path>
              </svg>
            }
            title="Learn at Your Own Pace"
            description="Access high-quality video courses anytime, anywhere. YiDeng University offers a diverse range of courses created by industry experts and passionate educators."
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm49.53,85.8-58.17,56a8,8,0,0,1-5.54,2.2,8.15,8.15,0,0,1-5.65-2.36l-30-32a8,8,0,1,1,11.66-11l24.33,25.92,52.7-50.71a8,8,0,1,1,11.08,11.55Z"></path>
              </svg>
            }
            title="Earn Verifiable Credentials"
            description="Complete courses to earn NFT credentials that verify your skills and knowledge on the blockchain, providing immutable proof of your educational achievements."
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V152H40V56ZM40,168H216v32H40ZM184,184a8,8,0,1,1-8-8A8,8,0,0,1,184,184Z"></path>
              </svg>
            }
            title="YiDeng Token Economy"
            description="Purchase YiDeng tokens with Bitcoin to access courses. Earn tokens by contributing content, sharing knowledge, and publishing articles related to your learning journey."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How It Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Seamlessly engage with our Web3 educational platform in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
              1
            </div>
            <h3 className="text-2xl font-semibold mb-4">Get YiDeng Tokens</h3>
            <p className="text-gray-500">Purchase YiDeng tokens using Bitcoin through our secure, decentralized exchange system.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
              2
            </div>
            <h3 className="text-2xl font-semibold mb-4">Access Courses</h3>
            <p className="text-gray-500">Use YiDeng tokens to unlock premium video courses across various subjects and disciplines.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
              3
            </div>
            <h3 className="text-2xl font-semibold mb-4">Learn & Earn</h3>
            <p className="text-gray-500">Complete courses to earn NFT credentials and contribute content to earn more YiDeng tokens.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
              4
            </div>
            <h3 className="text-2xl font-semibold mb-4">Share Knowledge</h3>
            <p className="text-gray-500">Publish articles about your learning experience to earn additional tokens and help others.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TokenomicsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">YiDeng Token Economy</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our token system creates a sustainable educational ecosystem that rewards participation and contribution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:transform hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Token Utility</h3>
            <p className="text-gray-500">YiDeng tokens serve as the primary currency within our ecosystem. Use them to access courses, reward content creators, and participate in governance decisions.</p>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:transform hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Earning Opportunities</h3>
            <p className="text-gray-500">Contribute high-quality educational content, complete learning pathways, publish insightful articles, and participate in community activities to earn YiDeng tokens.</p>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:transform hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">NFT Credentials</h3>
            <p className="text-gray-500">Our blockchain-verified NFT credentials serve as proof of your educational achievements, allowing you to showcase your skills to employers and peers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCoursesSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">Featured Courses</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Explore our most popular Web3 educational content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <CourseCard 
            image="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            title="Blockchain Fundamentals"
            description="Learn the core concepts of blockchain technology and how it's revolutionizing the digital world."
            author={{
              name: "Alex Johnson",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg"
            }}
            price="150 YDC"
            tags={["Blockchain", "Beginner"]}
          />
          
          <CourseCard 
            image="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            title="Smart Contract Development"
            description="Master the art of writing secure and efficient smart contracts with Solidity."
            author={{
              name: "Maria Chen",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg"
            }}
            price="280 YDC"
            tags={["Solidity", "Intermediate"]}
          />
          
          <CourseCard 
            image="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2097&q=80"
            title="DeFi Fundamentals"
            description="Understanding decentralized finance and how it's transforming traditional financial systems."
            author={{
              name: "David Park",
              avatar: "https://randomuser.me/api/portraits/men/86.jpg"
            }}
            price="200 YDC"
            tags={["DeFi", "Finance"]}
          />
          
          <CourseCard 
            image="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            title="NFT Creation & Marketing"
            description="Learn to create, mint, and market your own NFT collections in the digital art marketplace."
            author={{
              name: "Sarah Williams",
              avatar: "https://randomuser.me/api/portraits/women/65.jpg"
            }}
            price="230 YDC"
            tags={["NFT", "Digital Art"]}
          />
        </div>
        
        <div className="text-center">
          <Link href="/courses" className="inline-block py-3 px-6 rounded-lg font-semibold transition transform hover:-translate-y-0.5 cursor-pointer bg-indigo-500 text-white hover:bg-indigo-600">
            Browse All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

// function FeaturedCoursesSection() {
//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="section-title">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Courses</h2>
//           <p className="text-gray-500 max-w-2xl mx-auto text-lg">
//             Explore our most popular Web3 educational content
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           <CourseCard 
//             image="/api/placeholder/400/225"
//             title="Blockchain Fundamentals"
//             description="Learn the core concepts of blockchain technology and how it's revolutionizing the digital world."
//             author={{
//               name: "Alex Johnson",
//               avatar: "/api/placeholder/32/32"
//             }}
//             price="150 YDC"
//             tags={["Blockchain", "Beginner"]}
//           />
          
//           <CourseCard 
//             image="/api/placeholder/400/225"
//             title="Smart Contract Development"
//             description="Master the art of writing secure and efficient smart contracts with Solidity."
//             author={{
//               name: "Maria Chen",
//               avatar: "/api/placeholder/32/32"
//             }}
//             price="280 YDC"
//             tags={["Solidity", "Intermediate"]}
//           />
          
//           <CourseCard 
//             image="/api/placeholder/400/225"
//             title="DeFi Fundamentals"
//             description="Understanding decentralized finance and how it's transforming traditional financial systems."
//             author={{
//               name: "David Park",
//               avatar: "/api/placeholder/32/32"
//             }}
//             price="200 YDC"
//             tags={["DeFi", "Finance"]}
//           />
          
//           <CourseCard 
//             image="/api/placeholder/400/225"
//             title="NFT Creation & Marketing"
//             description="Learn to create, mint, and market your own NFT collections in the digital art marketplace."
//             author={{
//               name: "Sarah Williams",
//               avatar: "/api/placeholder/32/32"
//             }}
//             price="230 YDC"
//             tags={["NFT", "Digital Art"]}
//           />
//         </div>
        
//         <div className="text-center">
//           <Link href="/courses" className="btn btn-primary">
//             Browse All Courses
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

function CourseCard({ image, title, description, author, price, tags }: { image: string; title: string; description: string; author: { name: string; avatar: string }; price: string; tags: string[] }) {
  return (
    <div className="course-card">
      <div className="relative">
        <div className="relative overflow-hidden">
          <img src={image} alt={title} className="w-full h-auto transform hover:scale-105 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-80 hover:bg-indigo-500 hover:opacity-100 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="white" viewBox="0 0 256 256">
                <path d="M232,128a104,104,0,1,1-104-104A104.13,104.13,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM160,128l-48-32v64Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="course-content">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="course-tag">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 leading-tight">{title}</h3>
        <p className="text-gray-500 text-sm mb-6">{description}</p>
        
        <div className="course-meta">
          <div className="flex items-center space-x-2">
            <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full" />
            <span className="text-sm font-medium">{author.name}</span>
          </div>
          <div className="course-price">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContributorsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">For Content Contributors</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Share your expertise and earn tokens while helping others learn
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 256 256">
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,97.63a8,8,0,0,1-11.07-2.33,79.83,79.83,0,0,0-67.07-36.3,8,8,0,0,1,0-16,44,44,0,1,0-16.46-84.78,8,8,0,1,1-6-14.85,60,60,0,0,1,27.41,113.21,96,96,0,0,1,75.52,34.55A8,8,0,0,1,250.14,205.63Z"></path>
              </svg>
            }
            title="Create & Upload Courses"
            description="Share your knowledge by creating and uploading educational video content. Quality contributions are rewarded with YiDeng tokens based on popularity and ratings."
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path>
              </svg>
            }
            title="Publish Articles"
            description="Write and publish insightful articles about the topics you've mastered. Earn YiDeng tokens for valuable contributions to our knowledge base."
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 256 256">
                <path d="M184,184a24,24,0,1,1-24-24A24,24,0,0,1,184,184Zm40-88a8,8,0,0,1-8-8,48.05,48.05,0,0,0-48-48,8,8,0,0,1,0-16,64.07,64.07,0,0,1,64,64A8,8,0,0,1,224,96Zm-32,0a8,8,0,0,1-8-8,16,16,0,0,0-16-16,8,8,0,0,1,0-16,32,32,0,0,1,32,32A8,8,0,0,1,192,96Zm-88,88a24,24,0,1,0,24,24A24,24,0,0,0,104,184Zm0,32a8,8,0,1,1,8-8A8,8,0,0,1,104,216ZM155.55,43.36a8,8,0,1,0-11.1-11.52A67.85,67.85,0,0,0,96,72a8,8,0,0,0,16,0A51.87,51.87,0,0,1,155.55,43.36ZM48,96a8,8,0,0,0-16,0,64.07,64.07,0,0,0,64,64,8,8,0,0,0,0-16A48.05,48.05,0,0,1,48,96Zm24-8a8,8,0,0,0,0-16,32,32,0,0,0-32,32,8,8,0,0,0,16,0A16,16,0,0,1,72,88Z"></path>
              </svg>
            }
            title="Connect & Collaborate"
            description="Join our community of educators and learners to collaborate on projects, improve content, and create comprehensive learning paths together."
          />
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Future of Learning</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
          Start your Web3 educational journey today with YiDeng University and be part of a revolutionary learning ecosystem.
        </p>
        <Link href="/register" className="inline-block py-3 px-8 rounded-lg font-semibold transition transform hover:-translate-y-0.5 cursor-pointer bg-emerald-500 text-white hover:bg-emerald-600">
          Connect Wallet to Begin
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">YiDeng University</h3>
            <p className="mb-6 text-gray-300">A decentralized educational platform on the blockchain, empowering learners and educators worldwide.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">About</Link></li>
              <li><Link href="/courses" className="text-gray-300 hover:text-white transition">Courses</Link></li>
              <li><Link href="/contribute" className="text-gray-300 hover:text-white transition">Contributors</Link></li>
              <li><Link href="/credentials" className="text-gray-300 hover:text-white transition">NFT Credentials</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/docs" className="text-gray-300 hover:text-white transition">Documentation</Link></li>
              <li><Link href="/tokenomics" className="text-gray-300 hover:text-white transition">Tokenomics</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition">FAQ</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-white transition">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Community</h3>
            <ul className="space-y-3">
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">Discord</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">Twitter</a></li>
              <li><a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">Telegram</a></li>
              <li><a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">Medium</a></li>
            </ul>
          </div>
        </div>
        </div>
    </footer>
  )}