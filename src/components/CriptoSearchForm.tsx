import { useState, ChangeEvent, FormEvent } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../Store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {
    
    // extraer las cryptos del hook del store, y la busqueda del precio
    const { cryptoCurrencies, fetchData } = useCryptoStore() 

    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: ''
    })
    
    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // validar valores vacios
        if (Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }

        // limpiar mensaje de error
        setError('')

        // consultar la api
        fetchData(pair)
    }

    return (
        <form action="" className="form" onSubmit={handleSubmit}>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select name="currency" id="currency" value={pair.currency} onChange={handleChange}>
                    <option value="">-- Selecciona --</option>
                    {currencies.map( currency => (
                        <option value={currency.code} 
                                key={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptocurrency">CriptoMoneda:</label>
                <select name="criptocurrency" id="criptocurrency" value={pair.criptocurrency} onChange={handleChange}>
                    <option value="">-- Selecciona --</option>
                    {cryptoCurrencies.map( crypto => (
                        <option value={crypto.CoinInfo.Name} 
                                key={crypto.CoinInfo.FullName}>
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Cotizar" />
        </form>
    )
}
