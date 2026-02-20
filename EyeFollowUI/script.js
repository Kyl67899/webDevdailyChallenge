const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (event) => {

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        const pupilX = rect.left + rect.width / 2;
        const pupilY = rect.top + rect.height / 2;

        const angle = Math.atan2(mouseY - pupilY, mouseX - pupilX);
        const distance = Math.min(20, Math.hypot(mouseX - pupilX, mouseY - pupilY));

        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        // console.log(`Mouse: (${mouseX}, ${mouseY}), Pupil: (${pupilX}, ${pupilY}), Angle: ${angle}, Distance: ${distance}`);
    })
});