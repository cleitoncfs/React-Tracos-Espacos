import styles from "./Location.module.css";
import { BiMap } from "react-icons/bi";

export default function Location() {
    return (
        <section className={styles.location}>
            <div className={styles.address}>
                <BiMap />
                <div className={styles.addressDetails}>
                    <p>Estr. de Leiria nº 212, Marinha Grande.</p>
                    <p>Contacto: (+351) 244 577 700</p>
                    <p>Atendimento: 08h às 13h e 14h às 18h</p>
                </div>
            </div>

            <div className={styles.aboutLocation}>
                <h3>Local de destaque</h3>
                <p>
                    Nosso escritório está localizado no centro da Marinha
                    Grande, em um local prestigiado pelos amantes de
                    <strong>Design de Interiores</strong>, onde temos vários
                    exemplos de ambientes, internos e externos.
                </p>
            </div>

            <div className={styles.map}>
                <iframe
                    title="Localização Traços & Espaços"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.6758036925066!2d-8.944266123902928!3d39.74700641976465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2279734c87d2f1%3A0x948347456891b0d2!2sEstr.%20de%20Leiria%2C%20243%2C%20Marinha%20Grande%2C%20Portugal!5e0!3m2!1sen!2spt!4v1690223178327!5m2!1sen!2spt"
                ></iframe>
            </div>
        </section>
    );
}
