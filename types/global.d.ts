// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34960#issuecomment-576906058
declare let URL: typeof globalThis extends { URL: infer URLCtor }
  ? URLCtor
  : typeof import("url").URL; // eslint-disable-line @typescript-eslint/consistent-type-imports
