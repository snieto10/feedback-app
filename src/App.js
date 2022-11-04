import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import { FaWindows } from "react-icons/fa";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (item) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let feed = feedback.filter((f) => f.id !== item.id);
      setFeedback(feed);
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
