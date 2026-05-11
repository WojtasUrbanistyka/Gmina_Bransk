var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
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
                            opacity: 0.7,
                            
                            
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
                            type: '',
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
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP_3, 0]);
var format_strefakomunikacyjna_4 = new ol.format.GeoJSON();
var features_strefakomunikacyjna_4 = format_strefakomunikacyjna_4.readFeatures(json_strefakomunikacyjna_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefakomunikacyjna_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefakomunikacyjna_4.addFeatures(features_strefakomunikacyjna_4);
var lyr_strefakomunikacyjna_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefakomunikacyjna_4, 
                style: style_strefakomunikacyjna_4,
                popuplayertitle: 'strefa komunikacyjna',
                interactive: true,
                title: '<img src="styles/legend/strefakomunikacyjna_4.png" /> strefa komunikacyjna'
            });
var format_strefaotwarta_5 = new ol.format.GeoJSON();
var features_strefaotwarta_5 = format_strefaotwarta_5.readFeatures(json_strefaotwarta_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefaotwarta_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefaotwarta_5.addFeatures(features_strefaotwarta_5);
var lyr_strefaotwarta_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefaotwarta_5, 
                style: style_strefaotwarta_5,
                popuplayertitle: 'strefa otwarta',
                interactive: true,
                title: '<img src="styles/legend/strefaotwarta_5.png" /> strefa otwarta'
            });
var format_strefagrnictwa_6 = new ol.format.GeoJSON();
var features_strefagrnictwa_6 = format_strefagrnictwa_6.readFeatures(json_strefagrnictwa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefagrnictwa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefagrnictwa_6.addFeatures(features_strefagrnictwa_6);
var lyr_strefagrnictwa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefagrnictwa_6, 
                style: style_strefagrnictwa_6,
                popuplayertitle: 'strefa górnictwa',
                interactive: true,
                title: '<img src="styles/legend/strefagrnictwa_6.png" /> strefa górnictwa'
            });
var format_strefacmentarzy_7 = new ol.format.GeoJSON();
var features_strefacmentarzy_7 = format_strefacmentarzy_7.readFeatures(json_strefacmentarzy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefacmentarzy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefacmentarzy_7.addFeatures(features_strefacmentarzy_7);
var lyr_strefacmentarzy_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefacmentarzy_7, 
                style: style_strefacmentarzy_7,
                popuplayertitle: 'strefa cmentarzy',
                interactive: true,
                title: '<img src="styles/legend/strefacmentarzy_7.png" /> strefa cmentarzy'
            });
var format_strefazieleniirekreacji_8 = new ol.format.GeoJSON();
var features_strefazieleniirekreacji_8 = format_strefazieleniirekreacji_8.readFeatures(json_strefazieleniirekreacji_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefazieleniirekreacji_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefazieleniirekreacji_8.addFeatures(features_strefazieleniirekreacji_8);
var lyr_strefazieleniirekreacji_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefazieleniirekreacji_8, 
                style: style_strefazieleniirekreacji_8,
                popuplayertitle: 'strefa zieleni i rekreacji',
                interactive: true,
                title: '<img src="styles/legend/strefazieleniirekreacji_8.png" /> strefa zieleni i rekreacji'
            });
var format_strefainfrastrukturalna_9 = new ol.format.GeoJSON();
var features_strefainfrastrukturalna_9 = format_strefainfrastrukturalna_9.readFeatures(json_strefainfrastrukturalna_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefainfrastrukturalna_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefainfrastrukturalna_9.addFeatures(features_strefainfrastrukturalna_9);
var lyr_strefainfrastrukturalna_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefainfrastrukturalna_9, 
                style: style_strefainfrastrukturalna_9,
                popuplayertitle: 'strefa infrastrukturalna',
                interactive: true,
                title: '<img src="styles/legend/strefainfrastrukturalna_9.png" /> strefa infrastrukturalna'
            });
var format_strefaprodukcjirolniczej_10 = new ol.format.GeoJSON();
var features_strefaprodukcjirolniczej_10 = format_strefaprodukcjirolniczej_10.readFeatures(json_strefaprodukcjirolniczej_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefaprodukcjirolniczej_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefaprodukcjirolniczej_10.addFeatures(features_strefaprodukcjirolniczej_10);
var lyr_strefaprodukcjirolniczej_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefaprodukcjirolniczej_10, 
                style: style_strefaprodukcjirolniczej_10,
                popuplayertitle: 'strefa produkcji rolniczej',
                interactive: true,
                title: '<img src="styles/legend/strefaprodukcjirolniczej_10.png" /> strefa produkcji rolniczej'
            });
