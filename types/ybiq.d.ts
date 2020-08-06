declare module "ybiq" {
  type Logger = (msg: string) => any;
  type CommandParams = { cwd?: string; logger?: Logger };
}
