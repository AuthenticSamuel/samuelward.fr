export type Command = {
  name: string;
  description: string;
  handler: () => string;
};

const ls: Command = {
  name: "ls",
  description: "Lists directories and files",
  handler: () => {
    return "about skills jobs";
  },
};

const help: Command = {
  name: "help",
  description: "Lists available commands",
  handler: () => {
    return "hello world";
  },
};

export const commands: Command[] = [help, ls];
