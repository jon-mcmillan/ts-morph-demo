/**
 * Introduction to the AST created by the typescript compiler.
 *
 * @see https://astexplorer.net/
 * @see https://www.typescriptlang.org/play
 * @see https://tc39.es/ecma262/#sec-declarations-and-the-variable-statement for similarity with the spec
 */
import { Project, SyntaxKind } from "ts-morph";
import { test, expect } from "@jest/globals";

const project = new Project();

const sourceFile = project.createSourceFile(
  "src/example-ast.ts",
  `
export const A = 1,
B = 2;

export const add = (a:number, b:number) => a + b;

const D = add(A, B);
`
);

// TODO: print the path and kind for a node
export const printNodePath = (arg1: any): string[] => [];

test("printNodePath returns the kind and the text", () => {
  expect(
    printNodePath(sourceFile.getDescendantsOfKind(SyntaxKind.ArrowFunction)[0]!)
  ).toMatchInlineSnapshot(`
  [
    "ArrowFunction: (a: number, b: number) => a + b",
    "VariableDeclaration: add = (a: number, b: number) => a + b",
    "VariableDeclarationList: const add = (a: number, b: number) => a + b",
    "VariableStatement: export const add = (a: number, b: number) => a + b;",
    "SourceFile: export const A = 1, B = 2;
  export const add = (a: number, b: number) => a + b;
  const D = add(A, B);
  ",
  ]
  `);
});
