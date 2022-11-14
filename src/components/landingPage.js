import { Link } from "react-router-dom";
import Header from "./header";

function LandingPage() {
  return (
    <>
      <div style={{ marginTop: "10vh", marginRight: "5vw" }}>
        <Header />
        <div>
          <div className="">
            {/* <div className="btn btn-primary"> */}
            <div className="text-center">
                <Link to="/mapping" className="btn btn-primary mt-4" >Mapping Report</Link>
            </div>
            <div className="text-center">
                <Link to="/compare" className="btn btn-primary mt-4" >Compare Reports</Link>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
