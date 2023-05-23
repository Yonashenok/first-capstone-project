const courseData = [
  {
    img: './assets/imgs/online-video.png',
    title: 'Videos',
    detailed:
      'our program gives you  cooking  with flexibility. Unlike traditional cooking classes,',
  },
  {
    img: './assets/imgs/dish.png',
    title: ' Recipe Type',
    detailed:
      'Cook you next excellent dish with by picking one of cooking course',
  },
  {
    img: './assets/imgs/chef.png',
    title: 'Technique Lessons',
    detailed:
      'Mastering a particular technique,simply looking for inspiration for your next meal.',
  },
  {
    img: './assets/imgs/diet.png',
    title: 'Main Ingredient',
    detailed: 'Cook using different main ingredient such as meat, egg...',
  },

  {
    img: './assets/imgs/increasing-level.png',
    title: 'Level of Difficulty',
    detailed:
      'Learn how to cook, regardless of your skill level or experience.',
  },
  {
    img: './assets/imgs/stir-fry.png',
    title: 'Recipe Lessons',
    detailed:
      'Are you interested in learning how to cook a specific cuisine, learn over 250 recipe.',
  },
];
const teacherData = [
  {
    img: './assets/imgs/chef33.png',
    teacherName: 'Erez Komaro',
    title: 'Teachers his israel cuisine',
    description:
      'Join Erez on a culinary journey to Israel and explore Middle Eastern foods and flavors.',
  },
  {
    img: './assets/imgs/chef1.png',
    teacherName: 'Miya Kianu',
    title: ' Teachers her American cuisine',
    description:
      'Join Miya on a culinary journey to American and explore foods flavor.',
  },
  {
    img: './assets/imgs/chef4.png"',
    teacherName: 'Francis Dario',
    title: 'Teachers his Argentine cuisine',
    description:
      'Join Francis on a culinary journey to explore his Argentine cuisine and open-fire cooking.',
  },
  {
    img: './assets/imgs/chef6.png',
    teacherName: 'Vikry Khan',
    title: 'Teachers his India cuisine',
    description:
      'Join Vikry on a culinary journey to Kolkata, India andexplore her favorite Indian dishes and Bengali flavors.',
  },
  {
    img: './assets/imgs/chef5.png"',
    teacherName: 'Kwame Morsi',
    title: ' Teachers his jamaican cuisine',
    description:
      ' Join kwame on a culinary journey to jamaican and explore his Afro-Caribbean culture and flavors.',
  },

  {
    img: './assets/imgs/chef2.png',
    teacherName: 'Nancy Robert',
    title: 'Teachers her California cuisine',
    description:
      'Join Nancy on a culinary journey to explore her simple, seasonal, and delicious Californian-Italian cooking style.',
  },
];

const teachers = document.querySelector('.feature-page');
const showfeatuer = document.querySelector('.showMore');
const courses = document.querySelector('.courses');

const renderFeature = () => {
  teacherData.forEach((item, i) => {
    const html = `
          <div class="card shadow ${i > 1 ? 'hidden' : ''}   mb-2 ourTechers ">
                      <div class="d-flex flex-row g-0">
                        <div
                          class="col-md-4 col-sm-2 image-cont p-md-2  border-danger"
                        >
                          <img
                            src="${item.img}"
                            class="img-fluid rounded img-chef"
                            alt="chef-image-${i}"
                          />
                        </div>
                        <div class="col-md-8 g-0">
                          <div class="card-body">
                            <h5 class="card-title">${item.teacherName}</h5>
                            <p class="my-1  main-color">
                            ${item.title}
                            </p>
                            <p class="card-text">
                            ${item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
          `;
    teachers.insertAdjacentHTML('afterbegin', html);
  });

  const showMore = document.querySelectorAll('.ourTechers');
  showfeatuer.addEventListener('click', () => {
    showMore.forEach((card) => {
      card.classList.remove('hidden');
    });
    showfeatuer.classList.add('hidden');
  });
};
renderFeature();

const renderCourse = () => {
  courseData.forEach((item) => {
    const html = `
      <div class="card main-card p-lg-2">
      <div class="d-flex flex-lg-column flex-md-row flex-sm-row">
        <div
          class="icon-box d-flex justify-content-center align-items-center"
        >
          <img src="${item.img}" alt="" />
        </div>
        <div
          class="d-flex flex-column justify-content-center align-items-center w-100 h-75 p-2"
        >
          <h5 class="card-title main-color fs-5 mb-lg-3 text-center head-secondary">
           ${item.title}
          </h5>
          <div class="textBox">
            <p
              class="card-text text-light text-sm-start text-lg-center"
            >
           ${item.detailed}
            </p>
          </div>
        </div>
      </div>
    </div>
            `;
    courses.insertAdjacentHTML('afterbegin', html);
  });
};
renderCourse();
