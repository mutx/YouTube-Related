// Get the button container, HTML element 'iron-selector', which has the ID 'chips'
function getIronSelector() {
    return new Promise((resolve => {
        let query = 'iron-selector#chips';

        if (document.querySelector(query)) {
            return resolve(document.querySelector(query));
        }

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(query)) {
                observer.disconnect();
                resolve(document.querySelector(query));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }));
}

// Get the button with the 'related' text in it.
function getRelatedChipButton() {
    return new Promise((resolve) => {
        getIronSelector().then((container) => {

            let query = 'yt-chip-cloud-chip-renderer';
            function chips() {
                return container.querySelectorAll(query); 
            }

            console.log("getRelatedChipButton: Checking if button exists");

            if (chips().length > 0) {
                chips().forEach(item => {
                    if (item.innerText.toLowerCase().trim() === 'related') {
                        console.log("getRelatedChipButton: Button exists, bypassing observer and resolving");
                        console.log(item);
                        resolve(item);
                    }
                });
            }

            console.log("getRelatedChipButton: Button doesn't exist, setting up observer");

            const observer = new MutationObserver((mutations) => {
                if (chips().length > 0) {
                    chips().forEach(item => {
                        if (item.innerText.toLowerCase().trim() === 'related') {
                            console.log("getRelatedChipButton: Button exists via obserever, resolving");
                            console.log(item);
                            observer.disconnect();
                            resolve(item);
                        }
                    });
                }
            });

            observer.observe(container, {
                childList: true,
                subtree: true
            });

        });
    });
}

// Simulate the click on the button.
function clickThatRelatedButton() {
    getRelatedChipButton().then((chipButton) => {
        if (chipButton) {
            // settTimeout is only for the UI aspect to show the button being highlighted. Otherwise, the normal default button "All" will be highlighted.
            // The video suggestions however will still be "Related". This is simply a button highlighting issue.
            setTimeout(() => {
                // Weird reflow causes different element to be returned. Final check.
                if (chipButton.innerText.toLowerCase().trim() !== 'related') {  
                    document.querySelectorAll('yt-chip-cloud-chip-renderer').forEach(item => {
                        if (item.innerText.toLowerCase().trim() === 'related') {
                            item.click();
                        }
                    });
                } else {
                    chipButton.click();
                }
            }, 10);
        }
    });   
}

// Wrapper
function eventRunner(Event) {
    clickThatRelatedButton();
}

// YouTube's event listener
document.addEventListener('yt-navigate-finish', eventRunner);

if (document.body) eventRunner();
else document.addEventListener('DOMContentLoaded', eventRunner);



// Normal video load
if (document.readyState === "loading") {  // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", function() {
        clickThatRelatedButton();
    });
} else {  // `DOMContentLoaded` has already fired
    clickThatRelatedButton(); 
}


// YouTube's Event Listeners
// yt-player-updated
// yt-navigate-finish
// yt-enable-lockup-interaction
// yt-rendererstamper-finished