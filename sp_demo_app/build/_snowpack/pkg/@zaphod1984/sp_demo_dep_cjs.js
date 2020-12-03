function add(a, b) {
    return a + b;
}

var add_1 = add;

function sub(a, b) {
    return a - b;
}

var sub_1 = sub;

var sp_demo_dep_cjs = {
    add: add_1,
    sub: sub_1
};

var add$1 = sp_demo_dep_cjs.add;
export { add$1 as add };
