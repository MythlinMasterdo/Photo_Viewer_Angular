var photoAlbum = angular.module('photo_album', []);

photoAlbum.controller('photo_album_controller', function photoAlbumController($scope) {
  $scope.photos = [
    {
      url: 'http://images.car.bauercdn.com/pagefiles/10362/1752x1168/001porschegt3rs10.jpg?mode=max&quality=90&scale=down',
      title: 'Porsche 991 911 GT3RS',
      rating: 'Rating 4.4'
    },
    {
      url: 'https://i.ytimg.com/vi/N_C6pMZlkdQ/maxresdefault.jpg',
      title: 'Ford GT',
      rating: 'Rating 4.7'
    },
    {
      url: 'http://veepix.com/mclaren-images/wp-content/uploads/sites/71/2015/10/2015-McLaren-675LT-Coupe-Chicane-Grey-01.jpg',
      title: 'Mclaren 675LT',
      rating: 'Rating 4.2'
    },
    {
      url: 'http://fullhdpictures.com/wp-content/uploads/2016/07/Ferrari-458-Speciale-Wallpaper-HD.jpg',
      title: 'Ferrari 458 Speciale',
      rating: 'Rating 4.0'
    }
  ];
  $scope.activePhoto = $scope.photos[0].url;
  $scope.photoRating = $scope.photos[0].rating;

  $scope.setActive = function(selectedPhoto) {
    $scope.activePhoto = selectedPhoto;
  };

  $scope.activeRating = function(selectedRating) {
    console.log('inputVal', $scope.inputVal);
    $scope.photoRating = selectedRating;
  };

  $scope.onload = function() {
    setActive(activePhoto);
  };

  $scope.updateRating = function(newRating) {
    console.log('in rating', newRating);
    $scope.inputVal = newRating;
    $scope.activePhoto.rating = 'Rating ' + newRating;
  };
});
