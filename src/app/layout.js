import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ポートフォリオ',
  description: '私の個人ポートフォリオウェブサイト',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} min-h-screen transition-colors duration-300`}>
        <nav className="max-w-4xl mx-auto py-4 px-4">
          <ul className="flex justify-center space-x-6">
            <li><Link href="/" className="hover:text-gray-300 light:hover:text-gray-600">ホーム</Link></li>
            <li><Link href="/work" className="hover:text-gray-300 light:hover:text-gray-600">作品</Link></li>
            <li><Link href="/blog" className="hover:text-gray-300 light:hover:text-gray-600">ブログ</Link></li>
          </ul>
        </nav>
        <main className="max-w-4xl mx-auto px-4 pb-12">
          {children}
        </main>
        <footer className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-start space-x-6 text-sm text-gray-400 light:text-gray-600">
            <Link href="#" className="hover:text-gray-300 light:hover:text-gray-800">→ フォローする</Link>
            <Link href="#" className="hover:text-gray-300 light:hover:text-gray-800">→ メール更新を受け取る</Link>
          </div>
        </footer>
      </body>
    </html>
  )
}

