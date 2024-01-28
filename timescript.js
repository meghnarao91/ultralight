
function updateCurrentTime() {
    let current_time = new Date();
    let formatted_time = current_time.toLocaleString("en-US", { timeStyle: "short" });
    let container = document.getElementById('now');
    container.innerText = formatted_time;
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
});