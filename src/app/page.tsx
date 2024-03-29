import Card from "./components/Card"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    <Navbar/>
    <main>
      <Header/>
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <Card/>
      </div>
    </main>
  </main>
</main>

  )
}
