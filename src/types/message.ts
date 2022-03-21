export type MessageType = 'success' | 'info' | 'danger';

export interface Message {
  text: string;
  type?: MessageType;
  life?: number;
}
