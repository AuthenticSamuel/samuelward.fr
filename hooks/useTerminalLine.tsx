import { useState } from "react";

import { ExplainLine, WelcomeLine } from "@/components/terminal-defaults";

type Line = {
  isShowingPrompt: boolean;
  isAwaitingInput: boolean;
  content: React.ReactNode;
};

type AddLine = (params: Line) => void;

const defaultLines: Line[] = [
  {
    isAwaitingInput: false,
    isShowingPrompt: false,
    content: <WelcomeLine />,
  },
  {
    isAwaitingInput: false,
    isShowingPrompt: false,
    content: <ExplainLine />,
  },
  {
    isAwaitingInput: true,
    isShowingPrompt: true,
    content: null,
  },
];

export const useTerminal = () => {
  const [lines, setLines] = useState<Line[]>(defaultLines);

  const addLine: AddLine = ({ isShowingPrompt, isAwaitingInput, content }) => {
    setLines((lines) => [
      ...lines,
      { isShowingPrompt, isAwaitingInput, content },
    ]);
  };

  return {
    lines,
    addLine,
  };
};
