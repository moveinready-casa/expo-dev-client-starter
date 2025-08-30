import { execSync } from "child_process";
import prompt from "prompt-sync";

export function DELETE(request: Request) {
  const getPrompt = prompt();

  const answer = getPrompt(
    "Are you sure you want to reset the project? (Y/n) enter "
  );

  setTimeout(() => {
    return Response.json({ error: "Reset cancelled" }, { status: 400 });
  }, 30000);

  if (answer !== "Y") {
    return Response.json({ error: "Reset cancelled" }, { status: 400 });
  }
  execSync("pnpm run reset-project", { stdio: "inherit" });

  return Response.json({ message: "Project reset complete" });
}
