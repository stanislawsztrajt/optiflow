import { useState } from "react";
import { Ievent } from "../types";
import { Dispatch, SetStateAction } from "react";
import eventsServices from "@/utils/api/events-services";

interface Iprops {
  setEvents: Dispatch<SetStateAction<Ievent[]>>
}

const useEventItem = (props:Iprops) => {
  const { setEvents } = props

  const initialDeleteBtnText:string = "Usuń"
  const [deleteEventBtnText, setDeleteEventBtnText] = useState(initialDeleteBtnText);
  const [btnConfirm, setBtnConfirm] = useState(false)

  const confirmDelete = (eventId:string) => {
    if(btnConfirm) {
      deleteEvent(eventId)
      return
    }

    let secondsToConfirm = 5;
    setBtnConfirm(true)
    setDeleteEventBtnText(`Potwierdź (${secondsToConfirm})`)

    const confirmInterval = setInterval((i) => {
      setDeleteEventBtnText(`Potwierdź (${secondsToConfirm-1})`)
      secondsToConfirm--;
    }, 1000)

    setTimeout(() => {
      setDeleteEventBtnText(initialDeleteBtnText)
      setBtnConfirm(false)
      clearInterval(confirmInterval)
    }, 5000)
  }

  const deleteEvent = async (eventId:string) => {
    await eventsServices.remove(eventId)
    setEvents(events => events.filter(event => event._id !== eventId))
  }

  return {
    confirmDelete,
    deleteEventBtnText
  };
};

export default useEventItem;
