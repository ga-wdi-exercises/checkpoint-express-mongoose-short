module.exports = {
	create: (req, res) => {
		Note.create({
			author: req.body.models.content,
			title: req.body.models.content,
			body: req.body.models.content
		})
		}
	}