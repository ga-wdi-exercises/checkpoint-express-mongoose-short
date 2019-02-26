module.exports = {
    index: function(req,res){
        res.send("hello all notes")
    },

    show: function(req,res){
        res.send("hello single note")
    }

}