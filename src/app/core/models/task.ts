export type Task = {
  __typename: 'Task';
  id: string;
  filename: string;
  uploadDate: number;
  patientCount: number;
  // reportID: string;
  // isRead: boolean;
  status2: number;  //  0 => Processing, 1 => Processed, not read (notification), 2 => Read
  createdAt: string;
  updatedAt: string;

  // Manually created
  position: number;
};
