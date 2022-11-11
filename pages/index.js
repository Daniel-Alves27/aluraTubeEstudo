import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    //console.log(config.playlists);
    //const estiloDaHomePage = { background: "red" };
    
    const valorDoFiltro = "papagaio";

    return (
        <>
            <CSSReset/>
            <div>
                <Menu />
                <Header />
                <TimeLine searchValue= {valorDoFiltro} playlists={config.playlists}>
                    conteudo
                </TimeLine>
            </div>
        </>
    )
}

export default HomePage

/*function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}*/

const StyledHeader = styled.div`
    img {
        margin-top: 50px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        align-items: flex-end;
    }
`;
function Header() {
    return (
        <StyledHeader>

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine(searchValue, ...propriedade) {
    console.log("Dentro do componente", propriedade);

    const playlistNames = Object.keys(propriedade.playlists);


    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedade.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                return video.title.includes(searchValue)
                            
                            }).map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}