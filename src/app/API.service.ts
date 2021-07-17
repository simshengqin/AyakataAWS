/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreatePatientInput = {
  id?: string | null;
  Patient_No?: string | null;
  Case_No?: string | null;
  Referral_Type_From?: string | null;
  No_of_Subspecialities?: string | null;
  No_of_Secondary_Diagnosis_ICD9?: string | null;
  Adm_DateTime?: string | null;
  Adm_Dept_Description?: string | null;
  Adm_Type_Desc?: string | null;
  Adm_Reason?: string | null;
  Adm_Trt_Cat_Desc?: string | null;
  Adm_Physical_Class_Desc?: string | null;
  Adm_Subspecialty_Desc?: string | null;
  Dis_DateTime?: string | null;
  Dis_Dept_Description?: string | null;
  Dis_Reason?: string | null;
  Dis_Physical_Class_Desc?: string | null;
  Case_Specialty_Desc?: string | null;
  Discharge_Type_Desc?: string | null;
  Primary_Diagnosis_Code_Mediclaim?: string | null;
  Primary_Diagnosis_Description_Mediclaim?: string | null;
  Secondary_Diagnosis_Codes_Subvention?: string | null;
  MDC_Code?: string | null;
  MDC_Description?: string | null;
  Dis_DateTime_Planned?: string | null;
  CCI_Score?: string | null;
  DS_Turn_Inpatient_Ind?: string | null;
  Outpatient_Turn_DS_Ind?: string | null;
  Unplanned_Surgery_Ind?: string | null;
  Re_Adm_Ind?: string | null;
  Planned_Adm_Ind?: string | null;
  Lodger_Ind?: string | null;
  Surgical_Emergency_Ind?: string | null;
  LOS_Days?: string | null;
  Last_Day_LOS_Hours?: string | null;
  Acute_LOS_Days?: string | null;
  HD_LOS_Days?: string | null;
  ICU_LOS_Days?: string | null;
  Rehab_LOS_Days?: string | null;
  No_of_Surgical_Operations?: string | null;
  No_of_Secondary_Diagnosis_Subvention?: string | null;
  Test_Code?: string | null;
  Test_Result?: string | null;
  Result_Test_Date?: string | null;
  Minimum_Range?: string | null;
  Maximum_Range?: string | null;
  Short_Text?: string | null;
  Panel_Test_Code?: string | null;
  Test_Order?: string | null;
  Chapter_Description?: string | null;
  Number_of_Tests?: string | null;
  Order_Text?: string | null;
  Order_Creation_Date?: string | null;
  Dosage_Ordered_Unit?: string | null;
  Dosage_Ordered?: string | null;
  Dosage_Form?: string | null;
  Strength_Unit?: string | null;
  Component_Type_Code?: string | null;
  Component_Type_Description?: string | null;
  Medication_Order_Component_Text?: string | null;
  Cluster_Preferred_Name_Code?: string | null;
  Cluster_Preferred_Name_Description?: string | null;
  Patient_DOB?: string | null;
  Religion?: string | null;
  Race?: string | null;
  Gender?: string | null;
  Marital_Status?: string | null;
  Surgical_Code?: string | null;
  Surgical_Desc?: string | null;
  Operation_Table_Code?: string | null;
  Operation_Date?: string | null;
};

