export declare function init(params?: {
  cwd?: string | undefined;
  logger?: ((msg: string) => void) | undefined;
}): Promise<void>;

export declare function run(params: {
  scripts: Array<string>;
  npm?: boolean | undefined;
  labeler?: ((script: string) => string) | undefined;
  stdout?: NodeJS.WriteStream | undefined;
  stderr?: NodeJS.WriteStream | undefined;
  cwd?: string | undefined;
}): Promise<{
  success: boolean;
  results: Array<{
    script: string;
    success: boolean;
    code: number | undefined;
    error: Error | undefined;
  }>;
}>;
