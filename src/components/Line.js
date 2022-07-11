const Line = ({ value = {} }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value.symbol);
  };
  return (
    <div className="result-line" onClick={copyToClipboard}>
      <span className="symbol">{value.symbol}</span>
      <p className="title">{value.title}</p>
    </div>
  );
};

export default Line;
