import { useState } from 'react'
import camera from './img/camera.png'  
import { PokemonCard } from './components/PokemonCard'
import './App.css'

function Pokedex() {
   const [searchTerm, setSearchTerm] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const fetchPokemon = async (nombre) => {
      if (!nombre.trim()) {
        setPokemon(null);
        setError(null);
        return;
      }
  
      setLoading(true);
      setError(null);
      setPokemon(null);
  
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase().trim()}`
        );
  
        if (response.status === 404) {
          setError('Pokémon no encontrado.');
          setLoading(false);
          return;
        }
  
        if (!response.ok) {
          setError(`Error al consultar la API (HTTP ${response.status}).`);
          setLoading(false);
          return;
        }
  
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError('Error de conexión. Intenta de nuevo.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchPokemon(searchTerm);
    };
  
    const formatearTipos = (tiposApi) => {
      return tiposApi.map((t) => t.type.name).join(', ');
    };
  
    return (
      <div className="pokedex-container">
        <div className="cabecera">
          <img className="camera" src={camera} alt="camera" />
          <h1>Pokèdex API REACT</h1>
        </div>
  
        <form onSubmit={handleSubmit} className="search-form">
          <p>Introduce el nombre o el ID del Pokémon que quieras buscar:</p>
          <div className="input-group">
            <input
              type="text"
              placeholder="Nombre o ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Buscando...' : 'Buscar'}
            </button>
          </div>
        </form>
  
        {error && <p className="error">{error}</p>}
  
        {loading && <p className="loading">Cargando...</p>}
  
        {pokemon && (
          <PokemonCard pokemon={pokemon} />
        )}
      </div>
    );
}

export default Pokedex
