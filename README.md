# شركة الوادي للدواجن | Al Wadi Poultry Company

موقع تعريفي (Marketing Website) عربي بالكامل بتصميم RTL، مبني بـ **React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion**.

---

## 🚀 التشغيل المحلي

```bash
npm install
npm run dev
```

ثم افتح الرابط الذي يظهر في الطرفية (عادةً `http://localhost:5173`).

## ⚡ تشغيل فوري بدون تنصيب (ملف واحد)

مجلد `standalone/` يحتوي ملف `index.html` **واحد مستقل** مدمج فيه كل شيء
(HTML + CSS + JavaScript) — **انقر عليه مرتين فقط** ليفتح الموقع في المتصفح:

```
standalone/index.html
```

> **بدون** `npm install` و **بدون** خادم و **بدون** خطوة بناء.
> لإنشائه بعد أي تعديل: `npm run build:standalone`

## 📦 بناء نسخة الإنتاج

```bash
npm run build               # ينتج مجلد dist/ (للنشر)
npm run build:standalone    # ينتج standalone/index.html (ملف واحد)
npm run preview             # لمعاينة نسخة الإنتاج محليًا
```

> للنشر على استضافة راجع **[DEPLOY.md](./DEPLOY.md)** — يشرح حل خطأ 404 خطوة بخطوة.

---

## ✏️ تعديل المحتوى

**كل النصوص وأرقام التواصل والروابط والصور في ملف واحد فقط:**

```
src/config/site.ts
```

من هذا الملف يمكنك تعديل:

| ما تريد تعديله | الموقع داخل الملف |
|----------------|-------------------|
| اسم الشركة وشعار الكتابة | `brand` |
| ألوان الهوية | `colors` |
| أرقام الهاتف وواتساب وفيسبوك | `contact` |
| روابط القائمة العلوية | `navLinks` |
| كل الصور (خلفية، معرض، شرائح) | `images` |
| نصوص الأقسام | `about` / `services` / `quality` / `whyUs` / `gallery` / `contactSection` / `footer` |

### تفعيل إرسال نموذج التواصل

افتراضيًا لا يوجد خادم خلفي، وعند الإرسال يُفتح **واتساب** برسالة جاهزة.
لتفعيل إرسال حقيقي، ضع رابط الخدمة في:

```ts
contact.formEndpoint // مثال: 'https://formspree.io/f/xxxxxxx'
```

---

## 🖼️ استبدال الصور

الصور الحالية **صور تجريبية** من مكتبة Pexels المجانية (موضّحة بذلك داخل الموقع).

لاستبدالها بصور الشركة الفعلية:
1. ضع صورك في مجلد `public/images/`.
2. عدّل الروابط في `images` داخل `src/config/site.ts` لتصبح مثل `/images/farm-01.jpg`.

---

## ✅ قبل الإطلاق

- [ ] استبدال الصور التجريبية بصور الشركة.
- [ ] تحديث النصوص التجريبية (المعلّمة بـ «قابل للتعديل» / «محتوى تجريبي»).
- [ ] تغيير النطاق في `public/robots.txt` و `public/sitemap.xml` (حاليًا `https://example.com`).
- [ ] مراجعة الأداء والوصولية.

---

## 📁 بنية المشروع

```
├── index.html                  # صفحة HTML الأساسية (RTL + SEO + JSON-LD)
├── index-standalone.html       # نسخة ملف واحد — تُفتح بالنقر المزدوج مباشرة
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── _redirects              # إعادة توجيه Netlify
│   └── htaccess.txt            # إعدادات Apache (أعِد تسميته .htaccess)
├── scripts/
│   └── build-standalone.mjs    # يبني index-standalone.html
├── vercel.json                 # إعادة توجيه Vercel
├── DEPLOY.md                   # دليل النشر وحل خطأ 404
├── src/
│   ├── main.tsx                # نقطة البداية
│   ├── App.tsx                 # تركيب أقسام الصفحة
│   ├── index.css               # إعداد Tailwind v4 + الأنيميشن
│   ├── config/
│   │   └── site.ts             # ⭐ كل المحتوى القابل للتعديل
│   └── components/
│       ├── Navbar.tsx          # الشريط العلوي + مؤشر القسم النشط
│       ├── Hero.tsx            # القسم الرئيسي (خلفية متحركة)
│       ├── ImageMarquee.tsx    # شريط صور المنشآت المتحرك
│       ├── About.tsx           # من نحن
│       ├── Services.tsx        # الخدمات / المنتجات
│       ├── Quality.tsx         # الجودة
│       ├── WhyUs.tsx           # لماذا نحن
│       ├── Gallery.tsx         # معرض الصور (فلترة + عارض)
│       ├── Contact.tsx         # التواصل + نموذج
│       ├── Footer.tsx          # التذييل
│       ├── Logo.tsx            # الشعار (SVG)
│       ├── Icons.tsx           # الأيقونات (SVG)
│       ├── Reveal.tsx          # ظهور عند التمرير + عنوان القسم
│       ├── TiltCard.tsx        # بطاقة بميلان ثلاثي الأبعاد
│       ├── ParallaxImage.tsx   # صورة بتأثير Parallax
│       ├── ScrollProgress.tsx  # شريط تقدّم القراءة
│       ├── FloatingWhatsapp.tsx# زر واتساب العائم
│       └── BackToTop.tsx       # زر الرجوع للأعلى
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 📞 بيانات التواصل

- **هاتف:** 01034578114 — 01288880524
- **واتساب:** عبر نفس الأرقام برمز الدولة `20`
- **فيسبوك:** https://www.facebook.com/writings.officiall

---

> **ملاحظة مهمة:** لا يحتوي الموقع على أي ادعاءات غير مؤكدة عن الشركة (لا تاريخ تأسيس، ولا أحجام إنتاج، ولا شهادات، ولا عدد فروع). كل المحتوى غير المؤكد مُعلَّم بوضوح كنص تجريبي قابل للاستبدال.
