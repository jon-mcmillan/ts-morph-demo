/**
 * Introduces the Project class, including source files, and creating source files.
 *
 * @see https://ts-morph.com/setup/
 */
import { Project } from "ts-morph";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test, expect } from "@jest/globals";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const project = new Project({
  tsConfigFilePath: path.join(__dirname, "tsconfig.json"),
});

project.createSourceFile(
  "src/example-two.mts",
  `import example from './example-one.mjs';

console.log(example);
`
);

test("project contains two sourceFiles", () => {
  const sourceFiles = project.getSourceFiles();
  expect(project.getSourceFiles()).toHaveLength(2);
  expect(sourceFiles.map((file) => file.getBaseName()).sort()).toEqual([
    "example-one.mts",
    "example-two.mts",
  ]);
});
