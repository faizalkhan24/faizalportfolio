import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-primary-light text-primary-dark">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp