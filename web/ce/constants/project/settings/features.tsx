import { ReactNode } from "react";
import { FileText, Layers, Timer } from "lucide-react";
import { IProject } from "@plane/types";
import { ContrastIcon, DiceIcon, Intake } from "@plane/ui";

export type TProperties = {
  property: string;
  title: string;
  description: string;
  icon: ReactNode;
  isPro: boolean;
  isEnabled: boolean;
  renderChildren?: (
    currentProjectDetails: IProject,
    isAdmin: boolean,
    handleSubmit: (featureKey: string, featureProperty: string) => Promise<void>
  ) => ReactNode;
};
export type TFeatureList = {
  [key: string]: TProperties;
};

export type TProjectFeatures = {
  [key: string]: {
    title: string;
    description: string;
    featureList: TFeatureList;
  };
};

export const PROJECT_FEATURES_LIST: TProjectFeatures = {
  project_features: {
    title: "Projects and issues",
    description: "Toggle these on or off this project.",
    featureList: {
      cycles: {
        property: "cycle_view",
        title: "Cycles",
        description: "Timebox work as you see fit per project and change frequency from one period to the next.",
        icon: <ContrastIcon className="h-5 w-5 flex-shrink-0 rotate-180 text-custom-text-300" />,
        isPro: false,
        isEnabled: true,
      },
      modules: {
        property: "module_view",
        title: "Modules",
        description: "Group work into sub-project-like set-ups with their own leads and assignees.",
        icon: <DiceIcon width={20} height={20} className="flex-shrink-0 text-custom-text-300" />,
        isPro: false,
        isEnabled: true,
      },
      views: {
        property: "issue_views_view",
        title: "Views",
        description: "Save sorts, filters, and display options for later or share them.",
        icon: <Layers className="h-5 w-5 flex-shrink-0 text-custom-text-300" />,
        isPro: false,
        isEnabled: true,
      },
      pages: {
        property: "page_view",
        title: "Pages",
        description: "Write anything like you write anything.",
        icon: <FileText className="h-5 w-5 flex-shrink-0 text-custom-text-300" />,
        isPro: false,
        isEnabled: true,
      },
      inbox: {
        property: "inbox_view",
        title: "Desk",
        description: "Consider and discuss issues before you add them to your project.",
        icon: <Intake className="h-5 w-5 flex-shrink-0 text-custom-text-300" />,
        isPro: false,
        isEnabled: true,
      },
    },
  },

};
