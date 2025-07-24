import '../public/style.css'

export default function Home() {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/prices">Prices</a>
        <a href="/login">Login</a>
      </nav>
      <main>
        <h1>Welcome to OSINT Dashboard</h1>
        <p>Next-gen intelligence tools in one place.</p>
      </main>
    </div>
  )
}
