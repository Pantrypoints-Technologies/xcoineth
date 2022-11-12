const Search = () => {
    return (
        <header>
            <h2 className="header__title">Search Funds</h2>
            <input
                type="text"
                className="header__search"
                placeholder="Enter Fund Name, Agent, or city, or ZIP code"
            />
        </header>
    );
}

export default Search;