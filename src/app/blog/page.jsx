import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      title: "PythonのAPIテスト自動化の基礎とOpenAI APIへ繋がリクエストテスト実装例",
      category: "Python",
      date: "2023-11-26",
    },
    {
      title: "行動モデルに沿った意志がない暗い空港の作り方",
      category: "デザイン",
      date: "2023-11-25",
    },
    {
      title: "Pythonのパッケージングと配布の全体像",
      category: "Python",
      date: "2023-11-24",
    },
    // 必要に応じて、さらにブログ記事を追加してください
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl">ブログ</h1>
      <div className="space-y-4">
        {posts.map((post, i) => (
          <Link key={i} href="#" className="block bg-gray-800 rounded-lg p-4 hover:bg-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
              <div className="flex-1">
                <h3 className="text-white">{post.title}</h3>
                <div className="text-sm text-gray-400 mt-1">
                  {post.category} • {post.date}
                </div>
              </div>
              <div className="text-gray-400">→</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
  }

