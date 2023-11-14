"use client";

export default function Benefit({ scroll }: any) {
  const benefitList = [
    {
      title: "Dynamic Plan Iterations",
      description:
        "Your life isn’t static, and neither should your workout be. Adjust your plan on the fly for unexpected changes, ensuring you never miss a beat.",
    },
    {
      title: "Intelligent Onboarding",
      description:
        "Start with our intelligent onboarding and keep refining. Molluskular grows with you, from novice enthusiasm to seasoned lifter expertise.",
    },
    {
      title: "Focussed Strength Training",
      description:
        "Concentrating solely on strength training, Molluskular offers unrivalled quality in crafting your perfect workout routine.",
    },
  ];
  return (
    <div className="page pg-03" ref={scroll}>
      <img src="/background/bg_06.png" alt="bg-01" className="bg-01" />
      <img src="/background/bg_07.png" alt="bg-02" className="bg-02" />
      <div className="txt-box">
        <span className="txt-01">Benefits</span>
        <img src="/background/txt_bg.png" className="img" />
      </div>
      <div className="benefit-box">
        <img src="/muscle.png" alt="benefit" className="benefit-img" />
        <div className="benefit-cards">
          {benefitList.map((benefit, i) => (
            <div key={i} className={i % 2 == 0 ? `card` : `card card-even`}>
              <span className="txt-02">{benefit.title}</span>
              <span className="txt-03">{benefit.description}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .pg-03 {
          height: calc(100vh - 200px);
          display: flex;
          flex-direction: column;
          justify-centent: center;
          align-items: center;
          padding: 100px 0;
          background-color: #191919;
          position: relative;
          .bg-01 {
            width: 30%;
            position: absolute;
            top: 0;
            right: 0;
          }
          .bg-02 {
            width: 30%;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          .txt-box {
            margin-bottom: 50px;
            position: relative;
            position: relative;
            z-index: 2;

            .txt-01 {
              position: relative;
              z-index: 2;
              font-size: 2em;
              font-weight: 300;
            }
            .img {
              width: 100%;
              top: 0;
              left: 0;
              position: absolute;
            }
          }

          .benefit-box {
            width: 60%;
            height: 90%;
            border-radius: 15px;
            display: flex;
            background-color: rgb(32, 32, 32, 0.2);
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.2);
            position: relative;
            z-index: 2;

            .benefit-img {
              width: 40%;
              height: auto;
              border-radius: 15px 0px 0px 15px;
            }

            .benefit-cards {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 100%;

              .card {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding: 30px;
                justify-content: center;

                .txt-02 {
                  font-size: 1.2em;
                  font-weight: 200;
                  margin-bottom: 20px;
                }
              }

              .card-even {
                background-color: rgb(16, 16, 16, 0.8);
              }
            }
          }
        }

        @media only screen and (max-width: 760px) {
          .pg-03 {
            .benefit-box {
              width: 80%;
              .benefit-img {
                display: none;
              }

              .benefit-cards {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .card {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  padding: 30px;
                  justify-content: center;

                  .txt-02 {
                    font-size: 1.2em;
                    font-weight: 200;
                    margin-bottom: 20px;
                  }
                }

                .card-even {
                  background-color: rgb(16, 16, 16, 0.8);
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
