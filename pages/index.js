import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { CSSReset } from "../src/components/CSSReset";

function HomePage() {
  const mensagem = "Welcome!";
  const estilosDaHomePage = {
  };
  const [valorFiltro, setValorFiltro] = React.useState("");

  return (
    <>
      
      <CSSReset />
      <div>
        {/* PropDrilling */}
        <Menu valorFiltro={valorFiltro} setValorFiltro={setValorFiltro} />
        <Header />
        <Timeline searchValue={valorFiltro} playlists={config.playlists} favoritos={config.favoritos}/>
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  .banner {
    margin-top: 50nppx;
    width: 100vw;
    height: 300px;
    object-fit: cover;
  }

  .user-info img {
    margin-top: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: -20px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  margin-top: 56px;
  width: auto;
  height: 230px;
  background-image: url(${config.cover});
  background-size: cover;
  background-position: center;
`;

const Header = (props) =>{
  return (
    <StyledHeader>
      {/* <img src={config.cover} className="banner"></img> */}
      <StyledBanner />
      <section className="user-info">
        <img className="foto-perfil" src={`https://github.com/${config.github}.png`} alt="foto de perfil"/>
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

const Timeline = ({ searchValue, ...props }) => {
  
  const playlistName = Object.keys(props.playlists);
  const favoritosName = Object.keys(props.favoritos);

  return (
    <StyledTimeline>
      {playlistName.map((playlistName) => {
        const videos = props.playlists[playlistName];
      
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb}></img>
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
      {favoritosName.map((favoritosName) => {
                const favoriteInfluences = props.favoritos[favoritosName]
                return (
                    <section key={favoritosName}>
                        <h2>{favoritosName}</h2>
                        <div className="favorite-card">
                            {favoriteInfluences.map((favoriteInfluences) => {
                                return (
                                    <a key={favoriteInfluences.perfilgithub} href={`https://github.com/${favoriteInfluences.perfilgithub}`}>
                                        <img className="photo-alurafavoritos" src={`https://github.com/${favoriteInfluences.perfilgithub}.png`} />
                                        <span>{`@${favoriteInfluences.perfilgithub}`}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
    </StyledTimeline>
  );
}
