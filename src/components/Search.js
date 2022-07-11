const Search = ({ value, setValue }) => {
  const handleChange = (element) => {
    const value = element.target.value;
    setValue(value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
