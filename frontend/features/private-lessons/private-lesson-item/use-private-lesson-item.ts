import { useState } from "react";
import { IprivateLesson } from "../types";
import { Dispatch, SetStateAction } from "react";
import privateLessonsServices from "@/utils/api/private-lessons-services";

interface Iprops {
  setPrivateLessons: Dispatch<SetStateAction<IprivateLesson[]>>
}

const usePrivateLessonItem = (props:Iprops) => {
  const { setPrivateLessons } = props

  const initialDeleteBtnText:string = "Usuń"
  const [deletePrivateLessonBtnText, setDeletePrivateLessonBtnText] = useState(initialDeleteBtnText);
  const [btnConfirm, setBtnConfirm] = useState(false)

  const confirmDelete = (privateLessonId:string) => {
    if(btnConfirm) {
      deletePrivateLesson(privateLessonId)
      return
    }

    let secondsToConfirm = 5;
    setBtnConfirm(true)
    setDeletePrivateLessonBtnText(`Potwierdź (${secondsToConfirm})`)

    const confirmInterval = setInterval((i) => {
      setDeletePrivateLessonBtnText(`Potwierdź (${secondsToConfirm-1})`)
      secondsToConfirm--;
    }, 1000)

    setTimeout(() => {
      setDeletePrivateLessonBtnText(initialDeleteBtnText)
      setBtnConfirm(false)
      clearInterval(confirmInterval)
    }, 5000)
  }

  const deletePrivateLesson = async (privateLessonId:string) => {
    await privateLessonsServices.remove(privateLessonId)
    setPrivateLessons(privateLessons => privateLessons.filter(privateLesson => privateLesson._id !== privateLessonId))
  }

  return {
    confirmDelete,
    deletePrivateLessonBtnText
  };
};

export default usePrivateLessonItem;
