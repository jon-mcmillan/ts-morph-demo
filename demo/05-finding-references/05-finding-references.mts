/**
 * Finding references.
 *
 * @see https://ts-morph.com/navigation/finding-references
 */
import { Project } from "ts-morph";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test, expect } from "@jest/globals";
import { printNodePath } from "../02-introducing-ast/02-introducing-ast.mjs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const project = new Project({
  tsConfigFilePath: path.join(__dirname, "tsconfig.json"),
});

// TODO: find references for {foo} in 'src/file-one.ts'
let references: any[] = [];

test("", () => {
  expect(references.map(printNodePath)).toMatchInlineSnapshot(`
  [
    [
      "Identifier: foo",
      "ImportSpecifier: foo",
      "NamedImports: { foo }",
      "ImportClause: { foo }",
      "ImportDeclaration: import { foo } from "./file-one";",
      "SourceFile: import { foo } from "./file-one";
  export const fooSquared = foo + foo;
  ",
    ],
    [
      "Identifier: foo",
      "BinaryExpression: foo + foo",
      "VariableDeclaration: fooSquared = foo + foo",
      "VariableDeclarationList: const fooSquared = foo + foo",
      "VariableStatement: export const fooSquared = foo + foo;",
      "SourceFile: import { foo } from "./file-one";
  export const fooSquared = foo + foo;
  ",
    ],
    [
      "Identifier: foo",
      "BinaryExpression: foo + foo",
      "VariableDeclaration: fooSquared = foo + foo",
      "VariableDeclarationList: const fooSquared = foo + foo",
      "VariableStatement: export const fooSquared = foo + foo;",
      "SourceFile: import { foo } from "./file-one";
  export const fooSquared = foo + foo;
  ",
    ],
  ]
  `);
});
