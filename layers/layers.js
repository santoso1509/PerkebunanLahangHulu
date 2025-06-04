var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_POLARUANG_1 = new ol.format.GeoJSON();
var features_POLARUANG_1 = format_POLARUANG_1.readFeatures(json_POLARUANG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANG_1.addFeatures(features_POLARUANG_1);
var lyr_POLARUANG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLARUANG_1, 
                style: style_POLARUANG_1,
                popuplayertitle: 'POLA RUANG',
                interactive: true,
    title: 'POLA RUANG<br />\
    <img src="styles/legend/POLARUANG_1_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANG_1_1.png" /> Kawasan Hutan Produksi yang dapat Dikonversi<br />\
    <img src="styles/legend/POLARUANG_1_2.png" /> Kawasan Perkebunan<br />\
    <img src="styles/legend/POLARUANG_1_3.png" /> Kawasan Permukiman Perkotaan<br />\
    <img src="styles/legend/POLARUANG_1_4.png" /> Kawasan Tanaman Pangan<br />' });
var format_Lahan_2 = new ol.format.GeoJSON();
var features_Lahan_2 = format_Lahan_2.readFeatures(json_Lahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_2.addFeatures(features_Lahan_2);
var lyr_Lahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_2, 
                style: style_Lahan_2,
                popuplayertitle: 'Lahan',
                interactive: true,
                title: '<img src="styles/legend/Lahan_2.png" /> Lahan'
            });
var format_PERAIRAN_3 = new ol.format.GeoJSON();
var features_PERAIRAN_3 = format_PERAIRAN_3.readFeatures(json_PERAIRAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERAIRAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERAIRAN_3.addFeatures(features_PERAIRAN_3);
var lyr_PERAIRAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERAIRAN_3, 
                style: style_PERAIRAN_3,
                popuplayertitle: 'PERAIRAN',
                interactive: true,
                title: '<img src="styles/legend/PERAIRAN_3.png" /> PERAIRAN'
            });
var format_JALAN_4 = new ol.format.GeoJSON();
var features_JALAN_4 = format_JALAN_4.readFeatures(json_JALAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_4.addFeatures(features_JALAN_4);
var lyr_JALAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_4, 
                style: style_JALAN_4,
                popuplayertitle: 'JALAN',
                interactive: true,
    title: 'JALAN<br />\
    <img src="styles/legend/JALAN_4_0.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/JALAN_4_1.png" /> Jalan Lokal Primer<br />' });
var format_PAL_BATAS_5 = new ol.format.GeoJSON();
var features_PAL_BATAS_5 = format_PAL_BATAS_5.readFeatures(json_PAL_BATAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAL_BATAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAL_BATAS_5.addFeatures(features_PAL_BATAS_5);
cluster_PAL_BATAS_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PAL_BATAS_5
});
var lyr_PAL_BATAS_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PAL_BATAS_5, 
                style: style_PAL_BATAS_5,
                popuplayertitle: 'PAL_BATAS',
                interactive: true,
                title: '<img src="styles/legend/PAL_BATAS_5.png" /> PAL_BATAS'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_POLARUANG_1.setVisible(true);lyr_Lahan_2.setVisible(true);lyr_PERAIRAN_3.setVisible(true);lyr_JALAN_4.setVisible(true);lyr_PAL_BATAS_5.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_POLARUANG_1,lyr_Lahan_2,lyr_PERAIRAN_3,lyr_JALAN_4,lyr_PAL_BATAS_5];
lyr_POLARUANG_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUASHA': 'LUASHA', });
lyr_Lahan_2.set('fieldAliases', {'Luas_Ha': 'Luas_Ha', });
lyr_PERAIRAN_3.set('fieldAliases', {'NAMA_UNSUR': 'NAMA_UNSUR', 'JENIS': 'JENIS', 'NAMA': 'NAMA', 'SUMBER': 'SUMBER', });
lyr_JALAN_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PAL_BATAS_5.set('fieldAliases', {'Koor_X': 'Koor_X', 'Koor_Y': 'Koor_Y', 'Sumber': 'Sumber', });
lyr_POLARUANG_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUASHA': 'TextEdit', });
lyr_Lahan_2.set('fieldImages', {'Luas_Ha': 'TextEdit', });
lyr_PERAIRAN_3.set('fieldImages', {'NAMA_UNSUR': 'TextEdit', 'JENIS': 'TextEdit', 'NAMA': 'TextEdit', 'SUMBER': 'TextEdit', });
lyr_JALAN_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PAL_BATAS_5.set('fieldImages', {'Koor_X': 'TextEdit', 'Koor_Y': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_POLARUANG_1.set('fieldLabels', {'NAMOBJ': 'no label', 'LUASHA': 'no label', });
lyr_Lahan_2.set('fieldLabels', {'Luas_Ha': 'no label', });
lyr_PERAIRAN_3.set('fieldLabels', {'NAMA_UNSUR': 'no label', 'JENIS': 'no label', 'NAMA': 'no label', 'SUMBER': 'no label', });
lyr_JALAN_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PAL_BATAS_5.set('fieldLabels', {'Koor_X': 'no label', 'Koor_Y': 'no label', 'Sumber': 'no label', });
lyr_PAL_BATAS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});