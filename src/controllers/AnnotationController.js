const Annotations = require('../models/AnnotationData');

module.exports = {


    async read(req,res) {
        const AnnotationsList = await Annotations.find();
        return res.json(AnnotationsList);
    },

    async create(req, res) {
        const { title, notes, priority } = req.body;

        if(!notes || !title){
            return res.status(400).json({ error: "Necessário um título/anotação!" });
        }

        const annotationsCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return res.json(annotationsCreated);
    },

    async delete(req, res) {
        const { id } = req.params;

        const annotationDeleted = await Annotations.findOneAndDelete({
            _id : id
        });

        if(annotationDeleted) {
            return res.json(annotationDeleted);
        }

        return response.status(401).json({ error: "Não foi encontrado o registro para deletar" });
    }

};