var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

    var projection_Ortofotomapastandardowa_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortofotomapastandardowa_1 = projection_Ortofotomapastandardowa_1.getExtent();
    var size_Ortofotomapastandardowa_1 = ol.extent.getWidth(projectionExtent_Ortofotomapastandardowa_1) / 256;
    var resolutions_Ortofotomapastandardowa_1 = new Array(14);
    var matrixIds_Ortofotomapastandardowa_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortofotomapastandardowa_1[z] = size_Ortofotomapastandardowa_1 / Math.pow(2, z);
        matrixIds_Ortofotomapastandardowa_1[z] = z;
    }
    var lyr_Ortofotomapastandardowa_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/StandardResolution?service=WMTS&request=getCapabilities",
                                attributions: ' ',
                                "layer": "ORTOFOTOMAPA",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortofotomapastandardowa_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortofotomapastandardowa_1),
                resolutions: resolutions_Ortofotomapastandardowa_1,
                matrixIds: matrixIds_Ortofotomapastandardowa_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortofotomapa standardowa',
                            opacity: 1.0,
                            
                            
                          });
var lyr_SUiKZP_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://gis.gbransk.ipodlaskie.pl/ows/gmina_bransk",
                              attributions: ' ',
                              params: {
                                "LAYERS": "nr_IV_30_2019_SUiKZP",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'SUiKZP',
                            popuplayertitle: 'SUiKZP',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SUiKZP_2, 0]);
var lyr_MPZP_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://gis.gbransk.ipodlaskie.pl/ows/gmina_bransk",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mpzp",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP',
                            popuplayertitle: 'MPZP',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP_3, 0]);
var format_symbol_SK_4 = new ol.format.GeoJSON();
var features_symbol_SK_4 = format_symbol_SK_4.readFeatures(json_symbol_SK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SK_4.addFeatures(features_symbol_SK_4);
var lyr_symbol_SK_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SK_4, 
                style: style_symbol_SK_4,
                popuplayertitle: 'symbol_SK',
                interactive: true,
                title: '<img src="styles/legend/symbol_SK_4.png" /> symbol_SK'
            });
var format_symbol_SO_5 = new ol.format.GeoJSON();
var features_symbol_SO_5 = format_symbol_SO_5.readFeatures(json_symbol_SO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SO_5.addFeatures(features_symbol_SO_5);
var lyr_symbol_SO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SO_5, 
                style: style_symbol_SO_5,
                popuplayertitle: 'symbol_SO',
                interactive: true,
                title: '<img src="styles/legend/symbol_SO_5.png" /> symbol_SO'
            });
var format_symbol_SG_6 = new ol.format.GeoJSON();
var features_symbol_SG_6 = format_symbol_SG_6.readFeatures(json_symbol_SG_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SG_6.addFeatures(features_symbol_SG_6);
var lyr_symbol_SG_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SG_6, 
                style: style_symbol_SG_6,
                popuplayertitle: 'symbol_SG',
                interactive: true,
                title: '<img src="styles/legend/symbol_SG_6.png" /> symbol_SG'
            });
var format_symbol_SC_7 = new ol.format.GeoJSON();
var features_symbol_SC_7 = format_symbol_SC_7.readFeatures(json_symbol_SC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SC_7.addFeatures(features_symbol_SC_7);
var lyr_symbol_SC_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SC_7, 
                style: style_symbol_SC_7,
                popuplayertitle: 'symbol_SC',
                interactive: true,
                title: '<img src="styles/legend/symbol_SC_7.png" /> symbol_SC'
            });
var format_symbol_SN_8 = new ol.format.GeoJSON();
var features_symbol_SN_8 = format_symbol_SN_8.readFeatures(json_symbol_SN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SN_8.addFeatures(features_symbol_SN_8);
var lyr_symbol_SN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SN_8, 
                style: style_symbol_SN_8,
                popuplayertitle: 'symbol_SN',
                interactive: true,
                title: '<img src="styles/legend/symbol_SN_8.png" /> symbol_SN'
            });
