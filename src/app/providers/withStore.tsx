import { ReactNode, createContext, useContext, Suspense } from "react";
import { configure } from "mobx";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "@/shared/ui/Loading";

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

const store = {};

const RootStoreContext = createContext<typeof store>(store);

export const useStore = () => {
  return useContext<typeof store>(RootStoreContext);
};

export const withStore = (component: () => ReactNode) => () =>
  (
    <RootStoreContext.Provider value={store}>
      {component()}
    </RootStoreContext.Provider>
  );
