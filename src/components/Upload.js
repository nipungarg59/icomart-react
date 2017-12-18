import React from "react";
import Dropzone from "react-dropzone";

const onDrop = (action, file) => {
  let data = new FormData();
  data.append("file", file, file.name);
  data.append("bucket", "ico_list");

  fetch(`http://api.staging.icofarm.net/upload/file`, {
    method: "POST",
    body: data
  })
    .then(res => res.json())
    .then(res => {
      action(res.url);
    });
};

const Upload = ({ action, url }) => (
  <div className="dropzone">
    <Dropzone onDrop={files => onDrop(action, files[0])}>
      {url ? (
        <img src={url} style={{ width: "200px", height: "200px" }} />
      ) : (
        <p>Try dropping some files here, or click to select files to upload.</p>
      )}
    </Dropzone>
  </div>
);

export default Upload;
