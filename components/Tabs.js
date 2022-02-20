import { useState } from "react";

const Tabs = () => {
    const [tabState, setTabState] = useState(0);

    const actualTab = (index) => {
        setTabState(index);
    };

    return (
        <div className="tabs-container">
            <div className="tabs-title">
                <button
                    className={tabState === 0 ? "tabs active-tabs" : "tabs"}
                    onClick={() => actualTab(0)}
                >
                    Simple Bookmarking
                </button>
                <button
                    className={tabState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => actualTab(1)}
                >
                    Speedy Searching
                </button>
                <button
                    className={tabState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => actualTab(2)}
                >
                    Easy Sharing
                </button>
            </div>
            <div className="tabs-content">
                <div
                    className={tabState === 0 ? "content active-content" : "content"}
                >
                    <img src="" alt="" />
                    <div className="tabs-infos">
                        <h3>Bookmark in one click</h3>
                        <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                        <a href="/" className="button-primary">More info</a>
                    </div>
                </div>
                <div
                    className={tabState === 1 ? "content active-content" : "content"}
                >
                    <img src="" alt="" />
                    <div className="tabs-infos">
                        <h3>Intelligent search</h3>
                        <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                        <a href="/" className="button-primary">More info</a>
                    </div>
                </div>
                <div
                    className={tabState === 2 ? "content active-content" : "content"}
                >
                    <img src="" alt="" />
                    <div className="tabs-infos">
                        <h3>Share your bookmarks</h3>
                        <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                        <a href="/" className="button-primary">More info</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Tabs;