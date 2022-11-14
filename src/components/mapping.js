import data from "../data1.json";
import "../css/mapping.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useState, useRef } from "react";
import Header from "./header";

function Mapping() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const fileRef = useRef();
  const [tqList, setTqList] = useState([]);
  const [tqSelectList, setTqSelectList] = useState([]);
  const [tNumber, setTNumber] = useState([]);

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const SideBar = () => {
    const sidebarClass = sidebarOpen ? "sidebar open" : "sidebar";
    return (
      <div className={sidebarClass}>
        <div className="">
          <div className="sideBar-mapping" >
            {tNumber.map((tNum) => (
              <div>
                <div className="flow-tactic-box" style={{backgroundColor : data[Number(tNum[1])-1].color}}>
                  {tNum[1]}{" "}{data[Number(tNum[1])-1].name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  function onClick(id) {
    if (tqList.indexOf(id) >= 0) {
      setTqList(
        tqList.filter(function (technique) {
          return technique !== id;
        })
      );
    } else {
      setTqList((tqList) => [...tqList, id]);
    }
  }

  function onDoubleClick(id, Tid) {
    if (tqSelectList.indexOf(id) >= 0) {
      setTqSelectList(
        tqSelectList.filter(function (technique) {
          return technique !== id;
        })
      );
      let x = tNumber.findIndex((arr) => arr.includes(id));
      tNumber.splice(x, 1);
    } else {
      let num = [id, Tid];
      setTNumber((tNumber) => [...tNumber, num]);
      setTqSelectList((tqSelectList) => [...tqSelectList, id]);
    }
  }

  function checkActive(id) {
    if (tqSelectList.indexOf(id) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      `{"tqSelectList" : ${JSON.stringify(
        tqSelectList
      )}, "tNumber" : ${JSON.stringify(tNumber)}}`
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  const uploadJSON = (e) => {
    let text =
      "This will delete all your current states.\nAre you sure you want to continue?";

    if (window.confirm(text) === true) {
      var reader = new FileReader();
      var file0 = e.target.files[0];
      reader.onload = function (e) {
        var json = JSON.parse(e.target.result);
        setTqSelectList((tqSelectList) => json.tqSelectList);
        setTNumber(() => json.tNumber);
      };

      reader.readAsText(file0);
    } else {
    }
  };

  return (
    <>
      <div>
        <SideBar />
      </div>

      <div style={{ marginLeft: sidebarOpen ? "15vw" : 0 }}>
        <Header/>

        <div className="d-flex justify-content-around">
          <div
            className="btn btn-primary"
            onClick={handleViewSidebar}
            style={{ height: "8vh" }}
          >
            UKC Flow
          </div>

          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Upload JSON file
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              accept="application/JSON"
              ref={fileRef}
              onChange={uploadJSON}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            style={{ height: "8vh" }}
            onClick={exportData}
          >
            Download json
          </button>
        </div>

        <div className="mapping-main">
          <table className="table text-center">
            {data.map((tactics) => (
              <>
                <tr>
                  <th className="head-cell" id={tactics.id} key={tactics.id}>
                    {tactics.name}
                  </th>
                  {tactics.techniques.map((techniques) => (
                    <>
                      <td
                        className="cell"
                        onDoubleClick={() =>
                          onDoubleClick(techniques.tId, tactics.id)
                        }
                        style={{
                          backgroundColor: checkActive(techniques.tId)
                            ? "#e6c152c4"
                            : "#ffffff00",
                        }}
                        id={techniques.tId}
                        key={techniques.tId}
                      >
                        {techniques.subTechniques.length > 0 ? (
                          <div
                            className="cell-block"
                            onClick={() => onClick(techniques.tId)}
                          ></div>
                        ) : (
                          <></>
                        )}
                        <div className="cell-text">{techniques.name}</div>
                      </td>
                      {tqList.indexOf(techniques.tId) >= 0 ? (
                        <>
                          {techniques.subTechniques.map((subTechniques) => (
                            <td
                              className="sub-cell"
                              style={{
                                backgroundColor: checkActive(subTechniques.stId)
                                  ? "#e6c152c4"
                                  : "#ffffff00",
                              }}
                              id={subTechniques.stId}
                              key={subTechniques.stId}
                              onDoubleClick={() =>
                                onDoubleClick(subTechniques.stId, tactics.id)
                              }
                            >
                              {subTechniques.name}
                            </td>
                          ))}
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </tr>
              </>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Mapping;
