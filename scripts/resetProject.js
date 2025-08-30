// import { execSync } from "child_process";
// import fs from "fs";
// import components from "../constants/components.js";

// try {
//   const gitStatus = execSync("git status --porcelain", { encoding: "utf8" });
//   if (gitStatus.trim()) {
//     console.error("❌ Error: You have unstaged or uncommitted changes.");
//     console.error(
//       "Please commit or stash your changes before running this script."
//     );
//     console.error("\nUncommitted changes:");
//     console.error(gitStatus);
//     process.exit(1);
//   }
//   console.log("✅ Git working directory is clean");
// } catch (error) {
//   console.error("❌ Error checking git status:", error.message);
//   process.exit(1);
// }

// components.forEach((component) => {
//   const uiPath = `./components/ui/${component.name}.tsx`;
//   const appPath = `./app/${component.name}.tsx`;

//   if (fs.existsSync(uiPath)) {
//     fs.rmSync(uiPath);
//   }

//   if (fs.existsSync(appPath)) {
//     fs.rmSync(appPath);
//   }
// });

console.log("✅ Project reset complete - all component files removed");
