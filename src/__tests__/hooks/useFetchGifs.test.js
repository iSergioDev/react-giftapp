import { renderHook } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs"


describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', () => {
        const {result} = renderHook( () => useFetchGifs('One Punch'))
        const {data, loading} = result.current
        expect( data ).toEqual([])
        expect( loading ).toBe(true)
    })

    test('Debe de retornar un arreglo de imgs y el loading en false', () => {
        const resp = renderHook( () => useFetchGifs('One Punch'))
        console.log(resp);
        // const {data, loading} = result.current
        // expect( data ).toEqual([])
        // expect( loading ).toBe(true)
    })
})