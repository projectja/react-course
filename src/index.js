// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom/client";
import Greetings, {UserCard} from './Greeting'

// const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Greetings />
    <UserCard />
  </>
);
