import NewsLetterSignUpForm from "./Subscribe";

export default function HomePage({ scroll }: any) {
  return (
    <div className="page pg-01" ref={scroll}>
      <div className="contents">
        <div className="left">
          <div className="txt-box">
            <span className="txt-01 title">
              GET READY TO REDEFINE <br /> YOUR WORKOUT ROUTINE
            </span>
            <img className="img" src="/background/bg_02.png"></img>
          </div>
          <span className="txt-02">
            Tailored to your unique needs, our personalized AI-driven app will
            redefine your workout routine, guaranteeing exceptional progress and
            success in your fitness journey.
          </span>
          <div className="signup-box">
            <img className="bg-img" src="/background/bg_04.png" />
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
            <u>Opt-out anytime.</u>
          </span>
        </div>
        <div className="right">
          <img className="img" src="/lifting_man.png" alt="lifting man"></img>
        </div>
      </div>
      <style jsx>{`
        .pg-01 {
          display:flex;
          justify-content: center;
          align-items:center;
          width: 85vw;
          min-height: 100vh;
          padding: 0 7vw;
          z-index: -2;

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

              .txt-box{
                position:relative;
                margin-bottom: 10px;
                .txt-01 {
                  position:relative;
                  z-index: 2;
                  width: 100%;
                  font-size: 3em;
                  line-height: 1.5em;
                }

                .img{
                  width: 40%;
                  position:absolute;
                  right: 5%;
                  top: -2%;
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
        }
        @media only screen and (max-width: 1180px) {
          .pg-01 {
            .contents {
              width: 100%;
              height: 100%;

              .left {
                width: 75%;

                .txt-01{
                  font-size: 2.5em;
                }

                .txt-05 {
                width: 70%;
                margin-left: 0;
              }
              }
            }

            .right {
              width: 25%;
            }
          }
        }
        @media only screen and (max-width: 760px) {
          .pg-01 {
          width: 85vw;
          min-height: 95vh;
          padding: 0 7vw;

          .contents {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position:relative;

            .left {
              z-index: 3;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items:center;
              position:relative;
              z-index:2;

              .txt-01 {
                text-align:center;
                width: 100%;
                font-size: 2em;
                position:relative;
                z-index:2;
              }
              .txt-02{
                position:relative;
              z-index:2;
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
                  font-size: 1.4em;
                }
                .txt-04 {
                  position:relative;
                  font-size: 0.8em;
                  font-weight: 100;
                  text-align: center;
                }

                .signup-input {
                  position:relative;
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

            .right {
              display:none;
              .img {
                width: 100%;
              }
            }
          }
        }
        }
      `}</style>
    </div>
  );
}
