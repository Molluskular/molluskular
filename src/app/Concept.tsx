"use client";

export default function Concept() {
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
        "Carve your fitness path with our system's smart onboarding, tailoring workout plans to your goalds, preferences, and lifestyle. Whether you're a fitness enthusiastic or a time-stopped gym-goer.",
    },
    {
      image: "/counter.png",
      title: "Making Every Rep Count",
      description:
        "Molluskular rejects the one-size-fits-all fitness approach. We focus on personalized strength training. Offering a dynamic platform for individual needs.",
    },
  ];
  return (
    <div className="page pg-02">
      <span className="txt">Our CONCEPT</span>
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

            .txt {
              font-size: 2em;
              font-weight: 300;
              margin-bottom: 75px;
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
        `}
      </style>
    </div>
  );
}