export type ModelPatientConditionInput = {
  Patient_No?: ModelStringInput | null;
  Case_No?: ModelStringInput | null;
  Referral_Type_From?: ModelStringInput | null;
  No_of_Subspecialities?: ModelStringInput | null;
  No_of_Secondary_Diagnosis_ICD9?: ModelStringInput | null;
  Adm_DateTime?: ModelStringInput | null;
  Adm_Dept_Description?: ModelStringInput | null;
  Adm_Type_Desc?: ModelStringInput | null;
  Adm_Reason?: ModelStringInput | null;
  Adm_Trt_Cat_Desc?: ModelStringInput | null;
  Adm_Physical_Class_Desc?: ModelStringInput | null;
  Adm_Subspecialty_Desc?: ModelStringInput | null;
  Dis_DateTime?: ModelStringInput | null;
  Dis_Dept_Description?: ModelStringInput | null;
  Dis_Reason?: ModelStringInput | null;
  Dis_Physical_Class_Desc?: ModelStringInput | null;
  Case_Specialty_Desc?: ModelStringInput | null;
  Discharge_Type_Desc?: ModelStringInput | null;
  Primary_Diagnosis_Code_Mediclaim?: ModelStringInput | null;
  Primary_Diagnosis_Description_Mediclaim?: ModelStringInput | null;
  Secondary_Diagnosis_Codes_Subvention?: ModelStringInput | null;
  MDC_Code?: ModelStringInput | null;
  MDC_Description?: ModelStringInput | null;
  Dis_DateTime_Planned?: ModelStringInput | null;
  CCI_Score?: ModelStringInput | null;
  DS_Turn_Inpatient_Ind?: ModelStringInput | null;
  Outpatient_Turn_DS_Ind?: ModelStringInput | null;
  Unplanned_Surgery_Ind?: ModelStringInput | null;
  Re_Adm_Ind?: ModelStringInput | null;
  Planned_Adm_Ind?: ModelStringInput | null;
  Lodger_Ind?: ModelStringInput | null;
  Surgical_Emergency_Ind?: ModelStringInput | null;
  LOS_Days?: ModelStringInput | null;
  Last_Day_LOS_Hours?: ModelStringInput | null;
  Acute_LOS_Days?: ModelStringInput | null;
  HD_LOS_Days?: ModelStringInput | null;
  ICU_LOS_Days?: ModelStringInput | null;
  Rehab_LOS_Days?: ModelStringInput | null;
  No_of_Surgical_Operations?: ModelStringInput | null;
  No_of_Secondary_Diagnosis_Subvention?: ModelStringInput | null;
  Test_Code?: ModelStringInput | null;
  Test_Result?: ModelStringInput | null;
  Result_Test_Date?: ModelStringInput | null;
  Minimum_Range?: ModelStringInput | null;
  Maximum_Range?: ModelStringInput | null;
  Short_Text?: ModelStringInput | null;
  Panel_Test_Code?: ModelStringInput | null;
  Test_Order?: ModelStringInput | null;
  Chapter_Description?: ModelStringInput | null;
  Number_of_Tests?: ModelStringInput | null;
  Order_Text?: ModelStringInput | null;
  Order_Creation_Date?: ModelStringInput | null;
  Dosage_Ordered_Unit?: ModelStringInput | null;
  Dosage_Ordered?: ModelStringInput | null;
  Dosage_Form?: ModelStringInput | null;
  Strength_Unit?: ModelStringInput | null;
  Component_Type_Code?: ModelStringInput | null;
  Component_Type_Description?: ModelStringInput | null;
  Medication_Order_Component_Text?: ModelStringInput | null;
  Cluster_Preferred_Name_Code?: ModelStringInput | null;
  Cluster_Preferred_Name_Description?: ModelStringInput | null;
  Patient_DOB?: ModelStringInput | null;
  Religion?: ModelStringInput | null;
  Race?: ModelStringInput | null;
  Gender?: ModelStringInput | null;
  Marital_Status?: ModelStringInput | null;
  Surgical_Code?: ModelStringInput | null;
  Surgical_Desc?: ModelStringInput | null;
  Operation_Table_Code?: ModelStringInput | null;
  Operation_Date?: ModelStringInput | null;
  and?: Array<ModelPatientConditionInput | null> | null;
  or?: Array<ModelPatientConditionInput | null> | null;
  not?: ModelPatientConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Patient = {
  __typename: "Patient";
  id: string;
  Patient_No?: string | null;
  Case_No?: string | null;
  Referral_Type_From?: string | null;
  No_of_Subspecialities?: string | null;
  No_of_Secondary_Diagnosis_ICD9?: string | null;
  Adm_DateTime?: string | null;
  Adm_Dept_Description?: string | null;
  Adm_Type_Desc?: string | null;
  Adm_Reason?: string | null;
  Adm_Trt_Cat_Desc?: string | null;
  Adm_Physical_Class_Desc?: string | null;
  Adm_Subspecialty_Desc?: string | null;
  Dis_DateTime?: string | null;
  Dis_Dept_Description?: string | null;
  Dis_Reason?: string | null;
  Dis_Physical_Class_Desc?: string | null;
  Case_Specialty_Desc?: string | null;
  Discharge_Type_Desc?: string | null;
  Primary_Diagnosis_Code_Mediclaim?: string | null;
  Primary_Diagnosis_Description_Mediclaim?: string | null;
  Secondary_Diagnosis_Codes_Subvention?: string | null;
  MDC_Code?: string | null;
  MDC_Description?: string | null;
  Dis_DateTime_Planned?: string | null;
  CCI_Score?: string | null;
  DS_Turn_Inpatient_Ind?: string | null;
  Outpatient_Turn_DS_Ind?: string | null;
  Unplanned_Surgery_Ind?: string | null;
  Re_Adm_Ind?: string | null;
  Planned_Adm_Ind?: string | null;
  Lodger_Ind?: string | null;
  Surgical_Emergency_Ind?: string | null;
  LOS_Days?: string | null;
  Last_Day_LOS_Hours?: string | null;
  Acute_LOS_Days?: string | null;
  HD_LOS_Days?: string | null;
  ICU_LOS_Days?: string | null;
  Rehab_LOS_Days?: string | null;
  No_of_Surgical_Operations?: string | null;
  No_of_Secondary_Diagnosis_Subvention?: string | null;
  Test_Code?: string | null;
  Test_Result?: string | null;
  Result_Test_Date?: string | null;
  Minimum_Range?: string | null;
  Maximum_Range?: string | null;
  Short_Text?: string | null;
  Panel_Test_Code?: string | null;
  Test_Order?: string | null;
  Chapter_Description?: string | null;
  Number_of_Tests?: string | null;
  Order_Text?: string | null;
  Order_Creation_Date?: string | null;
  Dosage_Ordered_Unit?: string | null;
  Dosage_Ordered?: string | null;
  Dosage_Form?: string | null;
  Strength_Unit?: string | null;
  Component_Type_Code?: string | null;
  Component_Type_Description?: string | null;
  Medication_Order_Component_Text?: string | null;
  Cluster_Preferred_Name_Code?: string | null;
  Cluster_Preferred_Name_Description?: string | null;
  Patient_DOB?: string | null;
  Religion?: string | null;
  Race?: string | null;
  Gender?: string | null;
  Marital_Status?: string | null;
  Surgical_Code?: string | null;
  Surgical_Desc?: string | null;
  Operation_Table_Code?: string | null;
  Operation_Date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePatientInput = {
  id: string;
  Patient_No?: string | null;
  Case_No?: string | null;
  Referral_Type_From?: string | null;
  No_of_Subspecialities?: string | null;
  No_of_Secondary_Diagnosis_ICD9?: string | null;
  Adm_DateTime?: string | null;
  Adm_Dept_Description?: string | null;
  Adm_Type_Desc?: string | null;
  Adm_Reason?: string | null;
  Adm_Trt_Cat_Desc?: string | null;
  Adm_Physical_Class_Desc?: string | null;
  Adm_Subspecialty_Desc?: string | null;
  Dis_DateTime?: string | null;
  Dis_Dept_Description?: string | null;
  Dis_Reason?: string | null;
  Dis_Physical_Class_Desc?: string | null;
  Case_Specialty_Desc?: string | null;
  Discharge_Type_Desc?: string | null;
  Primary_Diagnosis_Code_Mediclaim?: string | null;
  Primary_Diagnosis_Description_Mediclaim?: string | null;
  Secondary_Diagnosis_Codes_Subvention?: string | null;
  MDC_Code?: string | null;
  MDC_Description?: string | null;
  Dis_DateTime_Planned?: string | null;
  CCI_Score?: string | null;
  DS_Turn_Inpatient_Ind?: string | null;
  Outpatient_Turn_DS_Ind?: string | null;
  Unplanned_Surgery_Ind?: string | null;
  Re_Adm_Ind?: string | null;
  Planned_Adm_Ind?: string | null;
  Lodger_Ind?: string | null;
  Surgical_Emergency_Ind?: string | null;
  LOS_Days?: string | null;
  Last_Day_LOS_Hours?: string | null;
  Acute_LOS_Days?: string | null;
  HD_LOS_Days?: string | null;
  ICU_LOS_Days?: string | null;
  Rehab_LOS_Days?: string | null;
  No_of_Surgical_Operations?: string | null;
  No_of_Secondary_Diagnosis_Subvention?: string | null;
  Test_Code?: string | null;
  Test_Result?: string | null;
  Result_Test_Date?: string | null;
  Minimum_Range?: string | null;
  Maximum_Range?: string | null;
  Short_Text?: string | null;
  Panel_Test_Code?: string | null;
  Test_Order?: string | null;
  Chapter_Description?: string | null;
  Number_of_Tests?: string | null;
  Order_Text?: string | null;
  Order_Creation_Date?: string | null;
  Dosage_Ordered_Unit?: string | null;
  Dosage_Ordered?: string | null;
  Dosage_Form?: string | null;
  Strength_Unit?: string | null;
  Component_Type_Code?: string | null;
  Component_Type_Description?: string | null;
  Medication_Order_Component_Text?: string | null;
  Cluster_Preferred_Name_Code?: string | null;
  Cluster_Preferred_Name_Description?: string | null;
  Patient_DOB?: string | null;
  Religion?: string | null;
  Race?: string | null;
  Gender?: string | null;
  Marital_Status?: string | null;
  Surgical_Code?: string | null;
  Surgical_Desc?: string | null;
  Operation_Table_Code?: string | null;
  Operation_Date?: string | null;
};

export type DeletePatientInput = {
  id: string;
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null;
  Patient_No?: ModelStringInput | null;
  Case_No?: ModelStringInput | null;
  Referral_Type_From?: ModelStringInput | null;
  No_of_Subspecialities?: ModelStringInput | null;
  No_of_Secondary_Diagnosis_ICD9?: ModelStringInput | null;
  Adm_DateTime?: ModelStringInput | null;
  Adm_Dept_Description?: ModelStringInput | null;
  Adm_Type_Desc?: ModelStringInput | null;
  Adm_Reason?: ModelStringInput | null;
  Adm_Trt_Cat_Desc?: ModelStringInput | null;
  Adm_Physical_Class_Desc?: ModelStringInput | null;
  Adm_Subspecialty_Desc?: ModelStringInput | null;
  Dis_DateTime?: ModelStringInput | null;
  Dis_Dept_Description?: ModelStringInput | null;
  Dis_Reason?: ModelStringInput | null;
  Dis_Physical_Class_Desc?: ModelStringInput | null;
  Case_Specialty_Desc?: ModelStringInput | null;
  Discharge_Type_Desc?: ModelStringInput | null;
  Primary_Diagnosis_Code_Mediclaim?: ModelStringInput | null;
  Primary_Diagnosis_Description_Mediclaim?: ModelStringInput | null;
  Secondary_Diagnosis_Codes_Subvention?: ModelStringInput | null;
  MDC_Code?: ModelStringInput | null;
  MDC_Description?: ModelStringInput | null;
  Dis_DateTime_Planned?: ModelStringInput | null;
  CCI_Score?: ModelStringInput | null;
  DS_Turn_Inpatient_Ind?: ModelStringInput | null;
  Outpatient_Turn_DS_Ind?: ModelStringInput | null;
  Unplanned_Surgery_Ind?: ModelStringInput | null;
  Re_Adm_Ind?: ModelStringInput | null;
  Planned_Adm_Ind?: ModelStringInput | null;
  Lodger_Ind?: ModelStringInput | null;
  Surgical_Emergency_Ind?: ModelStringInput | null;
  LOS_Days?: ModelStringInput | null;
  Last_Day_LOS_Hours?: ModelStringInput | null;
  Acute_LOS_Days?: ModelStringInput | null;
  HD_LOS_Days?: ModelStringInput | null;
  ICU_LOS_Days?: ModelStringInput | null;
  Rehab_LOS_Days?: ModelStringInput | null;
  No_of_Surgical_Operations?: ModelStringInput | null;
  No_of_Secondary_Diagnosis_Subvention?: ModelStringInput | null;
  Test_Code?: ModelStringInput | null;
  Test_Result?: ModelStringInput | null;
  Result_Test_Date?: ModelStringInput | null;
  Minimum_Range?: ModelStringInput | null;
  Maximum_Range?: ModelStringInput | null;
  Short_Text?: ModelStringInput | null;
  Panel_Test_Code?: ModelStringInput | null;
  Test_Order?: ModelStringInput | null;
  Chapter_Description?: ModelStringInput | null;
  Number_of_Tests?: ModelStringInput | null;
  Order_Text?: ModelStringInput | null;
  Order_Creation_Date?: ModelStringInput | null;
  Dosage_Ordered_Unit?: ModelStringInput | null;
  Dosage_Ordered?: ModelStringInput | null;
  Dosage_Form?: ModelStringInput | null;
  Strength_Unit?: ModelStringInput | null;
  Component_Type_Code?: ModelStringInput | null;
  Component_Type_Description?: ModelStringInput | null;
  Medication_Order_Component_Text?: ModelStringInput | null;
  Cluster_Preferred_Name_Code?: ModelStringInput | null;
  Cluster_Preferred_Name_Description?: ModelStringInput | null;
  Patient_DOB?: ModelStringInput | null;
  Religion?: ModelStringInput | null;
  Race?: ModelStringInput | null;
  Gender?: ModelStringInput | null;
  Marital_Status?: ModelStringInput | null;
  Surgical_Code?: ModelStringInput | null;
  Surgical_Desc?: ModelStringInput | null;
  Operation_Table_Code?: ModelStringInput | null;
  Operation_Date?: ModelStringInput | null;
  and?: Array<ModelPatientFilterInput | null> | null;
  or?: Array<ModelPatientFilterInput | null> | null;
  not?: ModelPatientFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection";
  items?: Array<Patient | null> | null;
  nextToken?: string | null;
};

export type CreatePatientMutation = {
  __typename: "Patient";
  id: string;
  Patient_No?: string | null;
  Case_No?: string | null;
  Referral_Type_From?: string | null;
  No_of_Subspecialities?: string | null;
  No_of_Secondary_Diagnosis_ICD9?: string | null;
  Adm_DateTime?: string | null;
  Adm_Dept_Description?: string | null;
  Adm_Type_Desc?: string | null;
  Adm_Reason?: string | null;
  Adm_Trt_Cat_Desc?: string | null;
  Adm_Physical_Class_Desc?: string | null;
  Adm_Subspecialty_Desc?: string | null;
  Dis_DateTime?: string | null;
  Dis_Dept_Description?: string | null;
  Dis_Reason?: string | null;
  Dis_Physical_Class_Desc?: string | null;
  Case_Specialty_Desc?: string | null;
  Discharge_Type_Desc?: string | null;
  Primary_Diagnosis_Code_Mediclaim?: string | null;
  Primary_Diagnosis_Description_Mediclaim?: string | null;
  Secondary_Diagnosis_Codes_Subvention?: string | null;
  MDC_Code?: string | null;
  MDC_Description?: string | null;
  Dis_DateTime_Planned?: string | null;
  CCI_Score?: string | null;
  DS_Turn_Inpatient_Ind?: string | null;
  Outpatient_Turn_DS_Ind?: string | null;
  Unplanned_Surgery_Ind?: string | null;
  Re_Adm_Ind?: string | null;
  Planned_Adm_Ind?: string | null;
  Lodger_Ind?: string | null;
  Surgical_Emergency_Ind?: string | null;
  LOS_Days?: string | null;
  Last_Day_LOS_Hours?: string | null;
  Acute_LOS_Days?: string | null;
  HD_LOS_Days?: string | null;
  ICU_LOS_Days?: string | null;
  Rehab_LOS_Days?: string | null;
  No_of_Surgical_Operations?: string | null;
  No_of_Secondary_Diagnosis_Subvention?: string | null;
  Test_Code?: string | null;
  Test_Result?: string | null;
  Result_Test_Date?: string | null;
  Minimum_Range?: string | null;
  Maximum_Range?: string | null;
  Short_Text?: string | null;
  Panel_Test_Code?: string | null;
  Test_Order?: string | null;
  Chapter_Description?: string | null;
  Number_of_Tests?: string | null;
  Order_Text?: string | null;
  Order_Creation_Date?: string | null;
  Dosage_Ordered_Unit?: string | null;
  Dosage_Ordered?: string | null;
  Dosage_Form?: string | null;
  Strength_Unit?: string | null;
  Component_Type_Code?: string | null;
  Component_Type_Description?: string | null;
  Medication_Order_Component_Text?: string | null;
  Cluster_Preferred_Name_Code?: string | null;
  Cluster_Preferred_Name_Description?: string | null;
  Patient_DOB?: string | null;
  Religion?: string | null;
  Race?: string | null;
  Gender?: string | null;
  Marital_Status?: string | null;
  Surgical_Code?: string | null;
  Surgical_Desc?: string | null;
  Operation_Table_Code?: string | null;
  Operation_Date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePatientMutation = {
  __typename: "Patient";
  id: string;
  Patient_No?: string | null;
  Case_No?: string | null;
  Referral_Type_From?: string | null;
  No_of_Subspecialities?: string | null;
  No_of_Secondary_Diagnosis_ICD9?: string | null;
  Adm_DateTime?: string | null;
  Adm_Dept_Description?: string | null;
  Adm_Type_Desc?: string | null;
  Adm_Reason?: string | null;
  Adm_Trt_Cat_Desc?: string | null;
  Adm_Physical_Class_Desc?: string | null;
  Adm_Subspecialty_Desc?: string | null;
  Dis_DateTime?: string | null;
  Dis_Dept_Description?: string | null;
  Dis_Reason?: string | null;
  Dis_Physical_Class_Desc?: string | null;
  Case_Specialty_Desc?: string | null;
  Discharge_Type_Desc?: string | null;
  Primary_Diagnosis_Code_Mediclaim?: string | null;
  Primary_Diagnosis_Description_Mediclaim?: string | null;
  Secondary_Diagnosis_Codes_Subvention?: string | null;
  MDC_Code?: string | null;
  MDC_Description?: string | null;
  Dis_DateTime_Planned?: string | null;
  CCI_Score?: string | null;
  DS_Turn_Inpatient_Ind?: string | null;
  Outpatient_Turn_DS_Ind?: string | null;
  Unplanned_Surgery_Ind?: string | null;
  Re_Adm_Ind?: string | null;
  Planned_Adm_Ind?: string | null;
  Lodger_Ind?: string | null;
  Surgical_Emergency_Ind?: string | null;
  LOS_Days?: string | null;
  Last_Day_LOS_Hours?: string | null;
  Acute_LOS_Days?: string | null;
  HD_LOS_Days?: string | null;
  ICU_LOS_Days?: string | null;
  Rehab_LOS_Days?: string | null;
  No_of_Surgical_Operations?: string | null;
  No_of_Secondary_Diagnosis_Subvention?: string | null;
  Test_Code?: string | null;
  Test_Result?: string | null;
  Result_Test_Date?: string | null;
  Minimum_Range?: string | null;
  Maximum_Range?: string | null;
  Short_Text?: string | null;
  Panel_Test_Code?: string | null;
  Test_Order?: string | null;
  Chapter_Description?: string | null;
  Number_of_Tests?: string | null;
  Order_Text?: string | null;
  Order_Creation_Date?: string | null;
  Dosage_Ordered_Unit?: string | null;
  Dosage_Ordered?: string | null;
  Dosage_Form?: string | null;
  Strength_Unit?: string | null;
  Component_Type_Code?: string | null;
  Component_Type_Description?: string | null;
  Medication_Order_Component_Text?: string | null;
  Cluster_Preferred_Name_Code?: string | null;
  Cluster_Preferred_Name_Description?: string | null;
  Patient_DOB?: string | null;
  Religion?: string | null;
  Race?: string | null;
  Gender?: string | null;
  Marital_Status?: string | null;
  Surgical_Code?: string | null;
  Surgical_Desc?: string | null;
  Operation_Table_Code?: string | null;
  Operation_Date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePatientMutation = {
  __typename: "Patient";
  id: string;
  Patient_No?: string | null;
  Case_No?: string | null;
  Referral_Type_From?: string | null;
  No_of_Subspecialities?: string | null;
  No_of_Secondary_Diagnosis_ICD9?: string | null;
  Adm_DateTime?: string | null;
  Adm_Dept_Description?: string | null;
  Adm_Type_Desc?: string | null;
  Adm_Reason?: string | null;
  Adm_Trt_Cat_Desc?: string | null;
  Adm_Physical_Class_Desc?: string | null;
  Adm_Subspecialty_Desc?: string | null;
  Dis_DateTime?: string | null;
  Dis_Dept_Description?: string | null;
  Dis_Reason?: string | null;
  Dis_Physical_Class_Desc?: string | null;
  Case_Specialty_Desc?: string | null;
  Discharge_Type_Desc?: string | null;
  Primary_Diagnosis_Code_Mediclaim?: string | null;
  Primary_Diagnosis_Description_Mediclaim?: string | null;
  Secondary_Diagnosis_Codes_Subvention?: string | null;
  MDC_Code?: string | null;
  MDC_Description?: string | null;
  Dis_DateTime_Planned?: string | null;
  CCI_Score?: string | null;
  DS_Turn_Inpatient_Ind?: string | null;
  Outpatient_Turn_DS_Ind?: string | null;
  Unplanned_Surgery_Ind?: string | null;
  Re_Adm_Ind?: string | null;
  Planned_Adm_Ind?: string | null;
  Lodger_Ind?: string | null;
  Surgical_Emergency_Ind?: string | null;
  LOS_Days?: string | null;
  Last_Day_LOS_Hours?: string | null;
  Acute_LOS_Days?: string | null;
  HD_LOS_Days?: string | null;
  ICU_LOS_Days?: string | null;
  Rehab_LOS_Days?: string | null;
  No_of_Surgical_Operations?: string | null;
  No_of_Secondary_Diagnosis_Subvention?: string | null;
  Test_Code?: string | null;
  Test_Result?: string | null;
  Result_Test_Date?: string | null;
  Minimum_Range?: string | null;
  Maximum_Range?: string | null;
  Short_Text?: string | null;
  Panel_Test_Code?: string | null;
  Test_Order?: string | null;
  Chapter_Description?: string | null;
  Number_of_Tests?: string | null;
  Order_Text?: string | null;
  Order_Creation_Date?: string | null;
  Dosage_Ordered_Unit?: string | null;
  Dosage_Ordered?: string | null;
  Dosage_Form?: string | null;
  Strength_Unit?: string | null;
  Component_Type_Code?: string | null;
  Component_Type_Description?: string | null;
  Medication_Order_Component_Text?: string | null;
  Cluster_Preferred_Name_Code?: string | null;
  Cluster_Preferred_Name_Description?: string | null;
  Patient_DOB?: string | null;
  Religion?: string | null;
  Race?: string | null;
  Gender?: string | null;
  Marital_Status?: string | null;
  Surgical_Code?: string | null;
  Surgical_Desc?: string | null;
  Operation_Table_Code?: string | null;
  Operation_Date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetPatientQuery = {
  __typename: "Patient";
  id: string;
  Patient_No?: string | null;
  Case_No?: string | null;
  Referral_Type_From?: string | null;
  No_of_Subspecialities?: string | null;
  No_of_Secondary_Diagnosis_ICD9?: string | null;
  Adm_DateTime?: string | null;
  Adm_Dept_Description?: string | null;
  Adm_Type_Desc?: string | null;
  Adm_Reason?: string | null;
  Adm_Trt_Cat_Desc?: string | null;
  Adm_Physical_Class_Desc?: string | null;
  Adm_Subspecialty_Desc?: string | null;
  Dis_DateTime?: string | null;
  Dis_Dept_Description?: string | null;
  Dis_Reason?: string | null;
  Dis_Physical_Class_Desc?: string | null;
  Case_Specialty_Desc?: string | null;
  Discharge_Type_Desc?: string | null;
  Primary_Diagnosis_Code_Mediclaim?: string | null;
  Primary_Diagnosis_Description_Mediclaim?: string | null;
  Secondary_Diagnosis_Codes_Subvention?: string | null;
  MDC_Code?: string | null;
  MDC_Description?: string | null;
  Dis_DateTime_Planned?: string | null;
  CCI_Score?: string | null;
  DS_Turn_Inpatient_Ind?: string | null;
  Outpatient_Turn_DS_Ind?: string | null;
  Unplanned_Surgery_Ind?: string | null;
  Re_Adm_Ind?: string | null;
  Planned_Adm_Ind?: string | null;
  Lodger_Ind?: string | null;
  Surgical_Emergency_Ind?: string | null;
  LOS_Days?: string | null;
  Last_Day_LOS_Hours?: string | null;
  Acute_LOS_Days?: string | null;
  HD_LOS_Days?: string | null;
  ICU_LOS_Days?: string | null;
  Rehab_LOS_Days?: string | null;
  No_of_Surgical_Operations?: string | null;
  No_of_Secondary_Diagnosis_Subvention?: string | null;
  Test_Code?: string | null;
  Test_Result?: string | null;
  Result_Test_Date?: string | null;
  Minimum_Range?: string | null;
  Maximum_Range?: string | null;
  Short_Text?: string | null;
  Panel_Test_Code?: string | null;
  Test_Order?: string | null;
  Chapter_Description?: string | null;
  Number_of_Tests?: string | null;
  Order_Text?: string | null;
  Order_Creation_Date?: string | null;
  Dosage_Ordered_Unit?: string | null;
  Dosage_Ordered?: string | null;
  Dosage_Form?: string | null;
  Strength_Unit?: string | null;
  Component_Type_Code?: string | null;
  Component_Type_Description?: string | null;
  Medication_Order_Component_Text?: string | null;
  Cluster_Preferred_Name_Code?: string | null;
  Cluster_Preferred_Name_Description?: string | null;
  Patient_DOB?: string | null;
  Religion?: string | null;
  Race?: string | null;
  Gender?: string | null;
  Marital_Status?: string | null;
  Surgical_Code?: string | null;
  Surgical_Desc?: string | null;
  Operation_Table_Code?: string | null;
  Operation_Date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPatientsQuery = {
  __typename: "ModelPatientConnection";
  items?: Array<{
    __typename: "Patient";
    id: string;
    Patient_No?: string | null;
    Case_No?: string | null;
    Referral_Type_From?: string | null;
    No_of_Subspecialities?: string | null;
    No_of_Secondary_Diagnosis_ICD9?: string | null;
    Adm_DateTime?: string | null;
    Adm_Dept_Description?: string | null;
    Adm_Type_Desc?: string | null;
    Adm_Reason?: string | null;
    Adm_Trt_Cat_Desc?: string | null;
    Adm_Physical_Class_Desc?: string | null;
    Adm_Subspecialty_Desc?: string | null;
    Dis_DateTime?: string | null;
    Dis_Dept_Description?: string | null;
    Dis_Reason?: string | null;
    Dis_Physical_Class_Desc?: string | null;
    Case_Specialty_Desc?: string | null;
    Discharge_Type_Desc?: string | null;
    Primary_Diagnosis_Code_Mediclaim?: string | null;
    Primary_Diagnosis_Description_Mediclaim?: string | null;
    Secondary_Diagnosis_Codes_Subvention?: string | null;
    MDC_Code?: string | null;
    MDC_Description?: string | null;
    Dis_DateTime_Planned?: string | null;
    CCI_Score?: string | null;
    DS_Turn_Inpatient_Ind?: string | null;
    Outpatient_Turn_DS_Ind?: string | null;
    Unplanned_Surgery_Ind?: string | null;
    Re_Adm_Ind?: string | null;
    Planned_Adm_Ind?: string | null;
    Lodger_Ind?: string | null;
    Surgical_Emergency_Ind?: string | null;
    LOS_Days?: string | null;
    Last_Day_LOS_Hours?: string | null;
    Acute_LOS_Days?: string | null;
    HD_LOS_Days?: string | null;
    ICU_LOS_Days?: string | null;
    Rehab_LOS_Days?: string | null;
    No_of_Surgical_Operations?: string | null;
    No_of_Secondary_Diagnosis_Subvention?: string | null;
    Test_Code?: string | null;
    Test_Result?: string | null;
    Result_Test_Date?: string | null;
    Minimum_Range?: string | null;
    Maximum_Range?: string | null;
    Short_Text?: string | null;
    Panel_Test_Code?: string | null;
    Test_Order?: string | null;
    Chapter_Description?: string | null;
    Number_of_Tests?: string | null;
    Order_Text?: string | null;
    Order_Creation_Date?: string | null;
    Dosage_Ordered_Unit?: string | null;
    Dosage_Ordered?: string | null;
    Dosage_Form?: string | null;
    Strength_Unit?: string | null;
    Component_Type_Code?: string | null;
    Component_Type_Description?: string | null;
    Medication_Order_Component_Text?: string | null;
    Cluster_Preferred_Name_Code?: string | null;
    Cluster_Preferred_Name_Description?: string | null;
    Patient_DOB?: string | null;
    Religion?: string | null;
    Race?: string | null;
    Gender?: string | null;
    Marital_Status?: string | null;
    Surgical_Code?: string | null;
    Surgical_Desc?: string | null;
    Operation_Table_Code?: string | null;
    Operation_Date?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreatePatientSubscription = {
  __typename: "Patient";
  id: string;
  Patient_No?: string | null;
  Case_No?: string | null;
  Referral_Type_From?: string | null;
  No_of_Subspecialities?: string | null;
  No_of_Secondary_Diagnosis_ICD9?: string | null;
  Adm_DateTime?: string | null;
  Adm_Dept_Description?: string | null;
  Adm_Type_Desc?: string | null;
  Adm_Reason?: string | null;
  Adm_Trt_Cat_Desc?: string | null;
  Adm_Physical_Class_Desc?: string | null;
  Adm_Subspecialty_Desc?: string | null;
  Dis_DateTime?: string | null;
  Dis_Dept_Description?: string | null;
  Dis_Reason?: string | null;
  Dis_Physical_Class_Desc?: string | null;
  Case_Specialty_Desc?: string | null;
  Discharge_Type_Desc?: string | null;
  Primary_Diagnosis_Code_Mediclaim?: string | null;
  Primary_Diagnosis_Description_Mediclaim?: string | null;
  Secondary_Diagnosis_Codes_Subvention?: string | null;
  MDC_Code?: string | null;
  MDC_Description?: string | null;
  Dis_DateTime_Planned?: string | null;
  CCI_Score?: string | null;
  DS_Turn_Inpatient_Ind?: string | null;
  Outpatient_Turn_DS_Ind?: string | null;
  Unplanned_Surgery_Ind?: string | null;
  Re_Adm_Ind?: string | null;
  Planned_Adm_Ind?: string | null;
  Lodger_Ind?: string | null;
  Surgical_Emergency_Ind?: string | null;
  LOS_Days?: string | null;
  Last_Day_LOS_Hours?: string | null;
  Acute_LOS_Days?: string | null;
  HD_LOS_Days?: string | null;
  ICU_LOS_Days?: string | null;
  Rehab_LOS_Days?: string | null;
  No_of_Surgical_Operations?: string | null;
  No_of_Secondary_Diagnosis_Subvention?: string | null;
  Test_Code?: string | null;
  Test_Result?: string | null;
  Result_Test_Date?: string | null;
  Minimum_Range?: string | null;
  Maximum_Range?: string | null;
  Short_Text?: string | null;
  Panel_Test_Code?: string | null;
  Test_Order?: string | null;
  Chapter_Description?: string | null;
  Number_of_Tests?: string | null;
  Order_Text?: string | null;
  Order_Creation_Date?: string | null;
  Dosage_Ordered_Unit?: string | null;
  Dosage_Ordered?: string | null;
  Dosage_Form?: string | null;
  Strength_Unit?: string | null;
  Component_Type_Code?: string | null;
  Component_Type_Description?: string | null;
  Medication_Order_Component_Text?: string | null;
  Cluster_Preferred_Name_Code?: string | null;
  Cluster_Preferred_Name_Description?: string | null;
  Patient_DOB?: string | null;
  Religion?: string | null;
  Race?: string | null;
  Gender?: string | null;
  Marital_Status?: string | null;
  Surgical_Code?: string | null;
  Surgical_Desc?: string | null;
  Operation_Table_Code?: string | null;
  Operation_Date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePatientSubscription = {
  __typename: "Patient";
  id: string;
  Patient_No?: string | null;
  Case_No?: string | null;
  Referral_Type_From?: string | null;
  No_of_Subspecialities?: string | null;
  No_of_Secondary_Diagnosis_ICD9?: string | null;
  Adm_DateTime?: string | null;
  Adm_Dept_Description?: string | null;
  Adm_Type_Desc?: string | null;
  Adm_Reason?: string | null;
  Adm_Trt_Cat_Desc?: string | null;
  Adm_Physical_Class_Desc?: string | null;
  Adm_Subspecialty_Desc?: string | null;
  Dis_DateTime?: string | null;
  Dis_Dept_Description?: string | null;
  Dis_Reason?: string | null;
  Dis_Physical_Class_Desc?: string | null;
  Case_Specialty_Desc?: string | null;
  Discharge_Type_Desc?: string | null;
  Primary_Diagnosis_Code_Mediclaim?: string | null;
  Primary_Diagnosis_Description_Mediclaim?: string | null;
  Secondary_Diagnosis_Codes_Subvention?: string | null;
  MDC_Code?: string | null;
  MDC_Description?: string | null;
  Dis_DateTime_Planned?: string | null;
  CCI_Score?: string | null;
  DS_Turn_Inpatient_Ind?: string | null;
  Outpatient_Turn_DS_Ind?: string | null;
  Unplanned_Surgery_Ind?: string | null;
  Re_Adm_Ind?: string | null;
  Planned_Adm_Ind?: string | null;
  Lodger_Ind?: string | null;
  Surgical_Emergency_Ind?: string | null;
  LOS_Days?: string | null;
  Last_Day_LOS_Hours?: string | null;
  Acute_LOS_Days?: string | null;
  HD_LOS_Days?: string | null;
  ICU_LOS_Days?: string | null;
  Rehab_LOS_Days?: string | null;
  No_of_Surgical_Operations?: string | null;
  No_of_Secondary_Diagnosis_Subvention?: string | null;
  Test_Code?: string | null;
  Test_Result?: string | null;
  Result_Test_Date?: string | null;
  Minimum_Range?: string | null;
  Maximum_Range?: string | null;
  Short_Text?: string | null;
  Panel_Test_Code?: string | null;
  Test_Order?: string | null;
  Chapter_Description?: string | null;
  Number_of_Tests?: string | null;
  Order_Text?: string | null;
  Order_Creation_Date?: string | null;
  Dosage_Ordered_Unit?: string | null;
  Dosage_Ordered?: string | null;
  Dosage_Form?: string | null;
  Strength_Unit?: string | null;
  Component_Type_Code?: string | null;
  Component_Type_Description?: string | null;
  Medication_Order_Component_Text?: string | null;
  Cluster_Preferred_Name_Code?: string | null;
  Cluster_Preferred_Name_Description?: string | null;
  Patient_DOB?: string | null;
  Religion?: string | null;
  Race?: string | null;
  Gender?: string | null;
  Marital_Status?: string | null;
  Surgical_Code?: string | null;
  Surgical_Desc?: string | null;
  Operation_Table_Code?: string | null;
  Operation_Date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePatientSubscription = {
  __typename: "Patient";
  id: string;
  Patient_No?: string | null;
  Case_No?: string | null;
  Referral_Type_From?: string | null;
  No_of_Subspecialities?: string | null;
  No_of_Secondary_Diagnosis_ICD9?: string | null;
  Adm_DateTime?: string | null;
  Adm_Dept_Description?: string | null;
  Adm_Type_Desc?: string | null;
  Adm_Reason?: string | null;
  Adm_Trt_Cat_Desc?: string | null;
  Adm_Physical_Class_Desc?: string | null;
  Adm_Subspecialty_Desc?: string | null;
  Dis_DateTime?: string | null;
  Dis_Dept_Description?: string | null;
  Dis_Reason?: string | null;
  Dis_Physical_Class_Desc?: string | null;
  Case_Specialty_Desc?: string | null;
  Discharge_Type_Desc?: string | null;
  Primary_Diagnosis_Code_Mediclaim?: string | null;
  Primary_Diagnosis_Description_Mediclaim?: string | null;
  Secondary_Diagnosis_Codes_Subvention?: string | null;
  MDC_Code?: string | null;
  MDC_Description?: string | null;
  Dis_DateTime_Planned?: string | null;
  CCI_Score?: string | null;
  DS_Turn_Inpatient_Ind?: string | null;
  Outpatient_Turn_DS_Ind?: string | null;
  Unplanned_Surgery_Ind?: string | null;
  Re_Adm_Ind?: string | null;
  Planned_Adm_Ind?: string | null;
  Lodger_Ind?: string | null;
  Surgical_Emergency_Ind?: string | null;
  LOS_Days?: string | null;
  Last_Day_LOS_Hours?: string | null;
  Acute_LOS_Days?: string | null;
  HD_LOS_Days?: string | null;
  ICU_LOS_Days?: string | null;
  Rehab_LOS_Days?: string | null;
  No_of_Surgical_Operations?: string | null;
  No_of_Secondary_Diagnosis_Subvention?: string | null;
  Test_Code?: string | null;
  Test_Result?: string | null;
  Result_Test_Date?: string | null;
  Minimum_Range?: string | null;
  Maximum_Range?: string | null;
  Short_Text?: string | null;
  Panel_Test_Code?: string | null;
  Test_Order?: string | null;
  Chapter_Description?: string | null;
  Number_of_Tests?: string | null;
  Order_Text?: string | null;
  Order_Creation_Date?: string | null;
  Dosage_Ordered_Unit?: string | null;
  Dosage_Ordered?: string | null;
  Dosage_Form?: string | null;
  Strength_Unit?: string | null;
  Component_Type_Code?: string | null;
  Component_Type_Description?: string | null;
  Medication_Order_Component_Text?: string | null;
  Cluster_Preferred_Name_Code?: string | null;
  Cluster_Preferred_Name_Description?: string | null;
  Patient_DOB?: string | null;
  Religion?: string | null;
  Race?: string | null;
  Gender?: string | null;
  Marital_Status?: string | null;
  Surgical_Code?: string | null;
  Surgical_Desc?: string | null;
  Operation_Table_Code?: string | null;
  Operation_Date?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePatient(
    input: CreatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<CreatePatientMutation> {
    const statement = `mutation CreatePatient($input: CreatePatientInput!, $condition: ModelPatientConditionInput) {
        createPatient(input: $input, condition: $condition) {
          __typename
          id
          Patient_No
          Case_No
          Referral_Type_From
          No_of_Subspecialities
          No_of_Secondary_Diagnosis_ICD9
          Adm_DateTime
          Adm_Dept_Description
          Adm_Type_Desc
          Adm_Reason
          Adm_Trt_Cat_Desc
          Adm_Physical_Class_Desc
          Adm_Subspecialty_Desc
          Dis_DateTime
          Dis_Dept_Description
          Dis_Reason
          Dis_Physical_Class_Desc
          Case_Specialty_Desc
          Discharge_Type_Desc
          Primary_Diagnosis_Code_Mediclaim
          Primary_Diagnosis_Description_Mediclaim
          Secondary_Diagnosis_Codes_Subvention
          MDC_Code
          MDC_Description
          Dis_DateTime_Planned
          CCI_Score
          DS_Turn_Inpatient_Ind
          Outpatient_Turn_DS_Ind
          Unplanned_Surgery_Ind
          Re_Adm_Ind
          Planned_Adm_Ind
          Lodger_Ind
          Surgical_Emergency_Ind
          LOS_Days
          Last_Day_LOS_Hours
          Acute_LOS_Days
          HD_LOS_Days
          ICU_LOS_Days
          Rehab_LOS_Days
          No_of_Surgical_Operations
          No_of_Secondary_Diagnosis_Subvention
          Test_Code
          Test_Result
          Result_Test_Date
          Minimum_Range
          Maximum_Range
          Short_Text
          Panel_Test_Code
          Test_Order
          Chapter_Description
          Number_of_Tests
          Order_Text
          Order_Creation_Date
          Dosage_Ordered_Unit
          Dosage_Ordered
          Dosage_Form
          Strength_Unit
          Component_Type_Code
          Component_Type_Description
          Medication_Order_Component_Text
          Cluster_Preferred_Name_Code
          Cluster_Preferred_Name_Description
          Patient_DOB
          Religion
          Race
          Gender
          Marital_Status
          Surgical_Code
          Surgical_Desc
          Operation_Table_Code
          Operation_Date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePatientMutation>response.data.createPatient;
  }
  async UpdatePatient(
    input: UpdatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<UpdatePatientMutation> {
    const statement = `mutation UpdatePatient($input: UpdatePatientInput!, $condition: ModelPatientConditionInput) {
        updatePatient(input: $input, condition: $condition) {
          __typename
          id
          Patient_No
          Case_No
          Referral_Type_From
          No_of_Subspecialities
          No_of_Secondary_Diagnosis_ICD9
          Adm_DateTime
          Adm_Dept_Description
          Adm_Type_Desc
          Adm_Reason
          Adm_Trt_Cat_Desc
          Adm_Physical_Class_Desc
          Adm_Subspecialty_Desc
          Dis_DateTime
          Dis_Dept_Description
          Dis_Reason
          Dis_Physical_Class_Desc
          Case_Specialty_Desc
          Discharge_Type_Desc
          Primary_Diagnosis_Code_Mediclaim
          Primary_Diagnosis_Description_Mediclaim
          Secondary_Diagnosis_Codes_Subvention
          MDC_Code
          MDC_Description
          Dis_DateTime_Planned
          CCI_Score
          DS_Turn_Inpatient_Ind
          Outpatient_Turn_DS_Ind
          Unplanned_Surgery_Ind
          Re_Adm_Ind
          Planned_Adm_Ind
          Lodger_Ind
          Surgical_Emergency_Ind
          LOS_Days
          Last_Day_LOS_Hours
          Acute_LOS_Days
          HD_LOS_Days
          ICU_LOS_Days
          Rehab_LOS_Days
          No_of_Surgical_Operations
          No_of_Secondary_Diagnosis_Subvention
          Test_Code
          Test_Result
          Result_Test_Date
          Minimum_Range
          Maximum_Range
          Short_Text
          Panel_Test_Code
          Test_Order
          Chapter_Description
          Number_of_Tests
          Order_Text
          Order_Creation_Date
          Dosage_Ordered_Unit
          Dosage_Ordered
          Dosage_Form
          Strength_Unit
          Component_Type_Code
          Component_Type_Description
          Medication_Order_Component_Text
          Cluster_Preferred_Name_Code
          Cluster_Preferred_Name_Description
          Patient_DOB
          Religion
          Race
          Gender
          Marital_Status
          Surgical_Code
          Surgical_Desc
          Operation_Table_Code
          Operation_Date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePatientMutation>response.data.updatePatient;
  }
  async DeletePatient(
    input: DeletePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<DeletePatientMutation> {
    const statement = `mutation DeletePatient($input: DeletePatientInput!, $condition: ModelPatientConditionInput) {
        deletePatient(input: $input, condition: $condition) {
          __typename
          id
          Patient_No
          Case_No
          Referral_Type_From
          No_of_Subspecialities
          No_of_Secondary_Diagnosis_ICD9
          Adm_DateTime
          Adm_Dept_Description
          Adm_Type_Desc
          Adm_Reason
          Adm_Trt_Cat_Desc
          Adm_Physical_Class_Desc
          Adm_Subspecialty_Desc
          Dis_DateTime
          Dis_Dept_Description
          Dis_Reason
          Dis_Physical_Class_Desc
          Case_Specialty_Desc
          Discharge_Type_Desc
          Primary_Diagnosis_Code_Mediclaim
          Primary_Diagnosis_Description_Mediclaim
          Secondary_Diagnosis_Codes_Subvention
          MDC_Code
          MDC_Description
          Dis_DateTime_Planned
          CCI_Score
          DS_Turn_Inpatient_Ind
          Outpatient_Turn_DS_Ind
          Unplanned_Surgery_Ind
          Re_Adm_Ind
          Planned_Adm_Ind
          Lodger_Ind
          Surgical_Emergency_Ind
          LOS_Days
          Last_Day_LOS_Hours
          Acute_LOS_Days
          HD_LOS_Days
          ICU_LOS_Days
          Rehab_LOS_Days
          No_of_Surgical_Operations
          No_of_Secondary_Diagnosis_Subvention
          Test_Code
          Test_Result
          Result_Test_Date
          Minimum_Range
          Maximum_Range
          Short_Text
          Panel_Test_Code
          Test_Order
          Chapter_Description
          Number_of_Tests
          Order_Text
          Order_Creation_Date
          Dosage_Ordered_Unit
          Dosage_Ordered
          Dosage_Form
          Strength_Unit
          Component_Type_Code
          Component_Type_Description
          Medication_Order_Component_Text
          Cluster_Preferred_Name_Code
          Cluster_Preferred_Name_Description
          Patient_DOB
          Religion
          Race
          Gender
          Marital_Status
          Surgical_Code
          Surgical_Desc
          Operation_Table_Code
          Operation_Date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePatientMutation>response.data.deletePatient;
  }
  async GetPatient(id: string): Promise<GetPatientQuery> {
    const statement = `query GetPatient($id: ID!) {
        getPatient(id: $id) {
          __typename
          id
          Patient_No
          Case_No
          Referral_Type_From
          No_of_Subspecialities
          No_of_Secondary_Diagnosis_ICD9
          Adm_DateTime
          Adm_Dept_Description
          Adm_Type_Desc
          Adm_Reason
          Adm_Trt_Cat_Desc
          Adm_Physical_Class_Desc
          Adm_Subspecialty_Desc
          Dis_DateTime
          Dis_Dept_Description
          Dis_Reason
          Dis_Physical_Class_Desc
          Case_Specialty_Desc
          Discharge_Type_Desc
          Primary_Diagnosis_Code_Mediclaim
          Primary_Diagnosis_Description_Mediclaim
          Secondary_Diagnosis_Codes_Subvention
          MDC_Code
          MDC_Description
          Dis_DateTime_Planned
          CCI_Score
          DS_Turn_Inpatient_Ind
          Outpatient_Turn_DS_Ind
          Unplanned_Surgery_Ind
          Re_Adm_Ind
          Planned_Adm_Ind
          Lodger_Ind
          Surgical_Emergency_Ind
          LOS_Days
          Last_Day_LOS_Hours
          Acute_LOS_Days
          HD_LOS_Days
          ICU_LOS_Days
          Rehab_LOS_Days
          No_of_Surgical_Operations
          No_of_Secondary_Diagnosis_Subvention
          Test_Code
          Test_Result
          Result_Test_Date
          Minimum_Range
          Maximum_Range
          Short_Text
          Panel_Test_Code
          Test_Order
          Chapter_Description
          Number_of_Tests
          Order_Text
          Order_Creation_Date
          Dosage_Ordered_Unit
          Dosage_Ordered
          Dosage_Form
          Strength_Unit
          Component_Type_Code
          Component_Type_Description
          Medication_Order_Component_Text
          Cluster_Preferred_Name_Code
          Cluster_Preferred_Name_Description
          Patient_DOB
          Religion
          Race
          Gender
          Marital_Status
          Surgical_Code
          Surgical_Desc
          Operation_Table_Code
          Operation_Date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPatientQuery>response.data.getPatient;
  }
  async ListPatients(
    filter?: ModelPatientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPatientsQuery> {
    const statement = `query ListPatients($filter: ModelPatientFilterInput, $limit: Int, $nextToken: String) {
        listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Patient_No
            Case_No
            Referral_Type_From
            No_of_Subspecialities
            No_of_Secondary_Diagnosis_ICD9
            Adm_DateTime
            Adm_Dept_Description
            Adm_Type_Desc
            Adm_Reason
            Adm_Trt_Cat_Desc
            Adm_Physical_Class_Desc
            Adm_Subspecialty_Desc
            Dis_DateTime
            Dis_Dept_Description
            Dis_Reason
            Dis_Physical_Class_Desc
            Case_Specialty_Desc
            Discharge_Type_Desc
            Primary_Diagnosis_Code_Mediclaim
            Primary_Diagnosis_Description_Mediclaim
            Secondary_Diagnosis_Codes_Subvention
            MDC_Code
            MDC_Description
            Dis_DateTime_Planned
            CCI_Score
            DS_Turn_Inpatient_Ind
            Outpatient_Turn_DS_Ind
            Unplanned_Surgery_Ind
            Re_Adm_Ind
            Planned_Adm_Ind
            Lodger_Ind
            Surgical_Emergency_Ind
            LOS_Days
            Last_Day_LOS_Hours
            Acute_LOS_Days
            HD_LOS_Days
            ICU_LOS_Days
            Rehab_LOS_Days
            No_of_Surgical_Operations
            No_of_Secondary_Diagnosis_Subvention
            Test_Code
            Test_Result
            Result_Test_Date
            Minimum_Range
            Maximum_Range
            Short_Text
            Panel_Test_Code
            Test_Order
            Chapter_Description
            Number_of_Tests
            Order_Text
            Order_Creation_Date
            Dosage_Ordered_Unit
            Dosage_Ordered
            Dosage_Form
            Strength_Unit
            Component_Type_Code
            Component_Type_Description
            Medication_Order_Component_Text
            Cluster_Preferred_Name_Code
            Cluster_Preferred_Name_Description
            Patient_DOB
            Religion
            Race
            Gender
            Marital_Status
            Surgical_Code
            Surgical_Desc
            Operation_Table_Code
            Operation_Date
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPatientsQuery>response.data.listPatients;
  }
  OnCreatePatientListener: Observable<
    SubscriptionResponse<OnCreatePatientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePatient {
        onCreatePatient {
          __typename
          id
          Patient_No
          Case_No
          Referral_Type_From
          No_of_Subspecialities
          No_of_Secondary_Diagnosis_ICD9
          Adm_DateTime
          Adm_Dept_Description
          Adm_Type_Desc
          Adm_Reason
          Adm_Trt_Cat_Desc
          Adm_Physical_Class_Desc
          Adm_Subspecialty_Desc
          Dis_DateTime
          Dis_Dept_Description
          Dis_Reason
          Dis_Physical_Class_Desc
          Case_Specialty_Desc
          Discharge_Type_Desc
          Primary_Diagnosis_Code_Mediclaim
          Primary_Diagnosis_Description_Mediclaim
          Secondary_Diagnosis_Codes_Subvention
          MDC_Code
          MDC_Description
          Dis_DateTime_Planned
          CCI_Score
          DS_Turn_Inpatient_Ind
          Outpatient_Turn_DS_Ind
          Unplanned_Surgery_Ind
          Re_Adm_Ind
          Planned_Adm_Ind
          Lodger_Ind
          Surgical_Emergency_Ind
          LOS_Days
          Last_Day_LOS_Hours
          Acute_LOS_Days
          HD_LOS_Days
          ICU_LOS_Days
          Rehab_LOS_Days
          No_of_Surgical_Operations
          No_of_Secondary_Diagnosis_Subvention
          Test_Code
          Test_Result
          Result_Test_Date
          Minimum_Range
          Maximum_Range
          Short_Text
          Panel_Test_Code
          Test_Order
          Chapter_Description
          Number_of_Tests
          Order_Text
          Order_Creation_Date
          Dosage_Ordered_Unit
          Dosage_Ordered
          Dosage_Form
          Strength_Unit
          Component_Type_Code
          Component_Type_Description
          Medication_Order_Component_Text
          Cluster_Preferred_Name_Code
          Cluster_Preferred_Name_Description
          Patient_DOB
          Religion
          Race
          Gender
          Marital_Status
          Surgical_Code
          Surgical_Desc
          Operation_Table_Code
          Operation_Date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePatientSubscription>>;

  OnUpdatePatientListener: Observable<
    SubscriptionResponse<OnUpdatePatientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePatient {
        onUpdatePatient {
          __typename
          id
          Patient_No
          Case_No
          Referral_Type_From
          No_of_Subspecialities
          No_of_Secondary_Diagnosis_ICD9
          Adm_DateTime
          Adm_Dept_Description
          Adm_Type_Desc
          Adm_Reason
          Adm_Trt_Cat_Desc
          Adm_Physical_Class_Desc
          Adm_Subspecialty_Desc
          Dis_DateTime
          Dis_Dept_Description
          Dis_Reason
          Dis_Physical_Class_Desc
          Case_Specialty_Desc
          Discharge_Type_Desc
          Primary_Diagnosis_Code_Mediclaim
          Primary_Diagnosis_Description_Mediclaim
          Secondary_Diagnosis_Codes_Subvention
          MDC_Code
          MDC_Description
          Dis_DateTime_Planned
          CCI_Score
          DS_Turn_Inpatient_Ind
          Outpatient_Turn_DS_Ind
          Unplanned_Surgery_Ind
          Re_Adm_Ind
          Planned_Adm_Ind
          Lodger_Ind
          Surgical_Emergency_Ind
          LOS_Days
          Last_Day_LOS_Hours
          Acute_LOS_Days
          HD_LOS_Days
          ICU_LOS_Days
          Rehab_LOS_Days
          No_of_Surgical_Operations
          No_of_Secondary_Diagnosis_Subvention
          Test_Code
          Test_Result
          Result_Test_Date
          Minimum_Range
          Maximum_Range
          Short_Text
          Panel_Test_Code
          Test_Order
          Chapter_Description
          Number_of_Tests
          Order_Text
          Order_Creation_Date
          Dosage_Ordered_Unit
          Dosage_Ordered
          Dosage_Form
          Strength_Unit
          Component_Type_Code
          Component_Type_Description
          Medication_Order_Component_Text
          Cluster_Preferred_Name_Code
          Cluster_Preferred_Name_Description
          Patient_DOB
          Religion
          Race
          Gender
          Marital_Status
          Surgical_Code
          Surgical_Desc
          Operation_Table_Code
          Operation_Date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePatientSubscription>>;

  OnDeletePatientListener: Observable<
    SubscriptionResponse<OnDeletePatientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePatient {
        onDeletePatient {
          __typename
          id
          Patient_No
          Case_No
          Referral_Type_From
          No_of_Subspecialities
          No_of_Secondary_Diagnosis_ICD9
          Adm_DateTime
          Adm_Dept_Description
          Adm_Type_Desc
          Adm_Reason
          Adm_Trt_Cat_Desc
          Adm_Physical_Class_Desc
          Adm_Subspecialty_Desc
          Dis_DateTime
          Dis_Dept_Description
          Dis_Reason
          Dis_Physical_Class_Desc
          Case_Specialty_Desc
          Discharge_Type_Desc
          Primary_Diagnosis_Code_Mediclaim
          Primary_Diagnosis_Description_Mediclaim
          Secondary_Diagnosis_Codes_Subvention
          MDC_Code
          MDC_Description
          Dis_DateTime_Planned
          CCI_Score
          DS_Turn_Inpatient_Ind
          Outpatient_Turn_DS_Ind
          Unplanned_Surgery_Ind
          Re_Adm_Ind
          Planned_Adm_Ind
          Lodger_Ind
          Surgical_Emergency_Ind
          LOS_Days
          Last_Day_LOS_Hours
          Acute_LOS_Days
          HD_LOS_Days
          ICU_LOS_Days
          Rehab_LOS_Days
          No_of_Surgical_Operations
          No_of_Secondary_Diagnosis_Subvention
          Test_Code
          Test_Result
          Result_Test_Date
          Minimum_Range
          Maximum_Range
          Short_Text
          Panel_Test_Code
          Test_Order
          Chapter_Description
          Number_of_Tests
          Order_Text
          Order_Creation_Date
          Dosage_Ordered_Unit
          Dosage_Ordered
          Dosage_Form
          Strength_Unit
          Component_Type_Code
          Component_Type_Description
          Medication_Order_Component_Text
          Cluster_Preferred_Name_Code
          Cluster_Preferred_Name_Description
          Patient_DOB
          Religion
          Race
          Gender
          Marital_Status
          Surgical_Code
          Surgical_Desc
          Operation_Table_Code
          Operation_Date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePatientSubscription>>;
}
