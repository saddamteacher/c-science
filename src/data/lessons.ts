import { Type } from "@google/genai";

export interface Lesson {
  id: number;
  title: string;
  slug: string;
  description: string;
  introduction: string;
  theory: string;
  codeExamples: {
    title: string;
    code: string;
    explanation: string;
  }[];
  classwork: string[];
  exercises: string[];
  homework: string[];
  challenge: string;
}

const unsortedLessons: Lesson[] = [
  {
    id: 4,
    title: "If shart operatorlari",
    slug: "if-shart-operatorlari",
    description: "Mantiqiy shartlar, if, else va elif operatorlari.",
    introduction: "Dastur ma'lum bir shartga ko'ra qaror qabul qilishi kerak bo'lsa, biz 'shart operatorlari'dan foydalanamiz.",
    theory: `
## Shart operatorlari
Python-da shartlar quyidagi operatorlar orqali tekshiriladi:
- \`if\`: Agar shart rost bo'lsa
- \`elif\`: Aks holda, agar boshqa shart rost bo'lsa
- \`else\`: Hech qaysi shart bajarilmasa

### Solishtirish operatorlari:
- \`==\`: Tengmi?
- \`!=\`: Teng emasmi?
- \`>\`, \`<\`, \`>=\`, \`<=\`: Katta, kichik, katta yoki teng...

### Mantiqiy operatorlar:
- \`and\`: Va (ikkalasi ham rost bo'lishi kerak)
- \`or\`: Yoki (kamida bittasi rost bo'lishi kerak)
- \`not\`: Inkor (teskarisiga o'zgartiradi)
    `,
    codeExamples: [
      { title: "1. Oddiy if", code: 'x = 10\nif x > 5:\n    print("Katta")', explanation: "Shart tekshirish." },
      { title: "2. if-else", code: 'yosh = 17\nif yosh >= 18:\n    print("Ruxsat")\nelse:\n    print("Taqiq")', explanation: "Ikki holatdan biri." },
      { title: "3. if-elif-else", code: "baho = 4\nif baho == 5: print('A\\'lo')\nelif baho == 4: print('Yaxshi')\nelse: print('Qoniqarli')", explanation: "Ko'p variantli shart." },
      { title: "4. and operatori", code: 'a, b = 10, 20\nif a > 0 and b > 0:\n    print("Ikkalasi musbat")', explanation: "Ikkala shart ham rost bo'lishi kerak." },
      { title: "5. or operatori", code: 'kun = "yakshanba"\nif kun == "shanba" or kun == "yakshanba":\n    print("Dam olish")', explanation: "Kamida bitta shart rost bo'lishi kerak." },
      { title: "6. not operatori", code: "yomg'ir = False\nif not yomg'ir:\n    print('Sayrga chiqamiz')", explanation: "Shartni teskarisiga o'zgartirish." },
      { title: "7. Ichma-ich if", code: 'x = 10\nif x > 0:\n    if x % 2 == 0:\n        print("Musbat juft")', explanation: "Shart ichida shart." },
      { title: "8. Qisqa if (Ternary)", code: 'a = 5\nres = "Katta" if a > 10 else "Kichik"\nprint(res)', explanation: "Bitta qatorda yozish." },
      { title: "9. Sonni tekshirish", code: 'n = int(input())\nif n % 2 == 0: print("Juft")\nelse: print("Toq")', explanation: "Qoldiq orqali aniqlash." },
      { title: "10. Oraliqni tekshirish", code: 'x = 15\nif 10 <= x <= 20:\n    print("Oraliqda")', explanation: "Zanjirsimon solishtirish." },
      { title: "11. Matnni tekshirish", code: 'ism = "Ali"\nif ism == "Ali":\n    print("Salom Ali")', explanation: "Matnlarni solishtirish." },
      { title: "12. Ro'yxatda borligini tekshirish", code: 'meva = "olma"\nif meva in ["olma", "banan"]:\n    print("Bor")', explanation: "in operatori." },
      { title: "13. Bo'shlikni tekshirish", code: "s = ''\nif not s:\n    print('Bo\\'sh')", explanation: "Bo'sh matn False hisoblanadi." },
      { title: "14. Nolni tekshirish", code: 'n = 0\nif n:\n    print("Nol emas")\nelse:\n    print("Nol")', explanation: "0 False hisoblanadi." },
      { title: "15. Murakkab mantiq", code: "yosh = 20\npul = 5000\nif (yosh > 18 or pul > 10000) and pul > 0:\n    print('O\\'tdi')", explanation: "Qavslar bilan mantiqiy ifoda." }
    ],
    classwork: [
      "Sonning musbat yoki manfiyligini aniqlang",
      "Juft yoki toq sonligini tekshiring",
      "Parol tekshiruvchi dastur yozing"
    ],
    exercises: [
      "Baholash tizimi (5, 4, 3, 2)",
      "Hafta kunlarini raqamiga qarab chiqarish"
    ],
    homework: [
      "Kabisa yilini aniqlash",
      "Uchta sondan eng kattasini topish",
      "Login tizimi (username va password)",
      "Fasllarni aniqlash",
      "Oddiy kalkulyator (shartlar bilan)"
    ],
    challenge: "Foydalanuvchi kiritgan son 3 ga, 5 ga yoki ikkalasiga ham bo'linishini tekshiruvchi dastur yozing (FizzBuzz boshlanishi)."
  },
  {
    id: 5,
    title: "Data Types (int, float, string, boolean)",
    slug: "data-types",
    description: "Python-dagi asosiy ma'lumot turlari va ularning xususiyatlari.",
    introduction: "Har bir ma'lumotning o'z turi bor. Python-da turlar dinamik ravishda aniqlanadi.",
    theory: `
## Asosiy turlar
1. **int (Integer)**: Butun sonlar (5, -10, 0)
2. **float (Floating point)**: O'nlik sonlar (3.14, -0.5)
3. **str (String)**: Matnlar ("Salom", 'Python')
4. **bool (Boolean)**: Mantiqiy qiymatlar (True, False)

### type() funksiyasi
O'zgaruvchining turini aniqlash uchun ishlatiladi.
    `,
    codeExamples: [
      { title: "1. Integer", code: 'a = 5\nprint(type(a))', explanation: "Butun son." },
      { title: "2. Float", code: 'b = 3.14\nprint(type(b))', explanation: "O'nlik son." },
      { title: "3. String", code: 'c = "Salom"\nprint(type(c))', explanation: "Matn." },
      { title: "4. Boolean", code: 'd = True\nprint(type(d))', explanation: "Mantiqiy qiymat." },
      { title: "5. int()", code: 's = "10"\nn = int(s)', explanation: "Matnni butun songa o'tkazish." },
      { title: "6. float()", code: 'n = 5\nf = float(n)', explanation: "Butun sonni o'nlikka o'tkazish." },
      { title: "7. str()", code: 'n = 100\ns = str(n)', explanation: "Sonni matnga o'tkazish." },
      { title: "8. bool()", code: 'print(bool(1))\nprint(bool(0))', explanation: "Qiymatni mantiqiyga o'tkazish." },
      { title: "9. Katta sonlar", code: 'n = 1_000_000\nprint(n)', explanation: "Pastki chiziq o'qishni osonlashtiradi." },
      { title: "10. Ilmiy ko'rinish", code: 'n = 1.5e3\nprint(n)', explanation: "1.5 * 10^3 degani." },
      { title: "11. Kompleks sonlar", code: 'z = 3 + 5j\nprint(type(z))', explanation: "Kompleks sonlar (j - mavhum qism)." },
      { title: "12. Ko'p qatorli string", code: 's = """A\nB\nC"""', explanation: "Uchta qo'shtirnoq." },
      { title: "13. Bo'sh qiymat (None)", code: 'x = None\nprint(type(x))', explanation: "Qiymat yo'qligini bildiradi." },
      { title: "14. Arifmetik turlar", code: 'print(10 / 2) # float qaytaradi\nprint(10 // 3) # int qaytaradi', explanation: "Bo'lish natijalari." },
      { title: "15. Turini tekshirish", code: 'x = 10\nif isinstance(x, int):\n    print("Bu butun son")', explanation: "isinstance() xavfsizroq usul." }
    ],
    classwork: [
      "Turli xil turlarda o'zgaruvchilar yarating",
      "Ularning turlarini ekranga chiqaring",
      "Boolean qiymatlar bilan amallar bajarib ko'ring"
    ],
    exercises: [
      "Sonni matnga o'tkazish",
      "Matnni songa o'tkazish (agar iloji bo'lsa)"
    ],
    homework: [
      "Ma'lumotlar turlari jadvalini tuzing",
      "Har bir turga 5 tadan misol yozing",
      "Mantiqiy ifodalar natijasini oldindan aytishga harakat qiling",
      "Foydalanuvchi kiritgan ma'lumot turini aniqlang",
      "O'nlik sonni butun songa o'tkazganda nima bo'lishini tekshiring"
    ],
    challenge: "Faqat boolean operatorlari yordamida 'XOR' (istisno yoki) amalini bajaruvchi ifoda yozing."
  },
  {
    id: 6,
    title: "String metodlari",
    slug: "string-metodlari",
    description: "Matnlar bilan ishlash, qirqib olish va maxsus metodlar.",
    introduction: "Python-da matnlar juda kuchli vositadir. Ularni o'zgartirish, qidirish va tahlil qilish uchun ko'plab metodlar mavjud.",
    theory: `
## String Slicing (Qirqib olish)
\`matn[start:stop:step]\` formatida ishlaydi.

## Mashhur metodlar:
- \`.upper()\`, \`.lower()\`: Katta-kichik harfga o'tkazish
- \`.strip()\`: Bo'shliqlarni olib tashlash
- \`.replace(old, new)\`: Almashtirish
- \`.split()\`: Bo'lish
- \`.find()\`, \`.count()\`: Qidirish va sanash
    `,
    codeExamples: [
      { title: "1. upper()", code: 's = "salom"\nprint(s.upper())', explanation: "Hamma harflarni katta qiladi." },
      { title: "2. lower()", code: 's = "SALOM"\nprint(s.lower())', explanation: "Hamma harflarni kichik qiladi." },
      { title: "3. capitalize()", code: 's = "python darsi"\nprint(s.capitalize())', explanation: "Faqat birinchi harfni katta qiladi." },
      { title: "4. title()", code: 's = "python darsi"\nprint(s.title())', explanation: "Har bir so'zning birinchi harfini katta qiladi." },
      { title: "5. strip()", code: 's = "  bo\'shliq  "\nprint(s.strip())', explanation: "Ikki tarafdagi bo'shliqlarni oladi." },
      { title: "6. replace()", code: 's = "olma"\nprint(s.replace("o", "a"))', explanation: "Harflarni almashtiradi." },
      { title: "7. split()", code: 's = "olma,banan,uzum"\nprint(s.split(","))', explanation: "Matnni ro'yxatga bo'ladi." },
      { title: "8. join()", code: 'l = ["A", "B", "C"]\nprint("-".join(l))', explanation: "Ro'yxatni matnga birlashtiradi." },
      { title: "9. find()", code: 's = "python"\nprint(s.find("y"))', explanation: "Harf indeksini topadi." },
      { title: "10. count()", code: 's = "banana"\nprint(s.count("a"))', explanation: "Harf necha marta qatnashganini sanaydi." },
      { title: "11. startswith()", code: 's = "admin@uz"\nprint(s.startswith("admin"))', explanation: "Nima bilan boshlanishini tekshiradi." },
      { title: "12. endswith()", code: 's = "file.txt"\nprint(s.endswith(".txt"))', explanation: "Nima bilan tugashini tekshiradi." },
      { title: "13. isdigit()", code: 's = "123"\nprint(s.isdigit())', explanation: "Faqat raqamlardan iboratligini tekshiradi." },
      { title: "14. isalpha()", code: 's = "Python"\nprint(s.isalpha())', explanation: "Faqat harflardan iboratligini tekshiradi." },
      { title: "15. zfill()", code: 's = "5"\nprint(s.zfill(3))', explanation: "Nollar bilan to'ldiradi (005)." }
    ],
    classwork: [
      "Ismingizni teskari tartibda chiqaring",
      "Matndagi barcha 'a' harflarini 'o' ga almashtiring",
      "Matn uzunligini (len) aniqlang"
    ],
    exercises: [
      "Faqat bosh harflarni qoldirish",
      "Matn ichida so'z borligini tekshirish"
    ],
    homework: [
      "Username generator (ism va familiyadan)",
      "Palindrom tekshiruvchi (masalan: 'kiyik')",
      "Matndagi so'zlar sonini sanash",
      "Email validatsiyasi (oddiy ko'rinishda)",
      "Gapdagi har bir so'zning birinchi harfini katta qilish"
    ],
    challenge: "Berilgan gapdagi eng uzun so'zni topuvchi dastur yozing (faqat string metodlari bilan)."
  },
  {
    id: 7,
    title: "List bilan ishlash",
    slug: "list-bilan-ishlash",
    description: "Ro'yxatlar, elementlar qo'shish, o'chirish va tartiblash.",
    introduction: "List (ro'yxat) - bu bir nechta qiymatlarni bitta o'zgaruvchida saqlash imkonini beruvchi ma'lumot turi.",
    theory: `
## List xususiyatlari
- Tartiblangan (Ordered)
- O'zgaruvchan (Mutable)
- Turli xil ma'lumotlarni saqlashi mumkin

## Metodlar:
- \`.append(x)\`: Oxiriga qo'shish
- \`.insert(i, x)\`: Ma'lum bir joyga qo'shish
- \`.remove(x)\`: Qiymat bo'yicha o'chirish
- \`.pop(i)\`: Indeks bo'yicha o'chirish
- \`.sort()\`: Tartiblash
    `,
    codeExamples: [
      { title: "1. List yaratish", code: 'mevalar = ["olma", "banan"]', explanation: "Kvadrat qavslar." },
      { title: "2. Elementga murojaat", code: 'l = [10, 20, 30]\nprint(l[0])', explanation: "Indeks 0 dan boshlanadi." },
      { title: "3. Oxirgi element", code: 'l = [1, 2, 3]\nprint(l[-1])', explanation: "Manfiy indeks oxiridan sanaydi." },
      { title: "4. append()", code: 'l = [1, 2]\nl.append(3)', explanation: "Oxiriga qo'shish." },
      { title: "5. insert()", code: 'l = [1, 3]\nl.insert(1, 2)', explanation: "Ma'lum indeksga qo'shish." },
      { title: "6. remove()", code: 'l = ["A", "B"]\nl.remove("A")', explanation: "Qiymat bo'yicha o'chirish." },
      { title: "7. pop()", code: 'l = [1, 2, 3]\nl.pop(1)', explanation: "Indeks bo'yicha o'chirish." },
      { title: "8. del operatori", code: 'l = [1, 2, 3]\ndel l[0]', explanation: "Elementni o'chirish." },
      { title: "9. sort()", code: 'l = [3, 1, 2]\nl.sort()', explanation: "Tartiblash." },
      { title: "10. reverse()", code: 'l = [1, 2, 3]\nl.reverse()', explanation: "Teskari qilish." },
      { title: "11. len()", code: 'l = [1, 2, 3]\nprint(len(l))', explanation: "Uzunlikni aniqlash." },
      { title: "12. copy()", code: 'l1 = [1, 2]\nl2 = l1.copy()', explanation: "Nusxa olish." },
      { title: "13. clear()", code: 'l = [1, 2]\nl.clear()', explanation: "Tozalash." },
      { title: "14. count()", code: 'l = [1, 2, 2, 3]\nprint(l.count(2))', explanation: "Sanash." },
      { title: "15. extend()", code: 'l1 = [1, 2]\nl1.extend([3, 4])', explanation: "Ro'yxatni kengaytirish." }
    ],
    classwork: [
      "Sevimli kitoblaringiz ro'yxatini tuzing",
      "Ro'yxatga yangi kitob qo'shing",
      "Ro'yxatni alifbo bo'yicha tartiblang"
    ],
    exercises: [
      "Ro'yxatning o'rtasidagi elementni topish",
      "Ikki ro'yxatni birlashtirish"
    ],
    homework: [
      "Bozorlik ro'yxati dasturi",
      "Talabalar ismlari ro'yxati va qidiruv",
      "Ro'yxatdagi eng katta sonni topish",
      "Ro'yxatni teskari tartibda chiqarish",
      "Dublikatlarni o'chirish (qo'lda)"
    ],
    challenge: "Ro'yxatdagi barcha sonlarning yig'indisini hisoblovchi dastur yozing (sum() funksiyasidan foydalanmasdan)."
  },
  {
    id: 8,
    title: "Tuple va Set",
    slug: "tuple-va-set",
    description: "O'zgarmas ro'yxatlar va to'plamlar.",
    introduction: "Tuple va Set - bu ro'yxatlarning boshqa ko'rinishlari bo'lib, ularning o'ziga xos qoidalari bor.",
    theory: `
## Tuple (Kortej)
- O'zgarmas (Immutable)
- Qavslar \`()\` bilan yaratiladi
- Tezroq ishlaydi

## Set (To'plam)
- Tartiblanmagan (Unordered)
- Takrorlanmas elementlar (Unique)
- Jingalak qavslar \`{}\` bilan yaratiladi
    `,
    codeExamples: [
      { title: "1. Tuple yaratish", code: 't = (1, 2, 3)', explanation: "Oddiy qavslar." },
      { title: "2. Bitta elementli tuple", code: 't = (5,)', explanation: "Vergul qo'yish shart." },
      { title: "3. Tuple-dan qism olish", code: 't = (1, 2, 3, 4)\nprint(t[1:3])', explanation: "Slicing ishlaydi." },
      { title: "4. Tuple-ni o'zgartirish", code: 't = (1, 2)\nl = list(t)\nl.append(3)\nt = tuple(l)', explanation: "Bilvosita o'zgartirish." },
      { title: "5. Unpacking", code: 't = (10, 20)\nx, y = t', explanation: "Qiymatlarni o'zgaruvchilarga yoyish." },
      { title: "6. Set yaratish", code: 's = {1, 2, 3}', explanation: "Jingalak qavslar." },
      { title: "7. add()", code: 's = {1, 2}\ns.add(3)', explanation: "Element qo'shish." },
      { title: "8. update()", code: 's = {1, 2}\ns.update([3, 4])', explanation: "Bir nechta qo'shish." },
      { title: "9. remove()", code: 's = {1, 2}\ns.remove(1)', explanation: "O'chirish (xato berishi mumkin)." },
      { title: "10. discard()", code: 's = {1, 2}\ns.discard(5)', explanation: "Xavfsiz o'chirish." },
      { title: "11. union()", code: 's1 = {1, 2}\ns2 = {2, 3}\nprint(s1 | s2)', explanation: "Birlashtirish." },
      { title: "12. intersection()", code: 's1 = {1, 2}\ns2 = {2, 3}\nprint(s1 & s2)', explanation: "Kesishma." },
      { title: "13. difference()", code: 's1 = {1, 2}\ns2 = {2, 3}\nprint(s1 - s2)', explanation: "Farq." },
      { title: "14. symmetric_difference()", code: 's1 = {1, 2}\ns2 = {2, 3}\nprint(s1 ^ s2)', explanation: "Simmetrik farq." },
      { title: "15. set() funksiyasi", code: 'l = [1, 2, 2, 3]\ns = set(l)', explanation: "Dublikatlarni o'chirish usuli." }
    ],
    classwork: [
      "Hafta kunlarini Tuple-da saqlang",
      "Ismlar to'plamini (Set) yarating",
      "To'plamga yangi ism qo'shib ko'ring"
    ],
    exercises: [
      "Tuple-ni List-ga o'tkazish",
      "Ikki to'plamning kesishmasini topish"
    ],
    homework: [
      "O'zgarmas sozlamalar uchun Tuple ishlating",
      "Ro'yxatdagi dublikatlarni Set orqali o'chirish",
      "To'plamlar ustida matematik amallar (union, intersection)",
      "Tuple ichida ro'yxat saqlab ko'ring",
      "Set-dan elementni xavfsiz o'chirish (discard)"
    ],
    challenge: "Berilgan ro'yxatdagi elementlar necha marta takrorlanganini aniqlang (Set yordamida)."
  },
  {
    id: 9,
    title: "Dictionary",
    slug: "dictionary",
    description: "Kalit-qiymat juftligi bilan ishlash.",
    introduction: "Dictionary (lug'at) - bu ma'lumotlarni 'kalit: qiymat' ko'rinishida saqlash imkonini beradi.",
    theory: `
## Lug'at xususiyatlari
- Kalitlar takrorlanmas bo'lishi kerak
- Qiymatlar har qanday turda bo'lishi mumkin
- Juda tez qidirish imkonini beradi

## Metodlar:
- \`.get(key)\`: Xavfsiz olish
- \`.keys()\`: Barcha kalitlar
- \`.values()\`: Barcha qiymatlar
- \`.items()\`: Juftliklar
    `,
    codeExamples: [
      { title: "1. Lug'at yaratish", code: 'd = {"nom": "Ali", "yosh": 20}', explanation: "Key: Value juftligi." },
      { title: "2. Qiymatga murojaat", code: 'print(d["nom"])', explanation: "Kalit orqali." },
      { title: "3. get() metodi", code: 'print(d.get("tel", "Yo\'q"))', explanation: "Xavfsiz murojaat." },
      { title: "4. Qiymatni o'zgartirish", code: 'd["yosh"] = 21', explanation: "Kalit orqali yangilash." },
      { title: "5. Yangi kalit qo'shish", code: 'd["manzil"] = "Toshkent"', explanation: "Yangi juftlik." },
      { title: "6. pop()", code: 'd.pop("yosh")', explanation: "Kalit bo'yicha o'chirish." },
      { title: "7. popitem()", code: 'd.popitem()', explanation: "Oxirgi juftlikni o'chirish." },
      { title: "8. keys()", code: 'print(d.keys())', explanation: "Barcha kalitlar." },
      { title: "9. values()", code: 'print(d.values())', explanation: "Barcha qiymatlar." },
      { title: "10. items()", code: 'print(d.items())', explanation: "Barcha juftliklar." },
      { title: "11. update()", code: 'd.update({"yosh": 25})', explanation: "Lug'atni yangilash." },
      { title: "12. clear()", code: 'd.clear()', explanation: "Tozalash." },
      { title: "13. copy()", code: 'd2 = d.copy()', explanation: "Nusxa olish." },
      { title: "14. len()", code: 'print(len(d))', explanation: "Juftliklar soni." },
      { title: "15. Nested Dict", code: 'd = {"t1": {"ism": "Ali"}, "t2": {"ism": "Vali"}}', explanation: "Ichma-ich lug'at." }
    ],
    classwork: [
      "Inglizcha-O'zbekcha lug'at yarating",
      "Lug'atga yangi so'z qo'shing",
      "Kalit orqali qiymatni o'zgartiring"
    ],
    exercises: [
      "Lug'at uzunligini aniqlash",
      "Kalit mavjudligini tekshirish"
    ],
    homework: [
      "Telefon kitobchasi dasturi",
      "Mahsulotlar va ularning narxlari",
      "Talabalar baholari lug'ati",
      "Lug'at ichida lug'at (Nested dictionaries)",
      "Kalit va qiymatlarni almashtirish"
    ],
    challenge: "Matndagi har bir harf necha marta qatnashganini lug'at yordamida hisoblang."
  },
  {
    id: 10,
    title: "While loop",
    slug: "while-loop",
    description: "Takrorlanish operatorlari, shartli sikllar.",
    introduction: "Dastur biror amalni qayta-qayta bajarishi kerak bo'lsa, biz sikllardan (loops) foydalanamiz.",
    theory: `
## While sikli
Shart rost bo'lib turguncha davom etadi.

## Kalit so'zlar:
- \`break\`: Siklni to'xtatish
- \`continue\`: Keyingi qadamga o'tish
- \`infinite loop\`: To'xtamaydigan sikl (ehtiyot bo'ling!)
    `,
    codeExamples: [
      { title: "1. Oddiy while", code: 'i = 1\nwhile i <= 5:\n    print(i)\n    i += 1', explanation: "Shart rost bo'lsa ishlaydi." },
      { title: "2. break", code: 'i = 1\nwhile True:\n    if i == 5: break\n    print(i)\n    i += 1', explanation: "Siklni to'xtatish." },
      { title: "3. continue", code: 'i = 0\nwhile i < 5:\n    i += 1\n    if i == 3: continue\n    print(i)', explanation: "Keyingi qadamga o'tish." },
      { title: "4. else bilan while", code: 'i = 1\nwhile i < 3:\n    print(i)\n    i += 1\nelse: print("Tugadi")', explanation: "Sikl tugagach ishlaydi." },
      { title: "5. Cheksiz sikl", code: 'while True:\n    cmd = input()\n    if cmd == "exit": break', explanation: "To'xtovsiz ishlash." },
      { title: "6. Sonlar yig'indisi", code: 's, i = 0, 1\nwhile i <= 10:\n    s += i\n    i += 1', explanation: "Yig'indini hisoblash." },
      { title: "7. Ro'yxatni aylanib chiqish", code: 'l = [1, 2, 3]\ni = 0\nwhile i < len(l):\n    print(l[i])\n    i += 1', explanation: "Indeks orqali." },
      { title: "8. Raqamlar soni", code: 'n = 12345\nc = 0\nwhile n > 0:\n    n //= 10\n    c += 1', explanation: "Bo'lish orqali." },
      { title: "9. Teskari tartib", code: 'i = 10\nwhile i > 0:\n    print(i)\n    i -= 1', explanation: "Kamayish tartibi." },
      { title: "10. Parol so'rash", code: 'p = ""\nwhile p != "123":\n    p = input("Parol: ")', explanation: "To'g'ri bo'lguncha so'rash." },
      { title: "11. Faktorial", code: 'n, f, i = 5, 1, 1\nwhile i <= n:\n    f *= i\n    i += 1', explanation: "Ko'paytmani hisoblash." },
      { title: "12. Juft sonlar", code: 'i = 2\nwhile i <= 20:\n    print(i)\n    i += 2', explanation: "Qadam bilan yurish." },
      { title: "13. Matnni harfma-harf", code: 's = "Python"\ni = 0\nwhile i < len(s):\n    print(s[i])\n    i += 1', explanation: "String indeksi." },
      { title: "14. O'yin simulyatsiyasi", code: 'hp = 100\nwhile hp > 0:\n    hp -= 20\n    print(f"HP: {hp}")', explanation: "Holat o'zgarishi." },
      { title: "15. Nested while", code: 'i = 1\nwhile i <= 3:\n    j = 1\n    while j <= 3:\n        print(i, j)\n        j += 1\n    i += 1', explanation: "Sikl ichida sikl." }
    ],
    classwork: [
      "1 dan 100 gacha bo'lgan juft sonlarni chiqaring",
      "Foydalanuvchi to'g'ri parol kiritmaguncha so'rayvering",
      "Sonlar yig'indisini hisoblang"
    ],
    exercises: [
      "Karra jadvalini chiqarish",
      "Sonning raqamlari yig'indisini topish"
    ],
    homework: [
      "Son topish o'yini (Number guessing game)",
      "Bankomat menyusi (while bilan)",
      "Faktorial hisoblash",
      "Tub sonlarni aniqlash",
      "Matnni teskari chiqarish (while bilan)"
    ],
    challenge: "Foydalanuvchi kiritgan sonning barcha bo'luvchilarini topuvchi dastur yozing."
  },
  {
    id: 11,
    title: "Function asoslari",
    slug: "function-asoslari",
    description: "Funksiyalar yaratish, argumentlar va return qiymati.",
    introduction: "Funksiya - bu ma'lum bir vazifani bajaruvchi kod bloki bo'lib, uni istalgan vaqtda qayta ishlatish mumkin.",
    theory: `
## Funksiya yaratish
\`def\` kalit so'zi orqali yaratiladi.

## Afzalliklari:
- Kodni qayta ishlatish (Reusability)
- Kodni tartiblash
- Xatolarni kamaytirish

## Parametr va Argument
- **Parametr**: Funksiya yaratilayotganida qavs ichida yoziladigan o'zgaruvchi.
- **Argument**: Funksiya chaqirilayotganida unga beriladigan haqiqiy qiymat.
    `,
    codeExamples: [
      { title: "1. Oddiy funksiya", code: 'def salom():\n    print("Salom!")\nsalom()', explanation: "Funksiya yaratish va chaqirish." },
      { title: "2. Parametrli funksiya", code: 'def salom(ism):\n    print(f"Salom {ism}")\nsalom("Ali")', explanation: "Ma'lumot uzatish." },
      { title: "3. return qiymati", code: 'def kvadrat(x):\n    return x*x\nprint(kvadrat(5))', explanation: "Natijani qaytarish." },
      { title: "4. Bir nechta parametr", code: 'def yigindi(a, b):\n    return a + b', explanation: "Ko'p argumentlar." },
      { title: "5. Default parametr", code: 'def salom(ism="Mehmon"):\n    print(ism)', explanation: "Standart qiymat." },
      { title: "6. Keyword argument", code: 'def tanishtir(ism, yosh):\n    print(ism, yosh)\ntanishtir(yosh=20, ism="Ali")', explanation: "Kalit so'z orqali." },
      { title: "7. Ro'yxat uzatish", code: 'def bosma(l):\n    for x in l: print(x)', explanation: "List parametr sifatida." },
      { title: "8. Bir nechta return", code: 'def hisob(a, b):\n    return a+b, a-b', explanation: "Tuple qaytaradi." },
      { title: "9. Pass operatori", code: 'def keyinroq():\n    pass', explanation: "Bo'sh funksiya." },
      { title: "10. Global o'zgaruvchi", code: 'x = 10\ndef f():\n    global x\n    x = 20', explanation: "Tashqi o'zgaruvchini o'zgartirish." },
      { title: "11. Local o'zgaruvchi", code: 'def f():\n    y = 5\n    print(y)', explanation: "Faqat funksiya ichida." },
      { title: "12. Funksiya ichida funksiya", code: 'def f1():\n    def f2(): print("F2")\n    f2()', explanation: "Nested functions." },
      { title: "13. Docstring", code: 'def f():\n    """Bu yordam matni"""\n    pass', explanation: "Funksiya haqida ma'lumot." },
      { title: "14. Rekursiya (oddiy)", code: 'def sanoq(n):\n    if n > 0:\n        print(n)\n        sanoq(n-1)', explanation: "O'zini chaqirish." },
      { title: "15. Turlarni belgilash (Hints)", code: 'def f(x: int) -> int:\n    return x * 2', explanation: "Type hinting." }
    ],
    classwork: [
      "Kvadratni hisoblovchi funksiya yozing",
      "Ism va familiyani birlashtiruvchi funksiya",
      "Sonning juft yoki toqligini qaytaruvchi funksiya"
    ],
    exercises: [
      "To'g'ri to'rtburchak yuzini hisoblash",
      "Eng katta sonni topuvchi funksiya"
    ],
    homework: [
      "Kalkulyator funksiyalari (qo'shish, ayirish...)",
      "Berilgan sonni darajaga ko'taruvchi funksiya",
      "Matndagi harflarni sanovchi funksiya",
      "Ro'yxatdagi sonlar yig'indisini qaytaruvchi funksiya",
      "Foydalanuvchi ma'lumotlarini chiroyli formatda chiqaruvchi funksiya"
    ],
    challenge: "Berilgan son tub yoki yo'qligini aniqlovchi funksiya yozing."
  },
  {
    id: 12,
    title: "Function advanced",
    slug: "function-advanced",
    description: "*args, **kwargs va anonim funksiyalar (lambda).",
    introduction: "Funksiyalarning yanada murakkab va moslashuvchan imkoniyatlarini o'rganamiz.",
    theory: `
## *args va **kwargs
- \`*args\`: Funksiyaga istalgancha argument yuborish imkonini beradi (Tuple ko'rinishida).
- \`**kwargs\`: Kalitli argumentlarni yuborish (Dictionary ko'rinishida).

## Lambda funksiyalar
Bir qatorli, nomsiz funksiyalar.
\`lambda argumentlar: ifoda\`
    `,
    codeExamples: [
      { title: "1. *args (Istalgancha son)", code: 'def f(*args):\n    return sum(args)', explanation: "Tuple ko'rinishida." },
      { title: "2. **kwargs (Kalitli)", code: 'def f(**kwargs):\n    print(kwargs)', explanation: "Dict ko'rinishida." },
      { title: "3. Lambda (Kvadrat)", code: 'f = lambda x: x*x', explanation: "Anonim funksiya." },
      { title: "4. Lambda (Yig'indi)", code: 'f = lambda a, b: a + b', explanation: "Ikki argumentli." },
      { title: "5. map() bilan lambda", code: 'l = [1, 2, 3]\nres = list(map(lambda x: x*2, l))', explanation: "Har bir elementga qo'llash." },
      { title: "6. filter() bilan lambda", code: 'l = [1, 2, 3, 4]\nres = list(filter(lambda x: x%2==0, l))', explanation: "Saralash." },
      { title: "7. sorted() bilan lambda", code: 'l = ["olma", "nok"]\nres = sorted(l, key=lambda x: len(x))', explanation: "Uzunlik bo'yicha." },
      { title: "8. Closure (Yopiq funksiya)", code: 'def f(n):\n    return lambda x: x * n', explanation: "Funksiya qaytaruvchi funksiya." },
      { title: "9. Decorator (Oddiy)", code: 'def dec(f):\n    def wrapper():\n        print("Start")\n        f()\n    return wrapper', explanation: "Funksiyani o'rab olish." },
      { title: "10. Generator (yield)", code: 'def f():\n    yield 1\n    yield 2', explanation: "Xotirani tejovchi sikl." },
      { title: "11. Recursion (Factorial)", code: 'def fact(n):\n    return 1 if n==0 else n*fact(n-1)', explanation: "Klassik misol." },
      { title: "12. reduce() funksiyasi", code: 'from functools import reduce\nres = reduce(lambda x,y: x*y, [1,2,3,4])', explanation: "Ketma-ket amal." },
      { title: "13. Funksiya atributi", code: 'def f(): pass\nf.count = 0', explanation: "Funksiyaga o'zgaruvchi biriktirish." },
      { title: "14. zip() bilan ishlash", code: 'l1, l2 = [1,2], ["A","B"]\nfor a, b in zip(l1, l2): print(a, b)', explanation: "Birlashtirib aylanish." },
      { title: "15. enumerate()", code: 'for i, v in enumerate(["A", "B"]): print(i, v)', explanation: "Indeks bilan aylanish." }
    ],
    classwork: [
      "Istalgancha sonni ko'paytiruvchi funksiya",
      "Lambda yordamida sonni tekshirish",
      "kwargs yordamida foydalanuvchi profilini yaratish"
    ],
    exercises: [
      "Filter funksiyasi bilan lambda ishlatish",
      "Map funksiyasi bilan lambda ishlatish"
    ],
    homework: [
      "Berilgan matnlarni uzunligi bo'yicha saralash (lambda bilan)",
      "Cheksiz argument qabul qilib, faqat juftlarini qaytaruvchi funksiya",
      "Lug'atni qiymatlari bo'yicha saralash",
      "Recursion (o'zini o'zi chaqiruvchi) funksiya haqida o'rganish",
      "Funksiya ichida boshqa funksiyani chaqirish"
    ],
    challenge: "Faktorialni hisoblovchi rekursiv funksiya yozing."
  },
  {
    id: 13,
    title: "Random va Math modullari",
    slug: "random-va-math",
    description: "Tasodifiy sonlar va murakkab matematik amallar.",
    introduction: "Python-da tayyor modullar juda ko'p. Bugun eng muhim ikkitasini ko'rib chiqamiz.",
    theory: `
## random moduli
- \`random.randint(a, b)\`: Oraliqda butun son
- \`random.choice(list)\`: Ro'yxatdan tasodifiy element
- \`random.shuffle(list)\`: Ro'yxatni aralashtirish

## math moduli
- \`math.sqrt(x)\`: Ildiz chiqarish
- \`math.pow(x, y)\`: Darajaga ko'tarish
- \`math.ceil()\`, \`math.floor()\`: Yaxlitlash
    `,
    codeExamples: [
      { title: "1. randint()", code: 'import random\nprint(random.randint(1, 10))', explanation: "Oraliqda butun son." },
      { title: "2. random()", code: 'print(random.random())', explanation: "0 va 1 orasida float." },
      { title: "3. choice()", code: 'l = ["A", "B", "C"]\nprint(random.choice(l))', explanation: "Tasodifiy tanlash." },
      { title: "4. shuffle()", code: 'l = [1, 2, 3]\nrandom.shuffle(l)', explanation: "Ro'yxatni aralashtirish." },
      { title: "5. sample()", code: 'l = [1, 2, 3, 4, 5]\nprint(random.sample(l, 2))', explanation: "Bir nechta tanlash." },
      { title: "6. math.sqrt()", code: 'import math\nprint(math.sqrt(25))', explanation: "Kvadrat ildiz." },
      { title: "7. math.pow()", code: 'print(math.pow(2, 3))', explanation: "Darajaga ko'tarish." },
      { title: "8. math.ceil()", code: 'print(math.ceil(3.1))', explanation: "Tepaga yaxlitlash." },
      { title: "9. math.floor()", code: 'print(math.floor(3.9))', explanation: "Pastga yaxlitlash." },
      { title: "10. math.pi", code: 'print(math.pi)', explanation: "Pi soni." },
      { title: "11. math.factorial()", code: 'print(math.factorial(5))', explanation: "Faktorial." },
      { title: "12. math.gcd()", code: 'print(math.gcd(12, 18))', explanation: "EKUB." },
      { title: "13. math.sin()", code: 'print(math.sin(math.radians(90)))', explanation: "Trigonometriya." },
      { title: "14. math.log()", code: 'print(math.log10(100))', explanation: "Logarifm." },
      { title: "15. math.isqrt()", code: 'print(math.isqrt(10))', explanation: "Butun ildiz." }
    ],
    classwork: [
      "Tasodifiy parol yaratuvchi dastur",
      "Doira yuzini math.pi orqali hisoblang",
      "Ro'yxatni aralashtirib chiqaring"
    ],
    exercises: [
      "Sonning logarifmini hisoblash",
      "Tasodifiy rang tanlash"
    ],
    homework: [
      "Tosh-qaychi-qog'oz o'yini",
      "Matematik viktorina dasturi",
      "Tasodifiy jamoalarga bo'lish dasturi",
      "Trigonometrik amallar (sin, cos)",
      "Omadli chipta simulyatori"
    ],
    challenge: "6 ta raqamdan iborat tasodifiy 'Lotto' raqamlarini yaratuvchi dastur yozing (raqamlar takrorlanmasligi kerak)."
  },
  {
    id: 14,
    title: "Python modullari",
    slug: "python-modullari",
    description: "O'z modullaringizni yaratish va tashqi kutubxonalar.",
    introduction: "Katta loyihalarda kodni bir nechta fayllarga bo'lish shart. Buning uchun modullardan foydalanamiz.",
    theory: `
## Modul nima?
Har qanday \`.py\` fayli modul hisoblanadi.

## Import turlari:
- \`import modul_nomi\`
- \`from modul_nomi import funksiya\`
- \`import modul_nomi as m\` (alias)

## pip - Paket menejeri
Tashqi kutubxonalarni o'rnatish uchun ishlatiladi (masalan: \`pip install requests\`).
    `,
    codeExamples: [
      { title: "1. import", code: 'import math', explanation: "To'liq modul." },
      { title: "2. from ... import", code: 'from math import sqrt', explanation: "Qismini olish." },
      { title: "3. as (Alias)", code: 'import random as r', explanation: "Nomini qisqartirish." },
      { title: "4. O'z modulingiz", code: '# my.py ichida: def f(): print("A")\nimport my\nmy.f()', explanation: "Faylni modul sifatida." },
      { title: "5. dir() funksiyasi", code: 'import math\nprint(dir(math))', explanation: "Modul ichini ko'rish." },
      { title: "6. datetime", code: 'import datetime\nprint(datetime.datetime.now())', explanation: "Vaqt bilan ishlash." },
      { title: "7. os moduli", code: 'import os\nprint(os.getcwd())', explanation: "Tizim bilan ishlash." },
      { title: "8. sys moduli", code: 'import sys\nprint(sys.version)', explanation: "Python haqida." },
      { title: "9. time moduli", code: 'import time\ntime.sleep(1)', explanation: "Kutish." },
      { title: "10. json moduli", code: 'import json\nd = {"a": 1}\ns = json.dumps(d)', explanation: "JSON format." },
      { title: "11. statistics", code: 'import statistics\nl = [1, 2, 3]\nprint(statistics.mean(l))', explanation: "Statistika." },
      { title: "12. platform", code: 'import platform\nprint(platform.system())', explanation: "OS turi." },
      { title: "13. requests (tashqi)", code: '# pip install requests\nimport requests', explanation: "HTTP so'rovlar." },
      { title: "14. help()", code: 'import math\nhelp(math.sqrt)', explanation: "Yordam olish." },
      { title: "15. __name__ == '__main__'", code: 'if __name__ == "__main__":\n    print("Asosiy fayl")', explanation: "Fayl to'g'ridan-to'g'ri ishga tushganini tekshirish." }
    ],
    classwork: [
      "Hisob-kitob moduli yarating",
      "Uni boshqa faylda ishlatib ko'ring",
      "datetime modulini o'rganing"
    ],
    exercises: [
      "os moduli bilan ishlash",
      "sys moduli imkoniyatlari"
    ],
    homework: [
      "Hozirgi vaqtni ko'rsatuvchi dastur",
      "Fayl tizimi bilan ishlash (papka yaratish)",
      "Tashqi modul o'rnatib ko'rish (masalan: colorama)",
      "Modul ichida o'zgaruvchilar saqlash",
      "Modulni qayta yuklash (importlib)"
    ],
    challenge: "Foydalanuvchi kiritgan sanadan bugungacha necha kun o'tganini hisoblovchi modul yarating."
  },
  {
    id: 15,
    title: "File bilan ishlash",
    slug: "file-bilan-ishlash",
    description: "Fayllarni o'qish, yozish va boshqarish.",
    introduction: "Ma'lumotlarni doimiy saqlash uchun fayllardan foydalanamiz.",
    theory: `
## Fayl ochish rejimlari:
- \`r\`: O'qish (Read)
- \`w\`: Yozish (Write - faylni tozalab yuboradi)
- \`a\`: Qo'shish (Append - oxiriga yozadi)

## with open()
Faylni avtomatik yopish uchun eng yaxshi usul.
    `,
    codeExamples: [
      { title: "1. Faylga yozish", code: 'f = open("t.txt", "w")\nf.write("A")\nf.close()', explanation: "Eski usul." },
      { title: "2. Faylni o'qish", code: 'f = open("t.txt", "r")\nprint(f.read())\nf.close()', explanation: "To'liq o'qish." },
      { title: "3. with open (Tavsiya)", code: 'with open("t.txt", "w") as f:\n    f.write("B")', explanation: "Avtomatik yopiladi." },
      { title: "4. Qatorma-qator o'qish", code: 'with open("t.txt", "r") as f:\n    for line in f: print(line)', explanation: "Sikl orqali." },
      { title: "5. readlines()", code: 'with open("t.txt", "r") as f:\n    l = f.readlines()', explanation: "Ro'yxatga olish." },
      { title: "6. append rejimi", code: 'with open("t.txt", "a") as f:\n    f.write("\\nYangi")', explanation: "Oxiriga qo'shish." },
      { title: "7. Fayl borligini tekshirish", code: 'import os\nprint(os.path.exists("t.txt"))', explanation: "os moduli." },
      { title: "8. Faylni o'chirish", code: 'import os\nos.remove("t.txt")', explanation: "O'chirish." },
      { title: "9. Papka yaratish", code: 'import os\nos.mkdir("new_folder")', explanation: "Katalog." },
      { title: "10. Fayl hajmi", code: 'import os\nprint(os.path.getsize("t.txt"))', explanation: "Baytlarda." },
      { title: "11. readline()", code: 'with open("t.txt", "r") as f:\n    print(f.readline())', explanation: "Bitta qator." },
      { title: "12. write() bir nechta", code: 'with open("t.txt", "w") as f:\n    f.write("A\\nB\\nC")', explanation: "Qatorlar bilan." },
      { title: "13. writelines()", code: 'l = ["A\\n", "B\\n"]\nwith open("t.txt", "w") as f:\n    f.writelines(l)', explanation: "Ro'yxatni yozish." },
      { title: "14. Fayl nomini o'zgartirish", code: 'import os\nos.rename("a.txt", "b.txt")', explanation: "Rename." },
      { title: "15. Binary o'qish", code: 'with open("img.jpg", "rb") as f:\n    data = f.read()', explanation: "Rasm yoki video." }
    ],
    classwork: [
      "Ismlar ro'yxatini faylga yozing",
      "Fayldagi ma'lumotlarni qatorma-qator o'qing",
      "Fayl mavjudligini tekshiring"
    ],
    exercises: [
      "Fayldagi so'zlarni sanash",
      "Fayl nusxasini yaratish"
    ],
    homework: [
      "Kundalik (Diary) dasturi",
      "Login va parollarni faylda saqlash",
      "Fayldagi sonlar yig'indisini hisoblash",
      "Matnni faylga teskari tartibda yozish",
      "CSV fayllar bilan tanishish"
    ],
    challenge: "Berilgan matnli fayldagi eng ko'p takrorlangan so'zni toping."
  },
  {
    id: 16,
    title: "Exception handling",
    slug: "exception-handling",
    description: "Xatolarni ushlash va dastur to'xtab qolishini oldini olish.",
    introduction: "Dastur davomida kutilmagan xatolar (masalan: nolga bo'lish) sodir bo'lishi mumkin. Ularni boshqarishni o'rganamiz.",
    theory: `
## try-except bloki
- \`try\`: Kodni bajarib ko'radi
- \`except\`: Xato bo'lsa ishlaydi
- \`else\`: Xato bo'lmasa ishlaydi
- \`finally\`: Har qanday holatda ishlaydi

## Xato turlari:
- \`ValueError\`, \`TypeError\`, \`ZeroDivisionError\`, \`FileNotFoundError\`
    `,
    codeExamples: [
      { title: "1. try-except", code: 'try:\n    print(10/0)\nexcept:\n    print("Xato")', explanation: "Umumiy xato." },
      { title: "2. Maxsus xato", code: 'try:\n    n = int("A")\nexcept ValueError:\n    print("Son emas")', explanation: "Aniq xato turi." },
      { title: "3. Bir nechta except", code: 'try:\n    pass\nexcept (ValueError, ZeroDivisionError):\n    pass', explanation: "Guruhlash." },
      { title: "4. finally", code: 'try:\n    pass\nfinally:\n    print("Har doim")', explanation: "Oxirida ishlaydi." },
      { title: "5. else", code: 'try:\n    print("Ok")\nexcept: pass\nelse: print("Xato yo\'q")', explanation: "Faqat xato bo'lmasa." },
      { title: "6. raise", code: 'if x < 0: raise Exception("Manfiy")', explanation: "Xatoni qo'lda chiqarish." },
      { title: "7. Xato xabari", code: 'try:\n    1/0\nexcept Exception as e:\n    print(e)', explanation: "Xato matnini olish." },
      { title: "8. AssertionError", code: 'assert x > 0, "Xato"', explanation: "Tekshiruv." },
      { title: "9. Ichma-ich try", code: 'try:\n    try: pass\n    except: pass\nexcept: pass', explanation: "Nested try." },
      { title: "10. KeyboardInterrupt", code: 'try:\n    input()\nexcept KeyboardInterrupt:\n    print("To\'xtatildi")', explanation: "Ctrl+C." },
      { title: "11. IndexError", code: 'l = [1]\ntry: print(l[5])\nexcept IndexError: print("Yo\'q")', explanation: "Indeks xatosi." },
      { title: "12. KeyError", code: 'd = {}\ntry: print(d["a"])\nexcept KeyError: print("Kalit yo\'q")', explanation: "Lug'at xatosi." },
      { title: "13. FileNotFoundError", code: 'try: open("x.txt")\nexcept FileNotFoundError: print("Fayl yo\'q")', explanation: "Fayl xatosi." },
      { title: "14. Custom Exception", code: 'class MyError(Exception): pass', explanation: "O'z xato turingiz." },
      { title: "15. pass bilan xatoni yutish", code: 'try: 1/0\nexcept: pass', explanation: "Tavsiya etilmaydi." }
    ],
    classwork: [
      "Nolga bo'lish xatosini ushlang",
      "Fayl topilmagan holatni boshqaring",
      "O'z xatongizni yarating (raise)"
    ],
    exercises: [
      "Ro'yxat indeksi xatosini ushlash",
      "Lug'at kaliti xatosini ushlash"
    ],
    homework: [
      "Xavfsiz kalkulyator (xatolarsiz)",
      "Foydalanuvchi kiritgan ma'lumotni qayta-qayta tekshirish",
      "Fayl bilan ishlashda xatolarni boshqarish",
      "Bir nechta except bloklarini ishlatish",
      "Xatolarni log faylga yozish"
    ],
    challenge: "Faqat musbat son qabul qiladigan va manfiy son kiritilsa o'ziga xos xato (Custom Exception) beradigan funksiya yozing."
  },
  {
    id: 17,
    title: "List comprehension",
    slug: "list-comprehension",
    description: "Ro'yxatlarni qisqa va tezkor yaratish usuli.",
    introduction: "Python-ning eng chiroyli xususiyatlaridan biri - bu list comprehension.",
    theory: `
## Sintaksis
\`[ifoda for element in iterable if shart]\`

## Afzalliklari:
- Kod qisqaradi
- Tezroq ishlaydi
- O'qish oson (tajribali dasturchilar uchun)
    `,
    codeExamples: [
      { title: "1. Oddiy list comp", code: 'l = [x for x in range(5)]', explanation: "0 dan 4 gacha." },
      { title: "2. Kvadratlar", code: 'l = [x*x for x in range(5)]', explanation: "Darajalar." },
      { title: "3. if bilan", code: 'l = [x for x in range(10) if x%2==0]', explanation: "Faqat juftlar." },
      { title: "4. if-else bilan", code: 'l = ["J" if x%2==0 else "T" for x in range(5)]', explanation: "Shartli qiymat." },
      { title: "5. Matnlar bilan", code: 'l = [s.upper() for s in ["a", "b"]]', explanation: "Metod qo'llash." },
      { title: "6. Ichma-ich sikl", code: 'l = [i*j for i in range(3) for j in range(3)]', explanation: "Nested loops." },
      { title: "7. Dictionary comp", code: 'd = {x: x*x for x in range(3)}', explanation: "Lug'at yaratish." },
      { title: "8. Set comp", code: 's = {x for x in [1,1,2,2]}', explanation: "To'plam yaratish." },
      { title: "9. Generator expression", code: 'g = (x for x in range(100))', explanation: "Qavslar bilan." },
      { title: "10. Filtr va transform", code: 'l = [x.strip() for x in [" a ", " b "] if "a" in x]', explanation: "Murakkab." },
      { title: "11. Matrix flatten", code: 'm = [[1,2], [3,4]]\nl = [x for row in m for x in row]', explanation: "Yoyish." },
      { title: "12. Shartli filtr", code: 'l = [x for x in range(20) if x%3==0 if x%5==0]', explanation: "Ikki shart." },
      { title: "13. enumerate bilan", code: 'l = [f"{i}: {v}" for i, v in enumerate(["A", "B"])]', explanation: "Indeks bilan." },
      { title: "14. zip bilan", code: 'l = [a+b for a, b in zip([1,2], [3,4])]', explanation: "Birlashtirish." },
      { title: "15. Stringdan list", code: 'l = [c for c in "Python"]', explanation: "Harflarga bo'lish." }
    ],
    classwork: [
      "1 dan 50 gacha toq sonlar ro'yxatini tuzing",
      "Ismlar ro'yxatidan 'A' bilan boshlanadiganlarini ajrating",
      "Matndagi harflarni katta qiling"
    ],
    exercises: [
      "Dictionary comprehension-ni o'rganish",
      "Nested list comprehension"
    ],
    homework: [
      "Berilgan ro'yxatdagi musbat sonlarni ajratish",
      "So'zlar uzunligi ro'yxatini yaratish",
      "2 ta ro'yxatning umumiy elementlarini topish",
      "Sonlarni matnga o'tkazish",
      "Matrix (ko'p o'lchamli ro'yxat) yaratish"
    ],
    challenge: "1 dan 1000 gacha bo'lgan barcha tub sonlarni list comprehension yordamida topishga harakat qiling (murakkab!)."
  },
  {
    id: 18,
    title: "OOP kirish",
    slug: "oop-kirish",
    description: "Obyektga yo'naltirilgan dasturlash asoslari.",
    introduction: "OOP - bu dasturlashning eng muhim paradigmasi. U real dunyo obyektlarini kodda tasvirlashga yordam beradi.",
    theory: `
## Asosiy tushunchalar:
- **Class (Sinf)**: Obyekt uchun qolip (chizma).
- **Object (Obyekt)**: Sinfdan yaratilgan nusxa.
- **Attribute (Atribut)**: Obyektning xususiyatlari (rangi, nomi).
- **Method (Metod)**: Obyektning harakatlari (yurishi, gapirishi).
    `,
    codeExamples: [
      { title: "1. Klass yaratish", code: 'class MyClass: pass', explanation: "Eng oddiy klass." },
      { title: "2. Obyekt yaratish", code: 'obj = MyClass()', explanation: "Nusxa olish." },
      { title: "3. Atribut qo'shish", code: 'class Car:\n    color = "Red"', explanation: "Xususiyat." },
      { title: "4. Atributga murojaat", code: 'c = Car()\nprint(c.color)', explanation: "Nuqta orqali." },
      { title: "5. Metod yaratish", code: 'class Dog:\n    def bark(self): print("Vov")', explanation: "Harakat." },
      { title: "6. self nima?", code: 'class A:\n    def f(self): print(self)', explanation: "Obyektning o'zi." },
      { title: "7. Atributni o'zgartirish", code: 'c = Car()\nc.color = "Blue"', explanation: "Qiymatni yangilash." },
      { title: "8. Bir nechta obyekt", code: 'c1 = Car(); c2 = Car()', explanation: "Mustaqil nusxalar." },
      { title: "9. Klass turi", code: 'print(type(c1))', explanation: "Klass nomini ko'rsatadi." },
      { title: "10. __init__ (Preview)", code: 'class A:\n    def __init__(self): print("Yaratildi")', explanation: "Avtomatik ishlaydi." },
      { title: "11. Metodni chaqirish", code: 'd = Dog()\nd.bark()', explanation: "Harakatni bajarish." },
      { title: "12. pass ishlatish", code: 'class Empty: pass', explanation: "Hali tayyor emas." },
      { title: "13. Dinamik atribut", code: 'obj = MyClass()\nobj.new_attr = 5', explanation: "Klassda yo'q narsani qo'shish." },
      { title: "14. Atributni o'chirish", code: 'del obj.new_attr', explanation: "del operatori." },
      { title: "15. Klass ichida klass", code: 'class Outer:\n    class Inner: pass', explanation: "Nested classes." }
    ],
    classwork: [
      "Talaba klassini yarating",
      "Uy hayvoni klassini yarating",
      "Klassga atributlar qo'shing"
    ],
    exercises: [
      "Obyekt yaratish va uning atributlarini o'zgartirish",
      "Bir nechta obyektlar yaratish"
    ],
    homework: [
      "Kitob klassi (nomi, muallifi, yili)",
      "Telefon klassi (brend, xotira, narx)",
      "Klass ichida funksiya (metod) yozish",
      "Obyektlarni ro'yxatda saqlash",
      "Real dunyodagi biror narsani klass ko'rinishida tasvirlang"
    ],
    challenge: "Bank hisobi klassini yarating (balans atributi bilan) va unga pul qo'shish metodini yozing."
  },
  {
    id: 19,
    title: "Class va object",
    slug: "class-va-object",
    description: "Klasslar bilan chuqur ishlash va metodlar.",
    introduction: "Klasslar faqat ma'lumot saqlash uchun emas, balki mantiqiy amallarni bajarish uchun ham xizmat qiladi.",
    theory: `
## Metodlar
Klass ichidagi funksiyalar metodlar deyiladi. Ular obyektning xatti-harakatlarini belgilaydi.

## self kalit so'zi
Metodning birinchi argumenti har doim \`self\` bo'lishi kerak. U joriy obyektga ishora qiladi.
    `,
    codeExamples: [
      { title: "1. Metod yaratish", code: 'class A:\n    def say(self): print("Hi")', explanation: "Oddiy metod." },
      { title: "2. self bilan atribut", code: 'class A:\n    def set(self, v): self.v = v', explanation: "Obyektga ma'lumot saqlash." },
      { title: "3. Metodda argument", code: 'class A:\n    def add(self, a, b): return a+b', explanation: "Qiymat qabul qilish." },
      { title: "4. self orqali chaqirish", code: 'class A:\n    def f1(self): print("1")\n    def f2(self): self.f1()', explanation: "Metod ichida metod." },
      { title: "5. __str__ metodi", code: 'class A:\n    def __str__(self): return "A obj"', explanation: "Print qilganda chiqadi." },
      { title: "6. __len__ metodi", code: 'class A:\n    def __len__(self): return 10', explanation: "len() funksiyasi uchun." },
      { title: "7. Klass atributi", code: 'class A:\n    count = 0', explanation: "Hamma obyektlar uchun umumiy." },
      { title: "8. Obyekt atributi", code: 'class A:\n    def __init__(self, x): self.x = x', explanation: "Har bir obyekt uchun alohida." },
      { title: "9. Klass metodini o'zgartirish", code: 'A.count = 5', explanation: "Klass orqali." },
      { title: "10. Metodni o'zgaruvchiga olish", code: 'a = A(); m = a.say; m()', explanation: "Funksiya kabi." },
      { title: "11. dir(obj)", code: 'print(dir(a))', explanation: "Barcha metod va atributlar." },
      { title: "12. __dict__", code: 'print(a.__dict__)', explanation: "Faqat atributlar lug'ati." },
      { title: "13. hasattr()", code: 'print(hasattr(a, "x"))', explanation: "Borligini tekshirish." },
      { title: "14. getattr()", code: 'print(getattr(a, "x"))', explanation: "Qiymatni olish." },
      { title: "15. setattr()", code: 'setattr(a, "y", 10)', explanation: "Qiymat berish." }
    ],
    classwork: [
      "Shaxs klassini yarating va 'tanishtir' metodini yozing",
      "Kalkulyator klassini yarating",
      "Obyekt atributlarini metod orqali o'zgartiring"
    ],
    exercises: [
      "Metod ichida boshqa metodni chaqirish",
      "Statik metodlar haqida o'rganish"
    ],
    homework: [
      "Avtomobil klassi va 'yurish', 'to'xtash' metodlari",
      "Doira klassi va yuzini hisoblash metodi",
      "Restoran menyusi klassi",
      "Obyektlar o'rtasida ma'lumot almashish",
      "Klass atributi va obyekt atributi farqi"
    ],
    challenge: "Robot klassini yarating, u koordinatalar bo'ylab harakatlana olsin (oldinga, orqaga, o'ngga, chapga)."
  },
  {
    id: 20,
    title: "Constructor (__init__)",
    slug: "constructor-init",
    description: "Obyekt yaratilayotganda ishga tushuvchi maxsus metod.",
    introduction: "__init__ metodi obyekt yaratilgan zahoti avtomatik ishlaydi va unga boshlang'ich qiymatlarni beradi.",
    theory: `
## Dunder metodlar
Ikki pastki chiziq bilan boshlanadigan metodlar 'Magic' yoki 'Dunder' metodlar deyiladi.

## __init__ vazifasi:
- Obyektni initsializatsiya qilish
- Atributlarga qiymat berish
- Kerakli sozlamalarni bajarish
    `,
    codeExamples: [
      { title: "1. Oddiy init", code: 'class A:\n    def __init__(self): print("A")', explanation: "Yaratilganda ishlaydi." },
      { title: "2. Argumentli init", code: 'class A:\n    def __init__(self, x): self.x = x', explanation: "Qiymat qabul qilish." },
      { title: "3. Default qiymat", code: 'class A:\n    def __init__(self, x=0): self.x = x', explanation: "Ixtiyoriy argument." },
      { title: "4. Bir nechta atribut", code: 'class A:\n    def __init__(self, x, y): self.x, self.y = x, y', explanation: "Ko'p xususiyatlar." },
      { title: "5. init ichida metod", code: 'class A:\n    def __init__(self): self.setup()\n    def setup(self): print("S")', explanation: "Sozlash." },
      { title: "6. __del__ (Destructor)", code: 'class A:\n    def __del__(self): print("Bye")', explanation: "O'chirilganda ishlaydi." },
      { title: "7. __new__ metodi", code: 'class A:\n    def __new__(cls): return super().__new__(cls)', explanation: "Obyekt yaratilishidan oldin." },
      { title: "8. init ichida tekshiruv", code: 'class A:\n    def __init__(self, x):\n        if x < 0: x = 0\n        self.x = x', explanation: "Validatsiya." },
      { title: "9. Obyektni ro'yxatga qo'shish", code: 'l = []\nclass A:\n    def __init__(self): l.append(self)', explanation: "Kuzatib borish." },
      { title: "10. __init__ va meros", code: 'class B(A):\n    def __init__(self): super().__init__()', explanation: "Ota klassni chaqirish." },
      { title: "11. Ko'p argumentli init", code: 'class A:\n    def __init__(self, *args): self.data = args', explanation: "*args bilan." },
      { title: "12. Lug'atli init", code: 'class A:\n    def __init__(self, **kwargs): self.d = kwargs', explanation: "**kwargs bilan." },
      { title: "13. init ichida boshqa obyekt", code: 'class A:\n    def __init__(self): self.b = B()', explanation: "Kompozitsiya." },
      { title: "14. __repr__", code: 'class A:\n    def __repr__(self): return "A()"', explanation: "Dasturchi uchun ko'rinish." },
      { title: "15. Singleton (init bilan)", code: 'class S:\n    _inst = None\n    def __init__(self): pass', explanation: "Dizayn pattern." }
    ],
    classwork: [
      "Mahsulot klassi uchun constructor yozing",
      "Bir nechta atributlarni qabul qiling",
      "Default qiymatli argumentlar ishlating"
    ],
    exercises: [
      "__str__ metodini o'rganish",
      "__repr__ metodini o'rganish"
    ],
    homework: [
      "Kutubxona a'zosi klassi",
      "Kompyuter klassi (protsessor, ram, ssd)",
      "Constructor ichida mantiqiy tekshiruvlar yozish",
      "Obyekt yaratilgan vaqtni saqlash",
      "Bir nechta constructorlar (Python-da qanday qilinadi?)"
    ],
    challenge: "Smartfon klassini yarating, constructor orqali uning barcha texnik xususiyatlarini kiriting."
  },
  {
    id: 21,
    title: "Inheritance",
    slug: "inheritance",
    description: "Merosxo'rlik - bir klassdan boshqasini yaratish.",
    introduction: "Merosxo'rlik kodni takrorlamaslikka yordam beradi. Bola klass ota klassning barcha xususiyatlarini oladi.",
    theory: `
## Ota va Bola klasslar
- **Parent class**: Asosiy klass.
- **Child class**: Meros oluvchi klass.

## super() funksiyasi
Ota klassning metodlariga murojaat qilish uchun ishlatiladi.
    `,
    codeExamples: [
      { title: "1. Oddiy meros", code: 'class A: pass\nclass B(A): pass', explanation: "B klass A dan meros oldi." },
      { title: "2. Metodni meros olish", code: 'class A:\n    def f(self): print("A")\nclass B(A): pass\nb = B(); b.f()', explanation: "Ota metodini ishlatish." },
      { title: "3. Metodni qayta yozish", code: 'class B(A):\n    def f(self): print("B")', explanation: "Overriding." },
      { title: "4. super() ishlatish", code: 'class B(A):\n    def f(self): super().f(); print("B")', explanation: "Ota metodini to'ldirish." },
      { title: "5. super().__init__", code: 'class B(A):\n    def __init__(self): super().__init__()', explanation: "Ota constructorini chaqirish." },
      { title: "6. Bir nechta meros", code: 'class C(A, B): pass', explanation: "Multiple inheritance." },
      { title: "7. Ko'p bosqichli meros", code: 'class C(B): pass # B(A)', explanation: "Multilevel inheritance." },
      { title: "8. isinstance()", code: 'print(isinstance(b, A))', explanation: "Turini tekshirish." },
      { title: "9. issubclass()", code: 'print(issubclass(B, A))', explanation: "Merosxo'rlikni tekshirish." },
      { title: "10. MRO (Method Order)", code: 'print(C.mro())', explanation: "Qidirish tartibi." },
      { title: "11. Atributni meros olish", code: 'class A: x = 5\nclass B(A): pass', explanation: "Klass atributi." },
      { title: "12. Private va meros", code: 'class A: __x = 5\nclass B(A): pass # __x ga kira olmaydi', explanation: "Yashirin atribut." },
      { title: "13. Mixin klasslar", code: 'class LoggerMixin:\n    def log(self): print("Log")', explanation: "Qo'shimcha imkoniyat." },
      { title: "14. Abstrakt klass (Preview)", code: 'from abc import ABC, abstractmethod', explanation: "Qolip klass." },
      { title: "15. Diamond problem", code: 'class D(B, C): pass # B(A), C(A)', explanation: "Murakkab meros." }
    ],
    classwork: [
      "Shaxs va Talaba klasslari (Talaba Shaxsdan meros oladi)",
      "Transport va Avtomobil klasslari",
      "Metodni qayta yozish (Method Overriding)"
    ],
    exercises: [
      "Ko'p bosqichli merosxo'rlik",
      "Bir nechta klassdan meros olish (Multiple inheritance)"
    ],
    homework: [
      "Xodimlar iyerarxiyasi (Direktor, Menejer, Ishchi)",
      "Geometrik shakllar iyerarxiyasi",
      "super().__init__() dan foydalanish",
      "Merosxo'rlikda yangi atributlar qo'shish",
      "isinstance() funksiyasini o'rganish"
    ],
    challenge: "Elektronika klassini yarating, undan Telefon va Noutbuk klasslarini meros qilib oling."
  },
  {
    id: 22,
    title: "Encapsulation",
    slug: "encapsulation",
    description: "Ma'lumotlarni himoya qilish va yashirish.",
    introduction: "Inkapsulyatsiya - bu obyektning ichki holatini tashqi dunyodan himoya qilishdir.",
    theory: `
## Kirish darajalari:
1. **Public**: Hamma uchun ochiq (nomi).
2. **Protected**: Faqat merosxo'rlar uchun (\`_nomi\`).
3. **Private**: Faqat klass ichi uchun (\`__nomi\`).

## Getter va Setter
Xususiy atributlarni o'qish va o'zgartirish uchun maxsus metodlar.
    `,
    codeExamples: [
      { title: "1. Public atribut", code: 'class A: x = 1', explanation: "Hamma uchun ochiq." },
      { title: "2. Protected (_)", code: 'class A: _x = 1', explanation: "Kelishuv bo'yicha himoyalangan." },
      { title: "3. Private (__)", code: 'class A: __x = 1', explanation: "Klassdan tashqarida ko'rinmaydi." },
      { title: "4. Private-ga murojaat", code: 'a = A(); print(a._A__x)', explanation: "Name mangling (tavsiya etilmaydi)." },
      { title: "5. Getter metodi", code: 'def get_x(self): return self.__x', explanation: "Qiymatni olish." },
      { title: "6. Setter metodi", code: 'def set_x(self, v): self.__x = v', explanation: "Qiymatni o'zgartirish." },
      { title: "7. @property dekoratori", code: '@property\ndef x(self): return self.__x', explanation: "Atribut kabi ishlatish." },
      { title: "8. @x.setter", code: '@x.setter\ndef x(self, v): self.__x = v', explanation: "Property qiymatini berish." },
      { title: "9. Deleter", code: '@x.deleter\ndef x(self): del self.__x', explanation: "Propertyni o'chirish." },
      { title: "10. Read-only property", code: '@property\ndef id(self): return self.__id', explanation: "Faqat o'qish uchun." },
      { title: "11. Validatsiya setterda", code: 'if v > 0: self.__v = v', explanation: "Tekshiruv bilan saqlash." },
      { title: "12. Private metod", code: 'def __secret(self): pass', explanation: "Yashirin harakat." },
      { title: "13. Encapsulation afzalligi", code: '# Kodni o\'zgartirmasdan mantiqni yangilash', explanation: "Moslashuvchanlik." },
      { title: "14. __slots__ ishlatish", code: '__slots__ = ("x", "y")', explanation: "Xotirani tejash va cheklash." },
      { title: "15. Abstraksiya bilan bog'liqlik", code: '# Ichki tizimni yashirish', explanation: "Murakkablikni kamaytirish." }
    ],
    classwork: [
      "Parolni yashirin saqlaydigan klass yarating",
      "Getter va Setter metodlarini yozing",
      "Atributni o'zgartirishdan oldin tekshiring (masalan: yosh > 0)"
    ],
    exercises: [
      "@property dekoratorini o'rganish",
      "Ma'lumotlarni validatsiya qilish"
    ],
    homework: [
      "Foydalanuvchi profili (email va parol private)",
      "Harorat klassi (Selsiy private, Getter orqali Farangeyt qaytaradi)",
      "Protected atributlar bilan tajriba",
      "Nima uchun inkapsulyatsiya kerak? (Insho yozing)",
      "Klass metodlari orqali xavfsiz o'zgartirish"
    ],
    challenge: "Kredit karta klassini yarating, karta raqami va PIN kodni to'liq himoyalang."
  },
  {
    id: 23,
    title: "Polymorphism",
    slug: "polymorphism",
    description: "Bir xil nomli metodlarning har xil ishlashi.",
    introduction: "Polimorfizm - bu turli xil klasslarga tegishli obyektlar bilan bir xil interfeys orqali ishlash imkoniyatidir.",
    theory: `
## Polimorfizm turlari:
1. **Metod Overriding**: Merosxo'r klassda metodni qayta yozish.
2. **Duck Typing**: Obyektning turi emas, uning metodlari muhimligi.

## Misol:
Har xil hayvonlar 'ovoz' metodiga ega, lekin har biri har xil ovoz chiqaradi.
    `,
    codeExamples: [
      { title: "1. Funksiya polimorfizmi", code: 'print(len("ABC"))\nprint(len([1, 2]))', explanation: "Bitta funksiya har xil turlar bilan." },
      { title: "2. Operator polimorfizmi", code: 'print(1 + 2)\nprint("A" + "B")', explanation: "+ belgisi har xil ishlaydi." },
      { title: "3. Klass polimorfizmi", code: 'for obj in [Dog(), Cat()]: obj.speak()', explanation: "Har xil obyektlar bitta metod bilan." },
      { title: "4. Duck Typing", code: 'def f(obj): obj.fly()', explanation: "Agar u o'rdak kabi uchsa..." },
      { title: "5. Method Overriding", code: 'class B(A):\n    def f(self): pass', explanation: "Polimorfizm asosi." },
      { title: "6. Abstrakt metodlar", code: '@abstractmethod\ndef move(self): pass', explanation: "Majburiy metodlar." },
      { title: "7. __add__ (Magic method)", code: 'def __add__(self, other): return self.v + other.v', explanation: "+ operatorini o'zgartirish." },
      { title: "8. __str__ polimorfizmi", code: 'print(str(10))\nprint(str([1]))', explanation: "Matnga o'tkazish." },
      { title: "9. Interface tushunchasi", code: '# Python-da norasmiy', explanation: "Umumiy shartnoma." },
      { title: "10. Super() bilan polimorfizm", code: 'super().draw()', explanation: "Zanjirsimon chaqiruv." },
      { title: "11. Argumentlar soni (Overloading yo'q)", code: 'def f(a, b=None): pass', explanation: "Python-da default qiymat bilan qilinadi." },
      { title: "12. *args bilan polimorfizm", code: 'def f(*args): pass', explanation: "Istalgancha argument." },
      { title: "13. Dinamik metod chaqirish", code: 'getattr(obj, "method")()', explanation: "Nomi orqali." },
      { title: "14. Polimorfizm va meros", code: '# Ota klass tipida bola obyekt', explanation: "Iyerarxiya." },
      { title: "15. Magic metodlar ro'yxati", code: '__sub__, __mul__, __truediv__', explanation: "Barcha operatorlar." }
    ],
    classwork: [
      "Turli shakllarning yuzini hisoblovchi umumiy funksiya",
      "Har xil tillarda salom beruvchi klasslar",
      "Dasturlash tillari klasslari va 'kod_yozish' metodi"
    ],
    exercises: [
      "Abstrakt klasslar haqida o'rganish (abc moduli)",
      "Operator Overloading (masalan: __add__)"
    ],
    homework: [
      "To'lov tizimlari (Payme, Click, Uzum) - hammasida 'pay' metodi bo'lsin",
      "Xabarlar yuborish (SMS, Email, Telegram)",
      "Fayl formatlari (PDF, DOCX, TXT) va 'ochish' metodi",
      "Polimorfizm va merosxo'rlik bog'liqligi",
      "Magic metodlar yordamida polimorfizm"
    ],
    challenge: "Media pleer yarating, u har xil turdagi fayllarni (MP3, MP4, AVI) 'play' qila olsin."
  },
  {
    id: 24,
    title: "Algorithm tushunchasi",
    slug: "algorithm-tushunchasi",
    description: "Algoritmlar nima va ular nima uchun kerak?",
    introduction: "Algoritm - bu muammoni hal qilish uchun ketma-ket bajariladigan aniq ko'rsatmalar to'plami.",
    theory: `
## Algoritm xususiyatlari:
1. **Aniqlik**: Har bir qadam tushunarli bo'lishi kerak.
2. **Cheklanganlik**: Algoritm qachondir tugashi kerak.
3. **Natijaviylik**: Algoritm kutilgan natijani berishi kerak.

## Algoritmni tasvirlash:
- So'zlar bilan (Natural language)
- Blok-sxemalar (Flowcharts)
- Psevdo-kod (Pseudo-code)
    `,
    codeExamples: [
      { title: "1. Algoritm nima?", code: '# 1. Choynakka suv sol\n# 2. Gazni yoq...', explanation: "Ketma-ketlik." },
      { title: "2. Kirish va Chiqish", code: 'def f(x): return x*2', explanation: "Input -> Process -> Output." },
      { title: "3. Chiziqli algoritm", code: 'a = 5; b = 10; c = a + b', explanation: "To'g'ri chiziq bo'ylab." },
      { title: "4. Tarmoqlanuvchi", code: 'if x > 0: pass\nelse: pass', explanation: "Shartga ko'ra." },
      { title: "5. Takrorlanuvchi", code: 'for i in range(5): pass', explanation: "Sikl orqali." },
      { title: "6. Pseudocode", code: '# IF x > 0 THEN PRINT "OK"', explanation: "Dasturlash tiliga yaqin matn." },
      { title: "7. Blok-sxema (Preview)", code: '# Start -> [Input] -> {Condition} -> End', explanation: "Grafik ko'rinish." },
      { title: "8. Samaradorlik", code: '# Vaqt va Xotira', explanation: "Asosiy o'lchovlar." },
      { title: "9. Qidiruv algoritmi", code: 'if x in list: pass', explanation: "Eng oddiy qidiruv." },
      { title: "10. Saralash algoritmi", code: 'list.sort()', explanation: "Tayyor algoritm." },
      { title: "11. Brute Force", code: '# Hamma variantni tekshirish', explanation: "Qo'pol kuch usuli." },
      { title: "12. Greedy (Ochko'z)", code: '# Har qadamda eng yaxshisini tanlash', explanation: "Lokal optimallik." },
      { title: "13. Divide and Conquer", code: '# Bo\'lib tashla va hukmronlik qil', explanation: "Recursion bilan bog'liq." },
      { title: "14. Dinamik dasturlash", code: '# Natijalarni saqlab borish', explanation: "Memoization." },
      { title: "15. Algoritm aniqligi", code: '# Har doim to\'g\'ri natija berishi', explanation: "Deterministiklik." }
    ],
    classwork: [
      "Choy damlash algoritmini yozing",
      "Sonning juftligini aniqlash algoritmi",
      "Faktorial hisoblash algoritmi"
    ],
    exercises: [
      "Blok-sxema chizishni o'rganish",
      "Algoritm samaradorligini tushunish"
    ],
    homework: [
      "Kundalik ishlaringiz algoritmi",
      "Eng katta sonni topish algoritmi (psevdo-kodda)",
      "Algoritmlar tarixi haqida ma'lumot",
      "Algoritm va Dastur farqi",
      "Yevklid algoritmi (EKUB topish)"
    ],
    challenge: "Berilgan sonning tubligini tekshirish uchun eng samarali algoritmni so'zlar bilan yozing."
  },
  {
    id: 25,
    title: "Time Complexity (Big O)",
    slug: "time-complexity",
    description: "Algoritmlar tezligini o'lchash va baholash.",
    introduction: "Dastur qanchalik tez ishlashini soniyalar bilan emas, balki operatsiyalar soni bilan o'lchaymiz. Buning uchun Big O notation ishlatiladi.",
    theory: `
## Asosiy murakkabliklar:
- **O(1)**: O'zgarmas vaqt (Constant)
- **O(log n)**: Logarifmik vaqt
- **O(n)**: Chiziqli vaqt (Linear)
- **O(n log n)**: Chiziqli-logarifmik
- **O(n^2)**: Kvadratik vaqt

## Nima uchun kerak?
Ma'lumotlar ko'payganda dastur qanchalik sekinlashishini bilish uchun.
    `,
    codeExamples: [
      { title: "1. O(1) - Constant", code: 'def f(l): return l[0]', explanation: "Doimiy vaqt." },
      { title: "2. O(n) - Linear", code: 'def f(l): \n    for x in l: print(x)', explanation: "Elementlar soniga bog'liq." },
      { title: "3. O(n^2) - Quadratic", code: 'for i in l: \n    for j in l: print(i, j)', explanation: "Ichma-ich sikl." },
      { title: "4. O(log n) - Logarithmic", code: '# Binary Search', explanation: "Har qadamda yarmi qoladi." },
      { title: "5. O(n log n)", code: '# Quick Sort, Merge Sort', explanation: "Samarali saralash." },
      { title: "6. O(2^n) - Exponential", code: '# Fibonacci (rekursiv)', explanation: "Juda sekin." },
      { title: "7. O(n!) - Factorial", code: '# Traveling Salesman', explanation: "Eng yomoni." },
      { title: "8. Space Complexity", code: '# Xotira sarfi', explanation: "Qancha joy egallaydi." },
      { title: "9. Best Case", code: '# Omega Ω', explanation: "Eng yaxshi holat." },
      { title: "10. Average Case", code: '# Theta Θ', explanation: "O'rtacha holat." },
      { title: "11. Worst Case", code: '# Big O', explanation: "Eng yomon holat (bizga keraklisi)." },
      { title: "12. O(n + m)", code: 'for x in l1: pass\nfor y in l2: pass', explanation: "Ketma-ket sikllar." },
      { title: "13. O(n * m)", code: 'for x in l1:\n    for y in l2: pass', explanation: "Turli o'lchamli sikllar." },
      { title: "14. Doimiylarni tashlab yuborish", code: 'O(2n) -> O(n)', explanation: "Soddalashtirish qoidasi." },
      { title: "15. Kichik hadlarni tashlash", code: 'O(n^2 + n) -> O(n^2)', explanation: "Dominant hadni qoldirish." }
    ],
    classwork: [
      "Berilgan kodning murakkabligini aniqlang",
      "O(n) va O(n^2) farqini tushuntiring",
      "Xotira murakkabligi (Space Complexity) haqida gapiring"
    ],
    exercises: [
      "Big O grafiklarini chizish",
      "Eng yomon holat (Worst case) tushunchasi"
    ],
    homework: [
      "Turli algoritmlarning Big O qiymatlari jadvali",
      "O(1) ga 3 ta misol yozing",
      "O(n) ga 3 ta misol yozing",
      "Nima uchun O(n^2) yomon?",
      "Binary search murakkabligini o'rganing"
    ],
    challenge: "O(log n) murakkablikka ega bo'lgan real hayotiy misol keltiring."
  },
  {
    id: 26,
    title: "Searching algoritmlari",
    slug: "searching-algoritmlari",
    description: "Ma'lumotlar ichidan qidirish usullari.",
    introduction: "Ma'lumotni qidirish dasturlashda eng ko'p bajariladigan amaldir. Buning ikki asosiy usuli bor.",
    theory: `
## 1. Linear Search (Chiziqli qidiruv)
Har bir elementni birma-bir tekshirib chiqadi. Murakkabligi: **O(n)**.

## 2. Binary Search (Ikkilik qidiruv)
Faqat tartiblangan ro'yxatlar uchun ishlaydi. Ro'yxatni ikkiga bo'lib qidiradi. Murakkabligi: **O(log n)**.
    `,
    codeExamples: [
      { title: "1. Linear Search", code: 'def f(l, x):\n    for i, v in enumerate(l):\n        if v == x: return i', explanation: "Ketma-ket qidirish." },
      { title: "2. Binary Search", code: 'def f(l, x):\n    low, high = 0, len(l)-1\n    while low <= high:\n        mid = (low+high)//2\n        if l[mid] == x: return mid\n        elif l[mid] < x: low = mid+1\n        else: high = mid-1', explanation: "Saralangan ro'yxatda." },
      { title: "3. in operatori", code: 'if x in l: print("Bor")', explanation: "Python-ning ichki usuli." },
      { title: "4. index() metodi", code: 'print(l.index(x))', explanation: "Indeksni qaytaradi." },
      { title: "5. count() bilan tekshirish", code: 'if l.count(x) > 0: pass', explanation: "Soni orqali." },
      { title: "6. Lug'atda qidirish", code: 'if key in dict: pass', explanation: "O(1) murakkablik." },
      { title: "7. To'plamda qidirish", code: 'if x in set: pass', explanation: "O(1) murakkablik." },
      { title: "8. Jump Search", code: '# Bloklar bo\'yicha sakrash', explanation: "O(sqrt(n))." },
      { title: "9. Interpolation Search", code: '# Qiymatga qarab taxmin qilish', explanation: "Yaxshi taqsimlangan ma'lumotda." },
      { title: "10. Exponential Search", code: '# Chegarani kengaytirib borish', explanation: "Cheksiz ro'yxatlar uchun." },
      { title: "11. Matn ichida qidirish", code: 'if "abc" in "abcdef": pass', explanation: "Substring search." },
      { title: "12. find() metodi", code: 'str.find("sub")', explanation: "Indeks yoki -1." },
      { title: "13. rfind()", code: 'str.rfind("sub")', explanation: "O'ngdan qidirish." },
      { title: "14. re moduli (Regex)", code: 'import re\nre.search(pattern, text)', explanation: "Murakkab qidiruv." },
      { title: "15. Murakkab obyektlarni qidirish", code: 'next(x for x in l if x.id == 5)', explanation: "Generator bilan." }
    ],
    classwork: [
      "Linear search funksiyasini yozing",
      "Binary search-ni qog'ozda bajarib ko'ring",
      "Qidiruv algoritmlarini solishtiring"
    ],
    exercises: [
      "Rekursiv binary search",
      "Katta ro'yxatda qidiruv tezligini o'lchash"
    ],
    homework: [
      "Ismlar ro'yxatidan qidirish dasturi",
      "Lug'atdan qidirish (Python-da qanday ishlaydi?)",
      "Binary search uchun tartiblash algoritmi qo'shish",
      "Linear search qachon yaxshiroq?",
      "Interpolation search haqida o'rganish"
    ],
    challenge: "Berilgan sonlar ro'yxatida biror son necha marta qatnashganini binary search yordamida toping."
  },
  {
    id: 27,
    title: "Sorting algoritmlari",
    slug: "sorting-algoritmlari",
    description: "Ma'lumotlarni tartiblash usullari.",
    introduction: "Tartiblash algoritmlari ma'lumotlarni o'sish yoki kamayish tartibida joylashtiradi.",
    theory: `
## Mashhur algoritmlar:
1. **Bubble Sort**: Qo'shni elementlarni almashtirish. **O(n^2)**.
2. **Selection Sort**: Eng kichigini topib oldinga qo'yish. **O(n^2)**.
3. **Insertion Sort**: Kartalarni tartiblagandek ishlash. **O(n^2)**.
4. **Quick Sort / Merge Sort**: Bo'lib tashla va hukmronlik qil. **O(n log n)**.
    `,
    codeExamples: [
      { title: "1. Bubble Sort", code: 'for i in range(n):\n    for j in range(n-i-1):\n        if l[j] > l[j+1]: l[j], l[j+1] = l[j+1], l[j]', explanation: "Pufakchali saralash." },
      { title: "2. Selection Sort", code: 'for i in range(n):\n    m = i\n    for j in range(i+1, n):\n        if l[j] < l[m]: m = j\n    l[i], l[m] = l[m], l[i]', explanation: "Tanlash orqali." },
      { title: "3. Insertion Sort", code: 'for i in range(1, n):\n    k = l[i]; j = i-1\n    while j >= 0 and k < l[j]:\n        l[j+1] = l[j]; j -= 1\n    l[j+1] = k', explanation: "Joylashtirish orqali." },
      { title: "4. sorted() funksiyasi", code: 'new_l = sorted(l)', explanation: "Yangi ro'yxat qaytaradi." },
      { title: "5. sort() metodi", code: 'l.sort()', explanation: "O'zini o'zgartiradi." },
      { title: "6. Reverse sort", code: 'l.sort(reverse=True)', explanation: "Kamayish tartibida." },
      { title: "7. Key bilan saralash", code: 'l.sort(key=len)', explanation: "Funksiya orqali." },
      { title: "8. Quick Sort (Preview)", code: '# Pivot tanlash va bo\'lish', explanation: "O(n log n)." },
      { title: "9. Merge Sort (Preview)", code: '# Bo\'lish va birlashtirish', explanation: "O(n log n)." },
      { title: "10. Python Timsort", code: '# sort() aslida Timsort ishlatadi', explanation: "Gibrid algoritm." },
      { title: "11. Lug'atni saralash", code: 'sorted(d.items())', explanation: "Kalitlar bo'yicha." },
      { title: "12. Obyektlarni saralash", code: 'l.sort(key=lambda x: x.age)', explanation: "Atribut bo'yicha." },
      { title: "13. Barqaror saralash", code: '# Stable sorting', explanation: "Teng elementlar tartibi saqlanadi." },
      { title: "14. Shell Sort", code: '# Qadamlar bilan saralash', explanation: "Insertion sort takomillashgani." },
      { title: "15. Counting Sort", code: '# Sanash orqali', explanation: "O(n + k) - sonlar chegaralangan bo'lsa." }
    ],
    classwork: [
      "Selection sort algoritmini tushuntiring",
      "Bubble sort-ni vizualizatsiya qiling",
      "Python-ning tayyor .sort() metodi qaysi algoritmdan foydalanadi? (Timsort)"
    ],
    exercises: [
      "Insertion sort funksiyasini yozish",
      "Algoritmlar tezligini solishtirish"
    ],
    homework: [
      "Talabalar baholarini tartiblash",
      "So'zlarni uzunligi bo'yicha tartiblash",
      "Selection sort funksiyasini yozing",
      "Quick sort haqida video ko'ring",
      "Tartiblangan ro'yxatni birlashtirish"
    ],
    challenge: "Quick Sort algoritmini Python-da amalga oshiring."
  },
  {
    id: 28,
    title: "Recursion",
    slug: "recursion",
    description: "Funksiyaning o'zini o'zi chaqirishi.",
    introduction: "Rekursiya - bu murakkab muammolarni kichikroq o'xshash muammolarga bo'lish usulidir.",
    theory: `
## Rekursiya shartlari:
1. **Base Case (To'xtash sharti)**: Rekursiya qachon tugashini belgilaydi.
2. **Recursive Step**: Funksiyaning o'zini kichikroq argument bilan chaqirishi.

## Stack Overflow
Agar to'xtash sharti bo'lmasa, xotira to'lib qoladi va dastur xato beradi.
    `,
    codeExamples: [
      { title: "1. Oddiy rekursiya", code: 'def f(n):\n    if n == 0: return\n    print(n)\n    f(n-1)', explanation: "Sanoq." },
      { title: "2. Faktorial", code: 'def fact(n):\n    if n == 1: return 1\n    return n * fact(n-1)', explanation: "Klassik misol." },
      { title: "3. Fibonacci", code: 'def fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)', explanation: "Sekin rekursiya." },
      { title: "4. Ro'yxat yig'indisi", code: 'def s(l):\n    if not l: return 0\n    return l[0] + s(l[1:])', explanation: "Qismlarga bo'lish." },
      { title: "5. Matnni teskari qilish", code: 'def rev(s):\n    if not s: return ""\n    return rev(s[1:]) + s[0]', explanation: "String rekursiya." },
      { title: "6. Darajaga ko'tarish", code: 'def p(a, b):\n    if b == 0: return 1\n    return a * p(a, b-1)', explanation: "Power function." },
      { title: "7. Base Case nima?", code: '# To\'xtash sharti', explanation: "Cheksiz bo'lmasligi uchun." },
      { title: "8. Recursive Step", code: '# Muammoni kichraytirish', explanation: "Asosiy mantiq." },
      { title: "9. Stack Overflow", code: '# Rekursiya juda chuqur bo\'lsa', explanation: "Xotira xatosi." },
      { title: "10. Tail Recursion", code: '# Oxirgi amal chaqiruv bo\'lsa', explanation: "Optimallash (Python-da yo'q)." },
      { title: "11. Memoization", code: 'memo = {}\ndef f(n):\n    if n in memo: return memo[n]', explanation: "Tezlashtirish." },
      { title: "12. lru_cache", code: 'from functools import lru_cache\n@lru_cache(None)\ndef f(n): ...', explanation: "Tayyor tezlatgich." },
      { title: "13. Papkalarni ko'rish", code: '# os.listdir() bilan rekursiv', explanation: "Fayl tizimi." },
      { title: "14. Binary Search (Rekursiv)", code: 'def bs(l, x, low, high): ...', explanation: "Qidiruv." },
      { title: "15. Rekursiya limiti", code: 'import sys\nsys.setrecursionlimit(2000)', explanation: "Limitni oshirish." }
    ],
    classwork: [
      "Fibonachchi sonlarini rekursiya bilan toping",
      "Sonlar yig'indisini rekursiv hisoblang",
      "Rekursiya va Sikl farqini muhokama qiling"
    ],
    exercises: [
      "Matnni rekursiv teskari o'girish",
      "Ro'yxat elementlarini rekursiv sanash"
    ],
    homework: [
      "Fibonachchi ketma-ketligi (birinchi 10 ta)",
      "Darajaga ko'tarish rekursiv funksiyasi",
      "EKUBni rekursiv topish",
      "Rekursiya chuqurligini (limit) tekshirish",
      "Iterativ (sikl bilan) va Rekursiv yechimlarni solishtirish"
    ],
    challenge: "Xano minorasi (Tower of Hanoi) muammosini rekursiya bilan hal qiling."
  },
  {
    id: 29,
    title: "Stack",
    slug: "stack",
    description: "LIFO (Last In, First Out) ma'lumotlar tuzilmasi.",
    introduction: "Stack - bu ma'lumotlarni ustma-ust taxlangan likopchalar kabi saqlash usuli.",
    theory: `
## LIFO prinsipi
Oxirgi kirgan ma'lumot birinchi bo'lib chiqadi.

## Asosiy amallar:
- **Push**: Element qo'shish.
- **Pop**: Elementni olish.
- **Peek**: Eng yuqoridagi elementni ko'rish.
- **isEmpty**: Bo'shligini tekshirish.
    `,
    codeExamples: [
      { title: "1. List bilan Stack", code: 's = []\ns.append(1) # Push\ns.pop() # Pop', explanation: "LIFO printsipi." },
      { title: "2. Peek (Ko'rish)", code: 'top = s[-1]', explanation: "Oxirgi elementni olish." },
      { title: "3. Bo'shlikni tekshirish", code: 'is_empty = len(s) == 0', explanation: "isEmpty." },
      { title: "4. Stack klassi", code: 'class Stack:\n    def __init__(self): self.items = []', explanation: "O'z klassimiz." },
      { title: "5. Qavslarni tekshirish", code: '# (()) - to\'g\'rimi?', explanation: "Stack qo'llanilishi." },
      { title: "6. Matnni teskari qilish", code: '# Harflarni push qilib, pop qilish', explanation: "Amaliy misol." },
      { title: "7. Undo/Redo", code: '# Tahrirlovchilarda', explanation: "Qo'llanilishi." },
      { title: "8. Browser History", code: '# Orqaga tugmasi', explanation: "Qo'llanilishi." },
      { title: "9. Call Stack", code: '# Funksiya chaqiruvlari', explanation: "Dasturlashda roli." },
      { title: "10. Stack hajmi", code: 'len(s)', explanation: "Size." },
      { title: "11. Tozalash", code: 's.clear()', explanation: "Clear." },
      { title: "12. Bir nechta stack", code: 's1, s2 = [], []', explanation: "Parallel stacklar." },
      { title: "13. Stack Overflow nima?", code: '# To\'lib ketish', explanation: "Xato holati." },
      { title: "14. Stack Underflow", code: '# Bo\'sh stackdan pop qilish', explanation: "Xato holati." },
      { title: "15. collections.deque", code: 'from collections import deque\ns = deque()', explanation: "Tezkor stack." }
    ],
    classwork: [
      "Stack yordamida matnni teskari o'giring",
      "Qavslar to'g'ri qo'yilganini tekshiring",
      "Stack-ning real hayotdagi misollari (Brauzer 'Back' tugmasi)"
    ],
    exercises: [
      "Undo (bekor qilish) funksiyasini stack bilan qilish",
      "Stack hajmini cheklash"
    ],
    homework: [
      "Stack klassini to'liq yozing",
      "Matematik ifodalarni hisoblashda stack",
      "Brauzer tarixi simulyatsiyasi",
      "Stack-dan eng kichik elementni topish",
      "Ikki stack yordamida Queue yaratish"
    ],
    challenge: "Berilgan matematik ifodadagi qavslar ((), [], {}) balansini stack yordamida tekshiring."
  },
  {
    id: 30,
    title: "Queue",
    slug: "queue",
    description: "FIFO (First In, First Out) ma'lumotlar tuzilmasi.",
    introduction: "Queue (navbat) - bu do'kondagi navbat kabi ishlaydigan ma'lumotlar tuzilmasi.",
    theory: `
## FIFO prinsipi
Birinchi kirgan ma'lumot birinchi bo'lib chiqadi.

## Asosiy amallar:
- **Enqueue**: Navbatga qo'shish.
- **Dequeue**: Navbatdan olish.
- **Front**: Birinchi elementni ko'rish.
- **Rear**: Oxirgi elementni ko'rish.
    `,
    codeExamples: [
      { title: "1. List bilan Queue", code: 'q = []\nq.append(1) # Enqueue\nq.pop(0) # Dequeue', explanation: "FIFO printsipi (sekin)." },
      { title: "2. deque bilan Queue", code: 'from collections import deque\nq = deque()\nq.append(1)\nq.popleft()', explanation: "Tezkor navbat." },
      { title: "3. Front (Boshi)", code: 'first = q[0]', explanation: "Birinchi element." },
      { title: "4. Bo'shlikni tekshirish", code: 'not q', explanation: "isEmpty." },
      { title: "5. Printer navbati", code: '# Hujjatlar ketma-ketligi', explanation: "Amaliy misol." },
      { title: "6. Mijozlar navbati", code: '# Bank yoki do\'kon', explanation: "Simulyatsiya." },
      { title: "7. BFS algoritmi", code: '# Grafda qidiruv', explanation: "Navbat ishlatadi." },
      { title: "8. Priority Queue", code: 'import heapq', explanation: "Ustuvorlik navbati." },
      { title: "9. Circular Queue", code: '# Doiraviy navbat', explanation: "Xotirani tejash." },
      { title: "10. Double-ended Queue", code: 'deque.pop(), deque.popleft()', explanation: "Ikki tomonlama." },
      { title: "11. Queue klassi", code: 'class Queue: ...', explanation: "O'z klassimiz." },
      { title: "12. Navbat hajmi", code: 'len(q)', explanation: "Size." },
      { title: "13. Tozalash", code: 'q.clear()', explanation: "Clear." },
      { title: "14. Navbatni teskari qilish", code: '# Stack yordamida', explanation: "Mantiqiy mashq." },
      { title: "15. queue moduli", code: 'from queue import Queue', explanation: "Thread-safe navbat." }
    ],
    classwork: [
      "Navbat simulyatsiyasini yarating",
      "Printer navbati qanday ishlashini tushuntiring",
      "Stack va Queue farqini ayting"
    ],
    exercises: [
      "Circular Queue haqida o'rganish",
      "Priority Queue (ustuvorlik navbati)"
    ],
    homework: [
      "Bankdagi navbat tizimi",
      "Xabarlar navbati (Message Queue)",
      "deque modulini chuqur o'rganish",
      "Navbatni teskari qilish",
      "Restoran buyurtmalar tizimi"
    ],
    challenge: "Priority Queue yarating, unda har bir element o'z ustuvorlik darajasiga ega bo'lsin."
  },
  {
    id: 31,
    title: "Final loyiha tayyorlash",
    slug: "final-loyiha-tayyorlash",
    description: "Loyihani rejalashtirish va arxitektura.",
    introduction: "Katta loyihani boshlashdan oldin uni to'g'ri rejalashtirish muvaffaqiyatning yarmi hisoblanadi.",
    theory: `
## Loyiha bosqichlari:
1. **G'oya va Talablar**: Loyiha nima qilishi kerak?
2. **Arxitektura**: Klasslar va modullar qanday bog'lanadi?
3. **Ma'lumotlar**: Qanday ma'lumotlar saqlanadi?
4. **Kodlash**: Kichik qismlardan boshlab yozish.
5. **Testing**: Xatolarni tekshirish.

## Clean Code (Toza kod)
O'zgaruvchilar nomlanishi, kommentariyalar va funksiyalar hajmi.
    `,
    codeExamples: [
      { title: "1. G'oya tanlash", code: '# Loyiha: Kutubxona tizimi', explanation: "Birinchi qadam." },
      { title: "2. Talablar ro'yxati", code: '# - Kitob qo\'shish\n# - Kitob qidirish', explanation: "Funksionallik." },
      { title: "3. Klass diagrammasi", code: 'class Book: ...\nclass User: ...', explanation: "Tuzilma." },
      { title: "4. Ma'lumotlar formati", code: 'import json\n# data.json', explanation: "Saqlash usuli." },
      { title: "5. main.py asosi", code: 'def main(): pass', explanation: "Kirish nuqtasi." },
      { title: "6. Modullarga bo'lish", code: 'import models\nimport logic', explanation: "Arxitektura." },
      { title: "7. Xatolarni rejalashtirish", code: 'try: ... except: ...', explanation: "Barqarorlik." },
      { title: "8. Foydalanuvchi interfeysi", code: 'input("Tanlang: ")', explanation: "CLI interfeys." },
      { title: "9. Test yozish", code: 'def test_logic(): assert True', explanation: "Sifat nazorati." },
      { title: "10. README tayyorlash", code: '# Project Name\n## Usage', explanation: "Hujjatlashtirish." },
      { title: "11. Versiya nazorati", code: '# git init', explanation: "Git bilan ishlash." },
      { title: "12. Kutubxonalarni tanlash", code: '# requests, sqlite3', explanation: "Asboblar." },
      { title: "13. Deadline belgilash", code: '# 1-kun: Reja, 2-kun: Kod...', explanation: "Vaqt boshqaruvi." },
      { title: "14. Refactoring", code: '# Kodni tozalash', explanation: "Yaxshilash." },
      { title: "15. Yakuniy tekshiruv", code: '# Hamma narsa ishlayaptimi?', explanation: "Tayyorgarlik." }
    ],
    classwork: [
      "Loyiha g'oyasini tanlang",
      "Klasslar diagrammasini chizing",
      "Fayllar strukturasini yarating"
    ],
    exercises: [
      "GitHub-da repozitoriya ochish",
      "README fayli yozish"
    ],
    homework: [
      "Loyihangizning to'liq rejasini yozing",
      "Kerakli kutubxonalarni aniqlang",
      "Ma'lumotlar bazasi modelini chizing",
      "Loyiha uchun logotip yoki nom o'ylab toping",
      "Vaqt taqsimotini (Deadline) belgilang"
    ],
    challenge: "Loyihangiz uchun to'liq texnik topshiriq (Technical Specification) hujjati tayyorlang."
  },
  {
    id: 32,
    title: "Final loyiha",
    slug: "final-loyiha",
    description: "Loyihani yakunlash va taqdimot.",
    introduction: "Tabriklaymiz! Siz kursning oxirgi bosqichiga yetib keldingiz. Endi bor bilimingizni bitta loyihada ko'rsatish vaqti keldi.",
    theory: `
## Loyihani yakunlash:
- Barcha funksiyalar ishlashini tekshiring.
- Xatolarni (Exceptions) boshqaring.
- Kodni optimallashtiring.
- Foydalanuvchi uchun qo'llanma yozing.

## Keyingi qadamlar:
Dasturlash - bu doimiy o'rganish jarayoni. Python-dan so'ng Web (Django), Data Science yoki Mobile yo'nalishlaridan birini tanlashingiz mumkin.
    `,
    codeExamples: [
      { title: "1. Dasturni ishga tushirish", code: 'if __name__ == "__main__": main()', explanation: "Standart kirish." },
      { title: "2. Obyektni initsializatsiya", code: 'app = App()', explanation: "Asosiy klass." },
      { title: "3. Ma'lumotlarni yuklash", code: 'data = load_data()', explanation: "Boshlang'ich holat." },
      { title: "4. Asosiy sikl", code: 'while True: run()', explanation: "Dastur ishlashi." },
      { title: "5. Chiqishni boshqarish", code: 'if choice == "0": break', explanation: "Tugallash." },
      { title: "6. Ma'lumotlarni saqlash", code: 'save_data(data)', explanation: "Natijani yozish." },
      { title: "7. Xatolarni log qilish", code: 'logging.error("Xato")', explanation: "Kuzatuv." },
      { title: "8. Rangli matn (Preview)", code: 'print("\\033[92m Success")', explanation: "Interfeysni bezash." },
      { title: "9. Jadval ko'rinishi", code: 'print("ID | Name")', explanation: "Chiroyli chiqish." },
      { title: "10. Qidiruv funksiyasi", code: 'res = search(query)', explanation: "Qidiruv integratsiyasi." },
      { title: "11. Saralash funksiyasi", code: 'res = sort(data)', explanation: "Saralash integratsiyasi." },
      { title: "12. Parol bilan himoya", code: 'if getpass() == "123":', explanation: "Xavfsizlik." },
      { title: "13. Yordam menyusi", code: 'print("Help: ...")', explanation: "Qo'llanma." },
      { title: "14. Versiya haqida", code: 'print("v1.0.0")', explanation: "Ma'lumot." },
      { title: "15. Rahmat xabari", code: 'print("Rahmat!")', explanation: "Xayrlashuv." }
    ],
    classwork: [
      "Loyihani testdan o'tkazing",
      "Kodlarni ko'zdan kechiring (Code Review)",
      "Taqdimot tayyorlang"
    ],
    exercises: [
      "Loyihani executable (.exe) qilishni o'rganish",
      "Portfolio-ga qo'shish"
    ],
    homework: [
      "Loyihani GitHub-ga yuklang",
      "Kurs haqida fikringizni yozing",
      "Keyingi o'rganadigan 3 ta texnologiyani belgilang",
      "O'z portfoliongizni yaratishni boshlang",
      "Saddam Teacher sertifikatini olishga tayyorlaning!"
    ],
    challenge: "Loyihangizni boshqa bir kishiga ko'rsating va undan feedback (fikr-mulohaza) oling, so'ng kamchiliklarni tuzating."
  },
  {
    id: 1,
    title: "Python ga kirish",
    slug: "python-ga-kirish",
    description: "Python dasturlash tili tarixi, o'rnatish va birinchi dastur.",
    introduction: "Python - bu bugungi kunda dunyodagi eng mashhur va o'rganish uchun qulay dasturlash tillaridan biri. U 1991-yilda Gvido van Rossum tomonidan yaratilgan.",
    theory: `
## Python nima?
Python - bu yuqori darajali, interpretatsiya qilinadigan va umumiy maqsadli dasturlash tili. Uning dizayn falsafasi kodning o'qilishiga (readability) katta e'tibor beradi.

### Nima uchun Python?
1. **Oson sintaksis**: Python kodi ingliz tiliga juda yaqin, shuning uchun uni o'rganish oson.
2. **Katta hamjamiyat**: Har qanday muammoga yechim topish oson.
3. **Keng qo'llanilishi**: Sun'iy intellekt, Data Science, Web Development va boshqalar.

### O'rnatish
Pythonni rasmiy sayti [python.org](https://python.org) dan yuklab olishingiz mumkin. O'rnatish vaqtida **"Add Python to PATH"** katakchasini belgilashni unutmang.
    `,
    codeExamples: [
      { title: "1. Hello World", code: 'print("Salom, Dunyo!")', explanation: "Ekranga matn chiqarishning eng oddiy usuli." },
      { title: "2. Bir nechta qator", code: 'print("Saddam Teacher")\nprint("Python Kursi")', explanation: "Har bir print yangi qatordan chiqadi." },
      { title: "3. Matematik amallar", code: 'print(5 + 5)\nprint(10 - 2)\nprint(3 * 4)', explanation: "Print ichida hisob-kitob qilish mumkin." },
      { title: "4. Qo'shtirnoqlar", code: "print('Yakkalik qo\\'shtirnoq')\nprint(\"Juflik qo'shtirnoq\")", explanation: "Ikkala turdagi qo'shtirnoqdan foydalanish mumkin." },
      { title: "5. Yangi qator (\\n)", code: 'print("Birinchi qator\\nIkkinchi qator")', explanation: "\\n belgisi matnni yangi qatorga o'tkazadi." },
      { title: "6. Tabulyatsiya (\\t)", code: 'print("Ism:\\tSaddam\\nYosh:\\t25")', explanation: "\\t belgisi bo'sh joy (tab) tashlaydi." },
      { title: "7. Ko'p qatorli matn", code: 'print("""Bu juda uzun matn\nuni bir nechta qatorga\nyozish mumkin.""")', explanation: "Uchta qo'shtirnoq ko'p qatorli matnlar uchun." },
      { title: "8. Matnlarni birlashtirish", code: 'print("Salom " + "Python")', explanation: "+ belgisi matnlarni ulaydi." },
      { title: "9. Matnni takrorlash", code: 'print("Python " * 5)', explanation: "* belgisi matnni takrorlaydi." },
      { title: "10. Son va matn", code: 'print("Natija:", 100)', explanation: "Vergul orqali turli turlarni chiqarish mumkin." },
      { title: "11. ASCII Art (S harfi)", code: 'print(" **** ")\nprint("*    ")\nprint(" *** ")\nprint("    *")\nprint(" **** ")', explanation: "Oddiy belgilar bilan rasm chizish." },
      { title: "12. Bo'sh qator", code: 'print("Yuqori")\nprint()\nprint("Pastki")', explanation: "Argumentlarsiz print bo'sh qator chiqaradi." },
      { title: "13. Murakkab hisob", code: 'print((5 + 3) * 2 / 4)', explanation: "Qavslar ustuvorlikni belgilaydi." },
      { title: "14. Izohlar (Comments)", code: '# Bu izoh, u ishlamaydi\nprint("Kod ishlaydi")', explanation: "# belgisi bilan izoh qoldiriladi." },
      { title: "15. Maxsus belgilar", code: 'print("Men \\"Python\\"ni o\'rganyapman")', explanation: "Ekranlash belgilari (escaping)." }
    ],
    classwork: [
      "Pythonni o'rnating",
      "VS Code yoki PyCharm o'rnating",
      "Ekranga o'z ismingizni chiqaruvchi dastur yozing"
    ],
    exercises: [
      "Ekranga 5 ta turli xil gap chiqaring",
      "Matematik amallarni print ichida bajarib ko'ring (masalan: print(5 + 5))"
    ],
    homework: [
      "Python tarixi haqida 5 ta fakt toping",
      "O'zingiz haqingizda ma'lumot chiqaruvchi dastur yozing",
      "print funksiyasi yordamida rasm chizishga harakat qiling (ASCII art)",
      "Python versiyasini terminalda tekshiring",
      "Birinchi .py faylingizni yarating"
    ],
    challenge: "Print funksiyasidan foydalanib, ekranda katta 'S' harfini yulduzchalar (*) yordamida chizing."
  },
  {
    id: 2,
    title: "O‘zgaruvchilar va print",
    slug: "ozgaruvchilar-va-print",
    description: "O'zgaruvchilar tushunchasi, nomlash qoidalari va print funksiyasi imkoniyatlari.",
    introduction: "Dasturlashda ma'lumotlarni saqlash uchun biz o'zgaruvchilardan (variables) foydalanamiz. O'zgaruvchini ma'lum bir qiymat saqlanadigan quti deb tasavvur qilish mumkin.",
    theory: `
## O'zgaruvchilar (Variables)
O'zgaruvchi - bu xotiradagi ma'lum bir joyga berilgan nom.

### Nomlash qoidalari:
1. Harf yoki pastki chiziq (_) bilan boshlanishi kerak.
2. Raqam bilan boshlanishi mumkin emas.
3. Faqat harf, raqam va pastki chiziqdan iborat bo'lishi mumkin.
4. Katta-kichik harflar farqlanadi (name va Name boshqa-boshqa).

### print() funksiyasi parametrlari
- \`sep\`: Qiymatlar orasiga nima qo'yishni belgilaydi.
- \`end\`: Qator oxirida nima bo'lishini belgilaydi.
    `,
    codeExamples: [
      { title: "1. O'zgaruvchi yaratish", code: 'ism = "Saddam"\nyosh = 25', explanation: "O'zgaruvchiga qiymat berish." },
      { title: "2. Qiymatni chiqarish", code: 'shahar = "Toshkent"\nprint(shahar)', explanation: "O'zgaruvchi nomini yozish kifoya." },
      { title: "3. Qiymatni o'zgartirish", code: 'x = 10\nprint(x)\nx = 20\nprint(x)', explanation: "O'zgaruvchi qiymati istalgancha o'zgarishi mumkin." },
      { title: "4. Bir nechta o'zgaruvchi", code: 'a, b, c = 1, 2, 3', explanation: "Bitta qatorda bir nechta o'zgaruvchi yaratish." },
      { title: "5. Bir xil qiymat", code: 'x = y = z = "Bir xil"', explanation: "Bir nechta o'zgaruvchiga bitta qiymat berish." },
      { title: "6. f-string (Formatlash)", code: 'ism = "Ali"\nprint(f"Salom {ism}!")', explanation: "Matn ichida o'zgaruvchini ishlatishning eng yaxshi usuli." },
      { title: "7. sep parametri", code: 'print("Olma", "Banan", "Uzum", sep=", ")', explanation: "Elementlar orasiga belgi qo'yish." },
      { title: "8. end parametri", code: 'print("Salom", end="***")\nprint("Dunyo")', explanation: "Qator oxirini belgilash." },
      { title: "9. O'zgaruvchi turi", code: 'son = 10\nprint(type(son))', explanation: "type() turi aniqlaydi." },
      { title: "10. Katta-kichik harf", code: 'ism = "Ali"\nIsm = "Vali"\nprint(ism, Ism)', explanation: "Python harf registiga sezgir." },
      { title: "11. Sonli o'zgaruvchilar", code: 'narx = 15000\nsoni = 3\njami = narx * soni\nprint(jami)', explanation: "O'zgaruvchilar bilan matematik amallar." },
      { title: "12. Matnli o'zgaruvchilar", code: 'f_ism = "Saddam"\nl_ism = "Teacher"\nfull = f_ism + " " + l_ism\nprint(full)', explanation: "Matnlarni qo'shish." },
      { title: "13. Boolean o'zgaruvchi", code: 'is_active = True\nis_admin = False', explanation: "Mantiqiy qiymatlar." },
      { title: "14. O'zgarmaslar (Konstanta)", code: 'PI = 3.14\nGRAVITY = 9.8', explanation: "Katta harflar bilan yozish kelishilgan." },
      { title: "15. Dinamik tiplash", code: 'val = 10\nval = "O\'n"\nprint(val)', explanation: "O'zgaruvchi turi o'zgarishi mumkin." }
    ],
    classwork: [
      "Ism, familiya va yosh o'zgaruvchilarini yarating",
      "Ularni bitta print ichida chiqaring",
      "sep va end parametrlarini sinab ko'ring"
    ],
    exercises: [
      "Radius o'zgaruvchisini yarating va doira yuzini hisoblang",
      "Ikki sonning yig'indisini o'zgaruvchilar orqali chiqaring"
    ],
    homework: [
      "5 ta turli xil o'zgaruvchi yarating",
      "O'zgaruvchilarni nomlashda xato qilib ko'ring va xatoni o'qing",
      "print yordamida jadval ko'rinishida ma'lumot chiqaring",
      "O'zgaruvchi qiymatini dastur davomida o'zgartirib ko'ring",
      "Katta matnlarni o'zgaruvchiga yuklang"
    ],
    challenge: "Faqat bitta print funksiyasi va o'zgaruvchilar yordamida shaxmat taxtasini chizishga harakat qiling."
  },
  {
    id: 3,
    title: "Input va foydalanuvchi bilan ishlash",
    slug: "input-va-foydalanuvchi-bilan-ishlash",
    description: "Foydalanuvchidan ma'lumot olish va turlarni o'zgartirish.",
    introduction: "Dasturlarimiz interaktiv bo'lishi uchun foydalanuvchidan ma'lumot olishimiz kerak. Buning uchun input() funksiyasi xizmat qiladi.",
    theory: `
## input() funksiyasi
Bu funksiya foydalanuvchi klaviaturadan biror narsa yozishini kutadi.

### Muhim eslatma!
\`input()\` funksiyasi har doim ma'lumotni **string (matn)** ko'rinishida qaytaradi. Agar bizga son kerak bo'lsa, uni \`int()\` yoki \`float()\` orqali o'zgartirishimiz shart.

### Type Casting (Turlarni o'zgartirish)
- \`int(x)\`: Butun songa o'tkazish
- \`float(x)\`: O'nlik songa o'tkazish
- \`str(x)\`: Matnga o'tkazish
    `,
    codeExamples: [
      { title: "1. Oddiy input", code: 'ism = input("Ismingizni kiriting: ")', explanation: "Foydalanuvchidan matn so'rash." },
      { title: "2. Son kiritish", code: 'yosh = int(input("Yoshingizni kiriting: "))', explanation: "Kiritilgan matnni butun songa o'tkazish." },
      { title: "3. O'nlik son", code: 'vazn = float(input("Vazningizni kiriting: "))', explanation: "Kiritilgan matnni o'nlik songa o'tkazish." },
      { title: "4. f-string bilan input", code: 'ism = input("Ism: ")\nprint(f"Salom {ism}!")', explanation: "Kiritilgan ma'lumotni formatlab chiqarish." },
      { title: "5. Ikki son yig'indisi", code: 'a = int(input("a = "))\nb = int(input("b = "))\nprint(a + b)', explanation: "Matematik amal bajarish." },
      { title: "6. Tug'ilgan yil", code: 'yosh = int(input("Yosh: "))\nyil = 2024 - yosh\nprint(yil)', explanation: "Yoshga qarab yilni topish." },
      { title: "7. Kvadrat yuzi", code: 'a = float(input("Tomoni: "))\nprint(a * a)', explanation: "Geometrik hisob-kitob." },
      { title: "8. Bir nechta input", code: 'ism = input("Ism: ")\nfam = input("Fam: ")\nprint(fam, ism)', explanation: "Ketma-ket ma'lumot olish." },
      { title: "9. Input turi", code: 'val = input("Narsa yozing: ")\nprint(type(val))', explanation: "Input har doim string qaytaradi." },
      { title: "10. Bo'sh joy bilan input", code: 'gap = input("Gap: ").strip()', explanation: "Bo'shliqlarni olib tashlash." },
      { title: "11. Katta harfga o'tkazish", code: 'ism = input("Ism: ").upper()', explanation: "Kiritilgan matnni katta harfga o'tkazish." },
      { title: "12. Valyuta konverteri", code: 'usd = float(input("USD: "))\nuzs = usd * 12600\nprint(uzs)', explanation: "Oddiy konverter." },
      { title: "13. Ism uzunligi", code: 'ism = input("Ism: ")\nprint(len(ism))', explanation: "Matn uzunligini aniqlash." },
      { title: "14. Birinchi harf", code: 'ism = input("Ism: ")\nprint(ism[0])', explanation: "Matndan qism olish." },
      { title: "15. Murakkab anketa", code: 'ism = input("Ism: ")\nyosh = input("Yosh: ")\nprint(f"Talaba: {ism}, {yosh} yoshda.")', explanation: "Ma'lumotlarni birlashtirish." }
    ],
    classwork: [
      "Foydalanuvchidan ismini so'rab salom bering",
      "Ikki sonni so'rab ularning ko'paytmasini chiqaring",
      "Yoshini so'rab, 10 yildan keyin necha yoshda bo'lishini ayting"
    ],
    exercises: [
      "Kvadratning tomonini so'rab, perimetrini hisoblang",
      "Foydalanuvchidan sevimli rangini so'rang"
    ],
    homework: [
      "Anketa dasturini yarating (Ism, Familiya, Manzil, Tel)",
      "Valyuta konverteri (So'mdan Dollarga)",
      "Harorat konverteri (Selsiydan Farangeytga)",
      "Foydalanuvchi kiritgan so'zni 10 marta chiqaring",
      "Uchta sonning o'rta arifmetigini toping"
    ],
    challenge: "Foydalanuvchidan tug'ilgan kunini, oyini va yilini alohida so'rab, uni 'DD/MM/YYYY' formatida chiqaruvchi dastur yozing."
  }
];

export const lessons = [...unsortedLessons].sort((a, b) => a.id - b.id);

export const projects = [
  {
    title: "Student Management System",
    description: "Talabalar ro'yxatini boshqarish, baholash va qidirish tizimi.",
    tech: ["Python", "OOP", "JSON"],
    image: "https://picsum.photos/seed/edu/800/600"
  },
  {
    title: "Quiz Application",
    description: "Interaktiv testlar va natijalarni hisoblash dasturi.",
    tech: ["Python", "Random", "Files"],
    image: "https://picsum.photos/seed/quiz/800/600"
  },
  {
    title: "Todo Manager",
    description: "Vazifalarni rejalashtirish va kuzatib borish ilovasi.",
    tech: ["Python", "Datetime", "SQLite"],
    image: "https://picsum.photos/seed/todo/800/600"
  },
  {
    title: "Bank Account Simulator",
    description: "Bank hisob raqami, balans va tranzaksiyalar simulyatsiyasi.",
    tech: ["Python", "Encapsulation", "Security"],
    image: "https://picsum.photos/seed/bank/800/600"
  }
];
