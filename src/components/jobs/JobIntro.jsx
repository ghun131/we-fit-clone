import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Cover from "../../images/wefit.cover2_.jpg";
import ScrollDownButton from "../button/ScrollDownButton";

const JobIntro = () => (
  <section
    style={{
      backgroundImage: `url(${Cover})`,
      color: "white",
      height: "540px"
    }}
  >
    <div
      style={{
        textAlign: "right",
        margin: "50px 280px"
      }}
    >
      <h2>
        <Link to="/">
          <img src={logo} alt="clickable logo" />
        </Link>
      </h2>
      <div>
        <h2>WeFit tuyển dụng nhân tài</h2>
        <p>
          Bạn có mong muốn truyền cảm hứng cho mọi người về một cuộc sống khoẻ
          mạnh hơn? Chúng tôi muốn bạn là một phần trong đội ngũ nhiệt huyết của
          WeFit
        </p>
      </div>
    </div>
    <div>
        <ScrollDownButton/>
    </div>
  </section>
);

export default JobIntro;
