import zip2state from './index.ts'

document.addEventListener("DOMContentLoaded", () => {
    const zip = document.getElementById("zip");
    const state = document.getElementById("state");
    zip.addEventListener("input", (e) => {
        state.value = zip2state(zip.value);
    });
});