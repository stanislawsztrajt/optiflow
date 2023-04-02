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
import { faHome, faSchool, faUser } from "@fortawesome/free-solid-svg-icons";
import { featuresContent, headersContent, heroContent } from "@/utils/data/features-content";

export default function HeroPage() {
  const { user } = useUser();

  return (
    <main className="flex flex-col items-center p-8">
      <section className="hero-box">
        <div className="-mt-12 hero-text-element">
          <h1 className="text-5xl font-semibold">
            {headersContent.homePage}
          </h1>
          <p className="mt-6 text-xl">
            {heroContent.h1Content}
          </p>
          <div className="flex flex-row gap-4 mt-4">
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
            <button type="button" className="menu-button lg:text">
              <FontAwesomeIcon icon={faHome} />
              <span className="ml-2">Strona główna</span>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <Image loading="lazy" src={UndrawElements} alt="" />
        </div>
      </section>

      <section className="hero-box">
        <div className="hero-text-element">
          <h2 className="text-7xl">Sprzedaż i kupno książek</h2>
          <p className="mt-4 text-xl">
            {featuresContent.books}
          </p>
        </div>
        <div className="hero-image">
          <Image loading="lazy" src={UndrawBookLover} alt="" />
        </div>
      </section>

      <section className="hero-box">
        <div className="hero-text-element">
          <h3 className="text-7xl">Publikowanie i przeglądanie wydzarzeń</h3>
          <p className="mt-4 text-xl">
            {featuresContent.events}
          </p>
        </div>
        <div className="hero-image">
          <Image loading="lazy" src={UndrawEvent} alt="" />
        </div>
      </section>

      <section className="hero-box">
        <div className="hero-text-element">
          <h4 className="text-7xl">Publikowanie i znajdywanie zgubionych przedmiotów</h4>
          <p className="mt-4 text-xl">
            {featuresContent.lostItems}
          </p>
        </div>
        <div className="hero-image">
          <Image loading="lazy" src={UndrawLesson} alt="" />
        </div>
      </section>

      <section className="hero-box">
        <div className="hero-text-element">
          <h4 className="text-7xl">Udzielanie i pobieranie korepetycji</h4>
          <p className="mt-4 text-xl">
            {featuresContent.privateLessons}
          </p>
        </div>
        <div className="hero-image">
          <Image loading="lazy" src={UndrawLost} alt="" />
        </div>
      </section>
    </main>
  );
}
