var selectedImage = null;
function selectTarget(image) {
    if (selectedImage) {
        selectedImage.style.border = '';
    }
    image.style.border = '3px solid blue';
    selectedImage = image;
    document.getElementsByName('target_image')[0].value = image.src;
}