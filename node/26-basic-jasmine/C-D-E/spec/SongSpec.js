let Song = require("../lib/song");

describe("song test",function(){

    let song;

    beforeEach(function () {
        song = new Song("Apach","Bongo Rock","Incredible Bongo Band");;
    });

    afterEach(function () {
        song = null;
    });

    
    it("song name",function(){
        expect(song.name).toEqual("Apach");
    });

    it("song album",function(){
        expect(song.album).toEqual("Bongo Rock");
    });

    it("song author",function(){
        expect(song.author).toEqual("Incredible Bongo Band");
    });

    it("song getDescription",function(){

        let testStg = "The name of this song is Apach and it is from the album Bongo Rock. It is written by Incredible Bongo Band"

        expect(song.getDescription()).toEqual(testStg);
    });

    it("same song",function(){
        expect(song.isInSameAlbum("Apach")).toEqual(true);
    });

    it("different song",function(){
        expect(song.isInSameAlbum("Let There Be Drums")).toEqual(false);
    });

    it("same album",function(){
        let song2 = new Song("In A Gadda Da Vida","Bongo Rock","Incredible Bongo Band");

        expect(song).toBeInTheSameAlbumAs(song2);
    })

});
