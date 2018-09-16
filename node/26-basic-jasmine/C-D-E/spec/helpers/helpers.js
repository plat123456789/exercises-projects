beforeEach(function () {
  jasmine.addMatchers({
    toBeInTheSameAlbumAs: function () {
      console.log("test");
      return {
        compare: function (currentSong, otherSong) {
          return {
            pass: currentSong.album === otherSong.album
          }
        }
      };
    }
  });
});