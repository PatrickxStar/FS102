const photoSlideShow = {
     photoList: ['photo1', 'photo2', 'photo3','photo4'],
     currentPhotoIndex: 0,

    nextPhoto: function () {
        if (this.currentPhotoIndex >= 0 && this.currentPhotoIndex < 3) { 
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of slideshow');
        }
    },
    prevPhoto: function () {
        if (this.currentPhotoIndex > 0 && this.currentPhotoIndex <= 3) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of slideshow');
        }
    },
    getCurrentPhoto: function () {
        return this.photoList[this.currentPhotoIndex];
    }
};
console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
