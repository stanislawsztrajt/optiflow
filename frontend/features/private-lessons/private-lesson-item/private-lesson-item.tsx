import React, { FC } from "react";
import { IprivateLesson } from "../types";

interface Props {
  privateLesson: IprivateLesson;
}

const PrivateLessonItem: FC<Props> = ({ privateLesson }) => {
  return (
    <div>
      <div>{privateLesson.title}</div>
      <div>{privateLesson.description}</div>
      <div>{privateLesson.category}</div>
      <div>{privateLesson.price}</div>
      <div>{privateLesson.date.toISOString()}</div>
    </div>
  );
};

export default PrivateLessonItem;
