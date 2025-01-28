const c1 = document.querySelector(".Neneckij-avtonomnyj-okrug");
const c2 = document.querySelector(".Krasnoyarskij-kraj");
const c3 = document.querySelector(".Respubltika-Saha-Yakutiya");
const c4 = document.querySelector(".Kemerovskaya-oblast");

const h1 = document.querySelector("h1");

const map_1 = document.querySelector("#map1");
const map_2 = document.querySelector("#map2");
const map_3 = document.querySelector("#map3");
const map_4 = document.querySelector("#map4");
const map_5 = document.querySelector("#map5");
const map_6 = document.querySelector("#map6");

const map1 = document.querySelector(".map1");
const map2 = document.querySelector(".map2");
const map3 = document.querySelector(".map3");
const map4 = document.querySelector(".map4");
const map5 = document.querySelector(".map5");
const map6 = document.querySelector(".map6");

function map26(){
    c1.classList.remove("toggled");
    c2.classList.remove("toggled");
    c3.classList.remove("toggled");
    c4.classList.remove("toggled");
}

map_1.addEventListener("click", () => {
    map1.classList.add("toggled");
    map2.classList.remove("toggled");
    map3.classList.remove("toggled");
    map4.classList.remove("toggled");

    map26();
});
map_2.addEventListener("click", () => {
    map1.classList.remove("toggled");
    map2.classList.add("toggled");
    map3.classList.remove("toggled");
    map4.classList.remove("toggled");


    c1.classList.add("toggled");
    c2.classList.add("toggled");
    c3.classList.add("toggled");
    c4.classList.add("toggled");
});
map_3.addEventListener("click", () => {
    map1.classList.remove("toggled");
    map2.classList.remove("toggled");
    map3.classList.add("toggled");
    map4.classList.remove("toggled");


    map26();
});
map_4.addEventListener("click", () => {
    map1.classList.remove("toggled");
    map2.classList.remove("toggled");
    map3.classList.remove("toggled");
    map4.classList.add("toggled");


    map26();
});


const cl = document.querySelector(".close");
const info = document.querySelector(".info");
const text = document.querySelector(".info_text");

cl.addEventListener("click", () => {
    info.classList.remove("active")
    h1.innerHTML = ""
})


const t1 = document.querySelector("#t1");
const t2 = document.querySelector("#t2");
const t3 = document.querySelector("#t3");
const t4 = document.querySelector("#t4");
const t5 = document.querySelector("#t5");
const t6 = document.querySelector("#t6");
const t7 = document.querySelector("#t7");
const t8 = document.querySelector("#t8");
const t9 = document.querySelector("#t9");

t1.addEventListener("click", () => {
    h1.innerHTML = "Ковдорское месторождение"
    text.innerHTML = "Находится в Мурманской области. Запасы железных руд около 595 млн т. Площадь около 40 кв км. единственное в мире, из руд которого извлекают цирконий."
    info.classList.add("active")
})
t2.addEventListener("click", () => {
    h1.innerHTML = "Курская магнитная аномалия (КМА)"
    text.innerHTML = "Расположена в Курской, Белгородской и Орловской областях. Самый мощный на Земле железорудный бассейн.Сосредоточена примерно половина запасов железа мира. Балансовые силы составляют около 30 млрд тонн. Площадь составляет около 160 тыс кв км."
    info.classList.add("active")
})
t3.addEventListener("click", () => {
    h1.innerHTML = "Коршуновское месторождение"
    text.innerHTML = "расположено в 430 км к северу от г.Иркутска. Запасы составляют около 500 млн тонн. Является одним из лучших по качеству желез в России. "
    info.classList.add("active")
})
t4.addEventListener("click", () => {
    h1.innerHTML = "Западно-Сибирский железорудный район"
    text.innerHTML = "располагается преимущественно в Томской области. Площадь бассейна составляет около 260 тыс. кв. км. Возможно является крупнейшим железорудным месторождением в мире т.к. может содержать около 40 млрд тонн."
    info.classList.add("active")
})
// t5.addEventListener("click", () => {
//     text.innerHTML = "5"
//     info.classList.add("active")
// })
t6.addEventListener("click", () => {
    h1.innerHTML = "Качканарская группа железорудных месторождений"
    text.innerHTML = "Расположена на Урале, в Свердловской области. Балансовые силы составляют около 3,6 млрд тонн. Является одним крупнейшим железорудным месторождением на Урале и одним из крупнейших в России."
    info.classList.add("active")
})
t7.addEventListener("click", () => {
    h1.innerHTML = "Бакальское месторождение"
    text.innerHTML = "Находится на Урале, в Челябинской области. площадь составляет около 150 кв км. Запасы оцениваются в около 1 млрд тонн."
    info.classList.add("active")
})
// t8.addEventListener("click", () => {
//     text.innerHTML = "8"
//     info.classList.add("active")
// })
t9.addEventListener("click", () => {
    h1.innerHTML = "Костомукшское месторождение"
    text.innerHTML = "Расположено в Карелии. Одно из крупнейших месторождений железа в России. Балансовые силы составляют около 1 млрд тонн."
    info.classList.add("active")
})

