import { SimpleAdapter } from "../../adapters/types"
import { CHAIN } from "../../helpers/chains"
import { httpGet } from "../../utils/fetchURL"

const fetch = async () => {
  const url = "https://api.glowswap.io/v1/analytics"
  const response = await httpGet(url)
  const dailyVolume = response.data.volUSD.day;
  return {
    dailyVolume
  }
}
const adapter: SimpleAdapter = {
  version: 2,
  adapter: {
    bsquared: {
      fetch,
      start: 0,
      runAtCurrTime: true,
    }
  }
}
export default adapter
