import { useState, useEffect } from 'react';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = 'ronnison';

  useEffect( () => {
    const buscaDados = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUsuario(data);
      } catch (error) {
        console.log('Erro ao buscar perfil:', error);
      } finally {
        setLoading(false);
      }
    }
    buscaDados();
  }, []);

  if (loading) {
    return <div><h2>Carregando...</h2></div>;
  }
  if (!usuario) {
    return <div><h2>Usuário não encontrado</h2></div>;
  }
  
  const {name, bio, avatar_url, public_repos, followers, following} = usuario;

  return (
    <div style={{border: '1px solid #CCC', padding: '20px', borderRadius: '10px'}}>
      <h1>{usuario.name}</h1>
      <img src={usuario.avatar_url} alt={name} style={{width: "200px", borderRadius: '50%' }}/>
      <p>Repositórios públicos: {usuario.public_repos}</p>
      <p>Seguidores: {usuario.followers}</p>
      <p>Seguindo: {usuario.following}</p>
    </div>
  );
}
export default App;