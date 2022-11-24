const { students } = require('../models');

exports.createStudent = (req, res) => {
  if (
    Object.keys(req.body).length == 0 ||
    !Object.values(req.body).every((i) => i)
  ) {
    return res.status(500).send({
      success: false,
      message: 'student detail is incomplete',
    });
  }
  const tempStudent = new students(req.body);
  tempStudent
    .save()
    .then((_) => {
      res.status(200).send({
        success: true,
        data: {
          message: 'Successfully created',
        },
      });
    })
    .catch((err) =>
      res.status(400).send({
        success: false,
        data: {
          message: 'Unable to create student',
          reason: err,
        },
      })
    );
};
