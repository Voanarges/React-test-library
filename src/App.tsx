import { useLayoutEffect, useState } from "react"

const App = () => {
  const [buttonColor, setButtonColor] = useState("red")
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = buttonColor === "red" ? "blue" : "red"
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
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
