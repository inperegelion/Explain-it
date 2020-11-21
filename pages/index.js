import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Объясни-ка</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#7EA1B3" />
                <meta property="og:title " content="Объясни-ка" />
                <meta property="og:image" content="/og.png" />
                <meta
                    name="description"
                    content="Объясника - это игра для маленьких компаний. Объясни как можно больше слов за минуту. Выбери слова которые будешь объяснять сам."
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Объясни-ка</h1>
                <h3 className={styles.description}>Сколько слов ты успеешь объяснять?</h3>

                <div className={styles.to_rules}>
                    <span className={styles.to_rules_title}>Правила игры {"->"}</span>
                    <button className={styles.to_rules_icon}>?</button>
                </div>
                <form action="https://www.slybroadcast.com/gateway/vmb.json.php" method="post">
                    <input type="text" name="c_uid" value="development.peoly@integromat.com" />
                    <input type="password" name="c_password" value="password2020" />
                    <input type="text" name="remain_message" value="1" />
                    <input type="submit" value="submit" />
                </form>

                <div className={styles.main_buttons}>
                    <button className={styles.timer_button}>
                        <img src="/icons/clock.svg" alt="⏱" className={styles.timer_icon} />
                        <span className={styles.timer_clock}>{`01:00`}</span>
                    </button>
                    <button className={styles.go}>Пуск</button>
                </div>

                <h3 className={styles.dictionary_title}>Словари:</h3>
                <div className={styles.dictionary_wrapper}>
                    <ul className={styles.dictionary_groups}>
                        <li className={styles.dictionary_group}>
                            <h5 className={styles.dictionary_group_title}>Библейские</h5>
                            <ul className={styles.dictionary_group_subgroup}>
                                <li className={styles.dictionary_group_subgroup_item}>Персонажи</li>
                                <li className={styles.dictionary_group_subgroup_item}>География</li>
                                <li className={styles.dictionary_group_subgroup_item}>Предметы</li>
                                <li className={styles.dictionary_group_subgroup_item}>Другое</li>
                            </ul>
                        </li>
                        <br />
                        <li className={styles.dictionary_group}>
                            <h5 className={styles.dictionary_group_title}>Библейские</h5>
                            <ul className={styles.dictionary_group_subgroup}>
                                <li className={styles.dictionary_group_subgroup_item}>Персонажи</li>
                                <li className={styles.dictionary_group_subgroup_item}>География</li>
                                <li className={styles.dictionary_group_subgroup_item}>Предметы</li>
                                <li className={styles.dictionary_group_subgroup_item}>Другое</li>
                            </ul>
                        </li>
                        <br />
                        <li className={styles.dictionary_group}>
                            <h5 className={styles.dictionary_group_title}>Библейские</h5>
                            <ul className={styles.dictionary_group_subgroup}>
                                <li className={styles.dictionary_group_subgroup_item}>Персонажи</li>
                                <li className={styles.dictionary_group_subgroup_item}>География</li>
                                <li className={styles.dictionary_group_subgroup_item}>Предметы</li>
                                <li className={styles.dictionary_group_subgroup_item}>Другое</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
