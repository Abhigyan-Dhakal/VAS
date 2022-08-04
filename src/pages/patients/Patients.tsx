import React from "react";
import Styles from "./Patients.module.css";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  pid: number;
  name: string;
  dob: string;
  gender: string;
  ethnicity: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Patient ID",
    dataIndex: "pid",
    key: "pid",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Birth Date",
    dataIndex: "dob",
    key: "dob",
  },

  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Ethnicity",
    dataIndex: "ethnicity",
    key: "ethnicity",
  },
  {
    title: "",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>View</a>
        <a style={{ color: "red" }}>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    pid: 1,
    name: "John Brown",
    dob: "2010-12-1",
    gender: "male",
    ethnicity: "Buddhist",
  },
  {
    pid: 2,
    name: "Rohan Green",
    dob: "2001-12-2",
    gender: "male",
    ethnicity: "Hindu",
  },
  {
    pid: 3,
    name: "Natasha Morgan",
    dob: "2004-01-16",
    gender: "female",
    ethnicity: "Christian",
  },
];

export const Patients: React.FC = () => (
  <div style={{ padding: "0px 20px" }}>
    <div className={Styles.patientContainer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Patient's List</h1>
        <Button type="primary">Add a New Patient</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  </div>
);
