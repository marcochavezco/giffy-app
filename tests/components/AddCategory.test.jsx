import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'HunterxHunter' } });

    expect(input.value).toBe('HunterxHunter');
  });

  test('debe de llamar onAddCategory si el input tienen un valor', () => {
    const inputValue = 'HunterxHunter';
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);
  });

  test('NO debe de llamar onAddCategory si el input esta vacio', () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onAddCategory).not.toHaveBeenCalled();
  });
});
