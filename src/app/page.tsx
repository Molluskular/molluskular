"use client";

import Image from "next/image";
import Concept from "./Concept";
import HomePage from "./Home";
import Benefit from "./Benefit";
import Join from "./Join";
import Faq from "./Faq";

export default function Home() {
  return (
    <>
      <main className="main">
        <div className="background">
          <HomePage></HomePage>
          <Concept></Concept>
          <Benefit></Benefit>
          <Join></Join>
          <Faq></Faq>
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
        }

        footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px 0;

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
      `}</style>
    </>
  );
}