// c1.addEventListener("click", () => {
//     if (c1.classList.contains("toggled") == true) {
//         text.innerHTML = "1"
//         info.classList.add("active")
//         console.log("1")
//     }
// })
c2.addEventListener("click", () => {
    if (c2.classList.contains("toggled") == true) {
        h1.innerHTML = "Красноярская область"
        text.innerHTML = "В Красноярском крае расположены крупные угольные месторождения, такие как Канско-Ачинский бассейн (бурые угли), Минусинский бассейн (каменные угли высокого качества), Тунгусский бассейн (высококачественные угли, сложные условия добычи) и Таймырский бассейн (качественный уголь, труднодоступен). Эти ресурсы важны для энергетики и промышленности региона."
        info.classList.add("active")
        console.log("2")
    }
})
c3.addEventListener("click", () => {
    if (c3.classList.contains("toggled") == true) {
        h1.innerHTML = "Республика Саха (Якутия)"
        text.innerHTML = "В Республике Саха (Якутия) находятся важные угольные месторождения, такие как Южно-Якутский бассейн (высококачественные каменные угли), Ленский бассейн (бурые угли), Эльгинское и Нерюнгринское месторождения (коксующийся уголь). Эти ресурсы обеспечивают потребности региона и экспортируются, играя ключевую роль в экономике Якутии."
        info.classList.add("active")
        console.log("3")
    }
})
c4.addEventListener("click", () => {
    if (c4.classList.contains("toggled") == true) {
        h1.innerHTML = "Кемеровская область"
        text.innerHTML = "Кемеровская область (Кузбасс) - крупнейший угольный регион России. Основные месторождения включают Кузнецкий бассейн (высококачественный каменный уголь), Прокопьевско-Киселёвский, Беловский и Междуреченский районы. Кузбасские угли используются в металлургии, энергетике и экспорте, обеспечивая значительный вклад в экономику страны."
        info.classList.add("active")
        console.log("4")
    }
})


const e1 = document.querySelector("#e1");
const e2 = document.querySelector("#e2");
const e3 = document.querySelector("#e3");
const e4 = document.querySelector("#e4");
const e5 = document.querySelector("#e5");
const e6 = document.querySelector("#e6");
const e7 = document.querySelector("#e7");
const e8 = document.querySelector("#e8");
const e9 = document.querySelector("#e9");
const e10 = document.querySelector("#e10");


