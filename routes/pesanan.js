const express = require("express");
const router = express.Router();
const { Pesanan } = require("../models");

router.get("/pesanan", async (req, res) => {
  const pesanan = await Pesanan.findAll();
  res.status(200).json({
    result: "SUCCESS",
    message: pesanan,
  });
});
//add pesanan
router.post("/pesanan", async (req, res) => {
  if (!req.body.pemesan || !req.body.menu || !req.body.jumlah) {
    res.status(400).json({
      result: "FAILED",
      message: "pemesan,menu or jumlah field cannot be empty.",
    });
    return;
  }
  try {
    await Pesanan.create({
      pemesan: req.body.pemesan,
      menu: req.body.menu,
      jumlah: req.body.jumlah,
      status: req.body.status,
      catatan: req.body.catatan,
    });
    res.status(201).json({
      result: "SUCCESS",
      message: "Pesanan was updated successfully.",
    });
  } catch (err) {
    res.status(500).json({
      result: "FAILED",
      message: "Error updating Pesanan",
    });
  }
});

//edit menu
router.post("/pesanan/edit", async (req, res) => {
  await Pesanan.update(
    {
      pemesan: req.body.pemesan,
      menu: req.body.menu,
      jumlah: req.body.jumlah,
      status: req.body.status,
      catatan: req.body.catatan,
    },
    {
      where: { id: req.body.id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.status(200).json({
          result: "SUCCESS",
          message: "Pesaanan was updated successfully.",
        });
      } else {
        res.status(400).json({
          result: "FAILED",
          message: `Cannot update Pesanan.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        result: "FAILED",
        message: "Error updating Pesanan",
      });
    });
});

//delete pesanan
router.get("/pesanan/delete/:id", async (req, res) => {
  await Pesanan.destroy({
    where: { id: req.params.id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).json({
          result: "SUCCESS",
          message: "Pesanan was deleted successfully!",
        });
      } else {
        res.status(400).json({
          result: "FAILED",
          message: `Cannot delete Pesanan`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        result: "FAILED",
        message: "Could not delete Pesanan",
      });
    });
});

module.exports = router;
