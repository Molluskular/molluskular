"use client";

export default function Join() {
  return (
    <div className="page pg-04">
      <span className="txt-01">JOIN THE REVOLUTION</span>
      <span className="txt-02">
        Reserve your spot and be among the first to experience the future of
        workout personalization with Molluskular.
      </span>
      <div className="signup-input">
        <input className="input"></input>
        <span className="span">Sign-Up</span>
      </div>
      <span className="txt-03">
        By signing up, you agree to be on our email list for <br />
        updates on Molluskular&apos;s launch and features.
        <br />
        <u>Opt-out anytime.</u>
      </span>

      <style jsx>{`
        .pg-04 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 100px 7vw;
          position: relative;
          z-index: 5;

          .txt-01 {
            font-weight: 300;
            font-size: 2em;
          }

          .txt-02 {
            width: 80%;
            text-align: center;
            margin: 30px 0;
          }

          .signup-input {
            width: 50%;
            position: relative;
            cursor: pointer;

            .input {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              padding: 4% 10%;
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
              transition-duration: 1s;
            }

            .span:hover {
              color: white;
              background-color: black;
            }
          }

          .txt-03 {
            margin-top: 30px;
            text-align: center;
          }
        }

        @media only screen and (max-width: 760px) {
          .pg-04 {
            .signup-input {
              width: 80%;
            }
          }
        }
      `}</style>
    </div>
  );
}
