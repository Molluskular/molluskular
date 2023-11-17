import { useRef } from "react";

export default function NewsLetterSignUpForm() {
  return AsyncNewsLetterSignupForm();
}

export async function AsyncNewsLetterSignupForm() {
  const inputRef = useRef(null);
  const subscribeUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });

    if (res.ok) {
      var messageBoxes = document.querySelectorAll('[id^=output]');
      for(var i in messageBoxes){
        try{
          messageBoxes[i].innerHTML = "Thanks for signing up!";
        } catch(error){}
      }
    }
  };
  return (
    <form onSubmit={subscribeUser} className="signup-input">
      <label htmlFor="email-input" className="form__label"></label>

      <input
        className="input"
        type="email"
        id="email-input"
        name="email"
        placeholder="johnsmit@gmail.com"
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
      />

      <button type="submit" className="span" value="" name="subscribe">
        Sign-Up
      </button>

      <style jsx>
        {`
          ::placeholder {
            color:white;
          }
          
          .signup-input {
            width: 60%;
            max-width: 500px;
            position: relative;
            cursor: pointer;
            font-weight: 200;

            .input {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              padding: 15px 20px;
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
              cursor: pointer;
            }
            .span:hover {
              color: white;
              background-color: black;
            }
          }
          
          @media only screen and (max-width: 1300px) {
            .signup-input {
              width: 80%;
            }
          }

          @media only screen and (max-width: 760px) {
            .input {
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
              width: 30%;
              height: 100%;
              background: white;
              position: absolute;
              top: 0;
              right: 0;
              border-radius: 0px 100px 100px 0;
              box-sizing: border-box;
              box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.4);
              font-weight: 200;
            }
          }
        `}
      </style>
      <p id="output"></p>
    </form>
  );
}
