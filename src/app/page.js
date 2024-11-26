'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }, [isLightMode])

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode)
  }

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">
            こんにちは、Kokoroです <span className="wave">👋</span>
          </h1>
          <button
            onClick={toggleLightMode}
            className="px-4 py-2 rounded-md bg-gray-700 light:bg-gray-200 text-white light:text-black transition-colors duration-300"
          >
            {isLightMode ? '🌙 ダークモード' : '🌞 ライトモード'}
          </button>
        </div>
        <p className="text-gray-300 light:text-gray-600 max-w-2xl">
          いろはにほへとちりぬるを わかよたれそつねならむ うゐのおくやまけふこえて あさきゆめみしゑひもせす
          この文は、日本語の全ての音を含んでおり、フォントやレイアウトのテストに最適です。ウェブデザインの世界では、
          最終的なコンテンツが準備される前に、テキストがデザイン内でどのように収まるかを視覚化するためにプレースホルダーを使用することがよくあります。
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Link key={i} href="#" className="block aspect-square overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt={`作品 ${i + 1}`}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          </Link>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex space-x-4">
          <Link href="#" className="flex items-center space-x-2 bg-gray-800 light:bg-gray-200 rounded-full px-4 py-2 transition-colors duration-300">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="プロフィール"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="text-sm">
              <div className="text-white light:text-black">@wantedly</div>
              <div className="text-gray-400 light:text-gray-600">100 フォロワー</div>
            </div>
          </Link>
          <Link href="#" className="flex items-center space-x-2 bg-gray-800 light:bg-gray-200 rounded-full px-4 py-2 transition-colors duration-300">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="プロフィール"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="text-sm">
              <div className="text-white light:text-black">@Twitter</div>
              <div className="text-gray-400 light:text-gray-600">1500 フォロワー</div>
            </div>
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        {[
          "PythonのAPIテスト自動化の基礎とOpenAI APIへ繋がリクエストテスト実装例",
          "行動モデルに沿った意志がない暗い空港の作り方",
          "Pythonのパッケージングと配布の全体像"
        ].map((title, i) => (
          <Link key={i} href="#" className="block bg-gray-800 light:bg-gray-200 rounded-lg p-4 hover:bg-gray-700 light:hover:bg-gray-300 transition-colors duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
              <div className="flex-1">
                <h3 className="text-white light:text-black">{title}</h3>
              </div>
              <div className="text-gray-400 light:text-gray-600">→</div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

