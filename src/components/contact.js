import createMap from "./map";
import "leaflet";

const htmlInsert = `
<div class="contact">
${createMap()}
<div class="social-media">

    <ul>
      <li>あ</li>
      <li>り</li>
      <li>が</li>
      <li>と</li>
      <li>う</li>
    </ul>

</div>
</div>
`;
const createContact = () => {
  const content = document.querySelector(".content");
  const div = document.createElement("div");
  div.classList.add("contact");
  div.innerHTML = htmlInsert;
  content.appendChild(div);
};

export default createContact;
