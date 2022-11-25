import {
    render,
    screen,
    fireEvent
} from '@testing-library/react';
import App from './App';


test('buttons has correct initial color', () => {
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


/**expect - jest global method */