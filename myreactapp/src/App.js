import logo from "./img/logo.svg"
import mockup from "./img/illustration-mockups.svg"
import './App.css';

function App() {
  return (
    <>

      <header>
        <img src={logo} alt="huddle logo"/>
      </header>

      <main>
        <img src={mockup} alt="mockup illustration"/>
        <div className="content">
          <h2>Build the community your fans will love</h2>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so
            does your audience. Create connections with your users as you engage in genuine discussion.
          </p>
          <button>Register</button>
        </div>
      </main>

      <footer>
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      </footer>
     
    </>
  );
}

export default App;
