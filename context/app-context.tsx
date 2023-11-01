import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useState,
} from "react";

export interface AppContextType {
  isPhone: [boolean, Dispatch<SetStateAction<boolean>>];
}
const appContextInit: AppContextType = {
  isPhone: [true, () => void 0],
};
export const AppContext = createContext<AppContextType>(appContextInit);

export default function AppContexProvider(props: PropsWithChildren) {
  const [isPhone, setIsPhone] = useState<AppContextType["isPhone"][0]>(true);
  const { children } = props;
  const value: AppContextType = {
    isPhone: [isPhone, setIsPhone],
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
