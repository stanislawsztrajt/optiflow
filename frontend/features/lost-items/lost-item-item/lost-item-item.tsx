import Image from 'next/image';
import React, { FC } from 'react'
import { IlostItem } from '../types'

interface Props {
  lostItem: IlostItem;
}

const LostItemItem: FC<Props> = ({ lostItem }) => {
  return(
    <div>
      <div>
        { lostItem.name }
      </div>
      <div>
        { lostItem.description }
      </div>
      <div>
        { lostItem.foundLocation }
      </div>
      <div>
        { lostItem.price }
      </div>
      <div>
        { lostItem.type }
      </div>
      <div>
        <Image src={lostItem.images[0]} alt="" loading='lazy' />
      </div>
    </div>
  )
}

export default LostItemItem
  