import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Prueba en custom hook useFetchGifs', () => {
  test('debe de retornar un arroglo de imagenes vacio y isLoading como true', () => {
    const { result } = renderHook(() => useFetchGifs('HunterxHunter'));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('debe de retornar un arreglo de imagenes y isLoading como false', async () => {
    const { result } = renderHook(() => useFetchGifs('HunterxHunter'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
