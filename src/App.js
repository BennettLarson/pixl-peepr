import Pixls from './pixls.json';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
// import axios from 'axios';

function App() {
  const [currentId, setCurrentId] = useState(0);
  var maxId = 8618


  // useEffect(async () => {
  //   const result = await axios(
  //     'https://hn.algolia.com/api/v1/search?query=redux',
  //   );
 
  //   setData(result.data);
  // });

  // var openSea = "https://opensea.io/assets/0x082903f4e94c5e10a2b116a4284940a36afaed63/" + currentId;

  function back() {
    if (currentId === 0) {
      setCurrentId(maxId);
    } else {
      setCurrentId(currentId - 1);
    }
  }

  function next() {
    if (currentId === maxId) {
      setCurrentId(0);
    } else {
      setCurrentId(currentId + 1);
    }
  }

  function search(e) {
    e.preventDefault();
    setCurrentId(Number(e.target.elements.tokenId.value));
  }

  return (
    <div className="App">
      <h1 style={{color: 'white', textAlign: 'center', margin: 0}}>NOTE: THESE ARE NOT THE FINAL PIXLS ASSIGNED</h1>
      <header className="App-header">
        <form method="post" onSubmit={search}>
          <label>
            <input type="number" name="tokenId" placeholder="Enter token ID" />
          </label>
          <input type="submit" value="Search" />
        </form>
        <div className="leftArrow">
          <Button onClick={back}>Back</Button>
        </div>
        <div>
          <div>
            <p style={{margin: 0, display: 'inline-block'}}>#{currentId}</p>
            {/* <a className="openSeaLink" href={{openSea}}>View on OpenSea.io</a> */}
            {/* <p>{Pixls[currentId].ipfsUrl}</p> */}
          </div>
          <img src={Pixls[currentId].ipfsUrl} className="App-logo" alt="logo" />
        </div>
        <div className="rightArrow">
          <Button onClick={next}>Next</Button>
        </div>
      </header>
    </div>
  );
}

export default App;