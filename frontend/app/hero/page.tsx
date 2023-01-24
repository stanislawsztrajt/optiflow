"use client";

import { useUser } from "@/utils/hooks";
import Link from "next/link";
import React from "react";

import UndrawElements from "@/assets/undraw/undraw_elements.svg";
import UndrawBookLover from "@/assets/undraw/undraw_book_lover.svg";
import UndrawEvent from "@/assets/undraw/undraw_event.svg";
import UndrawLesson from "@/assets/undraw/undraw_lesson.svg";
import UndrawLost from "@/assets/undraw/undraw_lost.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faUser } from "@fortawesome/free-solid-svg-icons";

export default function HeroPage() {
  const { user } = useUser();

  return (
    <main className="flex flex-col items-center p-8">
      <section className="hero-box">
        <div className="hero-text-element">
          <h1 className="font-semibold text-8xl">
            Storing the texts in your mind
          </h1>
          <p className="mt-4 text-2xl">
            Write your texts and translate them with the help of one of the best
            translators - DeepL API, texts are saved in the database and used in
            later functionalities.
          </p>
          <div className="flex flex-row gap-4 mt-2">
            {user ? (
              <Link href={"/dashboard"}>
                <button type="button" className="menu-button lg:text">
                  <FontAwesomeIcon icon={faUser} />
                  <span className="ml-2">Panel użytkownika</span>
                </button>
              </Link>
            ) : (
              <Link href={"/auth/login"}>
                <button type="button" className="menu-button">
                  <FontAwesomeIcon icon={faSchool} />
                  <span className="ml-2">Zaloguj się używając Librus</span>
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="hero-image">
          <Image loading="lazy" src={UndrawElements} alt="" />
        </div>
      </section>

      <section className="hero-box">
        <div className="hero-text-element">
          <h2 className="text-7xl">Translating and saving texts</h2>
          <p className="mt-4 text-xl">
            Translate your texts using deepl api and write them down href learn
            from them.
          </p>
        </div>
        <div className="hero-image">
          <Image loading="lazy" src={UndrawBookLover} alt="" />
        </div>
      </section>

      <section className="hero-box">
        <div className="hero-text-element">
          <h3 className="text-7xl">Flash cards</h3>
          <p className="mt-4 text-xl">
            Learn using flashcards, draw words and use flash cards.
          </p>
        </div>
        <div className="hero-image">
          <Image loading="lazy" src={UndrawEvent} alt="" />
        </div>
      </section>

      <section className="hero-box">
        <div className="hero-text-element">
          <h4 className="text-7xl">English quotes and stories</h4>
          <p className="mt-4 text-xl">
            Read familiar quotes and stories href learn new words and sentence
            context. Quotes - API ninjas, philosophy quotes API, shortstories
            API.
          </p>
        </div>
        <div className="hero-image">
          <Image loading="lazy" src={UndrawLesson} alt="" />
        </div>
      </section>

      <section className="hero-box">
        <div className="hero-text-element">
          <h4 className="text-7xl">English quotes and stories</h4>
          <p className="mt-4 text-xl">
            Read familiar quotes and stories href learn new words and sentence
            context. Quotes - API ninjas, philosophy quotes API, shortstories
            API.
          </p>
        </div>
        <div className="hero-image">
          <Image loading="lazy" src={UndrawLost} alt="" />
        </div>
      </section>
    </main>
  );
}
