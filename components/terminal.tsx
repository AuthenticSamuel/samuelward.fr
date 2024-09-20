"use client";

// import { useCommand } from "@/hooks/useCommand";
import { useTerminal } from "@/hooks/useTerminalLine";

const Prompt = () => (
  <span>
    <span className="text-primary">samuel</span>@
    <span className="text-secondary">work</span>$
  </span>
);

export const Terminal = () => {
  // const [input, setInput] = useState<string>("");
  // const [response, setResponse] = useState<string>("");
  // const { command } = useCommand(input);
  const { lines } = useTerminal();

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(event.target.value.toLowerCase());
  // };

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") handleEnterKeyDown();
  // };

  // const handleEnterKeyDown = () => {
  //   if (!command) {
  //     setResponse(`The ${input} command does not exist.`);
  //     setInput("");
  //     return;
  //   }
  //   const res = command.handler();
  //   setResponse(res);
  //   setInput("");
  // };

  return (
    <div className="w-full grow p-4 font-semibold">
      {lines.map((line, index) => (
        <p key={`line-${index}`}>
          {line.isShowingPrompt ? <Prompt /> : null}
          {line.content}{" "}
          {line.isAwaitingInput ? (
            <input
              type="text"
              className="bg-transparent"
            />
          ) : null}
        </p>
      ))}
      {/* <p>Welcome, visitor!</p>
      <p>
        Type <span className="text-slate-400">help</span> for a list of
        available commands.
      </p>
      <p>
        <span className="text-primary">samuel</span>@
        <span className="text-secondary">work</span>${" "}
        <input
          type="text"
          className="bg-transparent"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </p>
      <p>{response}</p> */}
    </div>
  );
};
