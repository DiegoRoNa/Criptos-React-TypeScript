import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { getCryptos, fetchCurrencyCryptoPrice } from "./services/CryptoServicies";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair : Pair) => Promise<void>
}

// variables, metodos y funciones del Store
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    result: {} as CryptoPrice, // al ponerle el "as CryptoPrice", TS ya sabe el type de este state
    loading: false, // spinner oculto
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        // setear en el array "cryptoCurrencies"
        set(() => ({
            cryptoCurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true // mostrar spinner
        }))
        const result = await fetchCurrencyCryptoPrice(pair)
        // setear en el obj "result"
        set(() => ({
            result,
            loading: false // ocultar spinner
        }))
    }
})))