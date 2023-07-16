const { User, Thought } = require('../models');

module.exports = {
    // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();

      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const student = await Student.findOne({ _id: req.params.studentId })
        .select('-__v');

      if (!student) {
        return res.status(404).json({ message: 'No student with that ID' })
      }

      res.json({
        student,
        grade: await grade(req.params.studentId),
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
}