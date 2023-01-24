import React from "react";
import { Field, Form, Formik } from "formik";
import useMessageInput from "./use-message-input";

interface Iprops {
  loading: boolean;
  secondUserId: string;
}

const MessageInput: React.FC<Iprops> = ({ loading, secondUserId }) => {
  const { initialValues, sendMessage, validationSchema } = useMessageInput({
    secondUserId,
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={sendMessage}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
            type="text"
            name="content"
            disabled={loading}
            className="w-full h-full px-5 py-4"
            placeholder="Napisz wiadomość"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default MessageInput;
