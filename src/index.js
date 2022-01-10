import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function BookList() {
  return (
    <section className="books">
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
    </section>
  );
}

const Books = () => {
  return (
    <div className="imagePart">
      <Image />
      <Title />
      <Author />
    </div>
  );
};

const Image = () => {
  return (
    <article>
      <img src="https://images-eu.ssl-images-amazon.com/images/I/51lf7Jrf4zL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" />
    </article>
  );
};
const Title = () => {
  return (
    <>
      {" "}
      <h2>Your next Level Life </h2>
    </>
  );
};
const Author = () => {
  return (
    <>
      <h3>Karen Arrington</h3>
      <p>
        {" "}
        <a href="https://www.amazon.in/dp/1642507520/ref=sspa_dk_detail_5?psc=1p13NParams&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUEw2R0NMRFJBTjlIJmVuY3J5cHRlZElkPUEwMDY2MjQ5MldTQjI4RDNNRlU4MSZlbmNyeXB0ZWRBZElkPUEwMTk3ODgyTjBFREhWSDdPTkRWJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">
          {" "}
          7 Rules of Power buy now
        </a>
      </p>
    </>
  );
};
// const rootElement =
ReactDOM.render(<BookList />, document.getElementById("root"));
