import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Exchanges,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
} from "./components";

import "./App.css";

import {
  GlobalStyles,
  ligthTheme,
  darkTheme,
} from "./resources/styles/globalStyles";
import { Toggle } from "./components/shared/Toggle";
import styled, { ThemeProvider } from "styled-components";
import { useDarkMode } from "./resources/styles/useDarkMode";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? ligthTheme : ligthTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div className="app">
        <div className="navbar">
          <Navbar />
          <GlobalStyles />
          {/* <Toggle className="toggle" theme={theme} toggleTheme={toggleTheme} /> */}
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Switch>
            </div>
          </Layout>
          {/* <div className="footer">
           <Typography.Title
             level={5}
             style={{ color: "white", textAlign: "center" }}
           >
             Copyright © 2021
             <Link to="/">Cryptowatcher.</Link> <br />
             All Rights Reserved.
           </Typography.Title>
           <Space>
             <Link to="/">Home</Link>
             <Link to="/exchanges">Exchanges</Link>
             <Link to="/news">News</Link>
           </Space>
         </div> */}
        </div>
      </div>
    </ThemeProvider>
  );
}
// const App = () => (
//   <div className="app">
//     <div className="navbar">
//       <Navbar />
//     </div>
//     <div className="main">
//       <Layout>
//         <div className="routes">
//           <Switch>
//             <Route exact path="/">
//               <Homepage />
//             </Route>
//             <Route exact path="/exchanges">
//               <Exchanges />
//             </Route>
//             <Route exact path="/cryptocurrencies">
//               <Cryptocurrencies />
//             </Route>
//             <Route exact path="/crypto/:coinId">
//               <CryptoDetails />
//             </Route>
//             <Route exact path="/news">
//               <News />
//             </Route>
//           </Switch>
//         </div>
//       </Layout>
//       {/* <div className="footer">
//         <Typography.Title
//           level={5}
//           style={{ color: "white", textAlign: "center" }}
//         >
//           Copyright © 2021
//           <Link to="/">Cryptowatcher.</Link> <br />
//           All Rights Reserved.
//         </Typography.Title>
//         <Space>
//           <Link to="/">Home</Link>
//           <Link to="/exchanges">Exchanges</Link>
//           <Link to="/news">News</Link>
//         </Space>
//       </div> */}
//     </div>
//   </div>
// );

export default App;
