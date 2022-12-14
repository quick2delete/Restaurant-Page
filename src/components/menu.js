const htmlInsert = `<div class='appetizers'>
<h3>Appetizers</h3>
<div class="app-detail">
<p>Edamame....................................$5.50</p>
<p>Steamed Soybean Pods Sprinkled w/ Sea Salt</p>
</div>
<div class="app-detail">
<p>Agedashi Tofu..............................$8.99</p>
<p>Lightly Deep Fried Tofu w/ Special Sauce</p>
</div>
<div class="app-detail">
<p>Shumai.....................................$5.50</p>
<p>6 Japanese Style Steamed Dumplings</p>
</div>
<div class="app-detail">
<p>Miso Soup..................................$3.30</p>
<p>Japanese Soybean Paste Soup</p>
</div>
<div class="app-detail">
<p>Spicy Kani Salad...........................$6.50</p>
<p>Crab Meat, Masago, Cucumber, Seaweed Noodle w/ Spicy Mayo</p>
</div>
<div class="app-detail">
<p>Soft Shell Crab............................$9.99</p>
<p>Lightly Deep Fried Soft Shell Crab w/ Special Sauce</p>
</div>
<div class="app-detail">
<p>Tempura Appetizer..........................$5.50</p>
<p>Lightly Deep Fried 2 pcs Shrimp & 2 pcs Vegetables</p>
</div>
</div>

<div class='rolls'>
<h3>Rolls</h3>
<div class="roll-detail">
<p>California Roll............................$6.00</p>
<p>Cucumber, imitation crab, and avocado rolled over tobiko</p>
</div>
<div class="roll-detail">
<p>Spicy Tuna Roll............................$6.00</p>
<p>Chopped tuna fish mixed with spicy sauce</p>
</div>
<div class="roll-detail">
<p>Philadelphia Roll..........................$6.00</p>
<p>Chopped tuna fish mixed with spicy sauce</p>
</div>
<div class="roll-detail">
<p>Philadelphia Roll..........................$6.00</p>
<p>Smoked Salmon, Avocado, Cucumber, Cream Cheese</p>
</div>
<div class="roll-detail">
<p>Rainbow Roll..............................$13.00</p>
<p>Cucumber, Tuna, Salmon & White Fish</p>
</div>
<div class="roll-detail">
<p>Spider Roll...............................$13.00</p>
<p>Soft Shell Crab, Avocado & Masago</p>
</div>
<div class="roll-detail">
<p>Shrimp Tempura Roll.......................$13.00</p>
<p>Avocado, Shrimp Tempura with Eel Sauce on top
</div>

</div>
`;

const createMenu = () => {
  const content = document.querySelector(".content");
  const div = document.createElement("div");
  div.classList.add("menu");
  div.innerHTML = htmlInsert;
  content.appendChild(div);
};

export default createMenu;
