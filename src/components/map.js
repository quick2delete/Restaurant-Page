import "leaflet";

const createMap = () => {
  const div = document.createElement("div");
  div.setAttribute("id", "map");
  const map = L.map("map").setView([51.505, -0.09], 13);
  L.tileLayer(
    "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=A0JD1kgvpQlIBt22VSVq",
    {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }
  ).addTo(map);
};

export default createMap;
