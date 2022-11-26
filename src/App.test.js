import {
    render,
    screen,
    fireEvent
} from '@testing-library/react';
import App from './App';


test('buttons has correct initial color, and updates when click', () => {
    render( < App / > )

    const colorButton = screen.getByRole('button', 'Change to blue')

    expect(colorButton).toHaveStyle({
        backgroundColor: 'red'
    })

    //click по кнопке
    fireEvent.click(colorButton)

    //после клика ожиаем окраски кнопки в голубой цветв
    expect(colorButton).toHaveStyle({
        backgroundColor: 'blue'
    })

    //по клику текст кнопки должен измениться на "Change to red"
    expect(colorButton).toHaveTextContent("Change to red")

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