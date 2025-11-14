import { useMemo } from 'react'

function App() {
  const backendUrl = useMemo(() => {
    return (import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000')
  }, [])

  const downloadHref = `${backendUrl}/api/ppt/holocaust`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Holocaust Presentation</h1>
          <p className="mt-4 text-lg md:text-xl text-indigo-200">A thoughtfully designed, classroom-ready PowerPoint covering history, key events, and lessons.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">What’s inside</h2>
            <ul className="space-y-3 text-indigo-100">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span> Overview, background, and a selected timeline (1933–1945)</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span> Ghettos & camps vs. resistance & rescue</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span> Perpetrators, victims, and bystanders</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span> Aftermath, remembrance, and further learning</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span> Quote slide for reflection and key lessons</li>
            </ul>

            <div className="mt-6 text-sm text-indigo-200/80">
              Built to download as a .pptx file and open directly in Microsoft PowerPoint.
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/20 rounded-2xl p-6 border border-white/10 shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Get the deck</h2>
              <p className="text-indigo-100 mb-6">Click the button below to download the presentation. No sign-in required.</p>
            </div>

            <a
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 transition-colors text-white font-semibold px-6 py-3 text-lg shadow-lg"
              href={downloadHref}
            >
              Download PowerPoint (.pptx)
            </a>

            <p className="mt-4 text-xs text-indigo-200/80">If the download doesn’t start, ensure your browser allows downloads from this site. You can also right‑click and choose “Save link as…”.</p>
          </div>
        </section>

        <footer className="mt-16 text-center text-indigo-300 text-sm">
          Educational purpose; please handle this topic with care and respect. Sources include USHMM and Yad Vashem.
        </footer>
      </div>
    </div>
  )
}

export default App
