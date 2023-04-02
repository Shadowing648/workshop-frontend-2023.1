import {Link} from 'react-router-dom'
import React from 'react'
import styles from "./home.module.css"
function Home() {
    return (
        <>
            <header className={styles.header}>
                <img src='https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com' className= {styles.logo}/>
                <div className={styles.btngp}>
                <Link to="./pages/Character"><button className={styles.btn}> Personagens</button></Link>
                <button className={styles.btn}>Episódios</button>
                </div>
                  
                
            </header>

            <div className={styles.info}>
                <img src="https://wallpapers.com/images/featured/cool-rick-and-morty-2qy1xyshw0h9uxk4.jpg" alt="Rick and Morty" />
                
                <p> <h1>Resumo da obra</h1> "Rick and Morty" é uma série animada de televisão para adultos que segue as aventuras de um cientista maluco, Rick, e seu neto, Morty, enquanto viajam por universos paralelos. A série é conhecida por seu humor negro, temas sci-fi e histórias surreais. Ao longo da série, os personagens enfrentam desafios interdimensionais, problemas familiares e lidam com vários alienígenas. A relação entre Rick e Morty é complexa, com Rick frequentemente colocando seu neto em perigo enquanto tenta proteger a si mesmo e a sua família. A série é cheia de referências culturais, e muitas vezes satiriza a cultura popular e a ficção científica. "Rick and Morty" foi criado por Justin Roiland e Dan Harmon e estreou em 2013, tornando-se rapidamente um sucesso de público e crítica.</p>
            </div>
        </>
    )
}

export default Home