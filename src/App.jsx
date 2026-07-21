function Header() {
  return <h1>AI Resume Analyzer</h1>;
}

function Footer() {
  return <p>Built by Rushabh • Day 1 of Mission X</p>;
}

function First()
{
  return (
    <button onClick={()=>alert("Hello")}>
      click here
    </button>
  )
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to the AI Resume Analyzer project</p>
      <First />
      <Footer />
    </div>
  );
}

export default App;