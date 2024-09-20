import { memo } from "react";

type PromptProps = {
  isShowing: boolean;
};

export const Prompt = memo(({ isShowing }: PromptProps) => {
  if (!isShowing) return null;
  return (
    <span>
      <span className="text-primary">samuel</span>@
      <span className="text-secondary">spirkop</span>$
    </span>
  );
});
