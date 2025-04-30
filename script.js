const CROPS = {
    corn: { idealWaterGalPerAcre: 5000, minTemp: 50, maxTemp: 85 },
    wheat: { idealWaterGalPerAcre: 3000, minTemp: 45, maxTemp: 80 },
    soybeans: { idealWaterGalPerAcre: 4000, minTemp: 55, maxTemp: 90 },
    alfalfa: { idealWaterGalPerAcre: 6000, minTemp: 60, maxTemp: 95 },
    cotton: { idealWaterGalPerAcre: 7000, minTemp: 65, maxTemp: 100 },
    rice: { idealWaterGalPerAcre: 10000, minTemp: 70, maxTemp: 95 },
    barley: { idealWaterGalPerAcre: 3200, minTemp: 40, maxTemp: 75 },
    sorghum: { idealWaterGalPerAcre: 4500, minTemp: 50, maxTemp: 85 },
    peanuts: { idealWaterGalPerAcre: 5500, minTemp: 60, maxTemp: 95 },
    potatoes: { idealWaterGalPerAcre: 8000, minTemp: 55, maxTemp: 85 },
    sugarcane: { idealWaterGalPerAcre: 12000, minTemp: 70, maxTemp: 100 },
    tobacco: { idealWaterGalPerAcre: 6500, minTemp: 55, maxTemp: 90 },
    rye: { idealWaterGalPerAcre: 3500, minTemp: 40, maxTemp: 80 },
    oats: { idealWaterGalPerAcre: 3400, minTemp: 38, maxTemp: 78 }
};

const INCH_TO_GAL_PER_ACRE = 27154;

document.getElementById("irrigationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const crop = document.getElementById("crop").value;
    const rainfall = Number(document.getElementById("rainfall").value);
    const temperature = Number(document.getElementById("temperature").value);

    if (!CROPS[crop]) {
        document.getElementById("result").textContent = "Invalid crop selection.";
        return;
    }

    const cropSettings = CROPS
