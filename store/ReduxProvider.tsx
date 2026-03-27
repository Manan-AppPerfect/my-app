"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import FeatureFlagLoader from "./FeatureFlagLoader";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <FeatureFlagLoader>
        {children}
      </FeatureFlagLoader> 
    </Provider>
    );
}