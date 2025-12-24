import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <Navigation />
      <Hero />
      <Experience />
      <Certificates />
      <Contact />
    </main>
  )
}