var format_symbol_SI_9 = new ol.format.GeoJSON();
var features_symbol_SI_9 = format_symbol_SI_9.readFeatures(json_symbol_SI_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SI_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SI_9.addFeatures(features_symbol_SI_9);
var lyr_symbol_SI_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SI_9, 
                style: style_symbol_SI_9,
                popuplayertitle: 'symbol_SI',
                interactive: true,
                title: '<img src="styles/legend/symbol_SI_9.png" /> symbol_SI'
            });
var format_symbol_SR_10 = new ol.format.GeoJSON();
var features_symbol_SR_10 = format_symbol_SR_10.readFeatures(json_symbol_SR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SR_10.addFeatures(features_symbol_SR_10);
var lyr_symbol_SR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SR_10, 
                style: style_symbol_SR_10,
                popuplayertitle: 'symbol_SR',
                interactive: true,
                title: '<img src="styles/legend/symbol_SR_10.png" /> symbol_SR'
            });
var format_symbol_SP_11 = new ol.format.GeoJSON();
var features_symbol_SP_11 = format_symbol_SP_11.readFeatures(json_symbol_SP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SP_11.addFeatures(features_symbol_SP_11);
var lyr_symbol_SP_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SP_11, 
                style: style_symbol_SP_11,
                popuplayertitle: 'symbol_SP',
                interactive: true,
                title: '<img src="styles/legend/symbol_SP_11.png" /> symbol_SP'
            });
var format_symbol_SU_12 = new ol.format.GeoJSON();
var features_symbol_SU_12 = format_symbol_SU_12.readFeatures(json_symbol_SU_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SU_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SU_12.addFeatures(features_symbol_SU_12);
var lyr_symbol_SU_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SU_12, 
                style: style_symbol_SU_12,
                popuplayertitle: 'symbol_SU',
                interactive: true,
                title: '<img src="styles/legend/symbol_SU_12.png" /> symbol_SU'
            });
var format_symbol_SZ_13 = new ol.format.GeoJSON();
var features_symbol_SZ_13 = format_symbol_SZ_13.readFeatures(json_symbol_SZ_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SZ_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SZ_13.addFeatures(features_symbol_SZ_13);
var lyr_symbol_SZ_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SZ_13, 
                style: style_symbol_SZ_13,
                popuplayertitle: 'symbol_SZ',
                interactive: true,
                title: '<img src="styles/legend/symbol_SZ_13.png" /> symbol_SZ'
            });
var format_symbol_SJ_14 = new ol.format.GeoJSON();
var features_symbol_SJ_14 = format_symbol_SJ_14.readFeatures(json_symbol_SJ_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_symbol_SJ_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_symbol_SJ_14.addFeatures(features_symbol_SJ_14);
var lyr_symbol_SJ_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_symbol_SJ_14, 
                style: style_symbol_SJ_14,
                popuplayertitle: 'symbol_SJ',
                interactive: true,
                title: '<img src="styles/legend/symbol_SJ_14.png" /> symbol_SJ'
            });
var format_EGB_DzialkaEwidencyjna_15 = new ol.format.GeoJSON();
var features_EGB_DzialkaEwidencyjna_15 = format_EGB_DzialkaEwidencyjna_15.readFeatures(json_EGB_DzialkaEwidencyjna_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGB_DzialkaEwidencyjna_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGB_DzialkaEwidencyjna_15.addFeatures(features_EGB_DzialkaEwidencyjna_15);
var lyr_EGB_DzialkaEwidencyjna_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EGB_DzialkaEwidencyjna_15, 
                style: style_EGB_DzialkaEwidencyjna_15,
                popuplayertitle: 'EGB_DzialkaEwidencyjna',
                interactive: true,
                title: '<img src="styles/legend/EGB_DzialkaEwidencyjna_15.png" /> EGB_DzialkaEwidencyjna'
            });
