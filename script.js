const pterodactylProducts = [
  { id: 1, nama: "Panel 1GB", harga: "Rp. 2.000", deskripsi: "Panel Pterodactyl dengan RAM 1GB", gambar: "https://via.placeholder.com/300x200?text=Panel+1GB" },
  { id: 2, nama: "Panel 2GB", harga: "Rp. 3.000", deskripsi: "Panel Pterodactyl dengan RAM 2GB", gambar: "https://via.placeholder.com/300x200?text=Panel+2GB" },
  { id: 3, nama: "Panel 3GB", harga: "Rp. 4.000", deskripsi: "Panel Pterodactyl dengan RAM 3GB", gambar: "https://via.placeholder.com/300x200?text=Panel+3GB" },
  { id: 4, nama: "Panel 4GB", harga: "Rp. 5.000", deskripsi: "Panel Pterodactyl dengan RAM 4GB", gambar: "https://via.placeholder.com/300x200?text=Panel+4GB" },
  { id: 5, nama: "Panel 5GB", harga: "Rp. 6.000", deskripsi: "Panel Pterodactyl dengan RAM 5GB", gambar: "https://via.placeholder.com/300x200?text=Panel+5GB" },
  { id: 6, nama: "Panel 6GB", harga: "Rp. 7.000", deskripsi: "Panel Pterodactyl dengan RAM 6GB", gambar: "https://via.placeholder.com/300x200?text=Panel+6GB" },
  { id: 7, nama: "Panel 7GB", harga: "Rp. 8.000", deskripsi: "Panel Pterodactyl dengan RAM 7GB", gambar: "https://via.placeholder.com/300x200?text=Panel+7GB" },
  { id: 8, nama: "Panel 8GB", harga: "Rp. 9.000", deskripsi: "Panel Pterodactyl dengan RAM 8GB", gambar: "https://via.placeholder.com/300x200?text=Panel+8GB" },
  { id: 9, nama: "Panel 9GB", harga: "Rp. 10.000", deskripsi: "Panel Pterodactyl dengan RAM 9GB", gambar: "https://via.placeholder.com/300x200?text=Panel+9GB" },
  { id: 10, nama: "Panel 10GB", harga: "Rp. 11.000", deskripsi: "Panel Pterodactyl dengan RAM 10GB", gambar: "https://via.placeholder.com/300x200?text=Panel+10GB" }
];

const scriptProducts = [
  { id: 1, nama: "SC Pushkontak Anti Banned", harga: "Rp. 10.000", deskripsi: "Script untuk push kontak WhatsApp anti banned", gambar: "https://via.placeholder.com/300x200?text=SC+Pushkontak" },
  { id: 2, nama: "SC Bug Ganas", harga: "Rp. 25.000", deskripsi: "Script bug ganas (deskripsi lebih lanjut)", gambar: "https://via.placeholder.com/300x200?text=SC+Bug+Ganas" },
  { id: 3, nama: "SC CPanel", harga: "Rp. 15.000", deskripsi: "Script untuk mengakses CPanel", gambar: "https://via.placeholder.com/300x200?text=SC+CPanel" },
  { id: 4, nama: "SC Jaga Grup", harga: "Rp. 10.000", deskripsi: "Script untuk menjaga grup WhatsApp", gambar: "https://via.placeholder.com/300x200?text=SC+Jaga+Grup" },
  { id: 5, nama: "SC DDoS Website", harga: "Rp. 20.000", deskripsi: "Script untuk melakukan DDoS attack ke website", gambar: "https://via.placeholder.com/300x200?text=SC+DDoS" },
  { id: 6, nama: "SC Password Strong Finder", harga: "Rp. 20.000", deskripsi: "Script untuk mencari password yang kuat", gambar: "https://via.placeholder.com/300x200?text=SC+Password+Finder" },
  { id: 7, nama: "SC OTP Lock WhatsApp", harga: "Rp. 10.000", deskripsi: "Script untuk mengunci WhatsApp dengan OTP", gambar: "https://via.placeholder.com/300x200?text=SC+OTP+Lock+WA" },
  { id: 8, nama: "SC Phising Akun", harga: "Rp. 15.000", deskripsi: "Script untuk melakukan phising akun", gambar: "https://via.placeholder.com/300x200?text=SC+Phising" }
];

const pterodactylList = document.getElementById('pterodactyl-list');
const scriptList = document.getElementById('script-list');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const pterodactylTitle = document.getElementById('pterodactyl-title');
const scriptTitle = document.getElementById('script-title');

function displayProducts(products, list, type) {
  list.innerHTML = '';
  products.forEach(product => {
    const listItem = document.createElement('a');
    listItem.href = `detail.html?id=${product.id}&type=${type}`; 
    listItem.classList.add('menu-item');
    listItem.textContent = `${product.nama} - ${product.harga}`;
    list.appendChild(listItem);
  });
}

function filterProducts() {
  const selectedCategory = categoryFilter.value;
  const selectedPrice = priceFilter.value;
  let filteredPterodactyl = pterodactylProducts;
  let filteredScript = scriptProducts;

  if (selectedCategory !== 'all') {
    if (selectedCategory === 'pterodactyl') {
      filteredScript = [];
    } else {
      filteredPterodactyl = [];
    }
  }

  if (selectedPrice !== 'all') {
    filteredPterodactyl = filteredPterodactyl.filter(product => {
      const price = parseInt(product.harga.replace(/[^0-9]/g, ''));
      if (selectedPrice === 'under5k') {
        return price < 5000;
      } else if (selectedPrice === '5k-10k') {
        return price >= 5000 && price <= 10000;
      } else {
        return price > 10000;
      }
    });

    filteredScript = filteredScript.filter(product => {
      const price = parseInt(product.harga.replace(/[^0-9]/g, ''));
      if (selectedPrice === 'under5k') {
        return price < 5000;
      } else if (selectedPrice === '5k-10k') {
        return price >= 5000 && price <= 10000;
      } else {
        return price > 10000;
      }
    });
  }

  pterodactylTitle.style.display = filteredPterodactyl.length > 0 ? 'block' : 'none';
  scriptTitle.style.display = filteredScript.length > 0 ? 'block' : 'none';

  displayProducts(filteredPterodactyl, pterodactylList, 'pterodactyl');
  displayProducts(filteredScript, scriptList, 'script');
}

categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('change', filterProducts);

// Panggil fungsi filterProducts() saat halaman dimuat
filterProducts(); 