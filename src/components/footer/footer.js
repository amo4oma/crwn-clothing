import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import "./footer.css";

const FooterPage = () => {
  return (
    <MDBFooter
      color="blue"
      className="font-small pt-4 mt-4 d-flex flex-row bd-highlight mb-3 "
    >
      <footer className="pv4 ph3 ph5-m ph6-l mid-gray p-2 bd-highlight">
        <small className="f6 db tc">
          © 2020 <b className="ttu">AHMED OBAD</b>., All Rights Reserved
        </small>
        <div className="tc mt3">
          <a href="/terms/" title="Terms" className="f6 dib ph2 link mid-gray dim">
            Terms of Use
          </a>
          <a
            href="/privacy/"
            title="Privacy"
            className="f6 dib ph2 link mid-gray dim"
          >
            Privacy
          </a>
        </div>
      </footer>
    </MDBFooter>
  );
};

export default FooterPage;
