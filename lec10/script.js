let multiplier = 1;
let items = [];
let couponApplied = false;
const $ = id => document.getElementById(id);
const inputCls = "rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 min-w-0";
function addRow(after){
    const row = document.createElement("div");
    row.className = "row flex gap-2 items-center";
    row.innerHTML =`
    <input class="name flex-1 ${inputCls}" type="text" placeholder="اسم المنتج">
    <input class="price w-28 ${inputCls}" type="number" min="0" step="any" placeholder="السعر">
    <button type="button" class="add w-10 h-10 shrink-0 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xl">+</button>
    <button type="button" class="del w-10 h-10 shrink-0 rounded-lg bg-slate-200 dark:bg-slate-700 text-lg">*</button>`;
  row.querySelector(".add").onclick = () => addRow(row);
  row.querySelector(".del").onclick = ()=>{
      if ($("rows").children.length > 1) row.remove();
  };
  after ? after.after(row) : $("rows").appendChild(row);
  row.querySelector(".name").focus();
}
const money =n => n.toFixed(2) +"$"
function render (){
      let subtotal = 0;
  $("invoiceBody").innerHTML = "";
  items.forEach(it => {
    const price = it.price * multiplier;
    subtotal += price;
    const tr = document.createElement("tr");
    tr.className = "border-b border-slate-100 dark:border-slate-700";
    const td1 = document.createElement("td");
    td1.className = "py-2";
    td1.textContent = it.name;
    const td2 = document.createElement("td");
    td2.className = "py-2";
    td2.textContent = money(price);
    tr.append(td1, td2);
    $("invoiceBody").appendChild(tr);
  });
  const discount = couponApplied ? subtotal * 0.5 : 0;
  $("subtotal").textContent = money(subtotal);
  $("discountRow").classList.toggle("hidden", !couponApplied);
  $("discountVal").textContent = "- " + money(discount);
  $("total").textContent = money(subtotal - discount);
}

$("createBtn").onclick = () => {
  items = [];
  document.querySelectorAll(".row").forEach(r => {
    const name = r.querySelector(".name").value.trim();
    const price = parseFloat(r.querySelector(".price").value);
    if (name && price > 0) items.push({ name, price });
  });
  $("err").classList.toggle("hidden", items.length > 0);
  if (!items.length) return;
  $("invoice").classList.remove("hidden");
  render();
  $("invoice").scrollIntoView({ behavior: "smooth" });
};
$("crossingBtn").onclick = () => {
  const closed = multiplier === 1;
  multiplier = closed ? 1.5 : 1;
  $("crossingBtn").textContent = closed ? "افتح المعبر" : "سكر المعبر";
  $("crossingBtn").className = "px-4 py-2 rounded-lg text-white font-semibold " +
    (closed ? "bg-emerald-600 hover:bg-emerald-700" : "bg-red-600 hover:bg-red-700");
  $("crossingBanner").classList.toggle("hidden", !closed);
  render();
};
$("couponToggle").onclick = () => {
  $("couponBox").classList.toggle("hidden");
  $("couponInput").focus();
};
$("couponApply").onclick = () => {
  const code = $("couponInput").value.trim();
  couponApplied = code === "abc123" ;
  $("couponMsg").textContent = couponApplied ? "تم تطبيق الكوبون: خصم 50%" : "الكوبون غير صالح";
  $("couponMsg").className = "text-sm mt-1 " + (couponApplied ? "text-emerald-600" : "text-red-600");
  render();
};
$("couponInput").addEventListener("keydown", e => { if (e.key === "Enter") $("couponApply").click(); });
 addRow();