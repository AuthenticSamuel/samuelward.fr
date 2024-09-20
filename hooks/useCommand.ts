import { useEffect, useState } from "react";

import { commands, type Command } from "@/lib/commands";

export const useCommand = (input: string) => {
  const [command, setCommand] = useState<Command | null>(null);

  useEffect(() => {
    setCommand(null);
    const command = getCommand(input);
    if (command) setCommand(command);
  }, [input, setCommand]);

  const getCommand = (name: string) => {
    return commands.find((command) => command.name === name) ?? null;
  };

  return { command };
};
