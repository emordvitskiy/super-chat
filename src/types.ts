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

type TChatLastMessage = {
  content: string;
  timetamp: number;
}

export type TChatItem = {
  chat_id: string;
  user_id: string;
  avatar_url: string | null;
  user_name: string;
  last_message: TChatLastMessage;
}
