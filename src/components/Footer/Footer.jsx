import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h3>Traços e Espaços</h3>
            <p>A evolução da decoração de interiores</p>
            <p>
                <span>Contacte-nos por e-mail:</span> contacto@tracoseespacos.pt
            </p>
            <p>
                <span>Ou pelo telefone:</span> (+351) 244 577 700
            </p>
            <div className={styles.socialMedia}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
            </div>
            <p>© 2025 - Todos os direitos reservados.</p>
        </footer>
    );
}
