const SearchResults = ({ results }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">🔍 Search Results</h1>
      <ul className="mt-4">
        {results.length > 0 ? (
          results.map((result, index) => (
            <li key={index} className="p-2 border rounded my-2">
              ❌ {result}
            </li>
          ))
        ) : (
          <p>No results found. Try Googling it instead.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;
