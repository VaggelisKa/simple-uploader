import { FileUpload } from 'primereact/fileupload';
import React from 'react';

const baseUrl = 'http://localhost:8000/api/documents/upload';

const Uploader: React.FC = () => (
  <div style={{paddingTop: 30}}>
    <FileUpload name="image" mode="basic" url={baseUrl} />
  </div>
);

export default Uploader;
