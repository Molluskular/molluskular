import { useToast } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

export default function NewsLetterSignupForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const toast = useToast({
    containerStyle: {
      width: "90%",
      maxWidth: "750px",
    },
  });

  //Defining the environment variables to be used in the fetch() method
  //These are defined as well in Vercel, and are different in development etc.
  //Please use domain 'localhost', port '3000' and protocol 'http' for development
  //Please use domain 'molluskular.com', port '443' and protocol 'https' for production
  const url = process.env.NEXT_PUBLIC_ROOT_DOMAIN;
  const port = process.env.NEXT_PUBLIC_ROOT_PORT;
  const protocol = process.env.NEXT_PUBLIC_ROOT_PROTOCOL;

  const subscribeUser = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`${protocol}://${url}:${port}/api/subscribeUser`, {
      body: JSON.stringify({
        email: inputRef.current?.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
    if (res.ok) {
      toast({
        title: "Sign up",
        description: "Thanks for signing up!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else if (res.status === 403) {
      toast({
        title: "Already exists",
        description: "It seems that this email has already been signed up!",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Sign up",
        description:
          "Something wrong! Please contact us at signup@molluskular.com if this keeps happening",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
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
        placeholder="johnsmith@gmail.com"
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
            color: white;
          }

          .signup-input {
            width: 60%;
            max-width: 500px;
            position: relative;
            z-index: 1;
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
    </form>
  );
}
