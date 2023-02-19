import { useState } from "react";
import { IlostItem } from "../types";
import { Dispatch, SetStateAction } from "react";
import lostItemsServices from "@/utils/api/lost-items-services";

interface Iprops {
  setLostItems: Dispatch<SetStateAction<IlostItem[]>>
}

const useLostItemItem = (props:Iprops) => {
  const { setLostItems } = props

  const initialDeleteBtnText:string = "Usuń"
  const [deleteLostItemBtnText, setDeleteLostItemBtnText] = useState(initialDeleteBtnText);
  const [btnConfirm, setBtnConfirm] = useState(false)

  const confirmDelete = (lostItemId:string) => {
    if(btnConfirm) {
      deleteLostItem(lostItemId)
      return
    }

    let secondsToConfirm = 5;
    setBtnConfirm(true)
    setDeleteLostItemBtnText(`Potwierdź (${secondsToConfirm})`)

    const confirmInterval = setInterval((i) => {
      setDeleteLostItemBtnText(`Potwierdź (${secondsToConfirm-1})`)
      secondsToConfirm--;
    }, 1000)

    setTimeout(() => {
      setDeleteLostItemBtnText(initialDeleteBtnText)
      setBtnConfirm(false)
      clearInterval(confirmInterval)
    }, 5000)
  }

  const deleteLostItem = async (lostItemId:string) => {
    await lostItemsServices.remove(lostItemId)
    setLostItems(lostItems => lostItems.filter(lostItem => lostItem._id !== lostItemId))
  }

  return {
    confirmDelete,
    deleteLostItemBtnText
  };
};

export default useLostItemItem;
