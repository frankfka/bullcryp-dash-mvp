var chartData1 = [];
var chartData2 = [];
var chartData3 = [];
var chartData4 = [];

generateChartData();

function generateChartData() {
  var firstDate = new Date();
  firstDate.setDate( firstDate.getDate() - 500 );
  firstDate.setHours( 0, 0, 0, 0 );

  var a1 = 1500;
  var b1 = 1500;
  var a2 = 1700;
  var b2  = 1700;
  var a3 = 1600;
  var b3 = 1600;
  var a4 = 1400;
  var b4 = 1400;

  for ( var i = 0; i < 500; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setDate( newDate.getDate() + i );

    a1 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b1 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a2 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b2 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a3 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b3 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a4 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b4 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    chartData1.push( {
      "date": newDate,
      "value": a1,
      "volume": b1 + 1500
    } );
    chartData2.push( {
      "date": newDate,
      "value": a2,
      "volume": b2 + 1500
    } );
    chartData3.push( {
      "date": newDate,
      "value": a3,
      "volume": b3 + 1500
    } );
    chartData4.push( {
      "date": newDate,
      "value": a4,
      "volume": b4 + 1500
    } );
  }
}

   var chart = AmCharts.makeChart( "chartdiv", {
            "type": "stock",
            "theme": "dark",
            "dataSets": [ {
                "title": "first data set",
                "fieldMappings": [ {
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                } ],
                "dataProvider": chartData1,
                "categoryField": "date"
            }, {
                "title": "second data set",
                "fieldMappings": [ {
                    "fromField": "value1",
                    "toField": "value1"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                } ],
                "dataProvider": chartData2,
                "categoryField": "date"
            }, {
                "title": "third data set",
                "fieldMappings": [ {
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                } ],
                "dataProvider": chartData3,
                "categoryField": "date"
            }, {
                "title": "fourth data set",
                "fieldMappings": [ {
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                } ],
                "dataProvider": chartData4,
                "categoryField": "date"
            }
            ],
            "panels": [ {
                "showCategoryAxis": false,
                "title": "",
                "percentHeight": 70,
                "stockGraphs": [ {
                    "id": "g1",
                    "valueField": "value",
                    "comparable": false,
                    "compareField": "value",
                    "balloonText": "[[title]]:<b>[[value]]</b>",
                    "compareGraphBalloonText": "[[title]]:<b>[[value]]</b>",
                    "lineThickness": 2,
                    "lineColor": "#ffffff"
                }],
                "stockLegend": {
                    "periodValueTextComparing": "[[percents.value.close]]%",
                    "periodValueTextRegular": "[[value.close]]"
                },
                "valueAxes": [
                    {
                        "position": "right"
                    }
                ]
            }, {
                "title": "",
                "percentHeight": 30,
                "stockGraphs": [ {
                    "valueField": "volume",
                    "type": "column",
                    "showBalloon": false,
                    "fillAlphas": 1,
                  "fillColor": "#ffffff"
                } ],
                "stockLegend": {
                    "periodValueTextRegular": "[[value.close]]"
                },
                "valueAxes": [
                    {
                        "position": "right"
                    }
                ]
            } ],
            "panelsSettings": {
                "marginRight": 60,
                "marginBottom": 5
            },
            "valueAxesSettings": {
                "inside": false,
            },
            "chartScrollbarSettings": {
                "enabled" : false
            },

            "chartCursorSettings": {
                "valueBalloonsEnabled": true,
                "fullWidth": true,
                "cursorAlpha": 0.1,
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true,
                "valueLineAlpha": 0.5
            },



        } );