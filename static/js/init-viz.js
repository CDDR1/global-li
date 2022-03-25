const initViz = () => {
    const containerDiv1 = document.getElementById("vizContainer1"),
        url = "https://public.tableau.com/views/Top10LIFDIInvestorsbycountry/Bycountry",
        options = {
            hideTabs: true
        };
    const viz = new tableau.Viz(containerDiv1, url, options);


    const containerDiv2 = document.getElementById("vizContainer2"),
    url2 = "https://public.tableau.com/views/LIFDIEmploymentbycountry/Bycountry",
    options2 = {
        hideTabs: true
    };
    const viz2  = new tableau.Viz(containerDiv2, url2, options);

    const containerDiv3 = document.getElementById("vizContainer3"),
    url3 = "https://public.tableau.com/views/LIFDIEmployment/LIFDIEmployment",
    options3 = {
        hideTabs: true
    };
    const viz3 = new tableau.Viz(containerDiv3, url3, options);
}

window.addEventListener('DOMContentLoaded', initViz);