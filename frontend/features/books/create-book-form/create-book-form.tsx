import React, { FC } from 'react'

const CreateBookForm: FC = () => {
  return(
    <form action="">
      <label htmlFor="">Tytuł</label>
      <input type="text" />
      <label htmlFor="">Opis</label>
      <input type="text" />
      <label htmlFor="">Kategoria książki</label>
      <select name="" id="">
        <option value="">book category type</option>
      </select>
      <label htmlFor="">Cena</label>
      <input type="number" />
      <label htmlFor="">look</label>
      <input type="look" />

      <label htmlFor="">Zdjęcia</label>
      <input type="image" />
    </form>
  )
}

export default CreateBookForm