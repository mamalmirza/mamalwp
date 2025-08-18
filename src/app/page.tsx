import Welcome from '@/components/Welcome'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Welcome />
    </main>
  )
}
