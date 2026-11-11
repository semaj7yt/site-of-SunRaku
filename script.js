const CATEGORIES = [
  { id: 'phones',     name: 'Телефоны',        img: 'img/cat-phones.svg' },
  { id: 'laptops',    name: 'Ноутбуки',        img: 'img/cat-laptops.svg' },
  { id: 'appliances', name: 'Бытовая техника', img: 'img/cat-appliances.svg' }
];
// popularity — условный рейтинг 0–100, date — дата выхода (для сортировки по новизне)
const PRODUCTS = [
  { id: 1, cat: 'phones', name: 'Bitrate X12', price: 49990, popularity: 95, date: '2026-09-15', img: 'img/p1.svg',
    short: 'Флагманский смартфон: яркий OLED-экран 6,7", 12 ГБ ОЗУ и камера 50 Мп.',
    specs: [['Экран', '6,7", OLED, 120 Гц'], ['Процессор', '8 ядер, 3,2 ГГц'], ['Оперативная память', '12 ГБ'], ['Встроенная память', '256 ГБ'], ['Основная камера', '50 Мп + 12 Мп'], ['Аккумулятор', '5000 мА·ч, зарядка 67 Вт'], ['ОС', 'Android 16']] },
  { id: 2, cat: 'phones', name: 'Bitrate A5', price: 19990, popularity: 80, date: '2026-03-10', img: 'img/p2.svg',
    short: 'Смартфон среднего класса с большой батареей и экраном 6,5".',
    specs: [['Экран', '6,5", IPS, 90 Гц'], ['Процессор', '8 ядер, 2,4 ГГц'], ['Оперативная память', '6 ГБ'], ['Встроенная память', '128 ГБ'], ['Основная камера', '48 Мп'], ['Аккумулятор', '5000 мА·ч'], ['ОС', 'Android 15']] },
  { id: 3, cat: 'phones', name: 'Bitrate Lite', price: 9990, popularity: 60, date: '2025-11-20', img: 'img/p3.svg',
    short: 'Доступный смартфон для звонков, мессенджеров и фото.',
    specs: [['Экран', '6,1", IPS, 60 Гц'], ['Процессор', '8 ядер, 2,0 ГГц'], ['Оперативная память', '4 ГБ'], ['Встроенная память', '64 ГБ'], ['Основная камера', '13 Мп'], ['Аккумулятор', '4500 мА·ч'], ['ОС', 'Android 15 Go']] },
  { id: 4, cat: 'laptops', name: 'Bitrate Book 15 Pro', price: 89990, popularity: 70, date: '2026-08-05', img: 'img/p4.svg',
    short: 'Ноутбук для работы: 15,6" экран, 16 ГБ памяти, SSD 512 ГБ.',
    specs: [['Экран', '15,6", IPS, 1920×1080'], ['Процессор', '8 ядер, до 4,7 ГГц'], ['Оперативная память', '16 ГБ'], ['Накопитель', 'SSD 512 ГБ'], ['Видеокарта', 'Встроенная'], ['Батарея', 'до 12 часов'], ['Вес', '1,7 кг']] },
  { id: 5, cat: 'laptops', name: 'Bitrate Air 14', price: 64990, popularity: 85, date: '2026-05-18', img: 'img/p5.svg',
    short: 'Лёгкий ультрабук с экраном 14" и работой до 15 часов.',
    specs: [['Экран', '14", IPS, 2240×1400'], ['Процессор', '6 ядер, до 4,4 ГГц'], ['Оперативная память', '16 ГБ'], ['Накопитель', 'SSD 512 ГБ'], ['Видеокарта', 'Встроенная'], ['Батарея', 'до 15 часов'], ['Вес', '1,2 кг']] },
  { id: 6, cat: 'laptops', name: 'Bitrate Game 17', price: 119990, popularity: 55, date: '2026-10-12', img: 'img/p6.svg',
    short: 'Игровой ноутбук с дискретной видеокартой и экраном 165 Гц.',
    specs: [['Экран', '17,3", IPS, 165 Гц'], ['Процессор', '16 ядер, до 5,2 ГГц'], ['Оперативная память', '32 ГБ'], ['Накопитель', 'SSD 1 ТБ'], ['Видеокарта', 'Дискретная, 8 ГБ'], ['Батарея', 'до 6 часов'], ['Вес', '2,6 кг']] },
  { id: 7, cat: 'appliances', name: 'Робот-пылесос Clean R1', price: 24990, popularity: 90, date: '2026-06-02', img: 'img/p7.svg',
    short: 'Робот-пылесос с влажной уборкой и построением карты комнат.',
    specs: [['Тип уборки', 'Сухая и влажная'], ['Мощность всасывания', '4000 Па'], ['Навигация', 'Лидар'], ['Объём пылесборника', '0,4 л'], ['Время работы', 'до 150 минут'], ['Управление', 'Приложение, голосом']] },
  { id: 8, cat: 'appliances', name: 'Стиральная машина WM-7', price: 34990, popularity: 65, date: '2026-02-14', img: 'img/p8.svg',
    short: 'Стиральная машина с загрузкой 7 кг и инверторным мотором.',
    specs: [['Загрузка', '7 кг'], ['Отжим', 'до 1200 об/мин'], ['Класс энергопотребления', 'A'], ['Программы', '16'], ['Размеры (Ш×В×Г)', '60 × 85 × 45 см']] },
  { id: 9, cat: 'appliances', name: 'Холодильник FR-400', price: 54990, popularity: 50, date: '2025-12-01', img: 'img/p9.svg',
    short: 'Двухкамерный холодильник No Frost общим объёмом 400 л.',
    specs: [['Общий объём', '400 л'], ['Система охлаждения', 'No Frost'], ['Класс энергопотребления', 'A+'], ['Уровень шума', '38 дБ'], ['Размеры (Ш×В×Г)', '60 × 185 × 65 см']] }
];

