import { shallow } from 'enzyme'
import React from 'react'
import GifGridItem from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Título Test'
    const url = 'https://localhost/test.jgp'
    const wrapper = shallow( <GifGridItem title={title} url={url} />)

    test('Debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe de tener un párrafo con el title', () => {

        const p = wrapper.find('p')
        expect(p.text().trim()).toBe( title )
    })

    test('Debe de tener la iamgen igual a la url y alt de los props', () => {
        const img = wrapper.find('img') 
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)

    })

    test('Debe de tener la clase CSS animate_fadeIn', () => {
        const div  = wrapper.find('div')
        const className = div.prop('className')
        
        expect(className.includes('animate__fadeIn')).toBe(true)

    })
})
