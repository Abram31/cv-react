import React from 'react';
import ReactDOM from 'react-dom/client';
import './basic.scss';
import { Education } from './education/education';
// import reportWebVitals from './reportWebVitals';
import { Header } from './header/header';
import { MyHistory } from './my-history/my-history';
import { MyProjects, Props, Test } from './my-projects/my-projects';
import { Skills } from './skills/skills';

const body = ReactDOM.createRoot(document.querySelector('body'))
body.render(
  <React.StrictMode>
    <Header />
    <MyHistory/>
    <Skills/>
    <Education/>
    <MyProjects/>
    <Test {...Props} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
