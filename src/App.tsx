import { useLayoutEffect, useState } from "react"

export function replaceCamelWithSpaceas(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, " $1")
}

const App = () => {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed")
  const [disabled, setDisabled] = useState(false)
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed"
  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "grey" : buttonColor }}
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {replaceCamelWithSpaceas(newButtonColor)}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        onChange={() => setDisabled(!disabled)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  )
}

export default App
