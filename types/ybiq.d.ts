export type Logger = (msg: string) => void;
export type CommandParams = {
  readonly cwd?: string | undefined;
  readonly logger?: Logger | undefined;
};

export declare function init(params?: CommandParams): Promise<void>;
type InitCommand = typeof init;

export type RunLabeler = (script: string) => string;

export type RunParams = {
  readonly scripts: ReadonlyArray<string>;
  readonly npm?: boolean | undefined;
  readonly labeler?: RunLabeler | undefined;
  readonly stdout?: NodeJS.WriteStream | undefined;
  readonly stderr?: NodeJS.WriteStream | undefined;
};

export type RunResult = {
  readonly script: string;
  readonly success: boolean;
  readonly code: number | undefined;
  readonly error: Error | undefined;
};

export declare function run(params: RunParams): Promise<{
  success: boolean;
  results: Array<RunResult>;
}>;
type RunCommand = typeof run;
