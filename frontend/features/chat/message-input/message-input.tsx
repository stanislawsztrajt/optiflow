import React from "react";
import { Field, Form, Formik } from "formik";
import useMessageInput from "./use-message-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface Iprops {
  loading: boolean;
  disableInput: boolean;
  secondUserId: string;
}

const MessageInput: React.FC<Iprops> = ({
  loading,
  secondUserId,
  disableInput,
}) => {
  const { initialValues, sendMessage, validationSchema } = useMessageInput({
    secondUserId,
    disableInput,
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={sendMessage}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-row items-center justify-between w-full h-14">
          <Field
            type="text"
            name="content"
            disabled={loading || disableInput}
            className="w-full h-full px-5 outline-none focus:shadow-inner focus:bg-gray-50"
            placeholder="Napisz wiadomość"
          />
          <button
            type="submit"
            disabled={loading || disableInput}
            className="h-full px-5 border-l hover:shadow-inner hover:bg-gray-50 disabled:hover:shadow-none disabled:bg-gray-50"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default MessageInput;
