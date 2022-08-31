import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba en <GifGrid/>', () => {
  const category = 'HunterxHunter';

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe de mostrar items cuando se cargan las imagenes con useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'HunterxHunter',
        url: 'https://hunterxhunter.jp',
      },
      {
        id: '123',
        title: 'naruto',
        url: 'https://naruto.jp',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
