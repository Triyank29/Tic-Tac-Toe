// You find the finished solution code at the end of this text.

// In the provided solution, the first step is to listen to value changes on the <textarea> and <input> elements.

// Therefore, two event handling functions are added to the App component: handleChangeName and handleChangeFeedback.

// These functions are then "connected" to the respective input controls via the built-in onChange prop:

// function App() {
 
//   function handleChangeName(event) {
 
//   }
 
//   function handleChangeFeedback(event) {
 
//   }
 
//   return (
//     <>
//       <section id="feedback">
//         <h2>Please share some feedback</h2>
//         <p>
//           <label>Your Feedback</label>
//           <textarea onChange={handleChangeFeedback} />
//         </p>
//         <p>
//           <label>Your Name</label>
//           <input type="text" onChange={handleChangeName} />
//         </p>
//       </section>
//       <section id="draft">
//         <h2>Your feedback</h2>
//         <Review />
//         <p>
//           <button>Save</button>
//         </p>
//       </section>
//     </>
//   );
// }
// To store the entered values and update the App component function whenever those values change, two state slices are added to the App component. Alternatively, you could also go for a single, combined state object.

// Those state values are then set to the entered text from inside the event handling functions:

// function App() {
//   const [studentName, setStudentName] = useState('');
//   const [feedback, setFeedback] = useState('');
 
//   function handleChangeName(event) {
//     setStudentName(event.target.value);
//   }
 
//   function handleChangeFeedback(event) {
//     setFeedback(event.target.value);
//   }
 
//   return ...
// }
// Keep in mind that the event object is generated & provided automatically by React. event.target refers to the input control, event.target.value therefore contains the value provided by the user.

// To fully implement two-way-binding, those stored values must now be "fed back" into the input controls by setting their value props to the respective state values:

// function App() {
//   const [studentName, setStudentName] = useState('');
//   const [feedback, setFeedback] = useState('');
 
//   function handleChangeName(event) {
//     setStudentName(event.target.value);
//   }
 
//   function handleChangeFeedback(event) {
//     setFeedback(event.target.value);
//   }
 
//   return (
//     <>
//       <section id="feedback">
//         <h2>Please share some feedback</h2>
//         <p>
//           <label>Your Feedback</label>
//           <textarea onChange={handleChangeFeedback} value={feedback} />
//         </p>
//         <p>
//           <label>Your Name</label>
//           <input type="text" onChange={handleChangeName} value={studentName} />
//         </p>
//       </section>
//       ...
//     </>
//   );
// }
// To complete the task, those state values are then also passed to the Review component by setting its feedback and student props:

// import Review from './Review';
 
// function App() {
//   const [studentName, setStudentName] = useState('');
//   const [feedback, setFeedback] = useState('');
 
//   function handleChangeName(event) {
//     setStudentName(event.target.value);
//   }
 
//   function handleChangeFeedback(event) {
//     setFeedback(event.target.value);
//   }
 
//   return (
//     <>
//       <section id="feedback">
//         <h2>Please share some feedback</h2>
//         <p>
//           <label>Your Feedback</label>
//           <textarea onChange={handleChangeFeedback} value={feedback} />
//         </p>
//         <p>
//           <label>Your Name</label>
//           <input type="text" onChange={handleChangeName} value={studentName} />
//         </p>
//       </section>
//       <section id="draft">
//         <h2>Your feedback</h2>
 
//         <Review feedback={feedback} student={studentName} />
 
//         <p>
//           <button>Save</button>
//         </p>
//       </section>
//     </>
//   );
// }

// output ni list ne dynamic banavva mate key no use thy che.