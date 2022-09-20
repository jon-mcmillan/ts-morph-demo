/**
 * Finding exports.
 *
 * @see https://ts-morph.com/details/exports
 */
import { Project } from "ts-morph";
import { test, expect } from "@jest/globals";
import { printNodePath } from "../02-introducing-ast/02-introducing-ast.mjs";

const project = new Project();
const sourceFile = project.createSourceFile(
  "example.ts",
  `
 const foo = "foo";
 export const bar = 'bar'

export { foo };

export default foo;
`
);

// TODO: get exports by name
const exported: Map<any, any> = new Map();

// TODO: find the default export
const assignments: any[] = [];

// TODO: find named exports
const decls: any[] = [];

test("exported", () => {
  expect(exported.get("foo")?.map(printNodePath)).toMatchInlineSnapshot(`
  [
    [
      "VariableDeclaration: foo = "foo"",
      "VariableDeclarationList: const foo = "foo"",
      "VariableStatement: const foo = "foo";",
      "SourceFile: const foo = "foo";
  export const bar = 'bar';
  export { foo };
  export default foo;
  ",
    ],
  ]
  `);
});

test("assignments", () => {
  expect(assignments.map(printNodePath)).toMatchInlineSnapshot(`
  [
    [
      "ExportAssignment: export default foo;",
      "SourceFile: const foo = "foo";
  export const bar = 'bar';
  export { foo };
  export default foo;
  ",
    ],
  ]
  `);
});

test("export declarations", () => {
  expect(decls.map(printNodePath)).toMatchInlineSnapshot(`
  [
    [
      "ExportDeclaration: export { foo };",
      "SourceFile: const foo = "foo";
  export const bar = 'bar';
  export { foo };
  export default foo;
  ",
    ],
  ]
  `);
});
