const c1 = document.querySelector(".Neneckij-avtonomnyj-okrug");
const c2 = document.querySelector(".Krasnoyarskij-kraj");
const c3 = document.querySelector(".Respubltika-Saha-Yakutiya");
const c4 = document.querySelector(".Kemerovskaya-oblast");



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
    map5.classList.remove("toggled");
    map6.classList.remove("toggled");

    map26();
});
map_2.addEventListener("click", () => {
    map1.classList.remove("toggled");
    map2.classList.add("toggled");
    map3.classList.remove("toggled");
    map4.classList.remove("toggled");
    map5.classList.remove("toggled");
    map6.classList.remove("toggled");

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
    map5.classList.remove("toggled");
    map6.classList.remove("toggled");

    map26();
});
map_4.addEventListener("click", () => {
    map1.classList.remove("toggled");
    map2.classList.remove("toggled");
    map3.classList.remove("toggled");
    map4.classList.add("toggled");
    map5.classList.remove("toggled");
    map6.classList.remove("toggled");

    map26();
});
map_5.addEventListener("click", () => {
    map1.classList.remove("toggled");
    map2.classList.remove("toggled");
    map3.classList.remove("toggled");
    map4.classList.remove("toggled");
    map5.classList.add("toggled");
    map6.classList.remove("toggled");

    map26();
});
map_6.addEventListener("click", () => {
    map1.classList.remove("toggled");
    map2.classList.remove("toggled");
    map3.classList.remove("toggled");
    map4.classList.remove("toggled");
    map5.classList.remove("toggled");
    map6.classList.add("toggled");

    map26();
});



const cl = document.querySelector(".close");
const info = document.querySelector(".info");
const text = document.querySelector(".info_text");

cl.addEventListener("click", () => {
    info.classList.remove("active")
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
    text.innerHTML = "1"
    info.classList.add("active")
})
t2.addEventListener("click", () => {
    text.innerHTML = "2"
    info.classList.add("active")
})
t3.addEventListener("click", () => {
    text.innerHTML = "3"
    info.classList.add("active")
})
t4.addEventListener("click", () => {
    text.innerHTML = "4"
    info.classList.add("active")
})
t5.addEventListener("click", () => {
    text.innerHTML = "5"
    info.classList.add("active")
})
t6.addEventListener("click", () => {
    text.innerHTML = "6"
    info.classList.add("active")
})
t7.addEventListener("click", () => {
    text.innerHTML = "7"
    info.classList.add("active")
})
t8.addEventListener("click", () => {
    text.innerHTML = "8"
    info.classList.add("active")
})
t9.addEventListener("click", () => {
    text.innerHTML = "9"
    info.classList.add("active")
})

c1.addEventListener("click", () => {
    if (c1.classList.contains("toggled") == true) {
        text.innerHTML = "1"
        info.classList.add("active")
        console.log("1")
    }
})
c2.addEventListener("click", () => {
    if (c2.classList.contains("toggled") == true) {
        text.innerHTML = "2"
        info.classList.add("active")
        console.log("2")
    }
})
c3.addEventListener("click", () => {
    if (c3.classList.contains("toggled") == true) {
        text.innerHTML = "3"
        info.classList.add("active")
        console.log("3")
    }
})
c4.addEventListener("click", () => {
    if (c4.classList.contains("toggled") == true) {
        text.innerHTML = "4"
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
    text.innerHTML = "1"
    info.classList.add("active")
})
e2.addEventListener("click", () => {
    text.innerHTML = "2"
    info.classList.add("active")
})
e3.addEventListener("click", () => {
    text.innerHTML = "3"
    info.classList.add("active")
})
e4.addEventListener("click", () => {
    text.innerHTML = "4"
    info.classList.add("active")
})
e5.addEventListener("click", () => {
    text.innerHTML = "5"
    info.classList.add("active")
})
e6.addEventListener("click", () => {
    text.innerHTML = "6"
    info.classList.add("active")
})
e7.addEventListener("click", () => {
    text.innerHTML = "7"
    info.classList.add("active")
})
e8.addEventListener("click", () => {
    text.innerHTML = "8"
    info.classList.add("active")
})
e9.addEventListener("click", () => {
    text.innerHTML = "9"
    info.classList.add("active")
})
e10.addEventListener("click", () => {
    text.innerHTML = "10"
    info.classList.add("active")
})

const v1 = document.querySelector("#v1");
const v2 = document.querySelector("#v2");
const v3 = document.querySelector("#v3");
const v4 = document.querySelector("#v4");
const v5 = document.querySelector("#v5");

v1.addEventListener("click", () => {
    text.innerHTML = "1"
    info.classList.add("active")
})
v2.addEventListener("click", () => {
    text.innerHTML = "2"
    info.classList.add("active")
})
v3.addEventListener("click", () => {
    text.innerHTML = "3"
    info.classList.add("active")
})
v4.addEventListener("click", () => {
    text.innerHTML = "4"
    info.classList.add("active")
})
v5.addEventListener("click", () => {
    text.innerHTML = "5"
    info.classList.add("active")
})

const g1 = document.querySelector("#g1");
const g2 = document.querySelector("#g2");

g1.addEventListener("click", () => {
    text.innerHTML = "1"
    info.classList.add("active")
})
g2.addEventListener("click", () => {
    text.innerHTML = "2"
    info.classList.add("active")
})

const tr1 = document.querySelector("#tr1");
const tr2 = document.querySelector("#tr2");
const tr3 = document.querySelector("#tr3");
const tr4 = document.querySelector("#tr4");
const tr5 = document.querySelector("#tr5");

tr1.addEventListener("click", () => {
    text.innerHTML = "1"
    info.classList.add("active")
})
tr2.addEventListener("click", () => {
    text.innerHTML = "2"
    info.classList.add("active")
})
tr3.addEventListener("click", () => {
    text.innerHTML = "3"
    info.classList.add("active")
})
tr4.addEventListener("click", () => {
    text.innerHTML = "4"
    info.classList.add("active")
})
tr5.addEventListener("click", () => {
    text.innerHTML = "5"
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
    text.innerHTML = "1"
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
    text.innerHTML = "16"
    info.classList.add("active")
})
usl17.addEventListener("click", () => {
    text.innerHTML = "17"
    info.classList.add("active")
})
usl18.addEventListener("click", () => {
    text.innerHTML = "18"
    info.classList.add("active")
})