e1.addEventListener("click", () => {
    h1.innerHTML = "Курская АЭС "
    text.innerHTML = "Включает четыре блока РБМК-1000. Строительство оставшихся двух блоков было заморожено после 1986 года. "
    info.classList.add("active")
})
e2.addEventListener("click", () => {
    h1.innerHTML = "Смоленская АЭС "
    text.innerHTML = "Состоит из трёх блоков РБМК-1000, является самой молодой станцией с такими реакторами. "
    info.classList.add("active")
})
e3.addEventListener("click", () => {
    h1.innerHTML = "Ленинградская АЭС"
    text.innerHTML = "Оснащена четырьмя реакторами РБМК-1000, каждый мощностью 1000 МВт. Эта станция также используется для наработки полезных изотопов. "
    info.classList.add("active")
})
e4.addEventListener("click", () => {
    h1.innerHTML = "Ростовская АЭС"
    text.innerHTML = "Самая молодая атомная электростанция в России, все её блоки ВВЭР-1000 были построены и запущены в XXI веке."
    info.classList.add("active")
})
e5.addEventListener("click", () => {
    h1.innerHTML = "Балаковская АЭС"
    text.innerHTML = "Крупнейшая в Европе, имеет четыре блока ВВЭР1000. Первый корпус реактора прошел операцию отжига, что позволило продлить его срок службы более чем на 20 лет. "
    info.classList.add("active")
})
e6.addEventListener("click", () => {
    h1.innerHTML = "Нововоронежская АЭС"
    text.innerHTML = "Одна из старейших атомных электростанций в стране, известна своими головными блоками ВВЭР различной мощности - от 210 МВт до 1200 МВт. "
    info.classList.add("active")
})
e7.addEventListener("click", () => {
    h1.innerHTML = "Калининская АЭС"
    text.innerHTML = "расположена в Тверской области и имеет четыре блока ВВЭР-1000. Это ближайшая к Москве действующая атомная электростанция. "
    info.classList.add("active")
})
e8.addEventListener("click", () => {
    h1.innerHTML = "Белоярская АЭС"
    text.innerHTML = "Первая крупная гражданская атомная электростанция в России, её суммарная мощность составляет 300МВт. Она использует канальные уран-графитовые реакторы с ядерным перегревом пара. "
    info.classList.add("active")
})
e9.addEventListener("click", () => {
    h1.innerHTML = "Кольская АЭС"
    text.innerHTML = "Cамая северная атомная электростанция в России, работает с 1973 года. Планируется строительство двух новых энергоблоков ВВЭР-600С."
    info.classList.add("active")
})
e10.addEventListener("click", () => {
    h1.innerHTML = "Билибинская АЭС"
    text.innerHTML = "Cостоит из четырёх энергоблоков ЭГП-6, которые разработаны специально для работы в условиях Крайнего Севера. Станция снабжает энергией горнорудные и золотодобывающие предприятия Чукотки."
    info.classList.add("active")
})

const v1 = document.querySelector("#v1");
const v2 = document.querySelector("#v2");
const v3 = document.querySelector("#v3");
const v4 = document.querySelector("#v4");
const v5 = document.querySelector("#v5");

v1.addEventListener("click", () => {
    h1.innerHTML = "Братская ГЭС"
    text.innerHTML = "Третья по мощности и первая по среднегодовой выработке гидроэлектростанция России. Установленная мощность: 4500 МВт. Фактическая среднегодовая выработка: 22 500 млн кВт⋅ч. Играет ключевую роль в обеспечении надежности энергосистемы"
    info.classList.add("active")
})
v2.addEventListener("click", () => {
    h1.innerHTML = "Усть-Илимская ГЭС"
    text.innerHTML = "Третья станция каскада гидроэлектростанцией на реке Ангара. Установленная мощность: 3840 МВт (16 гидроагрегатов по 240МВт каждый). Среднегодовая выработка: около 20 млрд кВт⋅ч."
    info.classList.add("active")
})
v3.addEventListener("click", () => {
    h1.innerHTML = "Богучанская ГЭС"
    text.innerHTML = "Входит в Ангарский каскад ГЭС, являясь его четвёртой, нижней ступенью. Установленная мощность: 2997 МВт. Входит в пятёрку крупнейших гидроэлектростанций России."
    info.classList.add("active")
})

