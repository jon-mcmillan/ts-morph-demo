/**
 * Introduces the Project class, including source files, and creating source files.
 *
 * @see https://ts-morph.com/setup/
 */
import { Project } from "ts-morph";
import { test, expect } from "@jest/globals";

// TODO: load files
const project = new Project();

// TODO: create a file called example-two.mts

test("project contains two sourceFiles", () => {
  const sourceFiles = project.getSourceFiles();
  expect(project.getSourceFiles()).toHaveLength(2);
  expect(sourceFiles.map((file) => file.getBaseName()).sort()).toEqual([
    "example-one.mts",
    "example-two.mts",
  ]);
});
