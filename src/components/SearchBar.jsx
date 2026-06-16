const SearchBar = () => {
  return (
    <div className="mt-8 flex bg-white rounded-xl shadow-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search subject..."
        className="flex-1 px-5 py-4 outline-none"
      />

      <button className="bg-indigo-600 text-white px-8">Search</button>
    </div>
  );
};

export default SearchBar;
