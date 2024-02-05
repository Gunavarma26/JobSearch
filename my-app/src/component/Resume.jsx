// Resume page

import React from 'react'
import { FaStar, FaRocket } from "react-icons/fa";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, Select } from 'antd';
import '../style/home.css'
import '../style/filter.css'



const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);

    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

};


const Resume = () => {
  return (
    <>
        <div className='homed3content' >
            <div>
              <FaRocket style={{ fontSize: "23px", marginRight: "10px" }} />
              <span style={{ fontSize: "23px", fontWeight: "666", marginTop: "50px" }} >Get noticed faster</span>
            </div>
            <p style={{ padding: "10px 0px 10px 20px" }} >
              To move forward with your application, please include your resume as an attachment.
              Feel free to share any relevant certifications or achievements that highlight your qualifications.
            </p>

            <Upload {...props}>
              <Button type='primary' icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>

    </>
  )
}

export default Resume