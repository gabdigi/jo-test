const toggleButton = document.getElementsByClassName('menu-bar')[0];
const navbarLinks = document.getElementsByClassName('nav-bar-links')[0];
const header = document.getElementsByClassName('header')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  header.classList.toggle('header-active');
})
/***********************************TRANSLATE OUITL **********************/

let langEl = document.querySelector('.langWrap');
let link = document.querySelectorAll('a');
let titleEl = document.querySelector('.title-h1');
let titleEl_p = document.querySelector('.title-h1-article-p');
let titleEl2_1 = document.querySelector('.title-h2-1');
let titleEl2_1_p = document.querySelector('.title-h2-article-p-1');
let titleEl2_2 = document.querySelector('.title-h2-2');
let titleEl2_2_p = document.querySelector('.title-h2-article-p-2');
let titleEl2_3 = document.querySelector('.title-h2-3');
let titleEl2_3_p = document.querySelector('.title-h2-article-p-3');
let titleEl2_4 = document.querySelector('.title-h2-4');
let titleEl2_4_p = document.querySelector('.title-h2-article-p-4');
let titleLink = document.querySelector('.a-link');

link.forEach(el => {
  el.addEventListener('click', () => {

    const attr = el.getAttribute('language');
    titleEl.textContent = data[attr].title_h1;
    titleEl_p.textContent = data[attr].title_h1_article_p;
    titleEl2_1.textContent = data[attr].title_h2_1;
    titleEl2_1_p.textContent = data[attr].title_h2_article_p_1;
    titleEl2_2.textContent = data[attr].title_h2_2;
    titleEl2_2_p.textContent = data[attr].title_h2_article_p_2;
    titleEl2_3.textContent = data[attr].title_h2_3;
    titleEl2_3_p.textContent = data[attr].title_h2_article_p_3;
    titleEl2_4.textContent = data[attr].title_h2_4;
    titleEl2_4_p.textContent = data[attr].title_h2_article_p_4;
    titleLink.textContent = data[attr].link;
  });
});

