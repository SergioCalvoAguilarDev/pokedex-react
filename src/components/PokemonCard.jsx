export function PokemonCard({ pokemon }) {
  const formatearTipos = (tiposApi) => {
    return tiposApi.map((t) => t.type.name).join(', ');
  };

  return (
    <div className="carta" id="cartaPokemon">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="sprite"
      />
      <div className="datos">
        <h2>
          #{pokemon.id} {pokemon.name.toUpperCase()}
        </h2>
        <p className="altura">Height: {(pokemon.height / 10).toFixed(1)} m</p>
        <p className="peso">Weight: {(pokemon.weight / 10).toFixed(1)} kg</p>
        <p className="tipo">Types: {formatearTipos(pokemon.types)}</p>
      </div>
    </div>
  );
}