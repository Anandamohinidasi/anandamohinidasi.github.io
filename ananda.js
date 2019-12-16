document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      console.log('bolo hari hari mukunda murari')
      const locEl = document.getElementById('loc');
      locEl.style.display = 'block';   
    }
  };
const langMap = {
    pt: {
        landDescription: `
        Uma desenvolvedora web e mobile auto-didata e auto-motivada.
        Apaixonada por aprender novas tecnologias e liberdade de criação.
        Eu acredito que podemos criar uma web mais inteligente, rápida e bonita.
        `,
        titleEl: `Eu sou Ananda Rodrigues,`
    },
    en: {
        landDescription: `
        Self learned and self moved, web and mobile developer. In love with learning new technologies
                and freedom to create.
                I believe we can make a faster, smarter and prettier web.
        `,
        titleEl: ` I'm Ananda Rodrigues,`
    }
};

const titleEl = document.getElementById('landTitle');
const descriptionEl = document.getElementById('landDescription');

function changeLanguage(lang) {
    titleEl.innerHTML = langMap[lang].titleEl;
    descriptionEl.innerHTML = langMap[lang].landDescription;
}