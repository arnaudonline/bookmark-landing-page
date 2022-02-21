import { useState } from "react";
import styles from "../styles/Tabs.module.scss";

const Tabs = () => {
    const [tabState, setTabState] = useState(0);

    const actualTab = (index) => {
        setTabState(index);
    };

    return (
        <div className={styles.tabs_container}>
            <div className={styles.tabs_title}>
                <button
                    className={tabState === 0 ? styles.tabs + " " + styles.active_tabs : styles.tabs}
                    onClick={() => actualTab(0)}
                >
                    Simple Bookmarking
                </button>
                <button
                    className={tabState === 1 ? styles.tabs + " " + styles.active_tabs : styles.tabs}
                    onClick={() => actualTab(1)}
                >
                    Speedy Searching
                </button>
                <button
                    className={tabState === 2 ? styles.tabs + " " + styles.active_tabs : styles.tabs}
                    onClick={() => actualTab(2)}
                >
                    Easy Sharing
                </button>
            </div>
            <div className={styles.tabs_content}>
                <div
                    className={tabState === 0 ? styles.content + " " + styles.active_content : styles.content}
                >
                    <img src="./illustration-features-tab-1.svg" alt="Illustration - Features N1" />
                    <div className={styles.tabs_infos}>
                        <h3>Bookmark in one click</h3>
                        <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                        <a href="/" className={styles.button_primary}>More info</a>
                    </div>
                </div>
                <div
                    className={tabState === 1 ? styles.content + " " + styles.active_content : styles.content}
                >
                    <img src="./illustration-features-tab-2.svg" alt="Illustration - Features N2" />
                    <div className={styles.tabs_infos}>
                        <h3>Intelligent search</h3>
                        <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                        <a href="/" className={styles.button_primary}>More info</a>
                    </div>
                </div>
                <div
                    className={tabState === 2 ? styles.content + " " + styles.active_content : styles.content}
                >
                    <img src="./illustration-features-tab-3.svg" alt="Illustration - Features N3" />
                    <div className={styles.tabs_infos}>
                        <h3>Share your bookmarks</h3>
                        <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                        <a href="/" className={styles.button_primary}>More info</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Tabs;