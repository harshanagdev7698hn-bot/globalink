const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const PORT = process.env.PORT || 4000;

// ---- In-memory data (later MongoDB) ----
let consultants = [
  { id: "c-1001", name: "Pramod Sir", domain: "BIS / ISI", country: "IN", price: 1500, verified: true, rating: 4.7 },
  { id: "c-1002", name: "Nitin Patel", domain: "ISO 9001", country: "IN", price: 1200, verified: false, rating: 4.2 },
  { id: "c-1003", name: "Ayesha Khan", domain: "Import/Export", country: "IN", price: 1800, verified: true, rating: 4.5 },
];

let labs = [
  { id: "l-2001", name: "Alpha Testing Lab", service: "ROHS / Safety", country: "IN", price: 2500, accredited: true, rating: 4.6 },
  { id: "l-2002", name: "Prime Calibration", service: "Calibration", country: "IN", price: 1800, accredited: false, rating: 4.1 },
  { id: "l-2003", name: "BIS Support Lab", service: "BIS Testing", country: "IN", price: 3000, accredited: true, rating: 4.8 },
];

let marketplace = [
  { id: "m-3001", title: "Digital Vernier Caliper", category: "Measuring Tool", price: 899, stock: 10 },
  { id: "m-3002", title: "Insulation Tester", category: "Electrical", price: 3499, stock: 5 },
  { id: "m-3003", title: "Weighing Scale (Lab)", category: "Lab Equipment", price: 4999, stock: 2 },
];

let requests = [
  { id: "r-4001", type: "consultant", title: "Need BIS for toy", status: "open" },
  { id: "r-4002", type: "lab", title: "ROHS report urgent", status: "in_progress" },
];

// ---- helpers ----
const id = (prefix) => `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;

// ---- Stats (dashboard tiles) ----
app.get("/stats/dashboard", (req, res) => {
  const consultantsVerified = consultants.filter((c) => c.verified).length;
  const labsAccredited = labs.filter((l) => l.accredited).length;
  const reqOpen = requests.filter((r) => r.status === "open").length;
  const reqInProgress = requests.filter((r) => r.status === "in_progress").length;
  const reqResolved = requests.filter((r) => r.status === "resolved").length;

  res.json({
    consultants: { active: consultants.length, verified: consultantsVerified },
    labs: { active: labs.length, accredited: labsAccredited },
    marketplace: { listings: marketplace.length, inReview: 1 },
    requests: { open: reqOpen, inProgress: reqInProgress, resolved: reqResolved },
    orders: { new: 2, delivered: 5 },
    revenue: { totalFY: 0, thisMonth: 0 },
    escrow: { held: 0, released: 0 },
    kyc: { pending: 3, approved: 9 },
    disputes: { open: 0, closed: 0 },
  });
});

// ---- Consultants CRUD ----
app.get("/consultants", (req, res) => res.json(consultants));

app.post("/consultants", (req, res) => {
  const body = req.body || {};
  const item = {
    id: id("c"),
    name: body.name || "New Consultant",
    domain: body.domain || "BIS",
    country: body.country || "IN",
    price: Number(body.price || 0),
    verified: Boolean(body.verified || false),
    rating: Number(body.rating || 0),
  };
  consultants.unshift(item);
  res.json(item);
});

app.put("/consultants/:id", (req, res) => {
  const { id: cid } = req.params;
  const idx = consultants.findIndex((x) => x.id === cid);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  consultants[idx] = { ...consultants[idx], ...req.body };
  res.json(consultants[idx]);
});

app.delete("/consultants/:id", (req, res) => {
  const { id: cid } = req.params;
  consultants = consultants.filter((x) => x.id !== cid);
  res.json({ ok: true });
});

// ---- Labs CRUD ----
app.get("/labs", (req, res) => res.json(labs));

app.post("/labs", (req, res) => {
  const body = req.body || {};
  const item = {
    id: id("l"),
    name: body.name || "New Lab",
    service: body.service || "Testing",
    country: body.country || "IN",
    price: Number(body.price || 0),
    accredited: Boolean(body.accredited || false),
    rating: Number(body.rating || 0),
  };
  labs.unshift(item);
  res.json(item);
});

app.put("/labs/:id", (req, res) => {
  const { id: lid } = req.params;
  const idx = labs.findIndex((x) => x.id === lid);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  labs[idx] = { ...labs[idx], ...req.body };
  res.json(labs[idx]);
});

app.delete("/labs/:id", (req, res) => {
  const { id: lid } = req.params;
  labs = labs.filter((x) => x.id !== lid);
  res.json({ ok: true });
});

// ---- Marketplace CRUD ----
app.get("/marketplace", (req, res) => res.json(marketplace));

app.post("/marketplace", (req, res) => {
  const body = req.body || {};
  const item = {
    id: id("m"),
    title: body.title || "New Item",
    category: body.category || "General",
    price: Number(body.price || 0),
    stock: Number(body.stock || 0),
  };
  marketplace.unshift(item);
  res.json(item);
});

app.put("/marketplace/:id", (req, res) => {
  const { id: mid } = req.params;
  const idx = marketplace.findIndex((x) => x.id === mid);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  marketplace[idx] = { ...marketplace[idx], ...req.body };
  res.json(marketplace[idx]);
});

app.delete("/marketplace/:id", (req, res) => {
  const { id: mid } = req.params;
  marketplace = marketplace.filter((x) => x.id !== mid);
  res.json({ ok: true });
});

// ---- Requests ----
app.get("/requests", (req, res) => res.json(requests));

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
