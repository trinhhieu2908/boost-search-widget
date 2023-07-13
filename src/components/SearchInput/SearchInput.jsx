
const SearchInput = ({ className, id, ...props }) => {
  return (
    <div id={id} className={`container ${className}`}>
      <input type="text" {...props} />
      <i className="fa fa-search fa-lg"></i>
    </div>
  );
};

export default SearchInput;
