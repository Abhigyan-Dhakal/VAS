import { List } from "antd";
import React from "react";
import Styles from "./PatientList.module.css";

type Props = {};

export const PatientList = (props: Props) => {
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
          header={<h1>Patient's List</h1>}
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
