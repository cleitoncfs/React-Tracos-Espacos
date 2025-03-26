import styles from "./Benefits.module.css";

export default function Benefits() {
    const benefitsData = [
        {
            id: 1,
            image: "sqr-1.jpg",
            text: "Alguma coisa muito legal, que vai fazer a diferença na vida do cliente.",
        },
        {
            id: 2,
            image: "sqr-2.jpg",
            text: "Alguma coisa muito legal, que vai fazer a diferença na vida do cliente.",
        },
        {
            id: 3,
            image: "sqr-3.jpg",
            text: "Alguma coisa muito legal, que vai fazer a diferença na vida do cliente.",
        },
    ];

    return (
        <section className={styles.keyBenefits}>
            <h2>Veja alguns dos nossos trabalhos:</h2>
            <div className={styles.benefits}>
                {benefitsData.map((benefit) => (
                    <div key={benefit.id} className={styles.benefit}>
                        <div
                            className={styles.benefitImg}
                            style={{
                                backgroundImage: `url(/assets/images/${benefit.image})`,
                            }}
                        ></div>
                        <p>{benefit.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
