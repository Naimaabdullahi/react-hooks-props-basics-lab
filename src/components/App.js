import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";  // Ensure you import Links if needed.

const user = {
  name: 'Liza',
  city: 'New York',
  bio: 'I made this!',
  color: 'firebrick',
  links: {
    github: 'https://github.com/liza',
    linkedin: 'https://www.linkedin.com/in/liza/'
  }
};

function App() {
  return (
    <div>
      <NavBar />
      <Home 
        name={user.name}
        city={user.city}
        color={user.color}
      />
      <About
        bio={user.bio}
        links={user.links}  // Pass the entire links object to About
      />
    </div>
  );
}

export default App;
  // Export the entire user object, if needed elsewhere
