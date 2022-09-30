import express from "express";
import contacts from "../controllers/contact.controller.js";
const router = express.Router();

router.post("/", contacts.createContact);

router.get("/", contacts.getAllContacts);

router.delete("/", contacts.deleteAllContacts);

router.get("/favorite", contacts.getAllFavorites);

router.get("/:id", contacts.getContact);

router.put("/:id", contacts.updateContact);

router.delete("/:id", contacts.deleteContact);

export default router;
