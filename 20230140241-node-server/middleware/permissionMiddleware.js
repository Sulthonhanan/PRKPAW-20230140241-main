exports.addUserData = (req, res, next) => {
  console.log("Middleware: Menambahkan data user tiruan (dummy)...");
  req.user = {
    id: 123,
    nama: "Sugeng Riyadi Suripto Abu Nawas",
    role: "admin",
  };
  next();
};

exports.isAdmin = (req, res, next) => {
  console.log("Middleware: Memeriksa apakah user adalah admin...");
  if (req.user && req.user.role === "admin") {
    console.log("Middleware: Izin admin diberikan.");
    next();
  } else {
    console.log("Middleware: Gagal! Pengguna bukan admin.");
    return res
      .status(403)
      .json({ message: "Akses ditolak: Hanya untuk admin" });
  }
};
