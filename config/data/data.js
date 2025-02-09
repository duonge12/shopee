export const brands = [
    { id: 1, name: "Sony" },
    { id: 2, name: "Bose" },
    { id: 3, name: "Apple" }
];
export const products = [
  {
    id: 101,
    brandId: 1,
    name: "Sony WH-1000XM5",
    type: "Over-Ear",
    price: 399.99,
    features: ["Noise Cancelling", "Bluetooth 5.2", "30h Battery"],
    rating: 4.8,
    imageSrc: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-202409-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1726015508359",
    sale: 0.15,
    city: 1, // Hà Nội
    available: 20
  },
  {
    id: 102,
    brandId: 1,
    name: "Sony WF-1000XM4",
    type: "In-Ear",
    price: 279.99,
    features: ["Noise Cancelling", "True Wireless", "8h Battery"],
    rating: 4.7,
    imageSrc: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-202409-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1726015508359",
    sale: 0.20,
    city: 2, // Hồ Chí Minh
    available: 15
  },
  {
    id: 103,
    brandId: 1,
    name: "Sony WH-CH710N",
    type: "Over-Ear",
    price: 129.99,
    features: ["Noise Cancelling", "Wireless", "35h Battery"],
    rating: 4.5,
    imageSrc: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-202409-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1726015508359",
    sale: 0.10,
    city: 3, // Đà Nẵng
    available: 10
  },
  {
    id: 104,
    brandId: 1,
    name: "Sony WI-C310",
    type: "Neckband",
    price: 49.99,
    features: ["Wireless", "15h Battery", "Magnetic Earbuds"],
    rating: 4.2,
    imageSrc: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-202409-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1726015508359",
    sale: 0.05,
    city: 4, // Hải Phòng
    available: 30
  },
  {
    id: 201,
    brandId: 2,
    name: "Bose QuietComfort 45",
    type: "Over-Ear",
    price: 329.00,
    features: ["Noise Cancelling", "Bluetooth 5.1", "24h Battery"],
    rating: 4.6,
    imageSrc: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-202409-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1726015508359",
    sale: 0.25,
    city: 5, // Cần Thơ
    available: 25
  },
  {
    id: 202,
    brandId: 2,
    name: "Bose Sport Earbuds",
    type: "In-Ear",
    price: 179.00,
    features: ["Sweat Resistant", "True Wireless", "5h Battery"],
    rating: 4.5,
    imageSrc: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-202409-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1726015508359",
    sale: 0.12,
    city: 6, // Huế
    available: 18
  },
  {
    id: 203,
    brandId: 2,
    name: "Bose 700",
    type: "Over-Ear",
    price: 379.00,
    features: ["Adaptive Noise Cancelling", "Touch Controls", "20h Battery"],
    rating: 4.7,
    imageSrc: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-202409-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1726015508359",
    sale: 0.18,
    city: 7, // Nha Trang
    available: 12
  },
  {
    id: 204,
    brandId: 2,
    name: "Bose SoundSport Wireless",
    type: "In-Ear",
    price: 99.00,
    features: ["Sweat Resistant", "Secure Fit", "6h Battery"],
    rating: 4.3,
    imageSrc: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-202409-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1726015508359",
    sale: 0.08,
    city: 8, // Vũng Tàu
    available: 22
  },
  {
    id: 301,
    brandId: 3,
    name: "AirPods Pro (2nd Gen)",
    type: "In-Ear",
    price: 249.00,
    features: ["Active Noise Cancelling", "Adaptive Transparency", "6h Battery"],
    rating: 4.8,
    imageSrc: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-202409-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1726015508359",
    sale: 0.22,
    city: 9, // Quy Nhơn
    available: 28
  },
  {
    id: 302,
    brandId: 3,
    name: "AirPods Max",
    type: "Over-Ear",
    price: 549.00,
    features: ["Noise Cancelling", "Spatial Audio", "20h Battery"],
    rating: 4.7,
    imageSrc: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-202409-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1726015508359",
    sale: 0.30,
    city: 10, // Buôn Ma Thuột
    available: 16
  }
];


export const vietnamCities = [
    { id: 1, name: "Hà Nội" },
    { id: 2, name: "Hồ Chí Minh" },
    { id: 3, name: "Đà Nẵng" },
    { id: 4, name: "Hải Phòng" },
    { id: 5, name: "Cần Thơ" },
    { id: 6, name: "Huế" },
    { id: 7, name: "Nha Trang" },
    { id: 8, name: "Vũng Tàu" },
    { id: 9, name: "Quy Nhơn" },
    { id: 10, name: "Buôn Ma Thuột" },
    { id: 11, name: "Đà Lạt" },
    { id: 12, name: "Pleiku" },
    { id: 13, name: "Biên Hòa" },
    { id: 14, name: "Thủ Dầu Một" },
    { id: 15, name: "Rạch Giá" },
    { id: 16, name: "Long Xuyên" },
    { id: 17, name: "Sóc Trăng" },
    { id: 18, name: "Cà Mau" },
    { id: 19, name: "Bạc Liêu" },
    { id: 20, name: "Hạ Long" }
  ];
    