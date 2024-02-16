import { shallow } from 'enzyme'
import React from 'react'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Preuebas en el <GifGrid />', () => {
    const category = 'One Punch'

    test('Debe de mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow( <GifGrid category= { category }/>)
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe demostrar items cuando se cargan imágenes useFetchGifs', () => {
        //mock es falsear algo
        const gifs = [{
            id: 'abc',
            url: 'https://localhost/test.jpg',
            title: 'Title Test'
        },
        {
            id: 'cde',
            url: 'https://localhost/test.jpg',
            title: 'Title Test'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow( <GifGrid category= { category }/>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
})