var format_strefagospodarcza_11 = new ol.format.GeoJSON();
var features_strefagospodarcza_11 = format_strefagospodarcza_11.readFeatures(json_strefagospodarcza_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefagospodarcza_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefagospodarcza_11.addFeatures(features_strefagospodarcza_11);
var lyr_strefagospodarcza_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefagospodarcza_11, 
                style: style_strefagospodarcza_11,
                popuplayertitle: 'strefa gospodarcza',
                interactive: true,
                title: '<img src="styles/legend/strefagospodarcza_11.png" /> strefa gospodarcza'
            });
var format_strefausugowa_12 = new ol.format.GeoJSON();
var features_strefausugowa_12 = format_strefausugowa_12.readFeatures(json_strefausugowa_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefausugowa_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefausugowa_12.addFeatures(features_strefausugowa_12);
var lyr_strefausugowa_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefausugowa_12, 
                style: style_strefausugowa_12,
                popuplayertitle: 'strefa usługowa',
                interactive: true,
                title: '<img src="styles/legend/strefausugowa_12.png" /> strefa usługowa'
            });
var format_strefawielofunkcyjnazzabudowzagrodow_13 = new ol.format.GeoJSON();
var features_strefawielofunkcyjnazzabudowzagrodow_13 = format_strefawielofunkcyjnazzabudowzagrodow_13.readFeatures(json_strefawielofunkcyjnazzabudowzagrodow_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefawielofunkcyjnazzabudowzagrodow_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefawielofunkcyjnazzabudowzagrodow_13.addFeatures(features_strefawielofunkcyjnazzabudowzagrodow_13);
var lyr_strefawielofunkcyjnazzabudowzagrodow_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefawielofunkcyjnazzabudowzagrodow_13, 
                style: style_strefawielofunkcyjnazzabudowzagrodow_13,
                popuplayertitle: 'strefa wielofunkcyjna z zabudową zagrodową',
                interactive: true,
                title: '<img src="styles/legend/strefawielofunkcyjnazzabudowzagrodow_13.png" /> strefa wielofunkcyjna z zabudową zagrodową'
            });
var format_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14 = new ol.format.GeoJSON();
var features_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14 = format_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14.readFeatures(json_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14.addFeatures(features_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14);
var lyr_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14, 
                style: style_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14,
                popuplayertitle: 'strefa wielofunkcyjna z zabudową mieszkaniową jednorodzinną',
                interactive: true,
                title: '<img src="styles/legend/strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14.png" /> strefa wielofunkcyjna z zabudową mieszkaniową jednorodzinną'
            });
var format_budynki_bdot10k_15 = new ol.format.GeoJSON();
var features_budynki_bdot10k_15 = format_budynki_bdot10k_15.readFeatures(json_budynki_bdot10k_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_budynki_bdot10k_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_budynki_bdot10k_15.addFeatures(features_budynki_bdot10k_15);
var lyr_budynki_bdot10k_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_budynki_bdot10k_15, 
                style: style_budynki_bdot10k_15,
                popuplayertitle: 'budynki_bdot10k',
                interactive: true,
                title: '<img src="styles/legend/budynki_bdot10k_15.png" /> budynki_bdot10k'
            });
