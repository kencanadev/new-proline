"use client";
import { Command } from "cmdk";
import { observer } from "mobx-react";
import { FileText, GithubIcon, MessageSquare, Rocket } from "lucide-react";
// ui
import { DiscordIcon } from "@plane/ui";
// hooks
import { useCommandPalette, useTransient } from "@/hooks/store";

type Props = {
  closePalette: () => void;
};

export const CommandPaletteHelpActions: React.FC<Props> = observer((props) => {
  const { closePalette } = props;
  // hooks
  const { toggleShortcutModal } = useCommandPalette();
  const { toggleIntercom } = useTransient();

  return (
    <Command.Group heading="Help">
      <Command.Item
        onSelect={() => {
          closePalette();
          toggleShortcutModal(true);
        }}
        className="focus:outline-none"
      >
        <div className="flex items-center gap-2 text-custom-text-200">
          <Rocket className="h-3.5 w-3.5" />
          Open keyboard shortcuts
        </div>
      </Command.Item>
    </Command.Group>
  );
});
