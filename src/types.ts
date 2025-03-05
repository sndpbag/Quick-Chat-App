export type ContactStatus = 'online' | 'offline' | 'away' | 'group';

export interface Contact {
  id: number;
  name: string;
  status: ContactStatus;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
}

export interface Message {
  id: number;
  sender: 'me' | 'them';
  text: string;
  time: string;
  media?: 'image';
}

export interface CallType {
  type: 'audio' | 'video';
}