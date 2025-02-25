"use client";

import React, { useState } from "react";
import { observer } from "mobx-react";
import { useParams } from "next/navigation";
import { FileText, HelpCircle, MessagesSquare, MoveLeft, User } from "lucide-react";
// ui
import { CustomMenu, ToggleSwitch, Tooltip } from "@plane/ui";
// helpers
import { cn } from "@/helpers/common.helper";
// hooks
import { useAppTheme, useCommandPalette, useInstance, useTransient, useUserSettings } from "@/hooks/store";
import { usePlatformOS } from "@/hooks/use-platform-os";
// plane web components
import { PlaneVersionNumber, ProductUpdates, ProductUpdatesModal } from "@/plane-web/components/global";
import { WorkspaceEditionBadge } from "@/plane-web/components/workspace";
import { ENABLE_LOCAL_DB_CACHE } from "@/plane-web/constants/issues";

export interface WorkspaceHelpSectionProps {
  setSidebarActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarHelpSection: React.FC<WorkspaceHelpSectionProps> = observer(() => {
  const { workspaceSlug, projectId } = useParams();
  // store hooks
  const { sidebarCollapsed, toggleSidebar } = useAppTheme();
  const { toggleShortcutModal } = useCommandPalette();
  const { isMobile } = usePlatformOS();
  const { config } = useInstance();
  const { isIntercomToggle, toggleIntercom } = useTransient();
  const { canUseLocalDB, toggleLocalDB } = useUserSettings();
  // states
  const [isNeedHelpOpen, setIsNeedHelpOpen] = useState(false);
  const [isChangeLogOpen, setIsChangeLogOpen] = useState(false);

  const handleCrispWindowShow = () => {
    toggleIntercom(!isIntercomToggle);
  };

  const isCollapsed = sidebarCollapsed || false;

  return (
    <>
      <div
        className={cn(
          "flex w-full items-center justify-between px-2 self-baseline border-t border-custom-border-200 bg-custom-sidebar-background-100 h-12 flex-shrink-0",
          {
            "flex-col h-auto py-1.5": isCollapsed,
          }
        )}
      >
        <div
          className={`relative flex flex-shrink-0 items-center gap-1 ${isCollapsed ? "flex-col justify-center" : "justify-evenly"}`}
        >
          <CustomMenu
            customButton={
              <button
                type="button"
                className={cn(
                  "grid place-items-center rounded-md p-1 outline-none text-custom-text-200 hover:text-custom-text-100 hover:bg-custom-background-90",
                  {
                    "bg-custom-background-90": isNeedHelpOpen,
                  }
                )}
              >
                <Tooltip tooltipContent="Help" isMobile={isMobile} disabled={isNeedHelpOpen}>
                  <HelpCircle className="h-[18px] w-[18px] outline-none" />
                </Tooltip>
              </button>
            }
            customButtonClassName={`relative grid place-items-center rounded-md p-1.5 outline-none ${isCollapsed ? "w-full" : ""}`}
            menuButtonOnClick={() => !isNeedHelpOpen && setIsNeedHelpOpen(true)}
            onMenuClose={() => setIsNeedHelpOpen(false)}
            placement={isCollapsed ? "left-end" : "top-end"}
            maxHeight="lg"
            closeOnSelect
          >
           <CustomMenu.MenuItem>
              <button
                type="button"
                onClick={() => toggleShortcutModal(true)}
                className="flex w-full items-center justify-start text-xs hover:bg-custom-background-80"
              >
                <span className="text-xs">Keyboard shortcuts</span>
              </button>
            </CustomMenu.MenuItem>


            <div className="px-1 pt-2 mt-1 text-xs text-custom-text-200 border-t border-custom-border-200">
              <PlaneVersionNumber />
            </div>
          </CustomMenu>
        </div>
        <div
          className={`flex flex-shrink-0 items-center gap-1 ${isCollapsed ? "flex-col justify-center" : "justify-evenly"}`}
        >
          <Tooltip tooltipContent={`${isCollapsed ? "Expand" : "Hide"}`} isMobile={isMobile}>
            <button
              type="button"
              className={`grid place-items-center rounded-md p-1 text-custom-text-200 outline-none hover:bg-custom-background-90 hover:text-custom-text-100 ${isCollapsed ? "w-full" : ""
                }`}
              onClick={() => toggleSidebar()}
            >
              <MoveLeft className={`h-4 w-4 duration-300 ${isCollapsed ? "rotate-180" : ""}`} />
            </button>
          </Tooltip>
        </div>
      </div>
    </>
  );
});
