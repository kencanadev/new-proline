"use client";
import React, { FC, useMemo } from "react";
import { observer } from "mobx-react";
import { CollapsibleButton } from "@plane/ui";
// components
import { RelationActionButton } from "@/components/issues/issue-detail-widgets";
// hooks
import { useIssueDetail } from "@/hooks/store";

type Props = {
  isOpen: boolean;
  issueId: string;
  disabled: boolean;
};

export const RelationsCollapsibleTitle: FC<Props> = observer((props) => {
  const { isOpen, issueId, disabled } = props;
  // store hook
  const {
    relation: { getRelationCountByIssueId },
  } = useIssueDetail();

  // derived values
  const relationsCount = getRelationCountByIssueId(issueId);

  // indicator element
  const indicatorElement = useMemo(
    () => (
      <span className="flex items-center justify-center ">
        <p className="text-base text-custom-text-300 !leading-3">{relationsCount}</p>
      </span>
    ),
    [relationsCount]
  );

  return (
    <CollapsibleButton
      isOpen={isOpen}
      title="Relations"
      indicatorElement={indicatorElement}
      actionItemElement={!disabled && <RelationActionButton issueId={issueId} disabled={disabled} />}
    />
  );
});
