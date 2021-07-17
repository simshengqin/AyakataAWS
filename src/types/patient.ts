export type Patient = {
  __typename: 'Patient';
  // id: string;
  // name: string;
  // description: string;
  // city: string;
  id: string;
  createdAt: string;
  updatedAt: string;

  Patient_No: string;
  Case_No: string;
  Referral_Type_From: string;
  No_of_Subspecialities: string;
  No_of_Secondary_Diagnosis_ICD9: string;
  Adm_DateTime: string;
  Adm_Dept_Description: string;
  Adm_Type_Desc: string;
  Adm_Reason: string;
  Adm_Trt_Cat_Desc: string;
  Adm_Physical_Class_Desc: string;
  Adm_Subspecialty_Desc: string;
  Dis_DateTime: string;
  Dis_Dept_Description: string;
  Dis_Reason: string;
  Dis_Physical_Class_Desc: string;
  Case_Specialty_Desc: string;
  Discharge_Type_Desc: string;
  Primary_Diagnosis_Code_Mediclaim: string;
  Primary_Diagnosis_Description_Mediclaim: string;
  Secondary_Diagnosis_Codes_Subvention: string;
  MDC_Code: string;
  MDC_Description: string;
  Dis_DateTime_Planned: string;
  CCI_Score: string;
  DS_Turn_Inpatient_Ind: string;
  Outpatient_Turn_DS_Ind: string;
  Unplanned_Surgery_Ind: string;
  Re_Adm_Ind: string;
  Planned_Adm_Ind: string;
  Lodger_Ind: string;
  Surgical_Emergency_Ind: string;
  LOS_Days: string;
  Last_Day_LOS_Hours: string;
  Acute_LOS_Days: string;
  HD_LOS_Days: string;
  ICU_LOS_Days: string;
  Rehab_LOS_Days: string;
  No_of_Surgical_Operations: string;
  No_of_Secondary_Diagnosis_Subvention: string;


  Test_Code: string;
  Test_Result: string;
  Result_Test_Date: string;
  Minimum_Range: string;
  Maximum_Range: string;
  Short_Text: string;
  Panel_Test_Code: string;
  Test_Order: string;
  Chapter_Description: string;
  Number_of_Tests: string;

  Order_Text: string;
  Order_Creation_Date: string;
  Dosage_Ordered_Unit: string;
  Dosage_Ordered: string;
  Dosage_Form: string;
  Strength_Unit: string;
  Component_Type_Code: string;
  Component_Type_Description: string;
  Medication_Order_Component_Text: string;
  Cluster_Preferred_Name_Code: string;
  Cluster_Preferred_Name_Description: string;

  Patient_DOB: string;
  Religion: string;
  Race: string;
  Gender: string;
  Marital_Status: string;

  Surgical_Code: string;
  Surgical_Desc: string;
  Operation_Table_Code: string;
  Operation_Date: string;
};
//
// export type casevisit = {
//   __typename: 'casevisit';
//   'case no': string;
// }
