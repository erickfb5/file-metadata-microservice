const uploadFile = (req, res) => {
  try {
    const uploadedFile = req.file;
    if (!uploadedFile) return res.status(400).json({ error: "No file uploaded." });

    const { originalname, mimetype, size } = uploadedFile;
    res.json({ name: originalname, type: mimetype, size });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { uploadFile };