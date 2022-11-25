const { students, verification } = require('../models');

const client = require('twilio')(
  'ACea108d59a90a554f0a9a1e399911f01d',
  '9a8a6a2f5ad446f04e9d2ddc741a8515'
);

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

exports.sendVerifyCode = async (req, res) => {
  const { mobileNumber } = req.body;
  if (!mobileNumber) {
    res.status(400).send({
      success: false,
      data: {
        message: 'Phone number is required',
      },
    });
  }
  const isAlready = await verification.findOne({
    mobileNumber,
  });
  if (isAlready) {
    const code = Math.floor(100000 + Math.random() * 900000);
    verification
      .updateOne(
        {
          mobileNumber,
        },
        {
          code,
        }
      )
      .then((verify) => {
        console.log(verify[0]);
        client.messages
          .create({
            from: 'whatsapp:+14155238886',
            body: `Hello there! your code is ${code}`,
            to: `whatsapp:${mobileNumber}`,
          })
          .then((message) => {
            res.status(200).send(message);
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
      });
  } else {
    const verify = new verification({
      mobileNumber,
      code: Math.floor(100000 + Math.random() * 900000),
    });

    verify.save().then(() => {
      client.messages
        .create({
          from: 'whatsapp:+14155238886',
          body: `Hello there! your code is ${verify.code}`,
          to: `whatsapp:${mobileNumber}`,
        })
        .then((message) => {
          console.log(message);
          res.status(200).send({
            success: true,
            data: {
              message: 'Code successfully send',
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
    });
  }
};

exports.verifyCode = async (req, res) => {
  const { code, mobileNumber } = req.body;
  if (!code || !mobileNumber) {
    res.status(400).send({
      success: false,
      data: {
        message: 'Code and Mobile is required',
      },
    });
  }

  const isAlready = await verification.findOne({
    mobileNumber,
    code,
  });
  if (isAlready) {
    verification
      .remove({
        mobileNumber,
      })
      .then(() =>
        res.status(200).send({
          success: true,
          data: {
            message: 'Phone number is successfully verified',
            status: isAlready ? true : false,
          },
        })
      );
  } else {
    res.status(400).send({
      success: false,
      data: {
        message: 'invalid code',
      },
    });
  }
};
