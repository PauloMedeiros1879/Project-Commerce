db.produtos.countDocuments({
  ingredientes: { $size: 4 },
}).pretty();