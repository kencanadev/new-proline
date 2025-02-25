import { createContext, useContext } from "react";

export enum ETimeLineTypeType {
  ISSUE = "ISSUE",
  MODULE = "MODULE",
}

export const TimeLineTypeContext = createContext<ETimeLineTypeType | undefined>(undefined);

export const useTimeLineType = () => {
  const timelineType = useContext(TimeLineTypeContext);

  return timelineType;
};
