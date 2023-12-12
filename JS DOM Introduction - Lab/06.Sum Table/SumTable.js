function sumTable() {
    let tableRows = document.querySelectorAll("table tbody tr");
    let total = 0;

    for (let i = 0; i < tableRows.length; i++) {
        let cols = tableRows[i].children;
        let cost = cols[cols.length - 1].textContent.trim();

        if (!isNaN(Number(cost))) {
            total += Number(cost);
        }
    }
    document.getElementById("sum").textContent = total.toFixed(2);
}