import React, { useState } from 'react';
import './App.css';

const VotingForm = () => {
  const [options, setOptions] = useState([
    { id: 1, label: 'Option 1', votes: 0 },
    { id: 2, label: 'Option 2', votes: 0 },
    { id: 3, label: 'Option 3', votes: 0 },
  ]);

  const handleVote = (id) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, votes: option.votes + 1 } : option
      )
    );
  };

  return (
    <div>
      <h2>Vote for your favorite option:</h2>
      <form>
        {options.map((option) => (
          <div key={option.id}>
            <label>
              <input
                type="radio"
                name="votingOption"
                value={option.id}
                onChange={() => handleVote(option.id)}
              />
              {option.label}
            </label>
          </div>
        ))}
      </form>
      <h2>Results:</h2>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            {option.label}: {option.votes} votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VotingForm;