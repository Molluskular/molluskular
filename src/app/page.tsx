"use client";

import Concept from "./Concept";
import HomePage from "./Home";
import Benefit from "./Benefit";
import Join from "./Join";
import Faq from "./Faq";
import useMoveScroll from "../hook/useMoveScroll";

export default function Home() {
  const navContent = ["Home", "|", "Our Concept", "|", "Benefit", "|", "FAQ"];
  const [home, UseHome]: any = useMoveScroll();
  const [concept, UseConcept]: any = useMoveScroll();
  const [benefit, UseBenefit]: any = useMoveScroll();
  const [faq, UseFaq]: any = useMoveScroll();

  const onNavClick = (value: string) => {
    switch (value) {
      case "Home":
        UseHome();
        break;
      case "Our Concept":
        UseConcept();
        break;
      case "Benefit":
        UseBenefit();
        break;
      case "FAQ":
        UseFaq();
        break;
      default:
        break;
    }
  };
  return (
    <>
      <main className="main">
        <div className="background">
          <header className="nav-bar" ref={home}>
            <img src={"/logo.png"} alt="logo" className="logo"></img>
            <nav className="nav-content">
              {navContent.map((text, i) => (
                <span
                  key={i}
                  onClick={(e: any) => onNavClick(e.target.innerText)}
                  className="nav-item"
                >
                  {text}
                </span>
              ))}
            </nav>
          </header>
          <HomePage scroll={home}></HomePage>
          <Concept scroll={concept}></Concept>
          <Benefit scroll={benefit}></Benefit>
          <Join></Join>
          <Faq scroll={faq}></Faq>
          <footer>
            <div className="logo-box">
              <img src="/logo.png" alt="logo" className="logo" />
              <span className="logo-txt">Molluskular</span>
            </div>
            <span>
              Follow our journey towards personalizing your fitness with
              real-time adaptable workout plans.
            </span>
            <div className="link-box">
              <img src="/instagram.png" alt="logo" className="link" />
              <img src="/twitter.png" alt="logo" className="link" />
              <img src="/facebook.png" alt="logo" className="link" />
            </div>
          </footer>
        </div>
      </main>
      <style jsx>{`
        main {
          width: 100vw;
          height: 100vh;
          color: white;
        }

        .background {
          width: 100vw;
          height: 100vh;
          background-color: #0b0b0b;
          font-weight: 100;
          z-index: -2;
          .page {
            display: flex;
            flex-direction: column;
          }

          .nav-bar {
            margin-top: 40px;
            width: 86vw;
            height: 5vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            color: white;
            padding: 0 7vw;

            .logo {
              width: 100px;
            }
            .nav-content {
              width: 100%;
              margin: 0 20%;
              display: flex;
              justify-content: space-evenly;

              .nav-item {
                cursor: pointer;
              }
            }
          }
        }

        footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px 7vw;

          .logo-box {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            .logo {
              width: 100px;
              margin-right: 20px;
            }

            .logo-txt {
              font-size: 2em;
              font-weight: 300;
            }
          }

          .link-box {
            margin-top: 40px;

            .link {
              margin: 0 10px;
            }
          }
        }

        @media only screen and (max-width: 1350px) {
          .background {
            font-size: 14px;
          }
        }

        @media only screen and (max-width: 1250px) {
          .background {
            font-size: 12px;
          }
        }

        @media only screen and (max-width: 760px) {
          .background {
            font-size: 12px;

            .nav-bar {
              display: flex;
              flex-direction: column;

              .logo {
                width: 100px;
                margin-bottom: 20px;
              }

              .nav-bar {
                width: 100vw;
                padding: 0px 0px;
                .nav-content {
                  width: 100%;
                  margin: 0 20%;
                  display: flex;
                  justify-content: space-evenly;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
}