var format_EGB_DzialkaEwidencyjna_16 = new ol.format.GeoJSON();
var features_EGB_DzialkaEwidencyjna_16 = format_EGB_DzialkaEwidencyjna_16.readFeatures(json_EGB_DzialkaEwidencyjna_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGB_DzialkaEwidencyjna_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGB_DzialkaEwidencyjna_16.addFeatures(features_EGB_DzialkaEwidencyjna_16);
var lyr_EGB_DzialkaEwidencyjna_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EGB_DzialkaEwidencyjna_16, 
                style: style_EGB_DzialkaEwidencyjna_16,
                popuplayertitle: 'EGB_DzialkaEwidencyjna',
                interactive: true,
                title: '<img src="styles/legend/EGB_DzialkaEwidencyjna_16.png" /> EGB_DzialkaEwidencyjna'
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
var group_Strefy_planistyczne = new ol.layer.Group({
                                layers: [lyr_strefakomunikacyjna_4,lyr_strefaotwarta_5,lyr_strefagrnictwa_6,lyr_strefacmentarzy_7,lyr_strefazieleniirekreacji_8,lyr_strefainfrastrukturalna_9,lyr_strefaprodukcjirolniczej_10,lyr_strefagospodarcza_11,lyr_strefausugowa_12,lyr_strefawielofunkcyjnazzabudowzagrodow_13,lyr_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14,],
                                fold: 'close',
                                title: 'Strefy_planistyczne'});

lyr_OSMStandard_0.setVisible(true);lyr_Ortofotomapastandardowa_1.setVisible(false);lyr_SUiKZP_2.setVisible(false);lyr_MPZP_3.setVisible(false);lyr_strefakomunikacyjna_4.setVisible(true);lyr_strefaotwarta_5.setVisible(true);lyr_strefagrnictwa_6.setVisible(true);lyr_strefacmentarzy_7.setVisible(true);lyr_strefazieleniirekreacji_8.setVisible(true);lyr_strefainfrastrukturalna_9.setVisible(true);lyr_strefaprodukcjirolniczej_10.setVisible(true);lyr_strefagospodarcza_11.setVisible(true);lyr_strefausugowa_12.setVisible(true);lyr_strefawielofunkcyjnazzabudowzagrodow_13.setVisible(true);lyr_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14.setVisible(true);lyr_budynki_bdot10k_15.setVisible(true);lyr_EGB_DzialkaEwidencyjna_16.setVisible(true);lyr_OBREBY_17.setVisible(true);lyr_AktPlanowaniaPrzestrzennego_18.setVisible(true);lyr_wnioski_prywatne_19.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Ortofotomapastandardowa_1,lyr_SUiKZP_2,lyr_MPZP_3,group_Strefy_planistyczne,lyr_budynki_bdot10k_15,lyr_EGB_DzialkaEwidencyjna_16,lyr_OBREBY_17,lyr_AktPlanowaniaPrzestrzennego_18,lyr_wnioski_prywatne_19];
lyr_strefakomunikacyjna_4.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_strefaotwarta_5.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_strefagrnictwa_6.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_strefacmentarzy_7.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_strefazieleniirekreacji_8.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_strefainfrastrukturalna_9.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_strefaprodukcjirolniczej_10.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_strefagospodarcza_11.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_strefausugowa_12.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_strefawielofunkcyjnazzabudowzagrodow_13.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'oznaczenie': 'oznaczenie', 'symbol': 'symbol', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'charakterUstalenia': 'charakterUstalenia', 'plan': 'plan', 'nazwa': 'nazwa', 'nazwaAlternatywna': 'nazwaAlternatywna', 'profilPodstawowy': 'profilPodstawowy', 'profilDodatkowy': 'profilDodatkowy', 'maksNadziemnaIntensywnoscZabudowy': 'maksNadziemnaIntensywnoscZabudowy', 'maksUdzialPowierzchniZabudowy': 'maksUdzialPowierzchniZabudowy', 'maksWysokoscZabudowy': 'maksWysokoscZabudowy', 'minUdzialPowierzchniBiologicznieCzynnej': 'minUdzialPowierzchniBiologicznieCzynnej', 'edycja': 'edycja', });
lyr_budynki_bdot10k_15.set('fieldAliases', {'TERYT': 'TERYT', 'LOKALNYID': 'LOKALNYID', 'PRZES_NAZW': 'PRZES_NAZW', 'WERSJA': 'WERSJA', 'POCZ_WERSJ': 'POCZ_WERSJ', 'OZNA_ZMIAN': 'OZNA_ZMIAN', 'ZRO_DANYCH': 'ZRO_DANYCH', 'KAT_ISTNIE': 'KAT_ISTNIE', 'UWAGI': 'UWAGI', 'INFO_DODAT': 'INFO_DODAT', 'KOD10K': 'KOD10K', 'SKROT_KART': 'SKROT_KART', 'KODKST': 'KODKST', 'FOBUD': 'FOBUD', 'FSBUD': 'FSBUD', 'PFBUD': 'PFBUD', 'LICZ_KONDY': 'LICZ_KONDY', 'NAZWA': 'NAZWA', });
lyr_EGB_DzialkaEwidencyjna_16.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'lokalnyId': 'lokalnyId', 'przestrzenNazw': 'przestrzenNazw', 'wersjaId': 'wersjaId', 'startObiekt': 'startObiekt', 'startWersjaObiekt': 'startWersjaObiekt', 'idDzialki': 'idDzialki', 'poleEwidencyjne': 'poleEwidencyjne', 'poleEwidencyjne_uom': 'poleEwidencyjne_uom', 'dokladnoscReprezentacjiPola': 'dokladnoscReprezentacjiPola', 'OFU': 'OFU', 'OZU': 'OZU', 'OZK': 'OZK', 'powierzchnia': 'powierzchnia', 'powierzchnia_uom': 'powierzchnia_uom', 'koniecWersjaObiekt': 'koniecWersjaObiekt', 'koniecObiekt': 'koniecObiekt', });
lyr_OBREBY_17.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'DATA': 'DATA', });
lyr_AktPlanowaniaPrzestrzennego_18.set('fieldAliases', {'fid': 'fid', 'przestrzenNazw': 'przestrzenNazw', 'lokalnyId': 'lokalnyId', 'wersjaId': 'wersjaId', 'poczatekWersjiObiektu': 'poczatekWersjiObiektu', 'koniecWersjiObiektu': 'koniecWersjiObiektu', 'tytul': 'tytul', 'tytulAlternatywny': 'tytulAlternatywny', 'typPlanu': 'typPlanu', 'poziomHierarchii': 'poziomHierarchii', 'obowiazujeOd': 'obowiazujeOd', 'obowiazujeDo': 'obowiazujeDo', 'status': 'status', 'modyfikacja': 'modyfikacja', 'edycja': 'edycja', });
lyr_wnioski_prywatne_19.set('fieldAliases', {'Wniosek': 'Wniosek', 'Nr-wniosku': 'Nr-wniosku', });
lyr_strefakomunikacyjna_4.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_strefaotwarta_5.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_strefagrnictwa_6.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_strefacmentarzy_7.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_strefazieleniirekreacji_8.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_strefainfrastrukturalna_9.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_strefaprodukcjirolniczej_10.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_strefagospodarcza_11.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_strefausugowa_12.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_strefawielofunkcyjnazzabudowzagrodow_13.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14.set('fieldImages', {'fid': '', 'przestrzenNazw': '', 'lokalnyId': '', 'wersjaId': '', 'oznaczenie': '', 'symbol': '', 'poczatekWersjiObiektu': '', 'koniecWersjiObiektu': '', 'obowiazujeOd': '', 'obowiazujeDo': '', 'status': '', 'charakterUstalenia': '', 'plan': '', 'nazwa': '', 'nazwaAlternatywna': '', 'profilPodstawowy': '', 'profilDodatkowy': '', 'maksNadziemnaIntensywnoscZabudowy': '', 'maksUdzialPowierzchniZabudowy': '', 'maksWysokoscZabudowy': '', 'minUdzialPowierzchniBiologicznieCzynnej': '', 'edycja': '', });
lyr_budynki_bdot10k_15.set('fieldImages', {'TERYT': 'TextEdit', 'LOKALNYID': 'TextEdit', 'PRZES_NAZW': 'TextEdit', 'WERSJA': 'TextEdit', 'POCZ_WERSJ': 'TextEdit', 'OZNA_ZMIAN': 'TextEdit', 'ZRO_DANYCH': 'TextEdit', 'KAT_ISTNIE': 'TextEdit', 'UWAGI': 'TextEdit', 'INFO_DODAT': 'TextEdit', 'KOD10K': 'TextEdit', 'SKROT_KART': 'TextEdit', 'KODKST': 'TextEdit', 'FOBUD': 'TextEdit', 'FSBUD': 'TextEdit', 'PFBUD': 'TextEdit', 'LICZ_KONDY': 'TextEdit', 'NAZWA': 'TextEdit', });
lyr_EGB_DzialkaEwidencyjna_16.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'lokalnyId': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'wersjaId': 'TextEdit', 'startObiekt': 'TextEdit', 'startWersjaObiekt': 'TextEdit', 'idDzialki': 'TextEdit', 'poleEwidencyjne': 'TextEdit', 'poleEwidencyjne_uom': 'TextEdit', 'dokladnoscReprezentacjiPola': 'Range', 'OFU': 'TextEdit', 'OZU': 'TextEdit', 'OZK': 'TextEdit', 'powierzchnia': 'TextEdit', 'powierzchnia_uom': 'TextEdit', 'koniecWersjaObiekt': 'TextEdit', 'koniecObiekt': 'TextEdit', });
lyr_OBREBY_17.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'DATA': 'DateTime', });
lyr_AktPlanowaniaPrzestrzennego_18.set('fieldImages', {'fid': 'TextEdit', 'przestrzenNazw': 'TextEdit', 'lokalnyId': 'TextEdit', 'wersjaId': 'DateTime', 'poczatekWersjiObiektu': 'DateTime', 'koniecWersjiObiektu': 'DateTime', 'tytul': 'TextEdit', 'tytulAlternatywny': 'TextEdit', 'typPlanu': 'ValueMap', 'poziomHierarchii': 'ValueMap', 'obowiazujeOd': 'DateTime', 'obowiazujeDo': 'DateTime', 'status': 'ValueMap', 'modyfikacja': 'CheckBox', 'edycja': '', });
lyr_wnioski_prywatne_19.set('fieldImages', {'Wniosek': 'TextEdit', 'Nr-wniosku': '', });
lyr_strefakomunikacyjna_4.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_strefaotwarta_5.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_strefagrnictwa_6.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_strefacmentarzy_7.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_strefazieleniirekreacji_8.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_strefainfrastrukturalna_9.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_strefaprodukcjirolniczej_10.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_strefagospodarcza_11.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_strefausugowa_12.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_strefawielofunkcyjnazzabudowzagrodow_13.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_strefawielofunkcyjnazzabudowmieszkaniowjednorodzinn_14.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'oznaczenie': 'no label', 'symbol': 'no label', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'charakterUstalenia': 'hidden field', 'plan': 'hidden field', 'nazwa': 'no label', 'nazwaAlternatywna': 'hidden field', 'profilPodstawowy': 'inline label - always visible', 'profilDodatkowy': 'inline label - always visible', 'maksNadziemnaIntensywnoscZabudowy': 'inline label - always visible', 'maksUdzialPowierzchniZabudowy': 'inline label - always visible', 'maksWysokoscZabudowy': 'inline label - always visible', 'minUdzialPowierzchniBiologicznieCzynnej': 'inline label - always visible', 'edycja': 'hidden field', });
lyr_budynki_bdot10k_15.set('fieldLabels', {'TERYT': 'hidden field', 'LOKALNYID': 'hidden field', 'PRZES_NAZW': 'hidden field', 'WERSJA': 'hidden field', 'POCZ_WERSJ': 'hidden field', 'OZNA_ZMIAN': 'hidden field', 'ZRO_DANYCH': 'hidden field', 'KAT_ISTNIE': 'hidden field', 'UWAGI': 'hidden field', 'INFO_DODAT': 'hidden field', 'KOD10K': 'hidden field', 'SKROT_KART': 'hidden field', 'KODKST': 'hidden field', 'FOBUD': 'hidden field', 'FSBUD': 'no label', 'PFBUD': 'hidden field', 'LICZ_KONDY': 'hidden field', 'NAZWA': 'hidden field', });
lyr_EGB_DzialkaEwidencyjna_16.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'lokalnyId': 'hidden field', 'przestrzenNazw': 'hidden field', 'wersjaId': 'hidden field', 'startObiekt': 'hidden field', 'startWersjaObiekt': 'hidden field', 'idDzialki': 'inline label - always visible', 'poleEwidencyjne': 'hidden field', 'poleEwidencyjne_uom': 'hidden field', 'dokladnoscReprezentacjiPola': 'hidden field', 'OFU': 'hidden field', 'OZU': 'hidden field', 'OZK': 'hidden field', 'powierzchnia': 'hidden field', 'powierzchnia_uom': 'hidden field', 'koniecWersjaObiekt': 'hidden field', 'koniecObiekt': 'hidden field', });
lyr_OBREBY_17.set('fieldLabels', {'ID_DZIALKI': 'hidden field', 'NUMER_DZIA': 'hidden field', 'NUMER_OBRE': 'hidden field', 'NUMER_JEDN': 'hidden field', 'NAZWA_OBRE': 'no label', 'NAZWA_GMIN': 'hidden field', 'DATA': 'hidden field', });
lyr_AktPlanowaniaPrzestrzennego_18.set('fieldLabels', {'fid': 'hidden field', 'przestrzenNazw': 'hidden field', 'lokalnyId': 'hidden field', 'wersjaId': 'hidden field', 'poczatekWersjiObiektu': 'hidden field', 'koniecWersjiObiektu': 'hidden field', 'tytul': 'hidden field', 'tytulAlternatywny': 'hidden field', 'typPlanu': 'hidden field', 'poziomHierarchii': 'hidden field', 'obowiazujeOd': 'hidden field', 'obowiazujeDo': 'hidden field', 'status': 'hidden field', 'modyfikacja': 'hidden field', 'edycja': 'hidden field', });
lyr_wnioski_prywatne_19.set('fieldLabels', {'Wniosek': 'inline label - always visible', 'Nr-wniosku': 'inline label - always visible', });
lyr_wnioski_prywatne_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});