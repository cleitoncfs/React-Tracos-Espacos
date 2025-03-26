import styles from "./Details.module.css";

export default function Details() {
    const detailsData = [
        {
            id: 1,
            image: "hrz-3.jpg",
            title: "Conheça ambientes decorados que vão te encantar...",
            items: [],
            reverse: false,
        },
        {
            id: 2,
            image: "hrz-4.jpg",
            title: "Detalhes",
            items: [
                "Posicionamento",
                "Aproveitamento de espaço",
                "Combinação de cores",
                "Organização",
                "E muito mais...",
            ],
            reverse: true,
        },
        {
            id: 3,
            image: "hrz-5.jpg",
            title: "Objetos",
            items: [
                "Cadeiras",
                "Mesas",
                "Espelhos",
                "Plantas",
                "Cortinas",
                "E muito mais...",
            ],
            reverse: false,
        },
    ];

    return (
        <section id="details" className={styles.detailsContainer}>
            {detailsData.map((detail) => (
                <div
                    key={detail.id}
                    className={`${styles.detail} ${
                        detail.reverse ? styles.reverse : ""
                    }`}
                >
                    <img
                        src={`/src/assets/images/${detail.image}`}
                        alt={detail.title}
                    />
                    <div className={styles.detailDescription}>
                        <h3>{detail.title}</h3>
                        {detail.items.length > 0 && (
                            <ul>
                                {detail.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}
