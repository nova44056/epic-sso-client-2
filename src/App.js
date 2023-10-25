import "./App.css";

function App() {
  return (
    <div className="App">
      <a
        href={`https://sso.epics.weii.io/login?redirect_url=${encodeURI(
          "https://epics-sso-client-2.vercel.app/"
        )}`}
      >
        Click here to login
      </a>
    </div>
  );
}

export default App;
