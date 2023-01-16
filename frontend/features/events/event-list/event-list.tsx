import React, { FC } from 'react'
import EventItem from '../event-item/event-item'
import { Ievent } from '../types'

interface Props {
  events: Ievent[]
}

const EventList: FC<Props> = ({ events }) => {
  return(
    <>
      {
        events.map(event => {
          return (
            <EventItem event={event} key={event._id} />
          )
        })
      }
    </>
  )
}

export default EventList
  