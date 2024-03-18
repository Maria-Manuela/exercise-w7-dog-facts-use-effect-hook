// DogFact Component
export const DogFact = ({ fact }) => {
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop
  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return (
    <div>
      <h1>Dogs Fact🐶</h1>
     {fact.map(fact => (
  <p key={fact.id}>{fact.attributes.body}</p>
  ))}
    </div>
  );
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
