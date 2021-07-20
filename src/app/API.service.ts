/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateTaskInput = {
  id?: string | null;
  filename?: string | null;
  uploadDate?: number | null;
  patientCount?: number | null;
  status2?: number | null;
};

export type ModelTaskConditionInput = {
  filename?: ModelStringInput | null;
  uploadDate?: ModelFloatInput | null;
  patientCount?: ModelFloatInput | null;
  status2?: ModelIntInput | null;
  and?: Array<ModelTaskConditionInput | null> | null;
  or?: Array<ModelTaskConditionInput | null> | null;
  not?: ModelTaskConditionInput | null;
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

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Task = {
  __typename: "Task";
  id: string;
  filename?: string | null;
  uploadDate?: number | null;
  patientCount?: number | null;
  status2?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaskInput = {
  id: string;
  filename?: string | null;
  uploadDate?: number | null;
  patientCount?: number | null;
  status2?: number | null;
};

export type DeleteTaskInput = {
  id: string;
};

export type CreateReportInput = {
  id?: string | null;
  patientID?: string | null;
  predictedMonths?: number | null;
  predictedDate?: number | null;
  reportID?: string | null;
};

export type ModelReportConditionInput = {
  patientID?: ModelStringInput | null;
  predictedMonths?: ModelIntInput | null;
  predictedDate?: ModelFloatInput | null;
  reportID?: ModelStringInput | null;
  and?: Array<ModelReportConditionInput | null> | null;
  or?: Array<ModelReportConditionInput | null> | null;
  not?: ModelReportConditionInput | null;
};

export type Report = {
  __typename: "Report";
  id: string;
  patientID?: string | null;
  predictedMonths?: number | null;
  predictedDate?: number | null;
  reportID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateReportInput = {
  id: string;
  patientID?: string | null;
  predictedMonths?: number | null;
  predictedDate?: number | null;
  reportID?: string | null;
};

export type DeleteReportInput = {
  id: string;
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null;
  filename?: ModelStringInput | null;
  uploadDate?: ModelFloatInput | null;
  patientCount?: ModelFloatInput | null;
  status2?: ModelIntInput | null;
  and?: Array<ModelTaskFilterInput | null> | null;
  or?: Array<ModelTaskFilterInput | null> | null;
  not?: ModelTaskFilterInput | null;
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

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection";
  items?: Array<Task | null> | null;
  nextToken?: string | null;
};

export type ModelReportFilterInput = {
  id?: ModelIDInput | null;
  patientID?: ModelStringInput | null;
  predictedMonths?: ModelIntInput | null;
  predictedDate?: ModelFloatInput | null;
  reportID?: ModelStringInput | null;
  and?: Array<ModelReportFilterInput | null> | null;
  or?: Array<ModelReportFilterInput | null> | null;
  not?: ModelReportFilterInput | null;
};

export type ModelReportConnection = {
  __typename: "ModelReportConnection";
  items?: Array<Report | null> | null;
  nextToken?: string | null;
};

export type CreateTaskMutation = {
  __typename: "Task";
  id: string;
  filename?: string | null;
  uploadDate?: number | null;
  patientCount?: number | null;
  status2?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaskMutation = {
  __typename: "Task";
  id: string;
  filename?: string | null;
  uploadDate?: number | null;
  patientCount?: number | null;
  status2?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTaskMutation = {
  __typename: "Task";
  id: string;
  filename?: string | null;
  uploadDate?: number | null;
  patientCount?: number | null;
  status2?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateReportMutation = {
  __typename: "Report";
  id: string;
  patientID?: string | null;
  predictedMonths?: number | null;
  predictedDate?: number | null;
  reportID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateReportMutation = {
  __typename: "Report";
  id: string;
  patientID?: string | null;
  predictedMonths?: number | null;
  predictedDate?: number | null;
  reportID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteReportMutation = {
  __typename: "Report";
  id: string;
  patientID?: string | null;
  predictedMonths?: number | null;
  predictedDate?: number | null;
  reportID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetTaskQuery = {
  __typename: "Task";
  id: string;
  filename?: string | null;
  uploadDate?: number | null;
  patientCount?: number | null;
  status2?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTasksQuery = {
  __typename: "ModelTaskConnection";
  items?: Array<{
    __typename: "Task";
    id: string;
    filename?: string | null;
    uploadDate?: number | null;
    patientCount?: number | null;
    status2?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetReportQuery = {
  __typename: "Report";
  id: string;
  patientID?: string | null;
  predictedMonths?: number | null;
  predictedDate?: number | null;
  reportID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListReportsQuery = {
  __typename: "ModelReportConnection";
  items?: Array<{
    __typename: "Report";
    id: string;
    patientID?: string | null;
    predictedMonths?: number | null;
    predictedDate?: number | null;
    reportID?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateTaskSubscription = {
  __typename: "Task";
  id: string;
  filename?: string | null;
  uploadDate?: number | null;
  patientCount?: number | null;
  status2?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTaskSubscription = {
  __typename: "Task";
  id: string;
  filename?: string | null;
  uploadDate?: number | null;
  patientCount?: number | null;
  status2?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTaskSubscription = {
  __typename: "Task";
  id: string;
  filename?: string | null;
  uploadDate?: number | null;
  patientCount?: number | null;
  status2?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateReportSubscription = {
  __typename: "Report";
  id: string;
  patientID?: string | null;
  predictedMonths?: number | null;
  predictedDate?: number | null;
  reportID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateReportSubscription = {
  __typename: "Report";
  id: string;
  patientID?: string | null;
  predictedMonths?: number | null;
  predictedDate?: number | null;
  reportID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteReportSubscription = {
  __typename: "Report";
  id: string;
  patientID?: string | null;
  predictedMonths?: number | null;
  predictedDate?: number | null;
  reportID?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTask(
    input: CreateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<CreateTaskMutation> {
    const statement = `mutation CreateTask($input: CreateTaskInput!, $condition: ModelTaskConditionInput) {
        createTask(input: $input, condition: $condition) {
          __typename
          id
          filename
          uploadDate
          patientCount
          status2
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
    return <CreateTaskMutation>response.data.createTask;
  }
  async UpdateTask(
    input: UpdateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<UpdateTaskMutation> {
    const statement = `mutation UpdateTask($input: UpdateTaskInput!, $condition: ModelTaskConditionInput) {
        updateTask(input: $input, condition: $condition) {
          __typename
          id
          filename
          uploadDate
          patientCount
          status2
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
    return <UpdateTaskMutation>response.data.updateTask;
  }
  async DeleteTask(
    input: DeleteTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<DeleteTaskMutation> {
    const statement = `mutation DeleteTask($input: DeleteTaskInput!, $condition: ModelTaskConditionInput) {
        deleteTask(input: $input, condition: $condition) {
          __typename
          id
          filename
          uploadDate
          patientCount
          status2
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
    return <DeleteTaskMutation>response.data.deleteTask;
  }
  async CreateReport(
    input: CreateReportInput,
    condition?: ModelReportConditionInput
  ): Promise<CreateReportMutation> {
    const statement = `mutation CreateReport($input: CreateReportInput!, $condition: ModelReportConditionInput) {
        createReport(input: $input, condition: $condition) {
          __typename
          id
          patientID
          predictedMonths
          predictedDate
          reportID
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
    return <CreateReportMutation>response.data.createReport;
  }
  async UpdateReport(
    input: UpdateReportInput,
    condition?: ModelReportConditionInput
  ): Promise<UpdateReportMutation> {
    const statement = `mutation UpdateReport($input: UpdateReportInput!, $condition: ModelReportConditionInput) {
        updateReport(input: $input, condition: $condition) {
          __typename
          id
          patientID
          predictedMonths
          predictedDate
          reportID
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
    return <UpdateReportMutation>response.data.updateReport;
  }
  async DeleteReport(
    input: DeleteReportInput,
    condition?: ModelReportConditionInput
  ): Promise<DeleteReportMutation> {
    const statement = `mutation DeleteReport($input: DeleteReportInput!, $condition: ModelReportConditionInput) {
        deleteReport(input: $input, condition: $condition) {
          __typename
          id
          patientID
          predictedMonths
          predictedDate
          reportID
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
    return <DeleteReportMutation>response.data.deleteReport;
  }
  async GetTask(id: string): Promise<GetTaskQuery> {
    const statement = `query GetTask($id: ID!) {
        getTask(id: $id) {
          __typename
          id
          filename
          uploadDate
          patientCount
          status2
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
    return <GetTaskQuery>response.data.getTask;
  }
  async ListTasks(
    filter?: ModelTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            filename
            uploadDate
            patientCount
            status2
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
    return <ListTasksQuery>response.data.listTasks;
  }
  async GetReport(id: string): Promise<GetReportQuery> {
    const statement = `query GetReport($id: ID!) {
        getReport(id: $id) {
          __typename
          id
          patientID
          predictedMonths
          predictedDate
          reportID
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
    return <GetReportQuery>response.data.getReport;
  }
  async ListReports(
    filter?: ModelReportFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListReportsQuery> {
    const statement = `query ListReports($filter: ModelReportFilterInput, $limit: Int, $nextToken: String) {
        listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            patientID
            predictedMonths
            predictedDate
            reportID
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
    return <ListReportsQuery>response.data.listReports;
  }
  OnCreateTaskListener: Observable<
    SubscriptionResponse<OnCreateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTask {
        onCreateTask {
          __typename
          id
          filename
          uploadDate
          patientCount
          status2
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTaskSubscription>>;

  OnUpdateTaskListener: Observable<
    SubscriptionResponse<OnUpdateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTask {
        onUpdateTask {
          __typename
          id
          filename
          uploadDate
          patientCount
          status2
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTaskSubscription>>;

  OnDeleteTaskListener: Observable<
    SubscriptionResponse<OnDeleteTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTask {
        onDeleteTask {
          __typename
          id
          filename
          uploadDate
          patientCount
          status2
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTaskSubscription>>;

  OnCreateReportListener: Observable<
    SubscriptionResponse<OnCreateReportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateReport {
        onCreateReport {
          __typename
          id
          patientID
          predictedMonths
          predictedDate
          reportID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateReportSubscription>>;

  OnUpdateReportListener: Observable<
    SubscriptionResponse<OnUpdateReportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateReport {
        onUpdateReport {
          __typename
          id
          patientID
          predictedMonths
          predictedDate
          reportID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateReportSubscription>>;

  OnDeleteReportListener: Observable<
    SubscriptionResponse<OnDeleteReportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteReport {
        onDeleteReport {
          __typename
          id
          patientID
          predictedMonths
          predictedDate
          reportID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteReportSubscription>>;
}
