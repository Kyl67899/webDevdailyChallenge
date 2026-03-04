document.addEventListener("DOMContentLoaded", () => {
    showBadge("success"); // change this to test other statuses

    // showBadge("failed");
    // showBadge("pending");
    // showBadge("refunded");
    confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 }
    });
});

function showBadge(status) {
    const badge = document.getElementById("badge");

    badge.style.display = "block";
    badge.textContent = status.toUpperCase();
    badge.className = "badge " + status;

    setTimeout(() => {
        badge.style.display = "none";
    }, 2000);
}