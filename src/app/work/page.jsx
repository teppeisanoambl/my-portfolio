import Image from 'next/image'
import Link from 'next/link'

export default function Work() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl">作品</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <Link key={i} href="#" className="block aspect-square overflow-hidden rounded-lg">
            <Image
              src={`/image/work-${i + 1}.jpg`}
              alt={`作品 ${i + 1}`}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

