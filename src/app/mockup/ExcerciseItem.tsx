interface props {
  text: string;
}

export default function ExcerciseItem({ text }: props) {
  return (
    <div className="excercise-item">
      {text}
      <style jsx>{`
        .excercise-item {
          width: 70%;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30px;
          border: 1px solid black;
          border-radius: 10px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
