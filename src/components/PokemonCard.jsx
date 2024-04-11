import PropTypes from "prop-types";

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
    );
}
PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired
    })
}

export default PokemonCard;