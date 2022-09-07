const express = require("express");
const router = express.Router();
const { Menu } = require("../models");

//get all menu
router.get("/menu", async (req, res) => {
  const menu = await Menu.findAll();
  res.status(200).json({
    result: "SUCCESS",
    message: menu,
  });
});

//add menu
router.post("/menu", async (req, res) => {
  if (!req.body.nama || !req.body.stock) {
    res.status(400).json({
      result: "FAILED",
      message: "nama or stock field cannot be empty.",
    });
    return;
  }
  try {
    await Menu.create({
      nama: req.body.nama,
      jenis: req.body.jenis,
      stock: req.body.stock,
      url: req.body.url,
    });
    res.status(201).json({
      result: "SUCCESS",
      message: "Menu was updated successfully.",
    });
  } catch (err) {
    res.status(500).json({
      result: "FAILED",
      message: "Error updating Menu",
    });
  }
});

//delete menu
router.get("/menu/delete/:id", async (req, res) => {
  await Menu.destroy({
    where: { id: req.params.id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).json({
          result: "SUCCESS",
          message: "Menu was deleted successfully!",
        });
      } else {
        res.status(400).json({
          result: "FAILED",
          message: `Cannot delete Menu`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        result: "FAILED",
        message: "Could not delete Menu",
      });
    });
});

//edit menu
router.post("/menu/edit", async (req, res) => {
  await Menu.update(
    {
      nama: req.body.nama,
      jenis: req.body.jenis,
      stock: req.body.stock,
      url: req.body.url,
    },
    {
      where: { id: req.body.id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.status(200).json({
          result: "SUCCESS",
          message: "Menu was updated successfully.",
        });
      } else {
        res.status(400).json({
          result: "FAILED",
          message: `Cannot update Menu.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        result: "FAILED",
        message: "Error updating Menu",
      });
    });
});

module.exports = router;
