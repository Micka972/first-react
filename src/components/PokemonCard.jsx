function PokemonCard({ pokemon }) {

    return (
        <article>
            <p>{pokemon.name}</p>
            {pokemon.imgSrc ? (
                <p>
                    <img src={pokemon.imgSrc} alt={pokemon.name} />
                </p>
            ) : <p>"???"</p>}
        </article>
    )
}


export default PokemonCard