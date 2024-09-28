import { z } from "zod";
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from "../schema/cripto-schema";

// para tipar el tipo de moneda del catalogo de moneda en data/index.ts
export type Currency = z.infer<typeof CurrencySchema>

// para tipar cada objeto de cada cripto con la info que necesitamos
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>

// para tipar el pair
export type Pair = z.infer<typeof PairSchema>

// para la info de la cripto
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>