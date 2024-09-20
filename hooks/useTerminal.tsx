import { useState } from "react";

import { Command, commands } from "@/lib/commands";
import {
  ExplainLine,
  UnknownCommandLine,
  WelcomeLine,
} from "@/components/terminal-defaults";

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
  const [input, setInput] = useState<string>("");
  const [command, setCommand] = useState<Command | null>(null);

  const addLine: AddLine = ({ isShowingPrompt, isAwaitingInput, content }) => {
    setLines((lines) => {
      const previousLines = lines.map((line) => {
        line.isAwaitingInput = false;
        return line;
      });
      return [...previousLines, { isShowingPrompt, isAwaitingInput, content }];
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
    setCommand(commands.find(({ name }) => name === value) ?? null);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (!command) return handleUnknownCommand(input);
    handleValidCommand(command);
  };

  const addPromptLine = () => {
    addLine({
      isAwaitingInput: true,
      isShowingPrompt: true,
      content: null,
    });
  };

  const handleUnknownCommand = (input: string) => {
    addLine({
      isAwaitingInput: false,
      isShowingPrompt: false,
      content: <UnknownCommandLine input={input} />,
    });
    addPromptLine();
  };

  const handleValidCommand = (command: Command) => {
    addLine({
      isAwaitingInput: false,
      isShowingPrompt: false,
      content: command.handler(),
    });
    addPromptLine();
  };

  const inputProps = {
    value: input,
    onChange: handleInputChange,
    onKeyDown: handleEnterPress,
  };

  return {
    inputProps,
    lines,
    addLine,
    command,
  };
};
