import { List } from "antd";
import React from "react";
import Styles from "./Patients.module.css";
import { Button } from "antd";

type Props = {};

export const Patients = (props: Props) => {
  const editHandler = () => {};
  const deleteHandler = () => {};

  const data = [
    {
      id: 1,
      name: "Patient 1",
    },
    {
      id: 2,
      name: "Patient 2",
    },
    {
      id: 3,
      name: "Patient 3",
    },
    {
      id: 4,
      name: "Patient 4",
    },
  ];
  return (
    <div>
      <div className={Styles.listContainer}>
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          header={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1>Patient's List</h1>
              <Button type="primary">Create New Patient</Button>
            </div>
          }
          dataSource={data}
          renderItem={(item) => (
            <div className={Styles.listItem}>
              <List.Item
                actions={[
                  <a key="list-loadmore-edit">Edit</a>,
                  <a key="list-loadmore-more">Delete</a>,
                ]}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <div>{item.id}. </div>
                  <div>{item.name}</div>
                </div>
              </List.Item>
            </div>
          )}
        />
      </div>
    </div>
  );
};
