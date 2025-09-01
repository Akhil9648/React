import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyinfo from './hooks/useCurrencyinfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);
  const options = Object.keys(currencyInfo || {});

  // Safe swap using local temps so we don't read stale state between updates
  const swap = () => {
    const nextFrom = to;
    const nextTo = from;
    const nextAmount = convertedAmount;
    const nextConverted = amount;

    setFrom(nextFrom);
    setTo(nextTo);
    setAmount(nextAmount);
    setConvertedAmount(nextConverted);
  }; [8]

  const convert = () => {
    if (!currencyInfo || !to || currencyInfo[to] == null) return;
    setConvertedAmount(Number(amount) * Number(currencyInfo[to]));
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center overflow-y-auto"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="w-full max-w-md mx-auto border border-white/40 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-3"
        >
          <InputBox className='text-black'
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(v) => setAmount(v)}
          />

          {/* Divider row with centered swap button */}
          <div className="relative">
            <div className="border-t border-white/70" />
            <button
              type="button"
              onClick={swap}
              className="absolute left-1/2 -translate-x-1/2 -top-3 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1 text-sm"
            >
              swap
            </button>
          </div>

          <InputBox className='text-black'
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
