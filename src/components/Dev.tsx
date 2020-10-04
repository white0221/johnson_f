import React from 'react';
import axios from 'axios';

const Dev = () => {
  const handleClick = () => {
    console.log('click');
    axios.get('http://localhost:3000')
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <div>
      <h1>Development</h1>
      <button onClick={handleClick}>hoge</button>
      <div>
        wip. ここをaxiosの値に頑張って書き換える
      </div>
    </div>
  );
}

export default Dev;
