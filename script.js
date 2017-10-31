var p1c;
var p4c;
var cc;
var rn;
var rs;
var mc;
var uc;
var map;

function initMap() {
    var utd = {lat: 32.987437, lng: -96.749934};
    var data;
    var marker;
    var myLatLng;
    var icon1 = {
        url: 'http://tedtoddinsurance.com/uploads/products/golf-cart.svg',
        scaledSize: new google.maps.Size(60, 60)
    };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: utd
    });
    var json;
    //var json = {"cabs": [{"updated": "11:04:28", "name": "Rutford North", "moved": "11:04:28", "longitude": "-96.7501220703", "id": "7102760", "ignition": true, "latitude": "32.9901733398", "velocity": 0, "heading": 11}, {"updated": "10:37:51", "name": "Rutford South", "moved": "18:54:48", "longitude": "-96.750289917", "id": "7104491", "ignition": true, "latitude": "32.9902229309", "velocity": 0, "heading": 182}, {"updated": "12:09:11", "name": "McDermott", "moved": "12:42:10", "longitude": "-96.7507553101", "id": "7106219", "ignition": true, "latitude": "32.9898643494", "velocity": 0, "heading": 0}, {"updated": "10:38:10", "name": "Canyon Creek", "moved": "18:58:39", "longitude": "-96.7497024536", "id": "7106824", "ignition": true, "latitude": "32.9906158447", "velocity": 0, "heading": 34}, {"updated": "10:38:10", "name": "Phase 4-7", "moved": "19:01:10", "longitude": "-96.7500228882", "id": "7107681", "ignition": true, "latitude": "32.990234375", "velocity": 0, "heading": 29}, {"updated": "10:37:48", "name": "Commons", "moved": "10:37:48", "longitude": "-96.7501373291", "id": "7107893", "ignition": true, "latitude": "32.9902000427", "velocity": 0, "heading": 167}, {"updated": "11:04:33", "name": "Phase 1-3", "moved": "11:04:33", "longitude": "-96.750541687", "id": "7110694", "ignition": true, "latitude": "32.9894638062", "velocity": 0, "heading": 23}]};
    $.getJSON("https://t8ubh7xmac.execute-api.us-east-2.amazonaws.com/Test", function json1(data1){
        json = data1;
        console.log(json.cabs[0].name);
        for (var i = 0; i < json.cabs.length; i++) {
            data = json.cabs[i];
            console.log("JSON data: " + data);
            myLatLng = {lat: parseFloat(data.latitude), lng: parseFloat(data.longitude)};
            console.log("String -> number: " + myLatLng);
            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: data.name,
                label: data.name,
                icon: icon1
            });
            if(data.name === "Rutford North"){
                rn = myLatLng;
            }
            else if(data.name === "Rutford South"){
                rs = myLatLng;
            }
            else if(data.name === "Canyon Creek"){
                cc = myLatLng;
            }
            else if(data.name === "McDermott"){
                mc = myLatLng;
            }
            else if(data.name === "Phase 1-3"){
                p1c = myLatLng;
            }
            else if(data.name === "Phase 4-7"){
                p4c = myLatLng;
            }
            else if(data.name === "Commons"){
                uc = myLatLng;
            }
        }
    });
    $(document).ready(function ()
    {
        $("#p1").on('click', function ()
        {
            map.setCenter(new google.maps.LatLng(p1c));
            map.setZoom(17);
        });

        $("#p4").on('click', function ()
        {
            map.setCenter(new google.maps.LatLng(p4c));
            map.setZoom(17);
        });

        $("#cc").on('click', function ()
        {
            map.setCenter(new google.maps.LatLng(cc));
            map.setZoom(17);
        });
        $("#rn").on('click', function ()
        {
            map.setCenter(new google.maps.LatLng(rn));
            map.setZoom(17);
        });

        $("#rs").on('click', function ()
        {
            map.setCenter(new google.maps.LatLng(rs));
            map.setZoom(17);
        });

        $("#uc").on('click', function ()
        {
            map.setCenter(new google.maps.LatLng(uc));
            map.setZoom(17);
        });

        $("#mc").on('click', function ()
        {
            map.setCenter(new google.maps.LatLng(mc));
            map.setZoom(17);
        });
    });
}