import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  type RefObject,
  createContext,
  useState,
  useRef,
} from "react";

export interface AppContextType {
  isPhone: [boolean, Dispatch<SetStateAction<boolean>>];
  headerRef: RefObject<HTMLDivElement>;
}
const appContextInit: AppContextType = {
  isPhone: [true, () => void 0],
  headerRef: { current: null },
};
export const AppContext = createContext<AppContextType>(appContextInit);

export default function AppContexProvider(props: PropsWithChildren) {
  const [isPhone, setIsPhone] = useState<AppContextType["isPhone"][0]>(true);
  const { children } = props;
  const headerRef = useRef<HTMLDivElement>(null);
  const value: AppContextType = {
    isPhone: [isPhone, setIsPhone],
    headerRef,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
