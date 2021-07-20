export type Notification = {
  __typename: 'Notification';
  id: string;
  taskID: string;
  filename: string;
  isActivated: boolean;
  isRead: boolean;

  // Manually created
  position: number;
};
