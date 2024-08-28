export interface EmailProvider {
    send(email: any): Promise<boolean>;
  }