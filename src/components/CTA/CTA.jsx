import styles from "./CTA.module.css";

export default function CTA() {
    return (
        <section className={styles.cta}>
            <h3>Gostou? Então faça-nos uma visita:</h3>
            <button className={styles.btn}>Solicitar Agendamento</button>
        </section>
    );
}
