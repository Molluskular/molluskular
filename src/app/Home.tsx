"use client";

import Image from "next/image";

export default function HomePage() {
  const navContent = ["Home", "|", "Our Concept", "|", "Benefit", "|", "FAQ"];
  return (
    <div className="page pg-01">
      <header className="nav-bar">
        <img src={"/logo.png"} alt="logo" className="logo"></img>
        <nav className="nav-content">
          {navContent.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </nav>
      </header>
      <div className="contents">
        <div className="left">
          <span className="txt-01 title">
            GET READY TO REDEFINE <br /> YOUR WORKOUT PROGRSS
          </span>
          <span className="txt-02">
            Tailored to your unique needs, our personalized AI-driven app will
            <br /> redefine your workout routine, guaranteeing exceptional
            progress and
            <br /> success in your fitness journey.
          </span>
          <div className="signup-box">
            <img className="bg-img" src="/background/bg_04.png" />
            <span className="title txt-03">SIGN-UP FOR EARLY ACCESS</span>
            <span className="txt-04">
              Be among the first to experience our groundbreaking features.
              <br />
              Your journey to a stronger, healthier you starts here!
            </span>
            <div className="signup-input">
              <input type="email" className="input"></input>
              <span className="span">Sign-up</span>
            </div>
          </div>
          <span className="txt-05">
            By signing up, you agree to be on our email list for <br />
            updates on Molluskular&apos;s launch and features.
            <br />
            <u>Opt-out anytime.</u>
          </span>
        </div>
        <div className="right">
          <img className="img" src="/lifting_man.png" alt="lifting man"></img>
        </div>
      </div>
      <style jsx>{`
        .pg-01 {
          width: 85vw;
          height: 100vh;
          padding: 0 7vw;
          z-index: -2;

          .nav-bar {
            margin-top: 40px;
            width: 100%;
            height: fit-content;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            color: white;

            .logo{
              width:100px;
            }
            .nav-content {
              width: 100%;
              margin: 0 20%;
              display: flex;
              justify-content: space-evenly;
            }
          }

          .contents {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position:relative;

            .left {
              z-index: 3;
              width: 65%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;

              .txt-01 {
                width: 100%;
                font-size: 3em;
                margin-bottom: 10px;
                line-height: 1.5em;
              }

              .signup-box {
                width: 60%;
                height: 180px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                margin: 50px 0;
                padding: 30px 25px;
                box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.2);
                position: relative;
                border-radius: 30px;
                z-index: 1;

                .bg-img{
                    width:100%;
                    position:absolute;
                    top:-70%;
                    left:-10%;
                    z-index:0;
                    opacity: 0.5;
                  }

                .txt-03 {
                  position:relative;
                  font-size: 1.5em;
                }
                .txt-04 {
                  position:relative;
                  font-size: 0.8em;
                  font-weight: 100;
                  text-align: center;
                }

                .signup-input {
                  position:relative;
                  width: 50%;
                  position: relative;

                  .input {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    padding: 5% 10%;
                    background: transparent;
                    border-radius: 500px;
                    color: white;
                    box-sizing: border-box;
                    border: none;
                    background-color: rgba(255, 255, 255, 0.2);
                  }

                  .span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: black;
                    text-align: center;
                    font-size: 0.8em;
                    width: 30%;
                    height: 100%;
                    background: white;
                    position: absolute;
                    top: 0;
                    right: 0;
                    border-radius: 0px 100px 100px 0;
                    box-sizing: border-box;
                    font-weight: 200;
                    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.4);
                  }
                }
              }

              .txt-05 {
                width: 50%;
                text-align: center;
                margin-left: 6%;
              }
            }

            .right {
              z-index: 3;
              width: 35%;
              .img {
                width: 100%;
              }
            }
          }
        }

        @media only screen and (max-width: 1350px) {
            .pg-01 {
              .contents {
                width: 100%;
                height: 100%;

                .left {
                  width: 70%;
                }

                .right {
                  width: 30%;
                }
              }
            }
          }
        }

        @media only screen and (max-width: 1250px) {
          .pg-01 {
            .contents {
              width: 100%;
              height: 100%;

              .left {
                width: 75%;
              }

              .right {
                width: 25%;
              }
            }
          }

          @media only screen and (max-width: 1180px) {
            .pg-01 {
              .contents {
                width: 100%;
                height: 100%;

                .left {
                  width: 75%;
                }
              }

              .right {
                width: 25%;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