v4.addEventListener("click", () => {
    h1.innerHTML = "Саяно-Шушенская ГЭС"
    text.innerHTML = "Крупнейшая по установленной мощности электростанция России. Установленная мощность: 6400 МВт. Длина плотины: 1074 метра, высота: 242 метра."
    info.classList.add("active")
})
v5.addEventListener("click", () => {
    h1.innerHTML = "Красноярская ГЭС"
    text.innerHTML = "Входит в Енисейский каскад ГЭС, составляя его третью ступень. На момент завершения строительства была самой мощной электростанцией СССР и крупнейшей гидроэлектростанцией в мире. Установленная мощность: 6000 МВт."
    info.classList.add("active")
})

const g1 = document.querySelector("#g1");
const g2 = document.querySelector("#g2");

g1.addEventListener("click", () => {
    h1.innerHTML = "Мутновская ГеоЭС-1"
    text.innerHTML = "Геотермальная электростанция, расположенная в Камчатском крае. Мощность станции: 50 МВт. Использует природное тепло Земли для производства электричества. Аналогов в России не имеет и считается одной из наиболее современных геотермальных электростанций в мире."
    info.classList.add("active")
})
g2.addEventListener("click", () => {
    h1.innerHTML = "Верхне-Мутновская ГеоЭС"
    text.innerHTML = "Геотермальная электростанция, расположенная рядом с Мутновской сопкой в Камчатском крае. Мощность станции: 12 МВт. Эксплуатируется ПАО «Камчатскэнерго»."
    info.classList.add("active")
})

const tr1 = document.querySelector("#tr1");
const tr2 = document.querySelector("#tr2");
const tr3 = document.querySelector("#tr3");
const tr4 = document.querySelector("#tr4");
const tr5 = document.querySelector("#tr5");

tr1.addEventListener("click", () => {
    h1.innerHTML = "Сургутская ГРЭС-2"
    text.innerHTML = "Крупнейшая тепловая электростанция в России. Установленная мощность: 5687 МВт. Топливо: попутный газ (70%) и природный газ (30%)."
    info.classList.add("active")
})
tr2.addEventListener("click", () => {
    h1.innerHTML = "Рефтинская ГРЭС"
    text.innerHTML = "Вторая по мощности тепловая электростанция в России и крупнейшая, работающая на твердом топливе. Состоит из 6 энергоблоков по 300 МВт и 4 энергоблоков по 500МВт."
    info.classList.add("active")
})
tr3.addEventListener("click", () => {
    h1.innerHTML = "Костромская ГРЭС"
    text.innerHTML = "Третья по установленной мощности тепловая электростанцияРоссии. Установленная мощность: 3720 МВт. Топливо: природный газ, резервное топливо: мазут."
    info.classList.add("active")
})
tr4.addEventListener("click", () => {
    h1.innerHTML = "Пермская ГРЭС"
    text.innerHTML = "Четвертая по установленной мощности тепловая электростанция России. Установленная мощность: 3393 МВт. Топливо: природный газ"
    info.classList.add("active")
})
tr5.addEventListener("click", () => {
    h1.innerHTML = "Рязанская ГРЭС"
    text.innerHTML = "Тепловая электрическая станция в городе Новомичуринск Рязанской области. Установленная мощность: 3024 МВт. Топливо: уголь, природный газ, резервное топливо: мазут."
    info.classList.add("active")
})

const usl1 = document.querySelector("#usl1");
const usl2 = document.querySelector("#usl2");
const usl3 = document.querySelector("#usl3");
const usl4 = document.querySelector("#usl4");
const usl5 = document.querySelector("#usl5");
const usl6 = document.querySelector("#usl6");
const usl7 = document.querySelector("#usl7");
const usl8 = document.querySelector("#usl8");
const usl9 = document.querySelector("#usl9");
const usl10 = document.querySelector("#usl10");
const usl11 = document.querySelector("#usl11");
const usl12 = document.querySelector("#usl12");
const usl13 = document.querySelector("#usl13");
const usl14 = document.querySelector("#usl14");
const usl15 = document.querySelector("#usl15");
const usl16 = document.querySelector("#usl16");
const usl17 = document.querySelector("#usl17");
const usl18 = document.querySelector("#usl18");

