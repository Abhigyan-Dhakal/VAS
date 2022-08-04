import React from "react";
import Styles from "./Vaccines.module.css";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  service: string;
  siteLocation: string;
  startDate: string;
  endDate: string;
  doseType: string;
  duration: number;
  gender: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Service",
    dataIndex: "service",
    key: "service",
  },
  {
    title: "Site Location",
    dataIndex: "siteLocation",
    key: "siteLocation",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },

  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "Dose Type",
    dataIndex: "doseType",
    key: "doseType",
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
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
    service: "Astrazenica",
    siteLocation: "Kamalpokahari, Kathmandu",
    startDate: "2022-07-1",
    endDate: "2022-07-3",
    doseType: "Single",
    duration: 1,
    gender: "Both",
  },
];

export const Vaccines: React.FC = () => (
  <div style={{ padding: "0px 20px" }}>
    <div className={Styles.patientContainer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Vaccine's List</h1>
        <Button type="primary">Add a New Vaccine</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  </div>
);