var format_budynki_bdot10k_16 = new ol.format.GeoJSON();
var features_budynki_bdot10k_16 = format_budynki_bdot10k_16.readFeatures(json_budynki_bdot10k_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_budynki_bdot10k_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_budynki_bdot10k_16.addFeatures(features_budynki_bdot10k_16);
var lyr_budynki_bdot10k_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_budynki_bdot10k_16, 
                style: style_budynki_bdot10k_16,
                popuplayertitle: 'budynki_bdot10k',
                interactive: true,
                title: '<img src="styles/legend/budynki_bdot10k_16.png" /> budynki_bdot10k'
            });
var format_OBREBY_17 = new ol.format.GeoJSON();
var features_OBREBY_17 = format_OBREBY_17.readFeatures(json_OBREBY_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBREBY_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBREBY_17.addFeatures(features_OBREBY_17);
var lyr_OBREBY_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBREBY_17, 
                style: style_OBREBY_17,
                popuplayertitle: 'OBREBY',
                interactive: true,
                title: '<img src="styles/legend/OBREBY_17.png" /> OBREBY'
            });
var format_AktPlanowaniaPrzestrzennego_18 = new ol.format.GeoJSON();
var features_AktPlanowaniaPrzestrzennego_18 = format_AktPlanowaniaPrzestrzennego_18.readFeatures(json_AktPlanowaniaPrzestrzennego_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AktPlanowaniaPrzestrzennego_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AktPlanowaniaPrzestrzennego_18.addFeatures(features_AktPlanowaniaPrzestrzennego_18);
var lyr_AktPlanowaniaPrzestrzennego_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AktPlanowaniaPrzestrzennego_18, 
                style: style_AktPlanowaniaPrzestrzennego_18,
                popuplayertitle: 'AktPlanowaniaPrzestrzennego',
                interactive: false,
                title: '<img src="styles/legend/AktPlanowaniaPrzestrzennego_18.png" /> AktPlanowaniaPrzestrzennego'
            });
var format_wnioski_prywatne_19 = new ol.format.GeoJSON();
var features_wnioski_prywatne_19 = format_wnioski_prywatne_19.readFeatures(json_wnioski_prywatne_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnioski_prywatne_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_prywatne_19.addFeatures(features_wnioski_prywatne_19);
var lyr_wnioski_prywatne_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnioski_prywatne_19, 
                style: style_wnioski_prywatne_19,
                popuplayertitle: 'wnioski_prywatne',
                interactive: true,
                title: '<img src="styles/legend/wnioski_prywatne_19.png" /> wnioski_prywatne'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Ortofotomapastandardowa_1.setVisible(false);lyr_SUiKZP_2.setVisible(false);lyr_MPZP_3.setVisible(false);lyr_symbol_SK_4.setVisible(true);lyr_symbol_SO_5.setVisible(true);lyr_symbol_SG_6.setVisible(true);lyr_symbol_SC_7.setVisible(true);lyr_symbol_SN_8.setVisible(true);lyr_symbol_SI_9.setVisible(true);lyr_symbol_SR_10.setVisible(true);lyr_symbol_SP_11.setVisible(true);lyr_symbol_SU_12.setVisible(true);lyr_symbol_SZ_13.setVisible(true);lyr_symbol_SJ_14.setVisible(true);lyr_EGB_DzialkaEwidencyjna_15.setVisible(true);lyr_budynki_bdot10k_16.setVisible(true);lyr_OBREBY_17.setVisible(true);lyr_AktPlanowaniaPrzestrzennego_18.setVisible(true);lyr_wnioski_prywatne_19.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Ortofotomapastandardowa_1,lyr_SUiKZP_2,lyr_MPZP_3,lyr_symbol_SK_4,lyr_symbol_SO_5,lyr_symbol_SG_6,lyr_symbol_SC_7,lyr_symbol_SN_8,lyr_symbol_SI_9,lyr_symbol_SR_10,lyr_symbol_SP_11,lyr_symbol_SU_12,lyr_symbol_SZ_13,lyr_symbol_SJ_14,lyr_EGB_DzialkaEwidencyjna_15,lyr_budynki_bdot10k_16,lyr_OBREBY_17,lyr_AktPlanowaniaPrzestrzennego_18,lyr_wnioski_prywatne_19];
