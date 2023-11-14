"use client";

export default function Concept({ scroll }: any) {
  const conceptList = [
    {
      image: "/octopus.png",
      title: "Adaptive Workout Dynamics",
      description:
        "Life is all about change, and your workout should adapt accordingly. Molluskular lets you easily modify your fitness plan for time constraints, injury recovery, or advancing with progressive overloads.",
    },
    {
      image: "/measuring.png",
      title: "Tailored Strength Training",
      description:
        "Carve your fitness path with our system’s smart onboarding, tailoring workout plans to your goals, preferences, and lifestyle, whether you’re a fitness enthusiast or a time-strapped gym-goer.",
    },
    {
      image: "/counter.png",
      title: "Making Every Rep Count",
      description:
        "Molluskular rejects the one-size-fits-all fitness approach. We focus on personalized strength training, offering a dynamic platform for individual needs.",
    },
  ];
  return (
    <div className="page pg-02" ref={scroll}>
      <div className="txt-box">
        <span className="txt">Our CONCEPT</span>
        <img src="/background/txt_bg.png" className="img"></img>
      </div>
      <div className="concepts">
        {conceptList.map((concept, i) => (
          <div className="concept-item" key={i}>
            <img src={concept.image} alt="concept" className="img"></img>
            <span className="txt-01">{concept.title}</span>
            <span className="txt-02">{concept.description}</span>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .pg-02 {
            width: 86vw;
            height: auto;
            padding: 100px 7vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #191919;

            .txt-box {
              margin-bottom: 75px;
              position: relative;

              .txt {
                position: relative;
                font-size: 2em;
                font-weight: 300;
                z-index: 2;
              }

              .img {
                width: 100%;
                position: absolute;
                top: -5px;
                left: 0;
              }
            }

            .concepts {
              display: flex;
              justify-content: space-between;

              .concept-item {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .img {
                  width: 80px;
                  height: 80px;
                  margin-bottom: 30px;
                }

                .txt-01 {
                  margin: 30px 0;
                  font-weight: 200;
                }

                .txt-02 {
                  width: 60%;
                }
              }
            }
          }

          @media only screen and (max-width: 760px) {
            .pg-02 {
              .concepts {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .concept-item {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  align-items: center;
                  justify-content: center;
                  margin-bottom: 30px;

                  .img {
                    width: 80px;
                    height: 80px;
                    margin-bottom: 0px;
                  }

                  .txt-02 {
                    width: 80%;
                  }
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}
