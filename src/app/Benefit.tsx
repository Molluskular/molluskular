"use client";

export default function Benefit() {
  const benefitList = [
    {
      title: "Dynamic Plan Iterations",
      description:
        "Your life isn't static, and neither should your wrokout be. Adjust your plan on the fly for unexpected changes. Ensuring you never miss a beat.",
    },
    {
      title: "Intelligent Onboarding",
      description:
        "Start with our intelligent onboarding and keep refining. Molluskular grows with you. From notice enthusiasm to searched expect time.",
    },
    {
      title: "Focussed Strength Training",
      description:
        "Concentration solely on strength training. <br/> Molluskular offers unrivolled quarity in crafting your perfect workout routine.",
    },
  ];
  return (
    <div className="page pg-03">
      <span className="txt-01">Benefits</span>
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
          display: flex;
          flex-direction: column;
          justify-centent: center;
          align-items: center;
          padding: 100px 0;
          background-color: #191919;

          .txt-01 {
            font-size: 2em;
            margin-bottom: 50px;
            font-weight: 300;
          }

          .benefit-box {
            width: 70%;
            border-radius: 15px;
            display: flex;
            background-color: rgb(255, 255, 255, 0.1);
            .benefit-img {
              width: 400px;
              height: auto;
              border-radius: 15px 0px 0px 15px;
            }
            .benefit-img {
              width: 40%;
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
                background-color: rgb(255, 255, 255, 0.3);
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
