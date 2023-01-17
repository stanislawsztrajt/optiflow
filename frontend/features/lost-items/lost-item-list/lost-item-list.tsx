import React, { FC } from 'react'
import LostItemItem from '../lost-item-item/lost-item-item'
import { IlostItem } from '../types'

interface Props {
  lostItems: IlostItem[]
}

const LostItemList: FC<Props> = ({ lostItems }) => {
  return(
    <>
      { lostItems.length === 0 ? (
        <div>
          Nie ma tutaj żadnych zgubionych przedmiotów
        </div>
      ) : (
        <>
          {
            lostItems.map(lostItem => {
              return (
                <LostItemItem lostItem={lostItem} key={lostItem._id} />
              )
            })
          }
        </>
      ) }
    </>
  )
}

export default LostItemList
  