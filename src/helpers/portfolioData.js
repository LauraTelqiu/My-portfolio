import Expense from "../images/expense.png";
import PigGame from "../images/pig-game.png";
import GuessNumber from "../images/guessnum.png";
import FlashCards from "../images/flashCards.jpg";
// import CatFacts from "../images/catFacts.jpg";
import PaintStore from "../images/paintStore.jpg";
import Hater from "../images/hater.jpg";
import TicTacToe from "../images/tic-tac-toe.jpg";
import WhereTo from "../images/whereTo.jpg";
import FriendsApi from "../images/friendsApi.jpg";
import WhereToApi from "../images/whereToApi.jpg";
import RestaurantApi from "../images/restaurant.jpg";
import Cloud from "../images/cloud.png"
import Backroads from "../images/backroads.png"

export const portfolioData = [
  {
    name: "Tour Company Web App",
    image: Backroads,
    summary:
      "Web App featuring a navigation bar that provides access to various sections of the website, including links to social media accounts and displaying a logo.",
    tech: "ReactJs, CSS",
    gitHub: "https://github.com/LauraTelqiu/backroads-app",
    link: "https://backroads-web-app.netlify.app/",
  },

  {
    name: "Cloud Managment Web App",
    image: Cloud,
    summary:
      "Cloud Managment Web App featuring a navigation bar that provides access to various sections of the website",
    tech: "ReactJS, Tailwind CSS",
    gitHub: "https://github.com/LauraTelqiu/cloud-managment-front-end-website",
    link: "https://cloud-managment-web.netlify.app/",
  },
  {
    name: "Expense Tracker",
    image: Expense,
    summary:
      "A web application built with ReactJS that allows users to effectively manage their expenses, featuring functionality for viewing, adding, and filtering by year, all displayed through an interactive and animated user interface that dynamically updates to show costs for the selected years.",
    tech: "JavaScript, React, CSS",
    gitHub: "https://github.com/LauraTelqiu/Expense-Tracker",
    link: "https://expense-tracker-5b555b.netlify.app/",
  },
  {
    name: "Pig Game",
    image: PigGame,
    summary:
      "A dice game where players roll to earn points and lose them on a roll of 1. The game is interactive and has a user-friendly interface. The game logic is implemented using JavaScript and the winner is the one who reaches the highest point..",
    tech: "HTML, CSS, JavaScript",
    gitHub: "https://github.com/LauraTelqiu/pig-game",
    link: "https://piggameplaynow.netlify.app/",
  },
  {
    name: "Guess My Number",
    image: GuessNumber,
    summary:
      "Javascript-based game where the user attempts to guess a randomly generated number through prompts, receiving feedback on whether their guesses are too high or too low, until they correctly guess the number.",
    tech: "JavaScript, CSS, HTML",
    gitHub: "https://github.com/LauraTelqiu/Guess-my-number",
    link: "https://guessnumbernow.netlify.app/",
  },


  // {
  //   name: "Cat Facts",
  //   image: CatFacts,
  //   summary: "Auser interface pattern built with React that utilizes a third-party API to display cat facts",
  //   tech: "ReactJS, REST API, CSS",
  //   gitHub: "https://github.com/LauraTelqiu/React-API-UI-Pattern.git",
  //   link: "https://catland-react.netlify.app/",
  // },

  {
    name: "Paint Store",
    image: PaintStore,
    summary:
      "Color-rich web page for a home paint business. It displays information about using color in a home and color swatches with varying lightness, saturation, and hue.",
    tech: "HTMl, CSS",
    gitHub: "https://github.com/LauraTelqiu/Paint-Store.git",
    link: "https://lauratelqiu.github.io/Paint-Store/",
  },
  {
    name: "CRUD WebApp",
    image: WhereTo,
    summary:
      "Collaborative project creating a web application for displaying top-rated restaurants in NYC with CRUD functionality.",
    tech: "ReactJS, CSS, HTML",
    gitHub: "https://github.com/LauraTelqiu/Restaurant-CRUD-WebApp",
    link: "https://whereny.netlify.app/",
  },

  {
    name: "Hater - Group Project",
    image: Hater,
    summary: "Collaborative project creating a clone of the Twitter platform called Hater.",
    tech: "ReactJs, SQL, Django, REST API, CSS",
    gitHub: "https://github.com/LauraTelqiu/hater.git",
    link: "https://haterip.netlify.app/",
  },
  {
    name: "Flash Cards Game",
    image: FlashCards,
    summary:
      "Flash Card Game to test and enhance understanding of European capital cities.The game randomly presents 10 countries per round to challenge your knowledge.",
    tech: "JavaScript, CSS, HTML",
    gitHub: "https://github.com/LauraTelqiu/Flash-Cards-Game.git",
    link: "https://laee.netlify.app",
  },
  {
    name: "Tic-Tac-Toe Game",
    image: TicTacToe,
    summary:
      "A Javascript-based game in which two players take turns placing either an 'O' or 'X' in a 3x3 grid and the player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game",
    tech: "JavaScript, HTML, CSS",
    gitHub: "https://github.com/LauraTelqiu/tic-tac-toe.git",
    link: "https://ticttactoe.netlify.app",
  },


  {
    name: "REST API",
    image: FriendsApi,
    summary: "RESTful API that delivers CRUD operations for data related to Friends TV show, including production year, duration, director, ratings for all 236 episodes ",
    tech: "ExpressJS, MongoDb",
    gitHub: "https://github.com/LauraTelqiu/friends-tv-show-api.git",
    link: "https://friends-show-api.herokuapp.com/api/",
  },
  {
    name: "JSON API",
    image: WhereToApi,
    summary:
      "JSON API providing information on highly sought-after dining, drinking and activity venues in New York City.",
    tech: "ExpressJS, MongoDB JavaScript, NodeJS, REST API ",
    gitHub: "https://github.com/LauraTelqiu/backend_api_restaurant",
    link: "https://restaurant-backend-appication.herokuapp.com/api/",
  },
  {
    name: "Restaurant Categories API",
    image: RestaurantApi,
    summary: " RESTful API that delivers information on various categories of restaurants.",
    tech: "Python, Django",
    gitHub: "https://github.com/LauraTelqiu/API-using-Python-Flask-and-SQL.git",
    link: "",
  },
];
export default portfolioData;
