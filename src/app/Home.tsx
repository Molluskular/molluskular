import Image from "next/image";
import NewsLetterSignUpForm from "./Subscribe";

export default function HomePage({ scroll }: any) {
  return (
    <div className="page pg-01" ref={scroll}>
      <div className="contents">
        <div className="txt-box">
          <div className="txt-box-01">
            <div className="txt-box-02">
              <span className="txt-01 title">GET READY TO&nbsp;</span>
              <div className="img-box">
                <span className="txt-01 title">REDEFINE</span>
                <Image
                  priority={true}
                  className="img"
                  src="/background/bg_02.png"
                  alt="back"
                  width={200}
                  height={200}
                  style={{
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    left: 0,
                  }}
                ></Image>
              </div>
            </div>
            <span className="txt-01 title">YOUR WORKOUT ROUTINE</span>
          </div>
        </div>
        <span className="txt-02">
          Tailored to your unique needs, our personalized AI-driven app will
          redefine your workout routine, guaranteeing exceptional progress and
          success in your fitness journey.
        </span>
        <div className="signup-box">
          <Image
            priority={true}
            className="bg-img"
            src="/background/bg_04.png"
            alt="back"
            width={500}
            height={500}
            style={{
              width: "100%",
              position: "absolute",
              top: "-70%",
              left: "-10%",
              zIndex: 0,
              opacity: 0.5,
            }}
          />
          <span className="title txt-03">SIGN UP FOR EARLY ACCESS</span>
          <span className="txt-04">
            Be among the first to experience our groundbreaking features.
            <br />
            Your journey to a stronger, healthier you starts here!
          </span>
          <NewsLetterSignUpForm></NewsLetterSignUpForm>
        </div>
        <span className="txt-05">
          By signing up, you agree to be on our email list for <br />
          updates on Molluskular&apos;s launch and features.
          <br />
          <u>
            <a href="https://molluskular.us21.list-manage.com/unsubscribe?u=da2d1b30e232d3dbd79cf67f9&id=fda980f726">
              Opt-out anytime.
            </a>
          </u>
        </span>
        {/* <img
            className="img-02"
            src="/background/bg_08.png"
            alt="lifting man"
          ></img> */}
        <div className="hero-img">
          <Image
            src="/lifting_man.png"
            alt="lifting man"
            fill
            objectFit="contain"
          ></Image>
        </div>
      </div>
      <style jsx>{`
        .pg-01 {
          position: relative;
          display: flex;
          justify-content: start;
          align-items: center;
          width: 100vw;
          min-height: 100vh;
          padding: 0 7vw;

          .contents {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: start;

            .hero-img {
              width: 35%;
              height: 100%;
              position: absolute;
              right: 7vw;
            }

            z-index: 3;
            width: 65%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .txt-box {
              position: relative;
              margin-bottom: 10px;

              .txt-box-01 {
                display: flex;
                flex-direction: column;

                .txt-box-02 {
                  width: fit-content;
                  display: flex;
                  justify-content: start;

                  .img-box {
                    position: relative;
                  }
                }
              }

              .txt-01 {
                position: relative;
                z-index: 2;
                width: 100%;
                font-size: 3em;
                line-height: 1.5em;
              }
            }

            .txt-02 {
              width: 60%;
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
              box-sizing: content-box;

              .txt-03 {
                position: relative;
                z-index: 1;
                font-size: 1.5em;
              }
              .txt-04 {
                position: relative;
                z-index: 1;
                font-size: 0.8em;
                font-weight: 100;
                text-align: center;
              }
            }

            .txt-05 {
              position: relative;
              z-index: 1;
              width: 50%;
              text-align: center;
              margin-left: 6%;
              font-size: 0.8em;
            }
          }
        }

        @media only screen and (max-width: 1350px) {
          .contents {
            width: 75%;
          }
        }

        @media only screen and (max-width: 1250px) {
          .pg-01 {
            .contents {
              width: 80%;
            }
          }
        }
        @media only screen and (max-width: 1180px) {
          .pg-01 {
            .contents {
              .txt-01 {
                font-size: 2.5em;
              }

              .txt-05 {
                width: 70%;
                margin-left: 0;
              }
            }
          }
        }
        @media only screen and (max-width: 760px) {
          .pg-01 {
            width: 100vw;
            min-height: 95vh;
            padding: 0 7vw;

            .hero-img {
              display: none;
            }

            .contents {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;

              .txt-01 {
                text-align: center;
                width: 100%;
                font-size: 2em !important;
                position: relative;
                z-index: 2;
              }
              .txt-02 {
                position: relative;
                z-index: 2;
              }

              .signup-box {
                width: 90%;
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

                .txt-03 {
                  position: relative;
                  font-size: 1.4em;
                }
                .txt-04 {
                  position: relative;
                  font-size: 0.8em;
                  font-weight: 100;
                  text-align: center;
                }

                .signup-input {
                  position: relative;
                  width: 80%;
                  position: relative;
                }
              }

              .txt-05 {
                width: 90%;
                text-align: center;
                margin-left: 6%;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
