import React from "react";
import Styles from "./ManagerPatientForm.module.css";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Radio,
  Upload,
  message,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setPatientData } from "../../redux/slices/patientFormSlice";
import { RootState } from "../../redux";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

const { Option } = Select;

type Props = {};

export const ManagerPatientForm = (props: Props) => {
  const data = useSelector((state: RootState) => {
    return state.patientFormReducer.data;
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
    dispatch(setPatientData(values));
  };

  const uploadProps: UploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className={Styles.patientFormContainer}>
      <div>
        <h1 className={Styles.heading}>Create New Patient Record</h1>
      </div>

      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className={Styles.patientForm}
      >
        <div>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="birthDate"
            label="Birth Date"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker style={{ width: `${100}%` }} size="large" />
          </Form.Item>
          <Form.Item name="ethnicity" label="Ethnicity">
            <Input size="large" />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Radio.Group>
              <Radio value="male"> Male </Radio>
              <Radio value="female"> Female </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            name="street"
            label="Street"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="state"
            label="State"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="insuranceId"
            label="Insurance ID"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="memberId"
            label="Member ID"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="insuranceProvider"
            label="Insurance Provider"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item name="documentImage" label="Document Image">
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
