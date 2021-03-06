FusionCharts.ready(function(){
      var revenueChart = new FusionCharts({
        "type": "line",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
          "chart": {
      "showvalues": "1",
        "yaxisname": "Expedientes en el año 2014",
        "numdivlines": "0",
        "canvasborderalpha": "0",
        "canvasbgalpha": "0",
        "numvdivlines": "5",
        "plotgradientcolor": "0000FF",
        "drawanchors": "1",
        "plotfillangle": "90",
        "plotfillalpha": "63",
        "vdivlinealpha": "22",
        "vdivlinecolor": "6281B5",
        "bgcolor": "ABCAD3,B3CCE1",
        "showplotborder": "0",
        "numbersuffix": "%",
        "bordercolor": "9DBCCC",
        "borderalpha": "100",
        "canvasbgratio": "0",
        "basefontcolor": "37444A",
        "tooltipbgcolor": "37444A",
        "tooltipbordercolor": "37444A",
        "tooltipcolor": "FFFFFF",
        "basefontsize": "8",
        "outcnvbasefontsize": "11",
        "showyaxisvalues": "0",
        "animation": "1",
        "palettecolors": "0080C0",
        "showtooltip": "1",
        "showborder": "0"
    },
     "data": webroot+"Depositos/feedgrafica",
        }
    });

    revenueChart.render();
})
