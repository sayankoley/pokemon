import { useEffect, useState } from "react";
import { Pokemoncard } from "./components/Pokemoncard";

export const Pokemon = () => {
    const [pokdata, setPokdata] = useState([]);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true); // for initial fetch
    const [isTyping, setIsTyping] = useState(false);  // for debounce loading

    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const pokemondata = async () => {
        try {
            const data = await fetch(API);
            const res = await data.json();

            const pokemonur = res.results.map(async (cur) => {
                const dataur = await fetch(cur.url);
                const dares = await dataur.json();
                return dares;
            });

            const allPokemon = await Promise.all(pokemonur);
            setPokdata(allPokemon);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        pokemondata();
    }, []);

    useEffect(() => {
        setIsTyping(true); // Start debounce loading

        const timer = setTimeout(() => {
            setDebouncedSearch(search);
            setIsTyping(false); // End debounce loading
        }, 2000); // 1 second debounce

        return () => clearTimeout(timer);
    }, [search]);

    const searchData = (e) => {
        setSearch(e.target.value);
    };

    const searchPoke = pokdata.filter((curpok) =>
        debouncedSearch
            ? curpok.name.toLowerCase().includes(debouncedSearch.toLowerCase())
            : true
    );

    return (
        <section className="container">
            <header>
                <h1>Let's Catch Pokémon</h1>
            </header>

            <div className="pokemon-search">
                <input
                    type="text"
                    value={search}
                    placeholder="Search Pokemon"
                    onChange={searchData}
                />
            </div>

            {/* API loading */}
            {isLoading && <div className="loader"></div>}

            {/* Debounce search loading */}
            {(!isLoading && isTyping) && <div className="loader"></div>}
              {console.log(searchPoke)}
            {/* Cards */}
            {!isLoading && !isTyping && (
                <ul className="cards">
                    {searchPoke.length === 0 ? (
                        <p>No Pokémon Match</p>
                    ) : (
                        searchPoke.map((cur) => (
                            <Pokemoncard key={cur.id} cur={cur} />
                        ))
                    )}
                </ul>
            )}
        </section>
    );
};
