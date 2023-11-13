"use client";

export default function Faq() {
  const qList = [
    {
      title: "What kind of personalization does Molluskular offer?",
      description: "",
    },
    {
      title: "How does Molluskular understand my fitness needs in real-time?",
      description: "",
    },
  ];
  return (
    <div className="page pg-05">
      <span className="txt-01">FAQ&apos;S</span>
      <div className="question-list">
        {qList.map((question, i) => (
          <div key={i} className="question-item">
            <span className="txt-02">{question.title}</span>
            <img src="/down.png" className="down-img"></img>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .pg-05 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #191919;
            padding: 100px 0;

            .txt-01 {
              font-size: 2em;
              font-weight: 300;
              margin-bottom: 50px;
            }

            .question-list {
              width: 70%;
              display: flex;
              flex-direction: column;

              .question-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 15px 15px;
                background-color: black;
                margin-bottom: 5px;
                border-radius: 10px;

                .txt-02 {
                  font-weight: 200;
                }

                .down-img {
                  width: 20px;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}
