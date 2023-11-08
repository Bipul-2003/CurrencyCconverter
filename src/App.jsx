import { useState } from "react"
import { Input } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [result, setResult] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setResult(amount)
    setAmount(result)
  }
  const convert = () => setResult(amount * currencyInfo[to])

  return (
    <div className=" bg-slate-800 min-h-screen">
      <h1 className="text-6xl font-semibold text-white text-center py-14">Currency converter </h1>
      <div
        className="w-full h-full flex justify-center items-center ">

        <div className=" flex justify-center items-center">

          <div className="w-full   border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <div className="w-full flex">
              <img src={'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-ravi-roshan-8576782-Cropped-scaled.jpg'} className="h-96 rounded-s-3xl w-64" alt="" />
              <div className=" flex justify-center items-center ">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    convert();

                  }}
                >
                  <div className="w-full mb-1">
                    <Input
                      label="From"
                      amount={amount}
                      currencyOptions={options}
                      onCurrencyChange={(e) => setFrom(e)}
                      selectedCurrency={from}
                      onAmountChange={(e) => setAmount(e)}
                    />
                  </div>
                  <div className="relative w-full h-0.5">
                    <button
                      type="button"
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                      onClick={swap}
                    >
                      Swap
                    </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                    <Input
                      label="To"
                      amount={result}
                      currencyOptions={options}
                      onCurrencyChange={(e) => setTo(e)}
                      selectedCurrency={to}
                      amountDisabled

                    />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >)
}

export default App
