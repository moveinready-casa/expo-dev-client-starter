import { execSync } from "child_process";
import fs from "fs";
import path from "path";

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

const appDir = "./app";
const preserveFiles = ["global.css", "_layout.tsx"];

console.log("🧹 Cleaning app directory...");

const appItems = fs.readdirSync(appDir);

appItems.forEach((item) => {
  if (!preserveFiles.includes(item)) {
    const itemPath = path.join(appDir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      console.log(`🗂️  Removing directory: ${item}`);
      fs.rmSync(itemPath, { recursive: true, force: true });
    } else {
      console.log(`📄 Removing file: ${item}`);
      fs.rmSync(itemPath);
    }
  } else {
    console.log(`✅ Preserving: ${item}`);
  }
});

const resetPageContent = `import { SafeAreaView, Text } from "react-native";

export default function ResetComplete() {
  return (
    <SafeAreaView>
      <Text className="text-2xl font-bold text-foreground">Reset Complete</Text>
      <Text className="text-lg text-muted-foreground">The project has been successfully reset</Text>
    </SafeAreaView>
  );
}
`;

fs.writeFileSync(path.join(appDir, "index.tsx"), resetPageContent);
console.log("📄 Created new index.tsx with reset complete message");

console.log(
  "✅ Project reset complete - app directory cleaned and reset page created"
);

execSync("echo 'r'")