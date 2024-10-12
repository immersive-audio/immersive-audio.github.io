window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('videoSlider');
  const sliderOutput = document.getElementById('sliderOutput');
  const items = document.querySelectorAll('.item');

  // 定义汉字数组
  const labels = ["⬅️Completely Left", "↖️Front Left", "⬆️Completely Front", "↗️Front Right", "➡️Completely Right"];

  function updateVideoDisplay() {
    const index = slider.value - 1; // 获取当前滑块值并转换为零基索引
    sliderOutput.textContent = "Source direction: "+labels[index]; // 更新输出显示为对应的汉字
    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === index); // 显示仅活动的项
    });
  }

  slider.addEventListener('input', updateVideoDisplay); // 在滑块移动时更新显示

  updateVideoDisplay(); // 使用正确的显示初始化
});

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('videoSlider2');
  const sliderOutput = document.getElementById('sliderOutput2');
  const items = document.querySelectorAll('.item2');

  // 定义汉字数组
  const labels = ["⏩Original Directions", "⏪Reversed Directions"];

  function updateVideoDisplay() {
    const index = slider.value - 1; // 获取当前滑块值并转换为零基索引
    sliderOutput.textContent = "Direction State: "+labels[index]; // 更新输出显示为对应的汉字
    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === index); // 显示仅活动的项
    });
  }

  slider.addEventListener('input', updateVideoDisplay); // 在滑块移动时更新显示

  updateVideoDisplay(); // 使用正确的显示初始化
});

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('videoSlider3');
  const sliderOutput = document.getElementById('sliderOutput3');
  const items = document.querySelectorAll('.item3');

  // 定义汉字数组
  const labels = ["⏩Original Directions", "⏪Reversed Directions"];

  function updateVideoDisplay() {
    const index = slider.value - 1; // 获取当前滑块值并转换为零基索引
    sliderOutput.textContent = "Moving State: "+labels[index]; // 更新输出显示为对应的汉字
    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === index); // 显示仅活动的项
    });
  }

  slider.addEventListener('input', updateVideoDisplay); // 在滑块移动时更新显示

  updateVideoDisplay(); // 使用正确的显示初始化
});

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('videoSlider4');
  const sliderOutput = document.getElementById('sliderOutput4');
  const items = document.querySelectorAll('.item4');

  // 定义汉字数组
  const labels = ["🛋️Nearby", "🗻Faraway"];

  function updateVideoDisplay() {
    const index = slider.value - 1; // 获取当前滑块值并转换为零基索引
    sliderOutput.textContent = "Source distance: "+labels[index]; // 更新输出显示为对应的汉字
    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === index); // 显示仅活动的项
    });
  }

  slider.addEventListener('input', updateVideoDisplay); // 在滑块移动时更新显示

  updateVideoDisplay(); // 使用正确的显示初始化
});

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('videoSlider5');
  const sliderOutput = document.getElementById('sliderOutput5');
  const items = document.querySelectorAll('.item5');

  // 定义汉字数组
  const labels = ["🗻Anechoic space", "🛋️Reverberating space"];

  function updateVideoDisplay() {
    const index = slider.value - 1; // 获取当前滑块值并转换为零基索引
    sliderOutput.textContent = "Environment: "+labels[index]; // 更新输出显示为对应的汉字
    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === index); // 显示仅活动的项
    });
  }

  slider.addEventListener('input', updateVideoDisplay); // 在滑块移动时更新显示

  updateVideoDisplay(); // 使用正确的显示初始化
});

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('videoSlider6');
  const sliderOutput = document.getElementById('sliderOutput6');
  const items = document.querySelectorAll('.item6');

  // 定义汉字数组
  const labels = ["30-sec","45-sec", "90-sec"];

  function updateVideoDisplay() {
    const index = slider.value - 1; // 获取当前滑块值并转换为零基索引
    sliderOutput.textContent = "Environment: "+labels[index]; // 更新输出显示为对应的汉字
    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === index); // 显示仅活动的项
    });
  }

  slider.addEventListener('input', updateVideoDisplay); // 在滑块移动时更新显示

  updateVideoDisplay(); // 使用正确的显示初始化
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      var targetId = this.getAttribute('data-target');
      // Determine the container class based on the target ID
      let targetClass;
      if (targetId.includes('-visual')) {
        targetClass = '.container-select-visual';
      } else if (targetId.includes('-imagehear')) {
        targetClass = '.container-select-imagehear';
      } else {
        targetClass = '.container-select';
      }
      
      // Hide containers of the same category
      document.querySelectorAll(targetClass).forEach(container => {
        container.style.display = 'none';
      });
      // Display the container corresponding to the clicked button
      document.getElementById(targetId).style.display = 'block';
      
      // Update button classes based on the category
      if (targetId.includes('-visual')) {
        document.querySelectorAll('[data-target*="-visual"]').forEach(b => b.classList.replace('is-dark', 'is-light'));
        this.classList.replace('is-light', 'is-dark');
      } else if (targetId.includes('-imagehear')) {
        document.querySelectorAll('[data-target*="-imagehear"]').forEach(b => b.classList.replace('is-dark', 'is-light'));
        this.classList.replace('is-light', 'is-dark');
      } else {
        document.querySelectorAll('button:not([data-target*="-visual"], [data-target*="-imagehear"])').forEach(b => b.classList.replace('is-dark', 'is-light'));
        this.classList.replace('is-light', 'is-dark');
      }
    });
  });

  // Default display for the first container of each category
  document.getElementById('container1').style.display = 'block';
  document.getElementById('container1-visual').style.display = 'block';
  // Assuming there is a default container for the 'imagehear' category as well
  document.getElementById('container1-imagehear').style.display = 'block';
});

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})
