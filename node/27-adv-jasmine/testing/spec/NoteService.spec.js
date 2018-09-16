const NoteService = require("..//NoteService");
const fs = require("fs")

describe("testing NoteService", function () {

    beforeEach(function(){
        if(fs.existsSync("test.json")){
            fs.unlinkSync("test.json");
        }
        fs.writeFileSync("test.json", "[]");
    });

    it("list note using kistNote()", function (done) {

        const noteService = new NoteService("test.json");

        noteService.listNote().then((result) => {
            expect(result).toEqual([]);
            done()
        }).catch((err) => {
            done.fail(err);
        });
    });

    it("add note using addNote()",function(){
        const noteService = new NoteService("test.json");

        noteService.addNote("test").then(() => {
            return noteService.listNote();
        }).then((result)=>{
            expect(result).toEqual(["test"]);
            done()
        }).catch((err) => {
            done.fail(err);
        });
    });

    it("add more than one note using addNote()",function(done){
        const noteService = new NoteService("test.json");

        noteService.addNote("test").then(() => {
            return noteService.listNote("second note");
        }).then(()=>{
            return noteService.listNote();
        }).then((result)=>{
            expect(result).toEqual(["test","second note"]);
            done();
        }).catch((err) => {
            done.fail(err);
        });
    })
});
