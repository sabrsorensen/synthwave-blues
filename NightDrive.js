// summer lasts forever
async function synthWave() {
    if (
        new Date().getFullYear() === 1984 &&
        currentLocation == 'rooftop' &&
        weatherConditions == TORRENTIAL_RAIN
    ) {
        await theNight();
        const SaxSolo = new Saxophone();
        SaxSolo.play();
    }
}