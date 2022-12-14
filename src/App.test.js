import {
    render,
    screen,
    fireEvent
} from '@testing-library/react';
import App from './App';
import {
    replaceCamelWithSpaceas
} from './App'


test('buttons has correct initial color, and updates when click', () => {
    render( < App / > )

    const colorButton = screen.getByRole('button', 'Change to Midnight')

    expect(colorButton).toHaveStyle({
        backgroundColor: 'MediumVioletRed'
    })

    //click по кнопке
    fireEvent.click(colorButton)

    //после клика ожиаем окраски кнопки в голубой цветв
    expect(colorButton).toHaveStyle({
        backgroundColor: 'MidnightBlue'
    })

    //по клику текст кнопки должен измениться на "Change to red"
    expect(colorButton).toHaveTextContent("Change to Medium Violet Red")

});


test('initial conditions', () => {
    render( < App / > )
    //check that the buttons starts out enable
    const colorButton = screen.getByRole('button', 'Change to blue')
    expect(colorButton).toBeEnabled()
    //check that the buttons starts out unchecked
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
})

test('if checkbox does not click button is enabled and disabled if checkboc click', () => {
    render( < App / > )
    //button is enabled
    const ourButton = screen.getByRole('button')
    const checkBox = screen.getByRole('checkbox', 'Disable button')
    expect(checkBox).not.toBeChecked()
    expect(ourButton).toBeEnabled()

    //checkbox clicked, button disabled
    fireEvent.click(checkBox)
    expect(checkBox).toBeChecked()
    expect(ourButton).toBeDisabled()
    expect(ourButton).toHaveStyle({
        backgroundColor: "grey"
    })
})

describe('spaces before camel-case capital letters', () => {
    test('works for no inner  capital letter', () => {
        expect(replaceCamelWithSpaceas('Red')).toBe('Red')
    })
    test('for one inner  cap.letter', () => {
        expect(replaceCamelWithSpaceas('MidnightNight')).toBe('Midnight Night')
    })

    test('for multiple inner cap.letter', () => {
        expect(replaceCamelWithSpaceas('MediumVioletRed')).toBe('Medium Violet Red')
    })
})