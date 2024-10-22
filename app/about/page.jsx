// pages/about.js
import Navbar from "../components/Navbar/Navbar"; // Import the Navbar component

export default function About() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar */}
      <h1 className="pt-16">Hello, me</h1>
      <p>This is the about page.</p>
    </div>
  );
}
