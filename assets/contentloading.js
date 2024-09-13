const jobSteps = ["DECO", "ART", "PAPER"];

let stepIndex = 0;
let textIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const job = document.getElementById("typewriter").querySelector("span");

  currentText = jobSteps[stepIndex];

  if (isDeleting) {
    currentText = currentText.slice(0, --textIndex);
  } else {
    currentText = currentText.slice(0, ++textIndex);
  }

  job.textContent = currentText;

  let typeSpeed = 150;

  if (isDeleting) {
    typeSpeed /= 2;
  }

  if (!isDeleting && currentText === jobSteps[stepIndex]) {
    isDeleting = true;
    typeSpeed = 500;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    stepIndex++;
    if (stepIndex >= jobSteps.length) {
      stepIndex = 0;
    }
    typeSpeed = 200;
  }

  // Toggle visibility for each character
  Array.from(job.textContent).forEach((char, index) => {
    setTimeout(() => {
      const charSpan = job.querySelector(`span:nth-child(${index + 1})`);
      // charSpan.classList.toggle('visible');
    }, index * typeSpeed * 0.1); // Adjust timing here
  });

  setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", type);

// ------------------------------------------------------------------------------

// Function to generate dynamic slider content
function generateSliderContent() {
  const sliderContainer = document.getElementById("dynamicSliderContent");
  const images = [
    // "w1.jpg",
    // "w2.jpg",
    // "w3.jpg",
    // "w4.jpg",
    // "w5.jpg",
    // "w6.jpg",
    // "w7.jpg",
    // "w8.jpg",
    // "w9.jpg",
    // "w10.jpg",
  ];

  images.forEach((img) => {
    const slide = `
        <div class="embla__slide slider-image item" style="margin-left: 1rem; margin-right: 1rem;">
          <div class="slide-content">
            <div class="item-img">
              <div class="item-wrapper">
                <img src="assets/images/wallpapers/${img}" alt="Try Refreshing this site..."/>
              </div>
            </div>
          </div>
        </div>
      `;
    sliderContainer.innerHTML += slide;
  });
}

//   -------------------------------------------------------------------
// Function to generate top picked wallpapers
function generateTopPickedWallpapers() {
  const container = document.getElementById("topPickedWallpapers");
  const wallpapers = [
    { img: "w11.jpg", title: "Dreamscape Delight" },
    { img: "w12.jpg", title: "Luxury Linen Elegance" },
    { img: "w13.jpg", title: "Vintage Floral Charm" },
    { img: "w15.jpg", title: "Geometric Fusion" },
    { img: "w20.jpg", title: "Modern Minimalist" },
    { img: "w21.jpg", title: "Nature's Embrace" },
    { img: "w22.jpg", title: "Urban Chic" },
    { img: "w23.jpg", title: "Artistic Abstract" },
  ];

  wallpapers.forEach((wallpaper) => {
    const item = `
<div class="item features-image col-12 col-md-6 col-lg-3">
<div class="item-wrapper">
  <div class="item-img mb-3">
    <img src="assets/images/wallpapers/${wallpaper.img}" alt="Try Refreshing this site..." data-slide-to="3" data-bs-slide-to="4">
  </div>
  <div class="item-content align-left">
    <h5 class="item-title mbr-fonts-style mb-3 mt-0 display-7">
      <strong>${wallpaper.title}</strong>
    </h5>
  </div>
</div>
</div>
`;
    container.innerHTML += item;
  });
}

// Call functions when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  generateSliderContent();
  generateTopPickedWallpapers();
});

(function () {
  var animationInput = document.createElement("input");
  animationInput.setAttribute("name", "animation");
  animationInput.setAttribute("type", "hidden");
  document.body.append(animationInput);
})();

// --------------------------------------------------------------------------------------
// Function to generate abstract frame collection
function generateAbstractFrameCollection() {
  const container = document.getElementById("abstractFrameCollection");
  const frames = [
    { img: "10.jpg", code: "NZ-137" },
    { img: "11.jpg", code: "NZ-139" },
    { img: "12.jpg", code: "NZ-145" },
    { img: "13.jpg", code: "NZ-147" },
    { img: "14.jpg", code: "NZ-181" },
    { img: "15.jpg", code: "NZ-182" },
    { img: "16.jpg", code: "NZ-183" },
    { img: "17.jpg", code: "NZ-243" },
    { img: "18.jpg", code: "NZ-244" },
    { img: "19.jpg", code: "NZ-245" },
  ];

  frames.forEach((frame) => {
    const item = `
            <div class="item features-image col-12 col-md-6 col-lg-3">
                <div class="item-wrapper">
                    <div class="item-img mb-3">
                        <img src="assets/images/wallyart/${frame.img}" alt="Try Refreshing this site..." data-slide-to="3" data-bs-slide-to="4">
                    </div>
                    <div class="item-content align-left">
                        <h5 class="item-title mbr-fonts-style mb-3 mt-0 display-7">
                            <!-- ${frame.code} -->
                        </h5>
                    </div>
                </div>
            </div>
        `;
    container.innerHTML += item;
  });
}

// Call function when DOM is loaded
document.addEventListener("DOMContentLoaded", generateAbstractFrameCollection);

// --------------------------------------------------------------------------------------

// Function to generate floral collection
function generateFloralCollection() {
  const container = document.getElementById("floralCollection");
  const flowerImages = [];

  // Generate array of image names
  for (let i = 1; i <= 26; i++) {
    flowerImages.push(`pushpa_${i}.jpg`);
  }

  flowerImages.forEach((img, index) => {
    const item = `
              <div class="item features-image col-12 col-md-6 col-lg-3">
                  <div class="item-wrapper">
                      <div class="item-img mb-3">
                          <img src="assets/images/wallpapers/pushpa/${img}" alt="Try Refreshing this site..." data-slide-to="3" data-bs-slide-to="4">
                      </div>
                      <div class="item-content align-left">
                          <h5 class="item-title mbr-fonts-style mb-3 mt-0 display-7">
                              <!-- NZ-${137 + index} -->
                          </h5>
                      </div>
                  </div>
              </div>
          `;
    container.innerHTML += item;
  });
}

// Call function when DOM is loaded
document.addEventListener("DOMContentLoaded", generateFloralCollection);

// --------------------------------------------------------------------------------------

// Function to generate trending collection
function generateTrendingCollection() {
  const container = document.getElementById("trendingCollection");
  const trendImages = [];

  // Generate array of image names
  for (let i = 8; i <= 37; i++) {
    // Skip page 11 as it's not in the original sequence
    if (i !== 11) {
      trendImages.push(`TRENDS_page-00${i.toString().padStart(2, "0")}.jpg`);
    }
  }

  trendImages.forEach((img, index) => {
    const item = `
            <div class="item features-image col-12 col-md-6 col-lg-3">
                <div class="item-wrapper">
                    <div class="item-img mb-3">
                        <img src="assets/images/wallpapers/trends/${img}" alt="Try Refreshing this site..." data-slide-to="3" data-bs-slide-to="4">
                    </div>
                    <div class="item-content align-left">
                        <h5 class="item-title mbr-fonts-style mb-3 mt-0 display-7">
                            <!-- NZ-${137 + index} -->
                        </h5>
                    </div>
                </div>
            </div>
        `;
    container.innerHTML += item;
  });
}

// Call function when DOM is loaded
document.addEventListener("DOMContentLoaded", generateTrendingCollection);
