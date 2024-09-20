export const WelcomeLine = () => <span>Welcome, visitor!</span>;

export const ExplainLine = () => (
  <span>
    Type <span className="text-slate-400">help</span> and press{" "}
    <span className="text-slate-400">Enter</span> for a list of available
    commands.
  </span>
);

type UnknownCommandLineProps = {
  input: string;
};

export const UnknownCommandLine = ({ input }: UnknownCommandLineProps) => (
  <span>
    The <span className="text-slate-400">{input}</span> command does not exist.
  </span>
);