lyr_symbol_SK_4.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SO_5.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SG_6.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SC_7.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SN_8.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SI_9.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SR_10.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SP_11.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SU_12.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SZ_13.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_symbol_SJ_14.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_EGB_DzialkaEwidencyjna_15.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'lokalnyId': 'lokalnyId', 'przestrzenNazw': 'przestrzenNazw', 'wersjaId': 'wersjaId', 'startObiekt': 'startObiekt', 'startWersjaObiekt': 'startWersjaObiekt', 'idDzialki': 'idDzialki', 'poleEwidencyjne': 'poleEwidencyjne', 'poleEwidencyjne_uom': 'poleEwidencyjne_uom', 'dokladnoscReprezentacjiPola': 'dokladnoscReprezentacjiPola', 'OFU': 'OFU', 'OZU': 'OZU', 'OZK': 'OZK', 'powierzchnia': 'powierzchnia', 'powierzchnia_uom': 'powierzchnia_uom', 'koniecWersjaObiekt': 'koniecWersjaObiekt', 'koniecObiekt': 'koniecObiekt', });
lyr_budynki_bdot10k_16.set('fieldAliases', {'TERYT': 'TERYT', 'LOKALNYID': 'LOKALNYID', 'PRZES_NAZW': 'PRZES_NAZW', 'WERSJA': 'WERSJA', 'POCZ_WERSJ': 'POCZ_WERSJ', 'OZNA_ZMIAN': 'OZNA_ZMIAN', 'ZRO_DANYCH': 'ZRO_DANYCH', 'KAT_ISTNIE': 'KAT_ISTNIE', 'UWAGI': 'UWAGI', 'INFO_DODAT': 'INFO_DODAT', 'KOD10K': 'KOD10K', 'SKROT_KART': 'SKROT_KART', 'KODKST': 'KODKST', 'FOBUD': 'FOBUD', 'FSBUD': 'FSBUD', 'PFBUD': 'PFBUD', 'LICZ_KONDY': 'LICZ_KONDY', 'NAZWA': 'NAZWA', });
lyr_OBREBY_17.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'DATA': 'DATA', });
lyr_AktPlanowaniaPrzestrzennego_18.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'tytul': 'tytul', 'tytulAlternatywny': 'tytulAlternatywny', 'typPlanu': 'typPlanu', 'poziomHierarchii': 'poziomHierarchii', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'modyfikacja': 'modyfikacja', 'edycja': 'edycja', });
lyr_wnioski_prywatne_19.set('fieldAliases', {'Nr_wniosku': 'Nr_wniosku', 'Wniosek': 'Wniosek', });
lyr_symbol_SK_4.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SO_5.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SG_6.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SC_7.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SN_8.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SI_9.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SR_10.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SP_11.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SU_12.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SZ_13.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_symbol_SJ_14.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_EGB_DzialkaEwidencyjna_15.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'lokalnyId': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'wersjaId': 'TextEdit', 'startObiekt': 'TextEdit', 'startWersjaObiekt': 'TextEdit', 'idDzialki': 'TextEdit', 'poleEwidencyjne': 'TextEdit', 'poleEwidencyjne_uom': 'TextEdit', 'dokladnoscReprezentacjiPola': 'Range', 'OFU': 'TextEdit', 'OZU': 'TextEdit', 'OZK': 'TextEdit', 'powierzchnia': 'TextEdit', 'powierzchnia_uom': 'TextEdit', 'koniecWersjaObiekt': 'TextEdit', 'koniecObiekt': 'TextEdit', });
lyr_budynki_bdot10k_16.set('fieldImages', {'TERYT': 'TextEdit', 'LOKALNYID': 'TextEdit', 'PRZES_NAZW': 'TextEdit', 'WERSJA': 'TextEdit', 'POCZ_WERSJ': 'TextEdit', 'OZNA_ZMIAN': 'TextEdit', 'ZRO_DANYCH': 'TextEdit', 'KAT_ISTNIE': 'TextEdit', 'UWAGI': 'TextEdit', 'INFO_DODAT': 'TextEdit', 'KOD10K': 'TextEdit', 'SKROT_KART': 'TextEdit', 'KODKST': 'TextEdit', 'FOBUD': 'TextEdit', 'FSBUD': 'TextEdit', 'PFBUD': 'TextEdit', 'LICZ_KONDY': 'TextEdit', 'NAZWA': 'TextEdit', });
lyr_OBREBY_17.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'DATA': 'DateTime', });
lyr_AktPlanowaniaPrzestrzennego_18.set('fieldImages', {'fid': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'lokalnyId': 'TextEdit', 'wersjaId': 'DateTime', 'poczatekWersjiObiektu': 'DateTime', 'koniecWersjiObiektu': 'DateTime', 'tytul': 'TextEdit', 'tytulAlternatywny': 'TextEdit', 'typPlanu': 'ValueMap', 'poziomHierarchii': 'ValueMap', 'obowiazujeOd': 'DateTime', 'obowiazujeDo': 'DateTime', 'status': 'ValueMap', 'modyfikacja': 'CheckBox', 'edycja': '', });
lyr_wnioski_prywatne_19.set('fieldImages', {'Nr_wniosku': 'TextEdit', 'Wniosek': 'TextEdit', });
lyr_symbol_SK_4.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SO_5.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SG_6.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SC_7.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SN_8.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SI_9.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SR_10.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SP_11.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SU_12.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SZ_13.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_symbol_SJ_14.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_EGB_DzialkaEwidencyjna_15.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'lokalnyId': 'hidden field', 'przestrzenNazw': 'hidden field', 'wersjaId': 'hidden field', 'startObiekt': 'hidden field', 'startWersjaObiekt': 'hidden field', 'idDzialki': 'inline label - always visible', 'poleEwidencyjne': 'hidden field', 'poleEwidencyjne_uom': 'hidden field', 'dokladnoscReprezentacjiPola': 'hidden field', 'OFU': 'hidden field', 'OZU': 'hidden field', 'OZK': 'hidden field', 'powierzchnia': 'hidden field', 'powierzchnia_uom': 'hidden field', 'koniecWersjaObiekt': 'hidden field', 'koniecObiekt': 'hidden field', });
lyr_budynki_bdot10k_16.set('fieldLabels', {'TERYT': 'hidden field', 'LOKALNYID': 'hidden field', 'PRZES_NAZW': 'hidden field', 'WERSJA': 'hidden field', 'POCZ_WERSJ': 'hidden field', 'OZNA_ZMIAN': 'hidden field', 'ZRO_DANYCH': 'hidden field', 'KAT_ISTNIE': 'hidden field', 'UWAGI': 'hidden field', 'INFO_DODAT': 'hidden field', 'KOD10K': 'hidden field', 'SKROT_KART': 'hidden field', 'KODKST': 'hidden field', 'FOBUD': 'hidden field', 'FSBUD': 'no label', 'PFBUD': 'hidden field', 'LICZ_KONDY': 'hidden field', 'NAZWA': 'hidden field', });
lyr_OBREBY_17.set('fieldLabels', {'ID_DZIALKI': 'hidden field', 'NUMER_DZIA': 'hidden field', 'NUMER_OBRE': 'hidden field', 'NUMER_JEDN': 'hidden field', 'NAZWA_OBRE': 'no label', 'NAZWA_GMIN': 'hidden field', 'DATA': 'hidden field', });
lyr_AktPlanowaniaPrzestrzennego_18.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'tytul': 'hidden field', 'tytulAlternatywny': 'hidden field', 'typPlanu': 'hidden field', 'poziomHierarchii': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'modyfikacja': 'hidden field', 'edycja': 'hidden field', });
lyr_wnioski_prywatne_19.set('fieldLabels', {'Nr_wniosku': 'inline label - always visible', 'Wniosek': 'inline label - always visible', });
lyr_wnioski_prywatne_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});