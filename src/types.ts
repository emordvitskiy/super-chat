export enum MessageStatus {
  Sending,
  Failed,
  Unread,
  Read,
};

export type Message = {
  id: string;
  text: string;
  timestamp: number;
  isMy: boolean;
  status: MessageStatus;
}
