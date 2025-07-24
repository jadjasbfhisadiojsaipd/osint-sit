export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-ring w-full border-b border-gray-700 bg-black text-white">
        <div className="relative mx-auto flex w-full flex-col py-2 md:flex-row">
          <div className="hidden w-full px-3 md:grid md:grid-cols-3">
            <div className="flex h-9 items-center justify-start">
              <a href="/" className="flex items-center gap-2 text-white font-bold text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6"><path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" /></svg>
                GhostIntel
              </a>
            </div>
            <ul className="flex items-center justify-center gap-7">
              <li><a href="#" className="text-sm hover:text-slate-300">Telegram</a></li>
              <li><a href="#" className="text-sm hover:text-slate-300">Status</a></li>
              <li><a href="#" className="text-sm hover:text-slate-300">Support</a></li>
            </ul>
            <div className="flex justify-end items-center gap-2">
              <a href="#" className="rounded px-4 py-1.5 text-sm border border-slate-600 hover:bg-slate-800">Login</a>
              <a href="#" className="rounded bg-blue-600 px-4 py-1.5 text-sm font-semibold hover:bg-blue-700">Purchase</a>
            </div>
          </div>
        </div>
      </header>
      <h1 className="flex items-center justify-center text-[65px] leading-tight font-extrabold sm:w-[480px] sm:text-[95px]"
          style={{ backgroundImage: 'linear-gradient(to right, #90cdf4, #2c5282)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
        GhostIntel
      </h1>
    </div>
  );
}