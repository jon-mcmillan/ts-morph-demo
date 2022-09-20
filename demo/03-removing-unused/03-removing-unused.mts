/**
 * Using the built in refactoring tools.
 *
 * @see https://ts-morph.com/details/source-files#source-file-code-fixes
 */
import { Project } from "ts-morph";
import { test, expect } from "@jest/globals";

const project = new Project();

const example = "example";

const sourceFile = project.createSourceFile(
  "src/example-input.ts",
  `
const A = 'unused';
export const B = 'exported';
`
);

// TODO: remove unused code

test("the unused const was removed", () => {
  expect(sourceFile.print()).toEqual(`export const B = 'exported';\n`);
});
