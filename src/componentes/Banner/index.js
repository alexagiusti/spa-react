import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hey Guys!
                </h1>
                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! <br/>Eu me chamo Alexânia Giusti, sou UX/UI Designer e aspirante a Front-end developer, criei essa SPA em React.js, com o intuito de praticar e testar meus conhecimentos,
                também deixei registrado na página alguns artigos que escrevi sobre tecnologia, fique a vontade para explorar. Até mais...
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de Alexânia"
                />
            </div>

        </div>
    )
}