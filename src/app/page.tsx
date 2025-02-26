"use client";

import Concept from "./Concept";
import HomePage from "./Home";
import Benefit from "./Benefit";
import Join from "./Join";
import Faq from "./Faq";
import useMoveScroll from "../hook/useMoveScroll";
import { useEffect, useState } from "react";
import useScrollY from "@/hook/useScrollY";
import Image from "next/image";

export default function Home() {
  const navContent = ["Home", "|", "Our Concept", "|", "Benefit", "|", "FAQ"];
  const [home, UseHome]: any = useMoveScroll();
  const [concept, UseConcept]: any = useMoveScroll();
  const [benefit, UseBenefit]: any = useMoveScroll();
  const [faq, UseFaq]: any = useMoveScroll();
  const [scrollY, setScrollY] = useScrollY();
  const [arrowName, setArrowName] = useState("arrow-img");

  useEffect(() => {
    const faqHeight = faq.current.offsetTop + faq.current.offsetHeight;
    const conceptHeight =
      concept.current.offsetTop + concept.current.offsetHeight;
    const screenBottom =
      parseInt(scrollY.toString()) + parseInt(window.screen.height.toString());
    if (conceptHeight >= screenBottom) {
      setArrowName("arrow-img");
    }
    if (conceptHeight < screenBottom) {
      setArrowName("arrow-img arrow-inverse");
    }
    // if (faqHeight < screenBottom) {
    //   setArrowName("arrow-img arrow-disappear");
    // }
  }, [scrollY]);

  const onArrowClick = () => {
    if (arrowName.includes("arrow-inverse")) {
      console.log(1);
      home.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      faq.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <img
          src="/arrow.png"
          className={arrowName}
          onClick={onArrowClick}
        ></img>
        <div className="background">
          <header className="nav-bar">
            <div className="nav-logo-box">
              <Image
                priority={true}
                width={100}
                height={100}
                src={"/logo.png"}
                alt="logo"
                className="nav-logo"
                style={{ width: "40%" }}
              ></Image>
              <Image
                priority={true}
                src={"/logo-txt.png"}
                alt="logo"
                className="nav-logo-txt"
                width={100}
                height={100}
                style={{
                  width: "60%",
                }}
              ></Image>
            </div>
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
              <Image
                priority={true}
                src="/logo.png"
                alt="logo"
                className="logo"
                width={100}
                height={100}
                style={{
                  width: "20%",
                  marginRight: "3%",
                }}
              />
              <Image
                priority={true}
                src="/logo-half-txt.png"
                alt="logo"
                className="logo-txt"
                width={100}
                height={100}
                style={{ width: "80%" }}
              />
            </div>
            <span>
              Follow our journey towards personalizing your fitness with
              real-time adaptable workout plans.
            </span>
            <div className="link-box">
              <Image
                priority={true}
                src="/instagram.png"
                alt="logo"
                className="link insta"
                width={50}
                height={50}
                style={{
                  height: "30px",
                  margin: "0 10px",
                  width: "calc(30px * 155 / 172)",
                }}
              />
              <Image
                priority={true}
                src="/twitter.png"
                alt="logo"
                className="link twitter"
                width={50}
                height={50}
                style={{
                  height: "30px",
                  margin: "0 10px",
                  width: "calc(30px * 155 / 144)",
                }}
              />
              <Image
                priority={true}
                src="/facebook.png"
                alt="logo"
                className="link facebook"
                width={50}
                height={50}
                style={{
                  height: "30px",
                  margin: "0 10px",
                  width: "calc(30px * 91 / 155)",
                }}
              />
            </div>
          </footer>
        </div>
      </main>
      <style jsx>{`
        main {
          width: 100vw;
          height: 100vh;
          color: white;
          position: relative;
        }

        .arrow-img {
          width: 31px;
          position: fixed;
          z-index: 4;
          bottom: 20px;
          left: calc(50% - 15px);
          transition-duration: 0.5s;
          cursor: pointer;
        }

        .arrow-inverse {
          transform: rotate(0.5turn);
        }
        .arrow-disappear {
          display: none;
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
            width: 100vw;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            color: white;
            padding: 0 7vw;

            .nav-logo-box {
              width: 30%;
              min-width: 150px;
              display: flex;
              align-items: center;
              justify-content: center;
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
          padding: 50px 7vw;

          .logo-box {
            width: 50%;
            max-width: 300px;
            display: flex;
            align-items: end;
            margin-bottom: 20px;
          }

          .link-box {
            display: flex;
            margin-top: 40px;
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

            .nav-bar {
              .nav-content {
                margin: 0 10%;
              }
            }
          }
        }

        @media only screen and (max-width: 760px) {
          .background {
            font-size: 12px;

            .nav-bar {
              display: flex;
              flex-direction: column;
              margin-bottom: 30px;

              .nav-logo-box {
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
