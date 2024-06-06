// document.addEventListener('DOMContentLoaded', () => {
    
//   });
  
const beaches = [
    {
      name: "Whitehaven Beach, Australia",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPI09-9z7X_8-z-slICCAvN12vMRsCM51oJw&s"
    },
    {
      name: "Grace Bay, Turks and Caicos",
      img: "https://www.visittci.com/thing/grace-bay-beach-pr/aerial_2048x1365.jpg"
    },
    {
      name: "Baia do Sancho, Brazil",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vfCUV31Er8X4FpFoSOCV-XxxnSdAWRmqNQ&s"
    },
    {
      name: "Navagio Beach, Greece",
      img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/98/19.jpg"
    },
    {
      name: "Playa Paraiso, Mexico",
      img: "https://cdn.getyourguide.com/img/tour/efd257586882134b7f36b16f4fafcba27b552ca88bdb5c9291ef9739f91b6487.jpg/97.jpg"
    },
    {
      name: "Anse Source d'Argent, Seychelles",
      img: "https://www.jonnymelon.com/wp-content/uploads/2022/01/La-Digue-Seychelles-108.jpg"
    },
    {
      name: "Seven Mile Beach, Cayman Islands",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4m79XTl_KRxusU_AWiluAmowfb67vzcgXjQ&s"
    },
    {
      name: "Bora Bora, French Polynesia",
      img: "https://www.tititudorancea.com/lib/edfiles/gm/800pxborabridge_21_crop_w4c.jpg"
    },
    {
      name: "Lanikai Beach, Hawaii",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/76/76/c9/lanikai-beach.jpg?w=1200&h=-1&s=1"
    },
    {
      name: "Pink Sands Beach, Bahamas",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61yxvYwuTsGnUVrQa-_5qqld0xeOQc9qcIA&s"
    }
  ];


  const ul = document.querySelector('ul');
  const listItems = ul.getElementsByTagName('li');
  
  for (let i = 0; i < listItems.length; i++) {
    const img = document.createElement('img');
    img.src = beaches[i].img;
    img.alt = beaches[i].name;
    img.style.width = "100%";
    img.style.height = "auto";
    listItems[i].insertBefore(img, listItems[i].firstChild);
  
    // Hide <p> tags initially
    const p = listItems[i].querySelector('p');
    p.style.display = 'none';
  
    // Create button
    const button = document.createElement('button');
    button.textContent = 'More Info';
    button.className = 'modal-btn';
    listItems[i].appendChild(button);
  }
  
  // Create modal
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <p id="modal-text"></p>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Modal functionality
  const modalContent = document.querySelector('.modal-content');
  const modalText = document.getElementById('modal-text');
  const modalCloseBtn = document.querySelector('.close-btn');

  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-btn')) {
      const listItem = event.target.closest('li');
      const p = listItem.querySelector('p');
      modalText.textContent = p.textContent; // Set modal content to the text content of the <p> tag
      modal.style.display = 'block'; // Display modal
    }
  });


  modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

     // Create search bar
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'search';
  searchInput.placeholder = 'Search for beaches...';
  document.body.insertBefore(searchInput, document.body.firstChild);

  // Search filter functionality
  searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    for (let i = 0; i < listItems.length; i++) {
      const beachName = listItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
      if (beachName.includes(filter)) {
        listItems[i].style.display = "";
      } else {
        listItems[i].style.display = "none";
      }
    }
  });

     