var data = {
  "french": 
  {
    "title_h1": "bienvenue",
    "title_h1_article_p": "vous êtes perdue pour les épreuves de JO Paris 2024, vous êtes au bonne endroit.",
    "title_h2_1" : "capitale",
    "title_h2_article_p_1" : "Venez découvrir les épreuves dans la capitale.", 
    "title_h2_2" : "france",
    "title_h2_article_p_2" : "Venez découvrir les épreuves dans tout la France.",
    "title_h2_3" : "D.O.M",
    "title_h2_article_p_3" : "Venez découvrir les épreuves dans les départements d'outre_mer.",
    "title_h2_4" : "contact",
    "title_h2_article_p_4" : "Pour voir nos réseaux où si vous  avez des question ? venez sur notre page contact et nous vous répondrons.",
    "a_link" : "lien"
  },
    "english": 
    {
      "title_h1": "welcome",
      "title_h1_article_p": "you are lost for the Paris 2024 Olympic events, you are in the right place.",
      "title_h2_1" : "capitale",
      "title_h2_article_p_1" : "Come and discover the events in the capital.", 
      "title_h2_2" : "french",
      "title_h2_article_p_2" : "Come and discover the events all over French",
      "title_h2_3" : "D.O.M",
      "title_h2_article_p_3" : "Come and discover the events in the overseas departments.",
      "title_h2_4" : "contact",
      "title_h2_article_p_4" : "To see our networks or if you have any questions ? come to our contact page and we will answer you.",
      "link" : "link"
    },
    "chinese": 
    {
      "title_h1": "欢迎",
      "title_h1_article_p": "你迷失了 2024 年巴黎奥运会的赛事，你来对地方了.",
      "title_h2_1" : "首都",
      "title_h2_article_p_1" : "快来发现首都的事件.", 
      "title_h2_2" : "法国",
      "title_h2_article_p_2" : "快来发现整个法国的事件.",
      "title_h2_3" : "D.O.M",
      "title_h2_article_p_3" : "快来发现海外部门的事件.",
      "title_h2_4" : "接触",
      "title_h2_article_p_4" : "查看我们的网络或如果您有任何问题？ 来到我们的联系页面，我们会回答你.",
      "link" : "关联"
    },
    "india": 
    {
      "title_h1": "स्वागत हे",
      "title_h1_article_p": "आप 2024 के पेरिस ओलंपिक आयोजनों के लिए हार गए हैं, आप सही जगह पर आए हैं।",
      "title_h2_1" : "राजधानी",
      "title_h2_article_p_1" : "आओ और राजधानी में घटनाओं की खोज करें।", 
      "title_h2_2" : "फ्रांस",
      "title_h2_article_p_2" : "आओ और पूरे फ्रांस में घटनाओं की खोज करें।",
      "title_h2_3" : "डीओएम",
      "title_h2_article_p_3" : "आओ और विदेशी विभागों में घटनाओं की खोज करें।",
      "title_h2_4" : "संपर्क Ajay करें",
      "title_h2_article_p_4" : "हमारे नेटवर्क देखने के लिए या यदि आपके कोई प्रश्न हैं? हमारे संपर्क पृष्ठ पर आएं और हम आपको जवाब देंगे।",
      "link" : "जोड़ना"
    },
    "russia": 
    {
      "title_h1": "добро пожаловать",
      "title_h1_article_p": "вы потеряли для Олимпийских игр 2024 года в Париже, вы попали в нужное место.",
      "title_h2_1" : "столица",
      "title_h2_article_p_1" : "Приходите и откройте для себя события в столице.", 
      "title_h2_2" : "Франция",
      "title_h2_article_p_2" : "Приходите и откройте для себя события по всей Франции.",
      "title_h2_3" : "D.O.M",
      "title_h2_article_p_3" : "Приходите и откройте для себя события в зарубежных отделах.",
      "title_h2_4" : "контакт",
      "title_h2_article_p_4" : "Чтобы увидеть наши сети или если у вас есть какие-либо вопросы? заходите на нашу страницу контактов и мы вам ответим.",
      "link" : "связь"
    },
    "spanish": 
    {
      "title_h1": "bienvenido",
      "title_h1_article_p": "estás perdido para los eventos de los Juegos Olímpicos de París 2024, has venido al lugar correcto.",
      "title_h2_1" : "ciudad capital",
      "title_h2_article_p_1" : "Ven y descubre los eventos en la capital.", 
      "title_h2_2" : "Francia",
      "title_h2_article_p_2" : "Ven y descubre los eventos en toda Francia.",
      "title_h2_3" : "D.O.M",
      "title_h2_article_p_3" : "Ven y descubre los eventos en los departamentos de ultramar.",
      "title_h2_4" : "contactar",
      "title_h2_article_p_4" : "Para ver nuestras redes o si tienes alguna duda? acércate a nuestra página de contacto y te responderemos.",
      "link" : "Enlace"
    },
    "arabia": 
    {
      "title_h1": "مرحبا",
      "title_h1_article_p": "لقد خسرت في أحداث أولمبياد باريس 2024 ، لقد وصلت إلى المكان الصحيح.",
      "title_h2_1" : "العاصمة",
      "title_h2_article_p_1" : "تعال واكتشف الأحداث في العاصمة.", 
      "title_h2_2" : "فرنسا",
      "title_h2_article_p_2" : "تعال واكتشف الأحداث في جميع أنحاء فرنسا.",
      "title_h2_3" : "م",
      "title_h2_article_p_3" : "تعال واكتشف الأحداث في أقسام الخارج.",
      "title_h2_4" : "اتصل",
      "title_h2_article_p_4" : "لرؤية شبكاتنا أو إذا كان لديك أي أسئلة؟ تعال إلى صفحة الاتصال الخاصة بنا وسنقوم بالرد عليك.",
      "link" : "حلقة الوصل"
    }
  }