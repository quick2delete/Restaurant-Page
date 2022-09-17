const htmlInsert = `
<div class="contact">
<div class="contact-map">

</div>
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
