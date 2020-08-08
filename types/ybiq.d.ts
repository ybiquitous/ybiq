export type Logger = (msg: string) => void;
export type CommandParams = { cwd?: string; logger?: Logger };

export declare function init(params?: CommandParams): Promise<void>;
type InitCommand = typeof init;
