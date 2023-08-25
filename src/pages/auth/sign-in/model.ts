import { FormEvent } from "react";
import { useLocation } from "react-router";
import { useLocalObservable } from "mobx-react-lite";

import { signInWithEmail } from "@/shared/api/rest/auth";

import { ROUTER_LINK } from "@/shared/config";
import { useStore } from "@/app/providers/withStore";

export const useModel = () => {
  const store = useStore();
  const location = useLocation();

  const model = useLocalObservable(() => {
    return {
      isLoading: false,
      error: "",
      message: "",
      email: "",

      get isAuthenticated(): boolean {
        return store.session.isAuthenticated;
      },

      get state() {
        const from = location.state?.from?.pathname || ROUTER_LINK.MAIN;

        return { from };
      },

      handleEmailChange({ value }: { value: string }) {
        model.email = value;
      },
      async handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        model.error = "";
        model.message = "";
        model.isLoading = true;

        try {
          await signInWithEmail({ email: model.email });
          model.message = "Check your email for the login link!";
        } catch (error) {
          model.error = "Oops, something went wrong";
        }

        model.isLoading = false;
      },
    };
  });

  return model;
};
