import Expense from "../images/expense.png";
import PigGame from "../images/pig-game.png";
import GuessNumber from "../images/guessnum.png";
import FlashCards from "../images/flashCards.jpg";
import CatFacts from "../images/catFacts.jpg";
import PaintStore from "../images/paintStore.jpg";
import Hater from "../images/hater.jpg";
import TicTacToe from "../images/tic-tac-toe.jpg";
import WhereTo from "../images/whereTo.jpg";
import FriendsApi from "../images/friendsApi.jpg";
import WhereToApi from "../images/whereToApi.jpg";
import RestaurantApi from "../images/restaurant.jpg";

export const portfolioData = [
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
      "A number-guessing game where a player thinks of a number and the computer attempts to guess it through a series of prompts. The player gives feedback to the computer if the guess is too high or too low, and the computer uses this feedback to adjust and make more accurate guesses. The game ends when the computer correctly guesses the player's number.",
    tech: "JavaScript, CSS, HTML",
    gitHub: "https://github.com/LauraTelqiu/Guess-my-number",
    link: "https://guessnumbernow.netlify.app/",
  },

  {
    name: "Flash Cards Game",
    image: FlashCards,
    summary:
      "Flash Card Game to test and enhance understanding of European capital cities.The game randomly presents 10 countries per round to challenge your knowledge.",
    tech: "React, Node.js, MongoDB",
    gitHub: "https://github.com/LauraTelqiu/Flash-Cards-Game.git",
    link: "https://laee.netlify.app",
  },
  {
    name: "Cat Facts",
    image: CatFacts,
    summary: "Designing a user interface pattern for displaying cat facts utilizing a third-party API. ",
    tech: "JavaScript, React, REST API, HTML, CSS",
    gitHub: "https://github.com/LauraTelqiu/React-API-UI-Pattern.git",
    link: "https://catland-react.netlify.app/",
  },

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
    name: "Hater - Group Project",
    image: Hater,
    summary: "Collaborative project creating a clone of the Twitter platform called Hater.",
    tech: "JavaScript, SQL, Django, REST API, CSS",
    gitHub: "https://github.com/LauraTelqiu/hater.git",
    link: "https://haterip.netlify.app/",
  },
  {
    name: "Tic-Tac-Toe Game",
    image: TicTacToe,
    summary:
      "A game in which two players take turns in drawing either an ` O' or an ` X' in one square of a grid consisting of nine squares.",
    tech: "JavaScript, HTML, CSS",
    gitHub: "https://github.com/LauraTelqiu/tic-tac-toe.git",
    link: "https://ticttactoe.netlify.app",
  },
  {
    name: "CRUD WebApp",
    image: WhereTo,
    summary:
      "Collaborative project creating a web application for displaying top-rated restaurants in NYC with CRUD functionality.",
    tech: "JavaScript, React, HTML, CSS",
    gitHub: "https://github.com/LauraTelqiu/Restaurant-CRUD-WebApp",
    link: "https://whereny.netlify.app/",
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
