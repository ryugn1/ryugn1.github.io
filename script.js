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
const detailContainer = document.getElementById('detail-container'); // Referensi ke detailContainer di dalam modal
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const pterodactylTitle = document.getElementById('pterodactyl-title');
const scriptTitle = document.getElementById('script-title');
const modal = document.getElementById("productModal"); // Referensi ke modal

function displayProducts(products, list, type) {
  list.innerHTML = '';
  products.forEach(product => {
    const listItem = document.createElement('li'); 
    listItem.textContent = `${product.nama} - ${product.harga}`;
    listItem.dataset.id = product.id;
    listItem.dataset.type = type;
    listItem.addEventListener('click', () => {
      showModal(product.id, type); // Panggil fungsi showModal saat produk diklik
    });
    list.appendChild(listItem);
  });
}

function showProductDetail(productId, productType) {
  let product;
  if (productType === 'pterodactyl') {
    product = pterodactylProducts.find(p => p.id === productId);
  } else {
    product = scriptProducts.find(p => p.id === productId);
  }

  const now = new Date();
  const options = {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    timeZoneName: 'short'
  };
  const formattedDateTime = now.toLocaleDateString('id-ID', options);
  const whatsappMessage = `Halo Ryu\nSaya ingin membeli\nProduk: ${product.nama}\nHarga: ${product.harga}\nTanggal & Jam: ${formattedDateTime}`;

  detailContainer.innerHTML = `
    <div class="panel-detail-item show">
      <h3>${product.nama}</h3>
      <img src="${product.gambar}" alt="${product.nama}">
      <p>${product.deskripsi}</p>
      <p>Harga: ${product.harga}</p>
      <a href="https://wa.me/62856078064701?text=${encodeURIComponent(whatsappMessage)}" target="_blank">
        <button>Pesan Sekarang</button>
      </a>
    </div>
  `;
}

function showModal(productId, productType) {
  showProductDetail(productId, productType); // Tampilkan detail produk di modal
  modal.style.display = "block"; // Tampilkan modal
}

function closeModal() {
  modal.style.display = "none"; // Sembunyikan modal
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
