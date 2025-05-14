'use client'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState('learn');

  return (
    <div>
    <div className="min-h-screen bg-indigo-100 text-purple-900 font-sans">
      <Head>
        <title>Web3大学 - 趣味学习区块链！</title>
        <meta name="description" content="Web3大学 - 通过上传和学习视频获取yideng币和NFT证书" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="bg-gradient-to-b from-purple-400 via-pink-300 to-indigo-300 pb-10">
        <header className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-3 shadow-lg border-4 border-white">
                <span className="font-bold text-xl text-purple-700">W3</span>
              </div>
              <h1 className="text-3xl font-bold text-white drop-shadow-md transform -rotate-1">Web3大学</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-yellow-300 transition transform hover:scale-110 font-medium">功能</a>
              <a href="#how-it-works" className="text-white hover:text-yellow-300 transition transform hover:scale-110 font-medium">运作方式</a>
              <a href="#benefits" className="text-white hover:text-yellow-300 transition transform hover:scale-110 font-medium">优势</a>
              <a href="#testimonials" className="text-white hover:text-yellow-300 transition transform hover:scale-110 font-medium">学员反馈</a>
            </nav>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-white bg-opacity-30 border-2 border-white rounded-full hover:bg-opacity-50 transition text-white font-medium transform hover:scale-105">登录</button>
              <button className="px-4 py-2 bg-yellow-400 rounded-full hover:bg-yellow-300 transition text-purple-700 font-medium shadow-md transform hover:scale-105 border-2 border-white">注册</button>
            </div>
          </div>
        </header>
        <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-white bg-opacity-20 p-8 rounded-3xl border-4 border-white shadow-xl transform -rotate-1">
              <h2 className="text-5xl font-bold mb-6 text-white">学习 Web3<br/><span className="text-yellow-400 drop-shadow-md">超级有趣！</span></h2>
              <p className="text-xl mb-8 text-white">在Web3大学，你可以上传视频赚取yideng币，用yideng币学习超酷的课程，还能获得专属NFT证书！</p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transition text-white text-lg font-semibold shadow-lg transform hover:scale-105 border-2 border-white">开始学习</button>
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full hover:from-yellow-500 hover:to-orange-600 transition text-white text-lg font-semibold shadow-lg transform hover:scale-105 border-2 border-white">上传视频</button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-80 md:h-96 bg-white p-4 rounded-3xl shadow-xl transform rotate-2 border-4 border-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-50 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <div className="w-24 h-24 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-white transform hover:rotate-12 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="font-bold text-white text-xl">观看有趣介绍</p>
                </div>
              </div>
              
              {/* 装饰气泡 */}
              <div className="absolute top-5 left-5 w-10 h-10 bg-pink-400 rounded-full opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-400 rounded-full opacity-50"></div>
              <div className="absolute top-20 right-20 w-8 h-8 bg-yellow-400 rounded-full opacity-50"></div>
              <div className="absolute bottom-20 left-14 w-12 h-12 bg-blue-400 rounded-full opacity-50"></div>
            </div>
            
            {/* 装饰元素 */}
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-yellow-400 rounded-full shadow-lg border-4 border-white">
              <div className="flex h-full items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
            </div>
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-pink-400 rounded-full shadow-lg border-4 border-white">
              <div className="flex h-full items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        
        {/* Learning Paths Section */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">超棒学习路径</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-6 shadow-lg border-4 border-blue-300 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-500">区块链开发者</h3>
              </div>
              <p className="mb-4 text-purple-700">从基础到高级区块链开发，学习如何构建超酷的去中心化应用程序！</p>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-blue-500">完成度</span>
                  <span className="font-semibold text-blue-500">8/12 课程</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-4 border-2 border-blue-200">
                  <div className="bg-blue-400 h-full rounded-full" style={{ width: '66%' }}></div>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-2 border-2 border-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-purple-700 font-medium">区块链基础理论</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-2 border-2 border-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-purple-700 font-medium">智能合约开发</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-2 border-2 border-blue-300">
                    <span className="text-xs font-bold text-blue-500">3</span>
                  </div>
                  <span className="text-purple-700 font-medium">DApp前端开发</span>
                </li>
              </ul>
              <div className="flex justify-between text-sm text-purple-500 mb-4 font-medium">
                <span>12 个课程</span>
                <span>48 小时学习时间</span>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 transition rounded-full text-white font-bold shadow-md transform hover:scale-105 border-2 border-white">开始学习</button>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-lg border-4 border-purple-300 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-500">NFT艺术家</h3>
              </div>
              <p className="mb-4 text-purple-700">学习创建和销售NFT艺术品的全套技能，包括设计、铸造和营销！</p>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-purple-500">完成度</span>
                  <span className="font-semibold text-purple-500">3/10 课程</span>
                </div>
                <div className="w-full bg-purple-100 rounded-full h-4 border-2 border-purple-200">
                  <div className="bg-purple-400 h-full rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-2 border-2 border-purple-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-purple-700 font-medium">NFT基础知识</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-2 border-2 border-purple-300">
                    <span className="text-xs font-bold text-purple-500">2</span>
                  </div>
                  <span className="text-purple-700 font-medium">数字艺术创作</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-2 border-2 border-purple-300">
                    <span className="text-xs font-bold text-purple-500">3</span>
                  </div>
                  <span className="text-purple-700 font-medium">NFT铸造和上架</span>
                </li>
              </ul>
              <div className="flex justify-between text-sm text-purple-500 mb-4 font-medium">
                <span>10 个课程</span>
                <span>36 小时学习时间</span>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 transition rounded-full text-white font-bold shadow-md transform hover:scale-105 border-2 border-white">开始学习</button>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-lg border-4 border-green-300 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-500">DeFi分析师</h3>
              </div>
              <p className="mb-4 text-purple-700">深入了解去中心化金融协议、流动性挖矿、收益耕作和风险管理！</p>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-green-500">完成度</span>
                  <span className="font-semibold text-green-500">5/15 课程</span>
                </div>
                <div className="w-full bg-green-100 rounded-full h-4 border-2 border-green-200">
                  <div className="bg-green-400 h-full rounded-full" style={{ width: '33%' }}></div>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-2 border-2 border-green-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-purple-700 font-medium">DeFi协议介绍</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-2 border-2 border-green-300">
                    <span className="text-xs font-bold text-green-500">2</span>
                  </div>
                  <span className="text-purple-700 font-medium">借贷平台分析</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-2 border-2 border-green-300">
                    <span className="text-xs font-bold text-green-500">3</span>
                  </div>
                  <span className="text-purple-700 font-medium">收益策略优化</span>
                </li>
              </ul>
              <div className="flex justify-between text-sm text-purple-500 mb-4 font-medium">
                <span>15 个课程</span>
                <span>60 小时学习时间</span>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 transition rounded-full text-white font-bold shadow-md transform hover:scale-105 border-2 border-white">开始学习</button>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 transition rounded-full text-white font-bold shadow-lg transform hover:scale-105 border-4 border-white">查看全部学习路径</button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-12 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="star-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M20 0 L22 16 L36 18 L22 20 L20 36 L18 20 L0 18 L18 16 Z" fill="white" fillOpacity="0.1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#star-pattern)" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-white relative z-10">准备好开始你的Web3学习冒险了吗？</h2>
            <p className="text-2xl mb-8 max-w-3xl mx-auto text-white text-opacity-90 relative z-10">加入Web3大学，开始学习、教学、赚取yideng币，并获得超酷NFT证书认证你的技能！</p>
            <button className="px-10 py-5 bg-yellow-400 rounded-full hover:bg-yellow-300 transition text-purple-700 text-xl font-bold shadow-lg transform hover:scale-105 border-4 border-white relative z-10">立即免费注册</button>
            <p className="mt-4 text-white text-opacity-90 relative z-10">已有账户？<a href="#" className="underline font-bold hover:text-yellow-300 transition">点击登录</a></p>
            
            {/* 装饰元素 */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-300 rounded-full opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">常见问题</h2>
          <div className="max-w-3xl mx-auto divide-y-4 divide-indigo-100 bg-white p-8 rounded-3xl shadow-lg border-4 border-purple-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-lg text-purple-700">
                  <span>如何开始在Web3大学上传视频课程？</span>
                  <span className="transition group-open:rotate-180">
                    <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </span>
                </summary>
                <p className="text-purple-600 mt-3 group-open:animate-fadeIn">
                  注册账户并连接您的Web3钱包后，点击"创建"按钮，上传您的视频文件，添加标题、描述和标签。审核通过后，您的课程将上线，当其他用户观看您的内容时，您将获得超级可爱的yideng币奖励！
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-lg text-purple-700">
                  <span>如何使用yideng币？</span>
                  <span className="transition group-open:rotate-180">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </span>
                </summary>
                <p className="text-purple-600 mt-3 group-open:animate-fadeIn">
                  yideng币可用于解锁平台上的高级课程，获取导师一对一指导，参与社区治理投票，以及兑换独特的NFT和数字收藏品。您的yideng币存储在您的Web3钱包中，您可以完全控制它们！
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-lg text-purple-700">
                  <span>NFT证书有什么价值？</span>
                  <span className="transition group-open:rotate-180">
                    <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </span>
                </summary>
                <p className="text-purple-600 mt-3 group-open:animate-fadeIn">
                  Web3大学颁发的NFT证书是您技能和知识的数字证明，存储在区块链上不可篡改。这些证书可以向雇主或客户证明您的专业知识，增强您的专业形象，并可能在未来的Web3生态系统中获得更多权益和机会！
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-lg text-purple-700">
                  <span>如何发表学习文章并获得奖励？</span>
                  <span className="transition group-open:rotate-180">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </span>
                </summary>
                <p className="text-purple-600 mt-3 group-open:animate-fadeIn">
                  在您的个人仪表板中，选择"创建文章"，撰写并发布您的学习经验、技术见解或教程。优质内容会获得社区点赞，系统会根据文章质量、长度和受欢迎程度自动奖励yideng币。文章与视频课程相关联可获得额外奖励！
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-lg text-purple-700">
                  <span>Web3大学与传统在线学习平台有何不同？</span>
                  <span className="transition group-open:rotate-180">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </span>
                </summary>
                <p className="text-purple-600 mt-3 group-open:animate-fadeIn">
                  Web3大学基于区块链技术构建，实现了去中心化的学习和知识共享。创作者直接获得代币奖励，学习者获得真实的区块链认证，平台治理由社区共同参与。我们的代币经济激励了高质量内容的创建和积极的学习行为！
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

        {/* NFT Certificates Section */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">超酷NFT证书展示</h2>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl p-2 shadow-xl transform hover:rotate-2 transition-transform">
              <div className="bg-white rounded-2xl p-6 h-full">
                <div className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl p-6 mb-4 shadow-inner">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-white">区块链开发</h3>
                      <p className="text-white text-opacity-80">高级证书</p>
                    </div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center border-4 border-white">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="font-bold text-white">W3</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 pt-4 border-t border-white border-opacity-30">
                    <p className="text-white text-opacity-80 mb-1">发给</p>
                    <p className="font-semibold text-white">张三</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="text-sm text-purple-500">证书ID</p>
                      <p className="font-mono text-purple-700 font-semibold">#0029384</p>
                    </div>
                    <div>
                      <p className="text-sm text-purple-500">发布日期</p>
                      <p className="text-purple-700 font-semibold">2025-03-15</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition rounded-full text-white font-semibold shadow-md transform hover:scale-105">在链上查看</button>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-green-400 to-blue-400 rounded-3xl p-2 shadow-xl transform hover:rotate-2 transition-transform">
              <div className="bg-white rounded-2xl p-6 h-full">
                <div className="bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl p-6 mb-4 shadow-inner">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-white">智能合约开发</h3>
                      <p className="text-white text-opacity-80">专业证书</p>
                    </div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center border-4 border-white">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="font-bold text-white">W3</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 pt-4 border-t border-white border-opacity-30">
                    <p className="text-white text-opacity-80 mb-1">发给</p>
                    <p className="font-semibold text-white">李四</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="text-sm text-green-500">证书ID</p>
                      <p className="font-mono text-green-700 font-semibold">#0033721</p>
                    </div>
                    <div>
                      <p className="text-sm text-green-500">发布日期</p>
                      <p className="text-green-700 font-semibold">2025-02-28</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition rounded-full text-white font-semibold shadow-md transform hover:scale-105">在链上查看</button>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl p-2 shadow-xl transform hover:rotate-2 transition-transform">
              <div className="bg-white rounded-2xl p-6 h-full">
                <div className="bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl p-6 mb-4 shadow-inner">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-white">Web3安全</h3>
                      <p className="text-white text-opacity-80">专家证书</p>
                    </div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center border-4 border-white">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="font-bold text-white">W3</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 pt-4 border-t border-white border-opacity-30">
                    <p className="text-white text-opacity-80 mb-1">发给</p>
                    <p className="font-semibold text-white">王五</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="text-sm text-pink-500">证书ID</p>
                      <p className="font-mono text-pink-700 font-semibold">#0048192</p>
                    </div>
                    <div>
                      <p className="text-sm text-pink-500">发布日期</p>
                      <p className="text-pink-700 font-semibold">2025-01-10</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition rounded-full text-white font-semibold shadow-md transform hover:scale-105">在链上查看</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Token Economics Section */}
        <section className="py-16">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="coin-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="3" fill="white" fillOpacity="0.2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#coin-pattern)" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-bold text-center mb-8 text-white relative z-10">Yideng代币超级经济</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-4 border-yellow-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">如何获取Yideng币</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 shadow-md border-2 border-white">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <p className="text-purple-700">上传高质量的教学视频（每分钟5枚，根据内容质量和点赞数还能获得额外奖励！）</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 shadow-md border-2 border-white">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <p className="text-purple-700">发表有趣的学习心得和技术文章（根据内容质量和长度，最高可获得50枚！）</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 shadow-md border-2 border-white">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <p className="text-purple-700">回答社区问题并提供帮助（每条有用回答可获得1-5枚！）</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 shadow-md border-2 border-white">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <p className="text-purple-700">完成特定学习挑战和任务（每个挑战可获得10-30枚！）</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-4 border-orange-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">Yideng币的用途</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 shadow-md border-2 border-white">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <p className="text-purple-700">解锁超级高级课程和学习资源（每门课程需要10-100枚！）</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 shadow-md border-2 border-white">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <p className="text-purple-700">获取导师一对一指导会话（每小时需要50-150枚！）</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 shadow-md border-2 border-white">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <p className="text-purple-700">参与平台治理和投票决策（每次投票需要持有至少10枚！）</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 shadow-md border-2 border-white">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <p className="text-purple-700">兑换独特的平台NFT和数字收藏品（价格不等，款式超多！）</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-white rounded-full hover:bg-gray-100 transition text-yellow-500 font-bold shadow-lg transform hover:scale-105 border-4 border-yellow-300">查看代币经济详情</button>
            </div>
            
            {/* 装饰元素 */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-orange-300 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </section>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Features Section */}
        <section id="features" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-700">Web3大学超级功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-pink-300 transform hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center mb-4 shadow-md mx-auto border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h18M3 16h18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-pink-500">上传教学视频</h3>
              <p className="text-purple-700 text-center">分享你的知识，上传有趣的Web3教学视频，获取可爱的yideng币！</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-blue-300 transform hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mb-4 shadow-md mx-auto border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-blue-500">使用yideng币学习</h3>
              <p className="text-purple-700 text-center">用闪亮的yideng币解锁超酷学习内容，参与有趣的高级课程！</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-purple-300 transform hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center mb-4 shadow-md mx-auto border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-purple-500">获取NFT证书</h3>
              <p className="text-purple-700 text-center">完成学习后，获得独特炫酷的NFT证书，在区块链上永久证明你的才华！</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-green-300 transform hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mb-4 shadow-md mx-auto border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-green-500">发表学习文章</h3>
              <p className="text-purple-700 text-center">分享你的学习心得，发表文章，获取更多闪亮的yideng币奖励！</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-700">平台超简单运作方式</h2>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-6">
            <div className="flex-1 bg-white rounded-3xl p-6 shadow-lg border-4 border-pink-300 relative">
              <div className="flex items-center mb-6">
                <div className="bg-pink-400 w-16 h-16 rounded-full flex items-center justify-center mr-4 shadow-md text-3xl font-bold text-white border-4 border-white">
                  1
                </div>
                <h3 className="text-2xl font-bold text-pink-500">注册账户</h3>
              </div>
              <p className="mb-4 text-purple-700">创建超可爱的Web3大学账户，连接你的加密钱包，开始你的冒险之旅！</p>
              <div className="h-40 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center">
                <div className="w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              
              {/* 装饰元素 */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-400 rounded-full shadow-md flex items-center justify-center border-4 border-white transform rotate-12">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            
            <div className="flex-1 bg-white rounded-3xl p-6 shadow-lg border-4 border-blue-300 relative">
              <div className="flex items-center mb-6">
                <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mr-4 shadow-md text-3xl font-bold text-white border-4 border-white">
                  2
                </div>
                <h3 className="text-2xl font-bold text-blue-500">学习或教学</h3>
              </div>
              <p className="mb-4 text-purple-700">选择你的角色：上传有趣视频赚取yideng币，或使用yideng币学习超酷课程！</p>
              <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              
              {/* 装饰元素 */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-pink-400 rounded-full shadow-md flex items-center justify-center border-4 border-white transform -rotate-12">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
            
            <div className="flex-1 bg-white rounded-3xl p-6 shadow-lg border-4 border-purple-300 relative">
              <div className="flex items-center mb-6">
                <div className="bg-purple-400 w-16 h-16 rounded-full flex items-center justify-center mr-4 shadow-md text-3xl font-bold text-white border-4 border-white">
                  3
                </div>
                <h3 className="text-2xl font-bold text-purple-500">获取奖励</h3>
              </div>
              <p className="mb-4 text-purple-700">完成学习路径获取炫酷NFT证书，分享知识获取闪亮yideng币奖励！</p>
              <div className="h-40 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              {/* 装饰元素 */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-green-400 rounded-full shadow-md flex items-center justify-center border-4 border-white transform rotate-12">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Demo */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="bubbles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="5" fill="white" fillOpacity="0.1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#bubbles)" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-bold text-center mb-8 text-white relative z-10">平台超级预览</h2>
            <div className="flex flex-col space-y-6 relative z-10">
              <div className="bg-white bg-opacity-90 rounded-2xl p-4 shadow-lg">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 shadow-inner">
                  <div className="flex space-x-4 mb-4">
                    <button 
                      className={`px-4 py-2 rounded-full text-white font-semibold ${activeTab === 'learn' ? 'bg-yellow-400 text-purple-700 shadow-md' : 'bg-white bg-opacity-20 hover:bg-opacity-30'} transition transform hover:scale-105`}
                      onClick={() => setActiveTab('learn')}
                    >
                      学习
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-full text-white font-semibold ${activeTab === 'teach' ? 'bg-yellow-400 text-purple-700 shadow-md' : 'bg-white bg-opacity-20 hover:bg-opacity-30'} transition transform hover:scale-105`}
                      onClick={() => setActiveTab('teach')}
                    >
                      教学
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-full text-white font-semibold ${activeTab === 'rewards' ? 'bg-yellow-400 text-purple-700 shadow-md' : 'bg-white bg-opacity-20 hover:bg-opacity-30'} transition transform hover:scale-105`}
                      onClick={() => setActiveTab('rewards')}
                    >
                      奖励
                    </button>
                  </div>

                  <div className="bg-white rounded-xl p-6 min-h-[400px]">
                    {activeTab === 'learn' && (
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-purple-700">热门课程</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-4 shadow-md transform hover:scale-105 transition-transform border-2 border-purple-200">
                              <div className="bg-gradient-to-br from-purple-400 to-pink-400 h-32 rounded-lg mb-3 shadow-md overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <h4 className="font-bold mb-1 text-purple-700">Web3开发基础 #{item}</h4>
                              <div className="flex justify-between text-sm">
                                <span className="text-yellow-600">4.8 ⭐</span>
                                <span className="font-semibold text-purple-600">10 YDC</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'teach' && (
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-purple-700">上传你的视频课程</h3>
                        <div className="border-4 border-dashed border-purple-300 rounded-xl p-8 flex flex-col items-center justify-center bg-indigo-50">
                          <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 shadow-md border-4 border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          </div>
                          <p className="mb-4 text-purple-700 font-medium">拖放你的视频文件或点击下面的按钮</p>
                          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium shadow-md transform hover:scale-105 transition-transform">选择文件</button>
                        </div>
                      </div>
                    )}

                    {activeTab === 'rewards' && (
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-purple-700">你的奖励</h3>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1 bg-gradient-to-br from-indigo-50 to-yellow-100 rounded-xl p-6 shadow-md border-2 border-yellow-300">
                            <h4 className="text-xl font-bold mb-2 text-purple-700">yideng币余额</h4>
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <span className="text-3xl font-bold text-purple-700">128 YDC</span>
                            </div>
                            <button className="mt-4 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-white font-medium shadow-md transform hover:scale-105 transition-transform">获取更多</button>
                          </div>
                          <div className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-6 shadow-md border-2 border-purple-300">
                            <h4 className="text-xl font-bold mb-2 text-purple-700">已获得的NFT</h4>
                            <div className="grid grid-cols-3 gap-2">
                              {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-gradient-to-br from-purple-400 to-pink-400 aspect-square rounded-lg flex items-center justify-center shadow-md border-2 border-white transform hover:rotate-3 transition-transform">
                                  <span className="font-bold text-white text-xl">NFT</span>
                                </div>
                              ))}
                            </div>
                            <button className="mt-4 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium shadow-md transform hover:scale-105 transition-transform">查看全部</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* 装饰元素 */}
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-yellow-400 rounded-full shadow-lg border-4 border-white z-20">
              <div className="flex h-full items-center justify-center">
                <span className="text-3xl">🎮</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-pink-400 rounded-full shadow-lg border-4 border-white z-20">
              <div className="flex h-full items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-700">为什么选择Web3大学</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex space-x-4 bg-white p-5 rounded-3xl shadow-lg border-4 border-pink-300 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-pink-400 rounded-full flex-shrink-0 flex items-center justify-center shadow-md border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-pink-500">去中心化学习</h3>
                <p className="text-purple-700">无需中心化平台控制，社区驱动的内容创建和学习体验，真正实现Web3精神！</p>
              </div>
            </div>
            <div className="flex space-x-4 bg-white p-5 rounded-3xl shadow-lg border-4 border-blue-300 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex-shrink-0 flex items-center justify-center shadow-md border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-500">实际奖励</h3>
                <p className="text-purple-700">通过有价值的学习活动获取实际的代币奖励，而不仅仅是普通的证书和徽章！</p>
              </div>
            </div>
            <div className="flex space-x-4 bg-white p-5 rounded-3xl shadow-lg border-4 border-purple-300 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex-shrink-0 flex items-center justify-center shadow-md border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-purple-500">区块链认证</h3>
                <p className="text-purple-700">所有证书和成就都存储在区块链上，确保永久性和不可篡改性，真正拥有你的学习成果！</p>
              </div>
            </div>
            <div className="flex space-x-4 bg-white p-5 rounded-3xl shadow-lg border-4 border-green-300 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-green-400 rounded-full flex-shrink-0 flex items-center justify-center shadow-md border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-500">社区驱动</h3>
                <p className="text-purple-700">内容和课程由社区创建和评价，确保最高质量和最相关的学习资源，大家一起共建！</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-700">学员超级反馈</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "张三",
                role: "区块链开发者",
                content: "通过Web3大学，我不仅学到了最新的区块链技术，还因分享我的知识获得了可观的yideng币。这种双赢的模式超级激励人！",
                emoji: "🚀"
              },
              {
                name: "李四",
                role: "NFT设计师",
                content: "获得我的第一个Web3大学NFT证书是我职业生涯的转折点。它帮助我证明了我的技能，并吸引了更多的客户。太赞了！",
                emoji: "🎨"
              },
              {
                name: "王五",
                role: "DeFi研究员",
                content: "Web3大学的课程质量非常高，我用积累的yideng币解锁了高级DeFi策略课程，这些知识在实际项目中帮助了我很多！",
                emoji: "💰"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-lg border-4 border-indigo-300 transform hover:scale-105 transition-transform relative">
                <div className="absolute -top-5 -right-5 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                  <span className="text-2xl">{testimonial.emoji}</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4 shadow-md border-4 border-white flex items-center justify-center">
                    <span className="font-bold text-white text-xl">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-purple-700">{testimonial.name}</h4>
                    <p className="text-pink-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-purple-700">"{testimonial.content}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        </main>
        <footer className="bg-gradient-to-b from-indigo-200 to-purple-300 py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="footer-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="2" fill="white" fillOpacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-3 shadow-lg border-4 border-white">
                  <span className="font-bold text-xl text-purple-700">W3</span>
                </div>
                <h3 className="text-3xl font-bold text-purple-600 drop-shadow-md transform -rotate-1">Web3大学</h3>
              </div>
              <p className="max-w-xs text-purple-700">通过区块链技术和代币激励，为教育和学习体验增添欢乐和价值！</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-purple-700">平台</h4>
                <ul className="space-y-2 text-purple-600">
                  <li><a href="#" className="hover:text-pink-500 transition">关于我们</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition">联系我们</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition">合作伙伴</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition">社区</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-purple-700">学习</h4>
                <ul className="space-y-2 text-purple-600">
                  <li><a href="#" className="hover:text-pink-500 transition">课程目录</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition">学习路径</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition">导师</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition">证书</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-purple-700">资源</h4>
                <ul className="space-y-2 text-purple-600">
                  <li><a href="#" className="hover:text-pink-500 transition">帮助中心</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition">API文档</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition">条款和条件</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition">隐私政策</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-purple-700">关注我们</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center hover:bg-pink-400 transition shadow-md border-2 border-white transform hover:rotate-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-pink-400 transition shadow-md border-2 border-white transform hover:rotate-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center hover:bg-pink-400 transition shadow-md border-2 border-white transform hover:rotate-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-pink-400 transition shadow-md border-2 border-white transform hover:rotate-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
                <div className="mt-4">
                  <h5 className="font-bold mb-2 text-purple-700">订阅我们的通讯</h5>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="输入你的邮箱" 
                      className="px-3 py-2 bg-white text-purple-700 rounded-l-full focus:outline-none flex-grow border-2 border-purple-300 border-r-0"
                    />
                    <button className="px-5 py-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-r-full text-white font-bold shadow-md border-2 border-pink-300 hover:from-pink-500 hover:to-purple-600 transition">
                      订阅
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t-4 border-indigo-100 pt-8 text-center text-purple-700">
            <p className="font-bold">&copy; 2025 Web3大学. 保留所有权利.</p>
          </div>
          
          <div className="mt-4 text-center text-purple-600 text-sm">
            <p>由区块链技术支持 | 用于教育和知识共享</p>
            <div className="flex justify-center mt-2 space-x-6">
              <a href="#" className="hover:text-pink-500 transition font-medium">English</a>
              <a href="#" className="hover:text-pink-500 transition font-medium">日本語</a>
              <a href="#" className="hover:text-pink-500 transition font-medium">한국어</a>
              <a href="#" className="hover:text-pink-500 transition font-medium">Español</a>
            </div>
          </div>
          
          {/* 装饰元素 */}
          <div className="absolute bottom-5 right-5 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-20 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
        </div>
      </footer>
    </div>
    </div>
    
  )
}