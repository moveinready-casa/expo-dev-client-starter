import { execSync } from "child_process";
import components from "../constants/components.js";

// Check git status before proceeding
try {
  const gitStatus = execSync("git status --porcelain", { encoding: "utf8" });
  if (gitStatus.trim()) {
    console.error("❌ Error: You have unstaged or uncommitted changes.");
    console.error(
      "Please commit or stash your changes before running this script."
    );
    console.error("\nUncommitted changes:");
    console.error(gitStatus);
    process.exit(1);
  }
  console.log("✅ Git working directory is clean");
} catch (error) {
  console.error("❌ Error checking git status:", error.message);
  process.exit(1);
}

// Remove breadcrumb as that component uses an incompatible router
const componentsToUpdate = components.filter(
  (component) => component.name !== "breadcrumb"
);

componentsToUpdate.forEach((component) => {
  const command = `pnpm dlx shadcn@latest add https://shadcn-native.moveinready.casa/registry/${component.name} -o`;
  console.log(`Running: ${command}`);

  try {
    execSync(command, { stdio: "inherit" });
    console.log(`✅ Successfully updated ${component.name}`);
  } catch (error) {
    console.error(`❌ Failed to update ${component.name}:`, error.message);
  }
});
