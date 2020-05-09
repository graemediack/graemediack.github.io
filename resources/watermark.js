L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
    var img = L.DomUtil.create('img');

    img.src = 'img/partner_logos.png';
    img.style.width = '300px';

    return img;
    },

    onRemove: function(map) {
        // Nothing to do here
    }
});

L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.watermark({ position: 'bottomleft' }).addTo(mymap);