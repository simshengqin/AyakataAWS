export type Report = {
  __typename?: 'Report';
  id?: string;
  patientNo?: string;
  filename?: string;
  predictedMonths?: string;
  predictedDate?: string;
  createdAt?: string;
  updatedAt?: string;

  // Manually created
  position?: number;
};
