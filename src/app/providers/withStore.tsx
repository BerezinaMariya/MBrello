import { ReactNode, createContext, useContext } from "react";
import { configure } from "mobx";

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

const store = {};

const RootStoreContext = createContext<typeof store>(store);

RootStoreContext.displayName = "RootStoreContext";

export const useStore = () => {
  return useContext<typeof store>(RootStoreContext);
};

useStore.displayName = "useStore";

export const withStore = (component: () => ReactNode) => () =>
  (
    <RootStoreContext.Provider value={store}>
      {component()}
    </RootStoreContext.Provider>
  );

withStore.displayName = "withStore";
