import { useMemo } from "react"
import { useCryptoStore } from "../Store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

    const { result, loading } = useCryptoStore()
    const hasResult = useMemo(() => Object.values(result).length > 0, [result])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner/> : hasResult && (
                <>
                <h2>Cotización</h2>
                <div className="result">
                    <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Logo cripto moneda" />
                    <div>
                        <p>El precio es de: <span>{result.PRICE}</span></p>
                        <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                        <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                        <p>Variación últimas 24 horas: <span>{result.CHANGEPCTHOUR}</span></p>
                        <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                    </div>
                </div>
                </>
            )}
        </div>
    )
}
