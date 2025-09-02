import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light") // ✅ Fixed variable name (camelCase and lowercase "light")

  // ✅ useEffect must be inside the component
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  const lightTheme = () => {
    setThemeMode("light") // ✅ Corrected to match variable name
  }
  const darkTheme = () => {
    setThemeMode("dark") // ✅ Corrected to match variable name
  }

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
