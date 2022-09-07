const express = require("express");
const router = express.Router();
const {Pelanggan} =require("../models")

router.get("/pelanggan", async (req, res) => {
    const pelanggan = await Pelanggan.findAll();
    res.status(200).json({
      result: "SUCCESS",
      message: pelanggan,
    });
  });
  //add pelanggan
  router.post("/pelanggan", async (req, res) => {
    if (!req.body.nama || !req.body.email || !req.body.password) {
      res.status(400).json({
        result: "FAILED",
        message: "nama,email or password field cannot be empty.",
      });
      return;
    }
    try {
      await Pelanggan.create({
        nama: req.body.nama,
        email: req.body.email,
        password: req.body.password,
        alamat: req.body.alamat,
        noHp: req.body.noHp,
      });
      res.status(201).json({
        result: "SUCCESS",
        message: "Pelanggan was updated successfully.",
      });
    } catch (err) {
      res.status(500).json({
        result: "FAILED",
        message: "Error updating Pelanggan",
      });
    }
  });
  
  //edit pelanggan
  router.post("/pelanggan/edit", async (req, res) => {
    await Pelanggan.update(
      {
        nama: req.body.nama,
        email: req.body.email,
        password: req.body.password,
        alamat: req.body.alamat,
        noHp: req.body.noHp,
      },
      {
        where: { id: req.body.id },
      }
    )
      .then((num) => {
        if (num == 1) {
          res.status(200).json({
            result: "SUCCESS",
            message: "Data was updated successfully.",
          });
        } else {
          res.status(400).json({
            result: "FAILED",
            message: `Cannot update Pelanggan.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          result: "FAILED",
          message: "Error updating Pelanggan",
        });
      });
  });
  
  //delete pelanggan
  router.get("/pelanggan/delete/:id", async (req, res) => {
    await Pelanggan.destroy({
      where: { id: req.params.id },
    })
      .then((num) => {
        if (num == 1) {
          res.status(200).json({
            result: "SUCCESS",
            message: "Pelanggan was deleted successfully!",
          });
        } else {
          res.status(400).json({
            result: "FAILED",
            message: `Cannot delete Pelanggan`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          result: "FAILED",
          message: "Could not delete Pelanggan",
        });
      });
  });
  

module.exports = router;