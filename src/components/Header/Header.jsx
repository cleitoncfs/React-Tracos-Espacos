import { useEffect } from "react";
import styles from "./Header.module.css";

function useParallaxEffect() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(
                `.${styles.eventSubscription}`
            );
            const scrollPosition = window.scrollY;
            if (header) {
                header.style.backgroundPosition = `center ${
                    scrollPosition * 0.5
                }px`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
}

export default function Header() {
    useParallaxEffect();

    return (
        <header className={styles.eventSubscription}>
            <div className={styles.disclaimer}>
                <h2>Traços & Espaços</h2>
                <p className={styles.aboutEvent}>
                    Somos especialistas em revolucionar o seu ambiente com
                    criatividade
                </p>
                <p>Visite o nosso Showroom no Leiria Shopping:</p>
                <p className={styles.eventDate}>
                    Domingo, 20 de abril, a partir das 14h
                </p>
            </div>
            <div className={styles.subscriptionForm}>
                <p>
                    Preencha o formulário para receber o contacto de um dos
                    nossos consultores.
                </p>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu melhor e-mail"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Telefone</label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Número de Whatsapp"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="interest">Principal interesse</label>
                        <select name="interest" id="interest" defaultValue="">
                            <option value="" disabled>
                                Selecione
                            </option>
                            <option value="apartment">Apartamentos</option>
                            <option value="house">Casas</option>
                            <option value="garden">Jardins</option>
                            <option value="other">Outro</option>
                        </select>
                    </div>
                    <input
                        type="submit"
                        className={styles.btn}
                        value="Solicitar contacto"
                    />
                </form>
            </div>
        </header>
    );
}
