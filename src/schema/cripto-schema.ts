import { z } from "zod";

// para validar el tipo de moneda del catalogo de moneda en data/index.ts
export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

// para validar cada objeto de cada cripto con la info que necesitamos
export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({
        Name: z.string(),
        FullName: z.string()
    })
})

// para validar el array del resultado de la api
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)

// para validar el type de cada pair
export const PairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
})

// para validar los datos que requerimos de cada crypto
export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCTHOUR: z.string(),
    LASTUPDATE: z.string(),
})