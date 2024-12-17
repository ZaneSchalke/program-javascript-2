let landen = {
    Europa: ["Nederland", "Belgie", "Frankrijk", "Duitsland"],
    Azie: ["Japan", "China", "Noord korea", "Zuid korea"],
    Afrika: ["Zuid-Afrika", "Nigeria", "Egypte", "Congo"],
    NoordAmerika: ["Amerika", "Canada", "Mexico", "Cuba"]
};

for (let wereld in landen) {
    document.write("<p><strong>" + wereld + ":</strong> ");
    document.write(landen[wereld].join(" / "));
    document.write("</p>");
}
