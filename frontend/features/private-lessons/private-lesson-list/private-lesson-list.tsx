import React, { FC } from "react";
import PrivateLessonItem from "../private-lesson-item/private-lesson-item";
import { IprivateLesson } from "../types";

interface Props {
  privateLessons: IprivateLesson[];
  loading: boolean
}

const PrivateLessonList: FC<Props> = ({ privateLessons, loading }) => {
  const privateLessonsMap = privateLessons.map((privateLesson) => {
    return (
      <PrivateLessonItem
        key={privateLesson._id}
        privateLesson={privateLesson}
      />
  )})

  return (
    <div>
      {privateLessons.length > 0 || loading ? (
        <div className="grid grid-cols-1 gap-10 pt-2 gap-x-14 md:grid-cols-2 xl:grid-cols-3">
          {privateLessonsMap}
        </div>
      ) : (
        <div>
          <h2 className="text-4xl text-gray-500">
            Nie znaleziono żadnych ofert korepetycji
          </h2>
        </div>
      )}
    </div>
  );
};

export default PrivateLessonList;
