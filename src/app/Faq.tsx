"use client";

export default function Faq({ scroll }: any) {
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
    <div className="page pg-05" ref={scroll}>
      <img src="/background/bg_03.png" alt="bg" className="bg" />
      <div className="txt-box">
        <span className="txt-01">FAQ&apos;S</span>
        <img src="/background/txt_bg.png" alt="txt_bg" className="img" />
      </div>
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
            position: relative;

            .bg {
              position: absolute;
              width: 60%;
              right: -40%;
              max-width: 1000px;
            }

            .txt-box {
              position: relative;
              margin-bottom: 50px;

              .txt-01 {
                position: relative;
                z-index: 1;
                font-size: 2em;
                font-weight: 300;
              }

              .img {
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
              }
            }

            .question-list {
              width: 60%;
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
