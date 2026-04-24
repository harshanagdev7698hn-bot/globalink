// src/routes/dashboard.js
const express = require("express");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/summary", authMiddleware, (req, res) => {
  const role = req.user.role;

  if (role === "buyer") {
    return res.json({
      role,
      cards: {
        activeProjects: 8,
        labJobs: 5,
        openRfqs: 3,
        pendingApprovals: 2,
      },
    });
  }

  if (role === "consultant") {
    return res.json({
      role,
      cards: {
        newLeads: 4,
        proposalsSent: 3,
        inExecution: 5,
      },
    });
  }

  if (role === "lab") {
    return res.json({
      role,
      cards: {
        samplesInLab: 27,
        nearTatLimit: 6,
        reportsReady: 5,
      },
    });
  }

  if (role === "seller") {
    return res.json({
      role,
      cards: {
        todaysOrders: 12,
        sevenDayPerformance: 18,
        lowStock: 4,
      },
    });
  }

  return res.json({ role, cards: {} });
});

module.exports = router;
