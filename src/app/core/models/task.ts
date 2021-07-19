export type Task = {
  __typename: 'Task';
  id: string;
  filename: string;
  uploadDate: number;
  patientCount: number;
  reportID: string;
  createdAt: string;
  updatedAt: string;

  // Manually created
  position: number;
};
