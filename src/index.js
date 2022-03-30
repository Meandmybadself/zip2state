import zip2state from 'zip2state'

document.addEventListener("DOMContentLoaded", () => {
    const zip = document.getElementById("zip");
    const state = document.getElementById("state");
    zip.addEventListener("input", (e) => {
        state.value = zip2state(zip.value);
    });
});