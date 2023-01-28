"use client";
import React from "react";
import useLogin from "@/features/authorization/login/use-login";
import { Loading } from "@/features/ui";

export default function LoginPage() {
  const { error, loading, login } = useLogin();

  return (
    <>
      <h1 className="text-4xl font-medium text-color-primary-text">Witaj!</h1>
      <h2 className="mt-4 text-color-subtext">
        Zaloguj się przy użyciu konta Librus
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const event = e as unknown as { target: { value: string }[] };
          login({
            login: event.target[0].value,
            password: event.target[1].value,
          });
        }}
        className="flex flex-col justify-center mt-8"
      >
        <div>
          <label className="auth-input-label" htmlFor="login">
            Login
          </label>{" "}
          <br />
          <input
            required
            disabled={loading ? true : false}
            className="w-full mt-1 auth-input-text"
            type="text"
            name="login"
            placeholder="Wpisz swój login do konta librus"
          />
        </div>
        <div className="mt-4">
          <label className="auth-input-label" htmlFor="password">
            Hasło
          </label>{" "}
          <br />
          <input
            required
            disabled={loading ? true : false}
            className="w-full mt-1 auth-input-text"
            type="password"
            name="password"
            placeholder="Wpisz swoje hasło do konta librus"
          />
        </div>
        <div className="mt-2 text-sm text-red-500">{error}&nbsp;</div>
        <button
          disabled={loading ? true : false}
          className="mt-6 auth-button-submit"
          type="submit"
        >
          {loading ? (
            <div className="flex justify-center">
              <Loading />
            </div>
          ) : (
            "Zaloguj się"
          )}
        </button>
        <div className="mt-6 text-sm text-color-subtext">
          Masz problem z logowaniem?{" "}
          <a
            className="underline duration-100 text-color-primary hover:brightness-125"
            target="_blank"
            href="https://portal.librus.pl/rodzina/synergia/loguj"
          >
            Sprawdź stronę Librusa
          </a>
        </div>
      </form>
    </>
  );
}
