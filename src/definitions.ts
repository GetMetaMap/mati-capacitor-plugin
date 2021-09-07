export interface MatiParams {
  clientId: string
  flowId: string
  metadata?: object
}
export interface MatiCapacitorPlugin {
  showMatiFlow(options: MatiParams): Promise<{ verificationId: string }>;
}

  