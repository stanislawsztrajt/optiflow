import React, { FC } from 'react'
import PrivateLessonItem from '../private-lesson-item/private-lesson-item'
import { IprivateLesson } from '../types'

interface Props {
  privateLessons: IprivateLesson[]
}

const PrivateLessonList: FC<Props> = ({ privateLessons }) => {
  return(
    <>
      { privateLessons.length === 0 ? (
        <div>
          Nie ma tutaj żadnych korepetycji
        </div>
      ) : (
        <>
          { privateLessons.map(privateLesson => {
            return (
              <PrivateLessonItem privateLesson={privateLesson} key={privateLesson._id} />
            )
          })}
        </>
      )}
    </>
  )
}

export default PrivateLessonList
  