import * as S from "./styles";
import { MMMainLogo, GithubLogo } from "../../../assets/index";

const Footer = () => {
  const githubSite = "https://github.com/DSM-MM";
  return (
    <>
      <S.FooterContainer>
        <S.ImgContainer>
          <img src={MMMainLogo} alt="Footer Logo Icon" />
        </S.ImgContainer>
        <S.DeveloperPersonWrapper>
          <div>
            <S.GithubWrapper>
              <div className="github" style={{ marginBottom: "15px" }}>
                <a href={githubSite}>
                  <img src={GithubLogo} alt="Github Logo Icon" />
                </a>
                <a href={githubSite}>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontWeight: "400",
                      fontSize: "1rem",
                      lineHeight: "14px",
                    }}
                  >
                    DSM-MM
                  </span>
                </a>
              </div>
              <span style={{ fontWeight: "400", lineHeight: "14px" }}>
                ⓒ DSM 2022 UP 2rd Grade Students.
              </span>
            </S.GithubWrapper>
          </div>
          <div>
            <S.DeveloperWrapper>
              <div className="developer">
                <span className="title">Frontend</span>
                <a
                  href="https://github.com/kimkh05"
                  style={{ color: "#FFFFFF" }}
                >
                  <span>김경호</span>
                </a>
                <a
                  href="https://github.com/SaeyeonPark"
                  style={{ color: "#FFFFFF" }}
                >
                  <span>박세연</span>
                </a>
              </div>
              <div className="developer">
                <span className="title">Backend</span>
                <a
                  href="https://github.com/beargame123"
                  style={{ color: "#FFFFFF" }}
                >
                  <span>김호영</span>
                </a>
                <a
                  href="https://github.com/wheeeung"
                  style={{ color: "#FFFFFF" }}
                >
                  <span>박휘응</span>
                </a>
              </div>
              <div className="developer">
                <span className="title">Design</span>
                <a
                  href="https://github.com/seokyeon1"
                  style={{ color: "#FFFFFF" }}
                >
                  <span>장석연</span>
                </a>
              </div>
            </S.DeveloperWrapper>
          </div>
        </S.DeveloperPersonWrapper>
      </S.FooterContainer>
    </>
  );
};

export default Footer;
