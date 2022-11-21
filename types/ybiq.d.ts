export type Logger = (msg: string) => void;
export type CommandParams = {
  cwd?: string | undefined;
  logger?: Logger | undefined;
};

export declare function init(params?: CommandParams): Promise<void>;
type InitCommand = typeof init;
