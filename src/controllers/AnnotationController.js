const Annotations = require('../models/AnnotationData');

module.exports = {


    async read(req,res) {
        const AnnotationsList = await Annotations.find();
        return res.json(AnnotationsList);
    },

    create(req, res) {
        const { title, notes, priority } = request.body;

        console.log(title);
        console.log(notes);
        console.log(priority);
    }

};