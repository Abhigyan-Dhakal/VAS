import { Button, Form, Input, InputNumber, Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setAppointmentData } from "../../redux/slices/appointmentFormSlice";
import Styles from "./ManagerAppointmentForm.module.css";
// import { setAppointmentData } from "../../redux/slice/appointmentFormSlice";

const { Option } = Select;

type Props = {};

export const ManagerAppointmentForm = (props: Props) => {
  const data = useSelector((state: RootState) => {
    return state.appointmentFormReducer.data;
  });

  const dispatch = useDispatch();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "Enter a valid number!",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values: any) => {
    dispatch(setAppointmentData(values));
  };

  return (
    <div className={Styles.appointmentFormContainer}>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="patientId"
          label="Patient ID"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item name="siteLocation" label="Site Location" rules={[]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="serviceType"
          label="Service Type"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select Service Type" allowClear size="large">
            <Option value="pfizer">Pfizer</Option>
            <Option value="astrazeneca">AstraZeneca</Option>
            <Option value="covishield">Covishield</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="confirmationCode"
          label="Confirmation Code"
          rules={[
            {
              required: true,
              type: "number",
            },
          ]}
        >
          <InputNumber size="large" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
