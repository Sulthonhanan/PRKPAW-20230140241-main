const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const PORT = 3001;

// Import router
const presensiRoutes = require("./routes/presensi");
const reportRoutes = require("./routes/reports");

// Middleware umum
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// Middleware custom untuk logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Route utama
app.get("/", (req, res) => {
  res.send("Home Page for API");
});

// Gunakan route presensi dan report
app.use("/api/presensi", presensiRoutes);
app.use("/api/reports", reportRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}/`);
});
