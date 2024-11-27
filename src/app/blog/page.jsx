import Link from 'next/link'
import Image from 'next/image'

// JSONファイルをインポート
import postsData from '../../data/posts.json'

export default function Blog() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl">ブログ</h1>
      <div className="space-y-4">
        {postsData.map((post, i) => (
          <Link key={i} href="#" className="block bg-gray-200 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
            <div className="flex items-center space-x-4">
              <Image
                src={post.image}
                alt={post.title}
                width={64}
                height={64}
                className="rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-black dark:text-white">{post.title}</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {post.category} • {post.date}
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">→</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}