var size = 0;
var placement = 'point';

var style_PERAIRAN_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Arial Narrow\', sans-serif";
    var labelFill = "#2e58ff";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NAMA") !== null) {
        labelText = String(feature.get("NAMA"));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,145,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
