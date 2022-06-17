const temperatureC = document.querySelector('#temperature').textContent;
const windSpeedKMH = document.querySelector('#windSpeedKMH').textContent;
const windChillFactorElem = document.querySelector('#windChillFactor');
console.log(temperatureC + ', ' + windSpeedKMH);

/* F = C * 1.8 + 32 */
/* C = (F - 32) / 1.8 */
const temperatureF = temperatureC * 1.8 + 32;
const windSpeedMPH = windSpeedKMH / 1.609;
console.log(temperatureF + ', ' + windSpeedMPH);

if (temperatureF <= 50 && windSpeedMPH > 3.0) {
    const windChillFactorF = 35.74 + 0.6215 * temperatureF - 35.75 * windSpeedMPH**(0.16) + 0.4275 * temperatureF * windSpeedMPH**(0.16);
    const windChillFactorC = Math.round((windChillFactorF - 32) / 1.8);
    windChillFactorElem.innerHTML = `${windChillFactorC}&deg;C`;
} else {
    windChillFactorElem.textContent = 'N/A';
}

/* f = 35.74 + 0.6215 * t - 35.75 * s^{0.16} + 0.4275 * t * s^{0.16} */
