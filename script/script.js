// artwork by xyz. where i store the bits that go on the side.


var contents = [
    'image1x1.jpg','image1x2.jpg','image1x3.jpg','image1x4.jpg','image2x1.jpg','image2x2.jpg','image2x3.jpg','image2x4.jpg','image3x1.jpg','image3x2.jpg','image3x3.jpg','image3x4.jpg','image4x1.jpg','image4x2.jpg','image4x3.jpg','image4x4.jpg'
];

window.onload = function() {
    var imageList = document.querySelector('#side-column ul'); // Get the ul element

    contents.forEach(function(imageSrc) {
        var li = document.createElement('li'); // Create a new list item
        var img = document.createElement('img');
        img.src = imageSrc; // Set the source of the image
        img.className = 'border-image';
        li.appendChild(img); // Append the image to the list item
        imageList.appendChild(li); // Append the list item to the ul
    });
};