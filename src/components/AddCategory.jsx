import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory({ setCategories }) {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 2){
            setCategories(categorias => [inputValue, ...categorias])
            setInputValue('')
        }
    }

  return (
    <form id='formulario' onSubmit={handleSubmit}>
        <input
            id='search'
            type="text"
            placeholder='Nueva Categoria'
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