const rub = n => n.toLocaleString('ru-RU') + ' ₽';
const $ = s => document.querySelector(s);
const params = new URLSearchParams(location.search);
const isNew = p => (Date.now() - new Date(p.date)) / 864e5 < 90;
const card = p => `<div class="col-6 col-md-4 col-lg-3"><a class="product-card" href="product.html?id=${p.id}">
  <img src="${p.img}" alt="${p.name}"><div class="p-3"><h3 class="h6 mb-1">${p.name}</h3>
  <div class="price">${rub(p.price)}</div>${isNew(p) ? '<span class="badge badge-new mt-1">Новинка</span>' : ''}</div></a></div>`;

if ($('#popular')) {
  $('#popular').innerHTML = [...PRODUCTS].sort((a, b) => b.popularity - a.popularity).slice(0, 4).map(card).join('');
}

if ($('#cat-list')) {
  const sel = $('#sort'), goods = $('#goods'), list = $('#cat-list');
  let cat = params.get('cat') || 'all';
  list.innerHTML = CATEGORIES.map(c => `<div class="col-12 col-sm-4"><a class="cat-card text-center pb-3" data-cat="${c.id}" href="categories.html?cat=${c.id}">
    <img src="${c.img}" alt=""><div class="mt-2 fw-medium">${c.name}</div></a></div>`).join('');
  const sorters = {
    'price-asc': (a, b) => a.price - b.price, 'price-desc': (a, b) => b.price - a.price,
    'popularity': (a, b) => b.popularity - a.popularity, 'new': (a, b) => new Date(b.date) - new Date(a.date)
  };
  const render = () => {
    const c = CATEGORIES.find(x => x.id === cat);
    $('#cat-title').textContent = c ? c.name : 'Все товары';
    document.title = (c ? c.name : 'Категории товаров') + ' — Bitrate';
    list.querySelectorAll('.cat-card').forEach(a => a.classList.toggle('current', a.dataset.cat === cat));
    goods.innerHTML = PRODUCTS.filter(p => !c || p.cat === cat).sort(sorters[sel.value]).map(card).join('');
  };
  sel.onchange = render;
  list.onclick = e => { const a = e.target.closest('a'); if (!a) return; e.preventDefault(); cat = a.dataset.cat; history.replaceState(null, '', '?cat=' + cat); render(); };
  $('#show-all').onclick = e => { e.preventDefault(); cat = 'all'; history.replaceState(null, '', 'categories.html'); render(); };
  render();
}

if ($('#p-name')) {
  const p = PRODUCTS.find(x => x.id === Number(params.get('id'))) || PRODUCTS[0];
  document.title = p.name + ' — Bitrate';
  $('#p-img').src = p.img; $('#p-img').alt = p.name;
  $('#p-name').textContent = p.name;
  $('#p-price').textContent = rub(p.price);
  $('#p-short').textContent = p.short;
  $('#p-specs').innerHTML = p.specs.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('');
  $('#f-product').value = p.name;
}

const form = $('#feedback');
if (form) form.onsubmit = e => {
  e.preventDefault();
  $('#form-msg').textContent = 'Спасибо! Заявка принята, ответим на ' + form.email.value + ' в течение рабочего дня.';
  form.reset();
};
