import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./Store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {
  const { fetchCryptos } = useCryptoStore()

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">Cotizador de <span>CriptoMonedas</span></h1>

        <div className="content">
          <CriptoSearchForm/>
          <CryptoPriceDisplay/>
        </div>
      </div>
    </>
  )
}

export default App
