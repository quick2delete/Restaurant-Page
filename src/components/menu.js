const htmlInsert = `<div class='appetizers'>
<h3>Appetizers</h3>
<div class="app-detail">
<p>Edamame..............................$5.50</p>
<p>Steamed Soybean Pods Sprinkled w/ Sea Salt</p>
</div>
<div class="app-detail">
<p>Agedashi Tofu..............................$8.99</p>
<p>Lightly Deep Fried Tofu w/ Special Sauce</p>
</div>
<div class="app-detail">
<p>Shumai..............................$5.50</p>
<p>6 Japanese Style Steamed Dumplings</p>
</div>
<div class="app-detail">
<p>Miso Soup..............................$3.30</p>
<p>Japanese Soybean Paste Soup</p>
</div>
<div class="app-detail">
<p>Spicy Kani Salad..............................$6.50</p>
<p>Crab Meat, Masago, Cucumber, Seaweed Noodle w/ Spicy Mayo</p>
</div>
<div class="app-detail">
<p>Soft Shell Crab..............................$9.99</p>
<p>Lightly Deep Fried Soft Shell Crab w/ Special Sauce</p>
</div>
<div class="app-detail">
<p>Tempura Appetizer..............................$5.50</p>
<p>Lightly Deep Fried 2 pcs Shrimp & 2 pcs Vegetables</p>
</div>
</div>`;

const createMenu = () => {
  const content = document.querySelector(".content");
  const div = document.createElement("div");
  div.innerHTML = htmlInsert;
  content.appendChild(div);
};

export default createMenu;
