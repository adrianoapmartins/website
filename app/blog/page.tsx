import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Bloggest',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My blog I just set up</h1>
      <BlogPosts />
    </section>
  )
}
