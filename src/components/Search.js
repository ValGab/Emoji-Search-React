const Search = ({ value, setValue }) => {
  const handleChange = (element) => {
    const value = element.target.value;
    setValue(value);
  };

  const noRefresh = (event) => {
    event.preventDefault();
  };

  return (
    <header>
      <h1>😎 EmojiSearch 😎</h1>
      <form onSubmit={noRefresh}>
        <input
          type="text"
          placeholder="What emoji are you looking for ?"
          value={value}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Search;
