const Member = require('../models/member.model')

module.exports.findAllMembers = (req, res) => {
  Member.find()

    .then((allDaMembers) => {
      res.json(allDaMembers);
    })

    .catch((err) => {
            res.json(err);
    });
};

module.exports.findOneSingleMember = (req, res) => {
  Member.findOne({ _id: req.params.id })

    .then((oneSingleMember) => {
      res.json(oneSingleMember);
    })

    .catch((err) => {
            res.json(err);
    });
};

module.exports.createNewMember = (req, res) => {
  Member.create(req.body)

    .then((newlyCreatedMember) => {
      res.json({ member: newlyCreatedMember });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
      const errors = {};
      for (let field in error.errors) {
        errors[field] = error.errors[field].message;
      }
      return res.status(400).json({ message: 'Validation failed', errors });
    }
    });
};

module.exports.updateExistingMember = (req, res) => {
  Member.findOneAndUpdate(
    { _id: req.params.id },

    req.body,

    { new: true, runValidators: true }
  )

    .then((updatedMember) => {
      res.json(updatedMember);
    })

    .catch((error) => {
      if (error.name === 'ValidationError') {
      const errors = {};
      for (let field in error.errors) {
        errors[field] = error.errors[field].message;
      }
      return res.status(400).json({ message: 'Validation failed', errors });
    }
    });
};

module.exports.deleteAnExistingMember = (req, res) => {
  Member.deleteOne({ _id: req.params.id })

    .then((result) => {
      res.json(result);
    })

    .catch((err) => {
      res.json(err);
    });
};
