import { useState } from "react";
import data from "../data1.json";
import Header from "./header";

const MAX_COUNT = 10;

function Compare() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const [fileData, setFileData] = useState([]);

  const handleFileChosen = async (file) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = reject;
      fileReader.readAsText(file);
    });
  };

  const readAllFiles = async (allFiles) => {
    const results = await Promise.all(
      allFiles.map(async (file) => {
        const fileContents = await handleFileChosen(file);
        return fileContents;
      })
    );
    results.map((r) => setFileData((xyz) => [...xyz, JSON.parse(r)]));
    return results;
  };

  const uploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;

    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    uploadFiles(chosenFiles);
    readAllFiles(chosenFiles);
  };

  return (
    <>

    <div>
      <Header/>
    </div>
      <div className="mb-3" style={{marginLeft: "6vw", marginTop: "5vh", marginRight: "6vw"}}>
        <label htmlFor="formFile" className="form-label">
          Upload JSON file
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          accept="application/JSON"
          //   ref={fileRef}
          multiple
          onChange={handleFileEvent}
          disabled={fileLimit}
        />
      </div>
      <div className="container mb-5">
        <div className="d-flex">
          <div style={{borderRight: "3px white solid"}}>
            <div
              className="flow-tactic-box"
              style={{
                backgroundColor: "black",
                color: "white",
                width: "15vw",
              }}
            >
              #&nbsp; Unified Kill Chain
            </div>
          </div>
          {uploadedFiles.map((f) => (
            <div>
            <div
              className="flow-tactic-box"
              style={{
                backgroundColor: "black",
                color: "white",
                width: "8vw",
                textAlign: "center",
              }}
            >
              {f.name.replace(/.json/g, "")}
            </div>
              </div>
          ))}
        </div>
        <div className="d-flex">
          <div
            className="sideBar-mapping"
            style={{ borderRight: "3px solid black", borderBottom: "3px solid black" }}
          >
            {data.map((tactic) => (
              <div>
                <div
                  className="flow-tactic-box"
                  style={{ backgroundColor: tactic.color, width: "15vw" }}
                >
                  {/* {tNum[1]}{" "}{data[Number(tNum[1])-1].name} */}
                  {tactic.id} {tactic.name}
                </div>
              </div>
            ))}
          </div>

          {fileData.map((f) => (
            <div className="sideBar-mapping">
              {f.tNumber.map((num) => (
                <div>
                  <div
                    className="flow-tactic-box"
                    style={{
                      backgroundColor: data[Number(num[1])].color,
                      paddingRight: "2vh",
                      textAlign: "center",
                      width: "8vw",
                    }}
                  >
                    {/* {tNum[1]}{" "}{data[Number(tNum[1])-1].name} */}
                    {num[1]}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Compare;
