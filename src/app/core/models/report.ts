export type Report = {
  __typename: 'Report';
  id: string;
  patientID: string;
  predictedMonths: number;
  predictedDate: number;
  reportID: string;
  createdAt: string;
  updatedAt: string;

  // Manually created
  position: number;
};
