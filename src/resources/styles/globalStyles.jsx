import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Rajdhani', sans-serif;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all .5s linear;
  font-size: 19px;
}

.app-title {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
}

.coin-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  color: #fff;
}

label {
  position: relative;
}

toggle{
  width: 23px;
  height: 23px;
}

label:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
}

.coin-search {
  position: absolute;
  top: 2rem;
  right: 10rem;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: blue;
}

.coin-input {
  padding: 10px 40px;
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-image: linear-gradient(
    -225deg,
    ${({ theme }) => theme.searchBar_color} 0%,
    ${({ theme }) => theme.searchBar_color} 48%,
    ${({ theme }) => theme.searchBar_color} 100%
  );
  color: ${({ theme }) => theme.searchBar_text};
}

.coin-input::placeholder {
  color: #e2e2e2;
}

.logo {
  fill: ${({ theme }) => theme.text};
}
.logo:hover {
  fill: orange;
}

header[role="banner"] {
    #logo-main {
      display: block;
      margin: 20px auto;
    }
  }
  
  #navbar-primary.navbar-default {
    background: transparent;
    border: none;
    .navbar-nav { 
      width: 100%;
      text-align: center;
      > li {
        display: inline-block;
        float: none;
        > a {
          padding-left: 30px;
          padding-right: 30px;
          }
      }
    }
  }

  :root {
    --text-primary: #000;
    --bgPrimary: #fff;
    --bgSecondary: #f9f9f9;
    --pink: #12617f;
    --light-blue: #e6f7ff;
    --border: #d9d9d9;
    --navbar-color: #ffffff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Readex Pro", sans-serif;
  }
  
  a:hover {
    color: var(--pink) !important;
  }
  
  .app {
    display: flex;
    overflow: hidden;
  }
  
  .navbar {
    flex: 0.2;
    /* background-color: rgb(0, 21, 41); */
  }
  
  .main {
    flex: 0.8;
    width: 100%;
  }
  .routes {
    background-color: #fff;
    padding: 20px;
  }
  .nav-container {
    position: fixed;
    left: 0;
    margin: 10px;
    height: 100vh;
    margin: 0px;
    /* background-color: rgb(0, 21, 41); */
    background-color: var(--navbar-color);
    border-right: 1.3px solid #f0f0f0;
  }
  
  .logo-container {
    background-color: var(--navbar-color);
  
    display: flex;
    padding: 20px;
    align-items: center;
    width: 100%;
  }
  .logo {
    margin: 0 0 0 15px;
  }
  .logo a {
    color: white;
  }
  .menu-control-container {
    display: none !important;
    position: absolute !important;
    right: 10px !important;
    top: 25px !important;
    font-size: 1.2rem !important;
    background-color: var(--bgSecondary) !important;
    border: none !important;
  }
  
  .loader {
    height: 81vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  @media screen and (max-width: 1300px) {
    .main {
      margin-left: 50px;
    }
  }
  
  @media screen and (max-width: 1170px) {
    .main {
      margin-left: 50px;
    }
  }
  
  @media screen and (max-width: 1000px) {
    .main {
      margin-left: 100px;
    }
  }
  
  @media screen and (max-width: 800px) {
    .app {
      flex-direction: column;
      overflow: hidden;
    }
  
    .navbar {
      flex: 1;
    }
  
    .main {
      flex: 1;
      margin-top: 90px;
      margin-left: 0px;
      margin-right: 10px;
    }
  
    .nav-container {
      height: 8vh;
      position: fixed;
      width: 100%;
      z-index: 100;
      background-color: var(--bgSecondary);
    }
  
    .menu-control-container {
      display: block !important;
    }
  
    .ant-menu {
      position: absolute;
      right: 0px;
    }
    .home-title {
      font-size: 1.4rem !important;
    }
    .show-more {
      font-size: 1.3rem !important;
      color: var(--pink);
    }
  }
  
  .coin-detail-container {
    margin: 30px;
  }
  
  .coin-heading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid var(--border);
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 10px;
  }
  
  .coin-heading-container .coin-name {
    font-weight: 900;
    color: var(--pink);
  }
  
  .coin-heading-container p {
    font-size: 1rem;
    opacity: 0.9;
    margin-bottom: 20px;
  }
  
  .stats-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }
  
  .stats-container h2 {
    font-weight: 700;
    font-size: 1.4rem;
    margin-top: 20px;
    color: var(--pink);
  }
  
  .coin-details-heading {
    font-weight: 700 !important;
    margin-top: 20px !important;
    color: var(--pink) !important;
  }
  
  .coin-stats {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
    font-size: 1rem;
    opacity: 0.9;
    padding: 20px;
  }
  
  .coin-stats-name {
    display: flex;
    gap: 10px;
    font-size: 1rem;
  }
  
  .stats {
    font-weight: 800;
  }
  
  .coin-value-statistics-heading p {
    font-size: 1rem;
    opacity: 0.9;
  }
  
  .coin-desc-link {
    display: flex;
    gap: 40px;
    margin-top: 40px;
    padding-top: 20px;
  }
  
  .coin-desc-link h2 {
    font-weight: 700;
    color: var(--pink);
  }
  
  .coin-desc-link p {
    font-size: 1rem;
    opacity: 0.9;
  }
  
  .coin-desc-link a {
    color: var(--pink);
  }
  
  .coin-desc-link h3 {
    font-weight: 700;
  }
  
  .coin-desc {
    flex: 0.5;
  }
  
  .coin-links {
    padding: 0px 20px;
    flex: 0.5;
  }
  
  .coin-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    padding: 20px;
  }
  
  .link-name {
    text-transform: capitalize;
    font-size: 1rem;
  }
  
  .coin-link a {
    color: var(--pink);
    font-weight: 700;
    font-size: 1rem;
  }
  
  .coin-link:hover,
  .coin-stats:hover {
    background-color: var(--bgSecondary);
  }
  
  @media screen and (max-width: 1000px) {
    .stats-container {
      flex-direction: column;
    }
    .coin-desc-link {
      flex-direction: column;
    }
    .stats-container h2 {
      margin-top: 0px;
    }
  }
  
  @media screen and (max-width: 500px) {
    .coin-links {
      padding: 0px;
    }
    .coin-detail-container {
      margin: 0;
    }
  }
  @media screen and (max-width: 500px) {
    .heading {
      margin-top: 20px;
    }
  }
  
  .select-news {
    width: 180px;
  }
  .news-card {
    min-height: 300px !important;
  }
  .news-image-container {
    display: flex !important;
    justify-content: space-between !important;
  }
  .news-title {
    width: 70%;
  }
  
  .news-image-container .img {
    width: 100px;
    height: 100px;
  }
  .news-card p {
    color: black;
    margin: 10px 0px !important;
  }
  .provider-container {
    display: flex;
    justify-content: space-between;
  }
  .provider-name {
    margin-left: 10px;
  }
  
  .chart-header {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    color: #0071bd;
  }
  .chart-title {
    color: var(--pink) !important;
  }
  .price-container {
    display: flex !important;
    gap: 20px !important;
    align-items: center !important;
    flex-wrap: wrap !important;
  }
  .price-change {
    font-weight: 900 !important;
  }
  .current-price {
    margin-top: 0px !important;
    font-weight: 900 !important;
  }
  .home-heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  }
  .show-more {
    margin-top: 0px !important;
  }
  .exchange-image {
    margin: 0px 10px !important;
  }
  .search-crypto {
    margin: 20px auto 30px auto;
    width: 250px;
  }
  .crypto-card-container {
    min-height: 65vh !important;
  }
  .crypto-card {
    min-width: 250px;
    border-radius: 25px;
  }
  .crypto-card .crypto-image {
    width: 35px;
  }
  .select-timeperiod {
    width: 200px !important;
    margin-top: 20px !important;
  }
  
  .footer {
    /* background-color: #001529; */
    background-color: var(--navbar-color);
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
  }
  
  [data-theme="compact"]
    .site-collapse-custom-collapse
    .site-collapse-custom-panel,
  .site-collapse-custom-collapse .site-collapse-custom-panel {
    margin-bottom: 4px;
    overflow: hidden;
    background: #fff;
    border: 0px;
    border-radius: 2px;
  }
  
  .app-name {
    margin-top: 20px;
    color: var(--pink) !important;
  }
`;

export const ligthTheme = {
  body: "#FFFFF",
  text: "#121212",
  searchBar_color: "#D1D5DA",
  searchBar_text: "#FFFFFF",
};

export const darkTheme = {
  body: "#162955",
  text: "#ACB4BB",
  searchBar_color: "#ACB4BB",
  searchBar_text: "#A6B1C2",
};
