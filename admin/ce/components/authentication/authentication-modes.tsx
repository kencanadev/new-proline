import { observer } from "mobx-react";
import Image from "next/image";
import { useTheme } from "next-themes";
// types
import {
  TGetBaseAuthenticationModeProps,
  TInstanceAuthenticationMethodKeys,
  TInstanceAuthenticationModes,
} from "@plane/types";
// components
import { AuthenticationMethodCard } from "@/components/authentication";
// helpers
import { getBaseAuthenticationModes } from "@/helpers/authentication.helper";
// plane admin components
import { UpgradeButton } from "@/plane-admin/components/common";
// images

export type TAuthenticationModeProps = {
  disabled: boolean;
  updateConfig: (key: TInstanceAuthenticationMethodKeys, value: string) => void;
};

// Authentication methods
export const getAuthenticationModes: (props: TGetBaseAuthenticationModeProps) => TInstanceAuthenticationModes[] = ({
  disabled,
  updateConfig,
  resolvedTheme,
}) => [
    ...getBaseAuthenticationModes({ disabled, updateConfig, resolvedTheme }),
  ];

export const AuthenticationModes: React.FC<TAuthenticationModeProps> = observer((props) => {
  const { disabled, updateConfig } = props;
  // next-themes
  const { resolvedTheme } = useTheme();

  return (
    <>
      {getAuthenticationModes({ disabled, updateConfig, resolvedTheme }).map((method) => (
        <AuthenticationMethodCard
          key={method.key}
          name={method.name}
          description={method.description}
          icon={method.icon}
          config={method.config}
          disabled={disabled}
          unavailable={method.unavailable}
        />
      ))}
    </>
  );
});
