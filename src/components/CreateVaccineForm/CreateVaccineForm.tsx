import React from "react";
import Styles from "./CreateVaccineForm.module.css";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
} from "antd";

type Props = {};

const { Option } = Select;

export const CreateVaccineForm = (props: Props) => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "Enter a valid number!",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values: any) => {
    // dispatch(setAppointmentData(values));
    console.log(values);
  };

  return (
    <div className={Styles.vaccineFormContainer}>
      <div>
        <h1 className={Styles.heading}>Create Appointment</h1>
      </div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="serviceName"
          label="Service Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="siteLocation"
          label="Site Location"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker style={{ width: `${100}%` }} size="large" />
        </Form.Item>
        <Form.Item
          name="endDate"
          label="End Date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker style={{ width: `${100}%` }} size="large" />
        </Form.Item>
        <Form.Item
          name="doseType"
          label="Dose Type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            <Radio value="male">Single</Radio>
            <Radio value="female">Multiple</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="duration" label="Duration (In hrs)">
          <InputNumber min={1} max={12} defaultValue={1} size="large" />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
            <Radio value="both"> Both </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber min={3} max={100} size="large" />
        </Form.Item>
        <Form.Item
          name="ethnicity"
          label="Ethnicity"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input size="large" />
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
