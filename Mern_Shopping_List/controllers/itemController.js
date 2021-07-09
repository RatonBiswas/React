const Item = require("../models/ItemModel");

// Get all items
exports.getAllItems = (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => {
      res.json(items);
    });
};

// Get a item
exports.getItem = (req, res) => {
  Item.findById(req.params.id).then((items) => {
    res.json(items);
  });
};

// Create an item
exports.createItem = (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => {
    res.json(item);
  });
};

// Delete an item
exports.deleteItem = (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
};

// Edit an item
exports.editItem = (req, res) => {
  const doc = Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
};
