"use client";

import { cn } from "@/lib/utils";
import { useTerminal } from "@/hooks/useTerminal";
import { Prompt } from "@/components/prompt";

export const Terminal = () => {
  const { lines, inputProps, command } = useTerminal();
  const isValidCommand = !!command;

  return (
    <div className="w-full grow p-4 font-semibold">
      {lines.map((line, index) => (
        <p key={`line-${index}`}>
          <Prompt isShowing={line.isShowingPrompt} />
          {line.content}{" "}
          {line.isAwaitingInput ? (
            <input
              type="text"
              className={cn("bg-transparent", {
                "text-green-500": isValidCommand,
              })}
              {...inputProps}
            />
          ) : null}
        </p>
      ))}
    </div>
  );
};
