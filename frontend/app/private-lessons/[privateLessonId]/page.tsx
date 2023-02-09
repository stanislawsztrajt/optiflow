"use client";

import { useEffect, useState } from "react";
import { IprivateLesson } from "@/features/private-lessons/types";
import privateLessonsServices from "@/utils/api/private-lessons-services";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

interface Iprops {
  params: {
    privateLessonId: string;
  };
}

export default function PrivateLessonPage(props: Iprops) {
  const { params } = props;
  const [privateLesson, setPrivateLesson] = useState<IprivateLesson>();
  const [privateLessonUser, setPrivateLessonUser] = useState<Iuser>();

  useEffect(() => {
    fetchPrivateLessonData();
  }, []);

  const fetchPrivateLessonData = async () => {
    const privateLesson: IprivateLesson = await privateLessonsServices.findOne(params.privateLessonId);
    const privateLessonUser: Iuser = await usersServices.findOne(privateLesson.userId)

    setPrivateLesson(privateLesson);
    setPrivateLessonUser(privateLessonUser)
  };

  return (
    <>
      {privateLesson && privateLessonUser ? (
        <div className="mt-32">
          <div className="w-11/12 mx-auto sm:w-4/5 lg:w-3/5 2xl:w-2/5">
            <div className='grid w-full h-56 px-5 bg-red-500 rounded-md shadow sm:h-72 lg:h-96 place-items-center'>
              <h1 className='text-xl font-semibold text-white sm:text-2xl'>Potrzebuję korepetycji</h1>
            </div>
            <div className="grid grid-cols-1 gap-2 my-5 lg:px-10">
              <h1 className="text-2xl font-semibold lg:text-3xl">
                { privateLesson.title }
              </h1>
              <p className="text-lg text-gray-500">
                { privateLesson.category }
              </p>
              <p className="text-2xl font-medium">
                { privateLesson.price ? `${ privateLesson.price }zł/godz` : "Za darmo"}
              </p>
              <p className="text-xl"> { privateLesson.description }</p>
              <div className='flex flex-col items-start justify-between w-full px-3 py-2 mt-4 border rounded-md sm:items-center sm:flex-row'>
                <Link
                  className='text-xl'
                  href={`users/${privateLessonUser._id}`}
                >
                  {privateLessonUser.name} {privateLessonUser.surname}, {privateLessonUser.class}
                </Link>
                <Link
                  className='mt-1 font-semibold text-red-500 sm:mt-0'
                  href={`chat/${privateLessonUser._id}`}
                >
                  Skontakuj się
                  <FontAwesomeIcon className='ml-2' icon={faComment} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Ładowanie"
      )}
    </>
  );
}
