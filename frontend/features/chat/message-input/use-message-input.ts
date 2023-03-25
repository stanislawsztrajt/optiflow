import * as Yup from "yup";
import { socket } from "@/utils/socket";
import {
  ImessageInputFormikActions,
  ImessageInputInitialValues,
} from "../types";
import { Field, Form, Formik } from "formik";

interface Iprops {
  secondUserId: string;
  disableInput: boolean;
}

const useMessageInput = (props: Iprops) => {
  const { secondUserId, disableInput } = props;

  const initialValues: ImessageInputInitialValues = {
    content: "",
  };

  const validationSchema = Yup.object().shape({
    content: Yup.string()
      .max(500, "Wiadomość może liczyć maksymalnie 500 znaków")
      .required("Pole wymagane"),
  });

  const sendMessage = (
    values: ImessageInputInitialValues,
    actions: ImessageInputFormikActions
  ) => {
    if (!socket || disableInput) return;

    const message = {
      content: values.content,
      secondUserId,
    };

    socket.emit("sendMessage", message);
    actions.resetForm();
  };

  return {
    initialValues,
    sendMessage,
    validationSchema,
  };
};

export default useMessageInput;
