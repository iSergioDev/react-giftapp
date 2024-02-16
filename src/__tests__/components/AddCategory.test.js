import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import AddCategory from '../../components/AddCategory'



describe('Pruebas en <AddCategory />', () => {

    // const setCategories = () => {}
    const setCategories = jest.fn()
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>)

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory setCategories={ setCategories }/>) 
    })
    
    test('Debe de demostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe cambiar la caja de texto del input', () => {
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('change', {target: {value}})
    })

    test('No debe de enviar la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){}})

        expect( setCategories ).not.toHaveBeenCalled()
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Naruto'
        // 1. simular el inputChange
        wrapper.find('input').simulate('change', {target: {value}})
        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){}})
        // 3. setCategories se debe de haber llamado 
        expect( setCategories ).toHaveBeenCalled()
        expect( setCategories ).toHaveBeenCalledTimes(1)
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function))
        // 4. el valor de input debe de estar ''
        expect( wrapper.find('input').prop('value')).toBe('')

    })
})