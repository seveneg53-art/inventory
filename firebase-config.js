export const firebaseConfig = {
  apiKey: "AIzaSyD_e_rUBLuYCc5x-SO8rRyP2biaU24KmyU",
  authDomain: "inventory-c60bf.firebaseapp.com",
  projectId: "inventory-c60bf",
  storageBucket: "inventory-c60bf.firebasestorage.app",
  messagingSenderId: "709840006545",
  appId: "1:709840006545:web:da9a290f65971691c7fe30"
};

// الإيميلات اللي ليها صلاحية "مدير" (إضافة وتعديل وحذف وحفظ الجرد).
// أي إيميل تاني بيدخل بيقدر يعدّ الكميات بس. لازم تكون نفس القائمة في firestore.rules.
export const adminEmails = ["seveneg53@gmail.com"];

// صفحات الجرد: لكل براند صفحة منفصلة.
// id = اسم الصفحة في الرابط (مثلًا /seven)، و name = اسم البراند اللي بيتحفظ مع الأصناف.
// لو غيّرت name بعد ما تبدأ تضيف أصناف، الأصناف القديمة مش هتظهر في الصفحة.
export const brands = [
  { id: "seven",     name: "Seven" },
  { id: "archive",   name: "Archive" },
  { id: "jeanetics", name: "Jeanetics" }
];

// الرقم اللي في آخر مرجع التيشيرت (رقم واحد) بيتحوّل لمقاسه.
// مثال: 23006-1-3 يعني مقاس M. الأرقام من رقمين (مقاسات الجزم والبناطيل زي 43 و32) بتفضل زي ما هي.
export const sizeCodes = { "0": "XXS", "1": "XS", "2": "S", "3": "M", "4": "L", "5": "XL" };

// لو اسم الصنف فيه واحدة من الكلمات دي (جزم أو بناطيل)، الرقم اللي في آخر المرجع بيفضل رقم عادي ومش بيتحول لحرف،
// حتى لو كان رقم واحد (مثلًا 3 في جزمة معناها مقاس 3 مش M).
export const numericSizeWords = ["shoe", "shoes", "sneaker", "boot", "boots", "sandal", "pant", "pants", "jean", "jeans", "trouser", "trousers", "شوز", "حذاء", "جزمة", "جزم", "بنطلون", "بناطيل", "جينز"];
