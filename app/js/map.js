var map,
    marker,
    markerCoords;
function initMap() {
    markerCoords = new google.maps.LatLng(49.9893702, 36.2332363);
    map = new google.maps.Map(document.getElementById(''), {
        center: markerCoords,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        draggable: true,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
    });
    marker = new google.maps.Marker({
        position: markerCoords,
        map: map
    });

}
