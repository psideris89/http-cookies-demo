import './App.css';

function App() {
  const createCookie = (flavor) => (document.cookie = `fe-flavor=${flavor}`);
  const printCookies = () => console.log(document.cookie);

  return (
    <div className='App'>
      <h2>Cookies Demo</h2>
      <section>
        <p>Front-end generated cookies</p>
        <button onClick={() => createCookie('vanilla')}>
          Create vanilla cookie
        </button>
        <button onClick={() => createCookie('chocolate')}>
          Create chocolate cookie
        </button>
      </section>
      <br />
      <section>
        <p>Back-end generated cookies</p>
        <button onClick={() => createCookie('vanilla')}>
          Create vanilla cookie
        </button>
        <button onClick={() => createCookie('chocolate')}>
          Create chocolate cookie
        </button>
      </section>
      <br />
      <section>
        <p>Debug</p>
        <button onClick={printCookies}>Print cookies</button>
      </section>
    </div>
  );
}

export default App;