usl1.addEventListener("click", () => {
    h1.innerHTML = "Медногорское месторождение"
    text.innerHTML = "Крупное месторождение медно-колчеданных руд в Оренбургской области. Содержит медь, цинк, золото и серебро. Разработано с 1930-х годов. Добыча подземная, переработка включает обогащение. Важный источник сырья для цветной металлургии."
    info.classList.add("active")
})
usl2.addEventListener("click", () => {
    text.innerHTML = "2"
    info.classList.add("active")
})
usl3.addEventListener("click", () => {
    text.innerHTML = "3"
    info.classList.add("active")
})
usl4.addEventListener("click", () => {
    text.innerHTML = "4"
    info.classList.add("active")
})
usl5.addEventListener("click", () => {
    text.innerHTML = "5"
    info.classList.add("active")
})
usl6.addEventListener("click", () => {
    text.innerHTML = "6"
    info.classList.add("active")
})
usl7.addEventListener("click", () => {
    text.innerHTML = "7"
    info.classList.add("active")
})
usl8.addEventListener("click", () => {
    text.innerHTML = "8"
    info.classList.add("active")
})
usl9.addEventListener("click", () => {
    text.innerHTML = "9"
    info.classList.add("active")
})
usl10.addEventListener("click", () => {
    text.innerHTML = "10"
    info.classList.add("active")
})
usl11.addEventListener("click", () => {
    text.innerHTML = "11"
    info.classList.add("active")
})
usl12.addEventListener("click", () => {
    text.innerHTML = "12"
    info.classList.add("active")
})
usl13.addEventListener("click", () => {
    text.innerHTML = "13"
    info.classList.add("active")
})
usl14.addEventListener("click", () => {
    text.innerHTML = "14"
    info.classList.add("active")
})
usl15.addEventListener("click", () => {
    text.innerHTML = "15"
    info.classList.add("active")
})
usl16.addEventListener("click", () => {
    h1.innerHTML = "Хибинская группа месторождений"
    text.innerHTML = "Хибинская группа месторождений алюминиевых руд расположена в Мурманской области. Руды этого региона содержат алюминий, железо, натрий, калий и редкие элементы."
    info.classList.add("active")
})
usl17.addEventListener("click", () => {
    h1.innerHTML = "Свердловская область "
    text.innerHTML = "Месторождения алюминиевых руд включают Черемуховское, Ново-Кальинское, Кальинское и Красную Шапочку. Они расположены в Североуральском бокситовом руднике (СУБР) и являются частью предприятия СУБР."
    info.classList.add("active")
})
usl18.addEventListener("click", () => {
    h1.innerHTML = "Тихвинское месторождение"
    text.innerHTML = "Крупное месторождение титаномагнетитовых железных руд в Ленинградской области. Содержит железо, титан и ванадий. Активно разрабатывается с конца 1990-х годов. Добыча открытая, переработка включает обогащение. Важный источник сырья для металлургии."
    info.classList.add("active")
})
document.addEventListener('wheel', function(event) {
    event.preventDefault();

    const scaleFactor = 1.1;
    let currentScale = document.body.style.zoom || 1;

    if (event.deltaY > 0) { // Прокручивание вниз (увеличение масштаба)
        currentScale /= scaleFactor;
    } else { // Прокручивание вверх (уменьшение масштаба)
        currentScale *= scaleFactor;
    }

    // Ограничение минимального и максимального масштаба
    if (currentScale < 0.7) {
        currentScale = 0.7;
    } else if (currentScale > 1.6) {
        currentScale = 1.6;     }

    document.body.style.zoom = currentScale;
});