// import React, { Component } from "react";
// import { Router } from "@reach/router";
// import Question from "./Question";
// import Questions from "./Questions";
// import AskQuestion from "./AskQuestion";

// class App extends Component {
//   // API url from the file '.env' OR the file '.env.development'.
//   // The first file is only used in production.
//   API_URL = process.env.REACT_APP_API_URL;

//   constructor(props) {
//     super(props);
//     this.state = {
//       questions: [],
//     };
//   }

//   componentDidMount() {
//     // Get everything from the API
//     this.getQuestions().then(() => console.log("Questions gotten!"));
//   }

//   async getQuestions() {
//     let url = `${this.API_URL}/kittens`; // URL of the API.
//     let result = await fetch(url); // Get the data
//     let json = await result.json(); // Turn it into json
//     return this.setState({
//       // Set it in the state
//       questions: json,
//     });
//   }

//   getQuestion(id) {
//     // Find the relevant kitten by id
//     return this.state.questions.find((q) => q._id === id);
//   }

//   // async postAnswer(id, text) {
//   //     console.log("postAnswer", id, text);
//   //     const url = `http://localhost:7007/api/kittens/${id}/hobbies`;

//   //     const response = await fetch(url, {
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       method: "POST",
//   //       body: JSON.stringify({
//   //         hobby: text,
//   //       }),
//   //     });
//   //     const data = await response.json();
//   //     console.log("Printing the response:", data);
//   //   }

//   async askQuestion(text) {
//     console.log("askQuestion", text);
//     const url = `http://localhost:7007/questions`;

//     const response = await fetch(url, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//       body: JSON.stringify({
//         content: text,
//       }),
//     });
//     const data = await response.json();
//     console.log("Printing the response:", data);
//   }

//   render() {
//     return (
//       <>
//         <AskQuestion
//           path="/kittens"
//           askQuestion={(text) => this.askQuestion(text)}
//         />
//         <Router>
//           <Question
//             path="/kitten/:id"
//             getQuestion={(id) => this.getQuestion(id)}
//             postAnswer={(id, text) => this.postAnswer(id, text)}
//           />
//           <Questions path="/" questions={this.state.questions} />
//         </Router>
//       </>
//     );
//   }
// }

// export default App;
