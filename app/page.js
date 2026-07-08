import SideContact from "./SideContact";

const Icon = ({ type }) => {
  const icons = {
    leaf: (
      <>
        <path d="M18 5c-6.8.4-11 4.4-11 10.2 0 3.7 2.4 6.8 6.1 6.8 5.8 0 9.7-6.2 8.5-16.9C20.4 5 19.2 4.9 18 5Z" />
        <path d="M6 22c2.7-6.4 7.2-10.2 13.5-11.4" />
      </>
    ),
    heart: (
      <path d="M12 21s-7.5-4.7-9.4-9.4C1 7.8 3.4 5 6.7 5c2 0 3.6 1 4.5 2.5C12.1 6 13.8 5 15.8 5c3.3 0 5.7 2.8 4.1 6.6C18 16.3 12 21 12 21Z" />
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.8v2.1M12 19.1v2.1M4.7 4.7l1.5 1.5M17.8 17.8l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.7 19.3l1.5-1.5M17.8 6.2l1.5-1.5" />
      </>
    ),
    blocks: (
      <>
        <path d="M4 11h7v7H4zM13 6h7v7h-7z" />
        <path d="M7.5 14.5h.1M16.5 9.5h.1" />
      </>
    ),
    pencil: (
      <>
        <path d="m4 17 1 3 3-1L19.2 7.8 15.2 3.8 4 17Z" />
        <path d="m13.8 5.2 4 4" />
      </>
    ),
    chat: (
      <>
        <path d="M5 6.5h14v9H9l-4 3v-12Z" />
        <path d="M8.5 10h7M8.5 12.7h4.8" />
      </>
    ),
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
};

const heroPoints = ["Priroda", "Sigurnost", "Razvoj"];

const services = [
  {
    icon: "leaf",
    title: "Ekološki koncept",
    text: "Priroda je svakodnevna praksa kroz istraživanje, boravak napolju i razvoj odgovornih navika.",
  },
  {
    icon: "heart",
    title: "Individualni pristup",
    text: "Manje grupe daju prostor da svako dete bude viđeno, negovano i podržano u svom ritmu.",
  },
  {
    icon: "sun",
    title: "Zdrav razvoj",
    text: "Zdrava ishrana, kretanje, sigurnost i kreativno stvaranje grade samostalno i srećno dete.",
  },
];

const activities = [
  { icon: "blocks", title: "Projektno učenje", text: "Deca uče kroz pitanja, igru, istraživanje i stvarne životne situacije." },
  { icon: "leaf", title: "Ekološke radionice", text: "Svakodnevno upoznavanje prirode, zelenila i održivih životnih navika." },
  { icon: "pencil", title: "Kreativne radionice", text: "Umetnost, muzika, balet i stvaranje podstiču autentičnost deteta." },
  { icon: "sun", title: "Sport i kretanje", text: "Školica sporta, boravak napolju i igra podržavaju zdrav razvoj." },
];

const familyPoints = [
  "Postepena adaptacija uz roditelje",
  "Dnevne informacije, fotografije i razgovori",
  "Jasna rutina, stručan tim i malo dete u fokusu",
];

const dayFlow = [
  "Jutarnji krug",
  "Istraživačke aktivnosti",
  "Boravak u dvorištu",
  "Obrok i odmor",
  "Slobodna igra",
];

const asset = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

export default function Home() {
  return (
    <main className="site-shell">
      <div className="site-decor" aria-hidden="true">
        <svg className="site-vine site-vine--desktop" viewBox="0 0 1200 1800" preserveAspectRatio="none">
          <path d="M70 220 C260 360 120 560 340 700 S720 760 620 980 760 1280 1080 1380" />
          <circle className="vine-fruit vine-fruit--rose" cx="250" cy="372" r="18" />
          <circle className="vine-fruit vine-fruit--sage" cx="520" cy="745" r="15" />
          <path className="vine-star" d="M782 1090l10 22 24 3-18 16 5 24-21-12-21 12 5-24-18-16 24-3z" />
          <circle className="vine-fruit vine-fruit--sand" cx="944" cy="1338" r="17" />
          <g className="vine-flower vine-flower--rose" transform="translate(116 214)">
            <circle cx="0" cy="-14" r="10" />
            <circle cx="14" cy="0" r="10" />
            <circle cx="0" cy="14" r="10" />
            <circle cx="-14" cy="0" r="10" />
            <circle className="vine-flower__center" cx="0" cy="0" r="7" />
          </g>
          <g className="vine-flower vine-flower--teal" transform="translate(676 894)">
            <circle cx="0" cy="-12" r="9" />
            <circle cx="12" cy="0" r="9" />
            <circle cx="0" cy="12" r="9" />
            <circle cx="-12" cy="0" r="9" />
            <circle className="vine-flower__center" cx="0" cy="0" r="6" />
          </g>
          <circle className="vine-ball vine-ball--soft" cx="1090" cy="1188" r="26" />
          <circle className="vine-ball vine-ball--rose" cx="154" cy="1510" r="22" />
        </svg>
        <svg className="site-vine site-vine--mobile" viewBox="0 0 220 1800" preserveAspectRatio="none">
          <path d="M112 40 C54 210 166 360 102 520 S70 820 128 1010 150 1330 92 1710" />
          <circle className="vine-fruit vine-fruit--rose" cx="82" cy="344" r="13" />
          <circle className="vine-fruit vine-fruit--sage" cx="132" cy="770" r="12" />
          <path className="vine-star" d="M83 1212l8 17 19 2-14 13 4 19-17-9-17 9 4-19-14-13 19-2z" />
          <g className="vine-flower vine-flower--rose" transform="translate(138 188)">
            <circle cx="0" cy="-9" r="7" />
            <circle cx="9" cy="0" r="7" />
            <circle cx="0" cy="9" r="7" />
            <circle cx="-9" cy="0" r="7" />
            <circle className="vine-flower__center" cx="0" cy="0" r="5" />
          </g>
          <circle className="vine-ball vine-ball--soft" cx="72" cy="1008" r="18" />
        </svg>
        <div className="decor-tree">
          <span className="decor-tree__crown"></span>
          <span className="decor-tree__trunk"></span>
        </div>
        <div className="decor-birdhouse">
          <span className="decor-birdhouse__roof"></span>
          <span className="decor-birdhouse__body"></span>
          <span className="decor-birdhouse__bird"></span>
        </div>
      </div>
      <SideContact logoSrc={asset("/images/logo_sc.png")} />

      <header id="pocetna" className="hero-header">
        <img className="hero-header__bg" src={asset("/images/visnjicaheader_background.png")} alt="" />
        <div className="hero-logo-wrap">
          <img src={asset("/images/logo_vila_visnjica_3.png")} alt="Vila Višnjica" />
        </div>
        <nav className="floating-nav" aria-label="Glavna navigacija">
          <a href="#koncept">Koncept</a>
          <a href="#program">Program</a>
          <a href="#prostor">Prostor</a>
          <a href="#adaptacija">Adaptacija</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Otvorite meni">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <nav className="mobile-nav__menu" aria-label="Glavna navigacija">
            <a href="#koncept">Koncept</a>
            <a href="#program">Program</a>
            <a href="#prostor">Prostor</a>
            <a href="#adaptacija">Adaptacija</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </details>
      </header>

      <section id="koncept" className="section afterHero">
        <div className="afterHero__intro">
          <p className="script-label">Dobro došli</p>
          <h1 className="no-break-title">Vila Višnjica</h1>
          <p className="hero__lead">
            Ekološki vrtić u Višnjičkoj Banji u kome dete raste kroz prirodu,
            igru, istraživanje i holistički pristup razvoju.
          </p>
          <div className="hero-points" aria-label="Tri vrednosti vrtića">
            {heroPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <div className="hero__actions">
            <a className="button button--primary" href="#kontakt">Upis i obilazak</a>
            <a className="button button--light" href="tel:+381600000000">Pozovite nas</a>
          </div>
        </div>
        <div className="afterHero__photo frame frame--tilt-left">
          <img src={asset("/images/afterhero-child.jpg")} alt="Dete u toplom prostoru vrtića gleda u kameru" />
        </div>
        <div className="afterHero__heading">
          <p className="script-label">Po čemu smo drugačiji</p>
          <h2>Priroda nije povremena aktivnost. Ona je deo svakog dana.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="icon-bubble"><Icon type={service.icon} /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section news">
        <div className="news__image frame frame--tilt-left">
          <img src={asset("/images/garden-workshop.jpg")} alt="Deca sade začinsko bilje u bašti" />
        </div>
        <div className="news__content">
          <p className="script-label">Iz našeg dana</p>
          <h2>Učimo kroz iskustvo, igru i istraživanje.</h2>
          <p>
            Program je zasnovan na projektnom učenju, boravku u prirodi i
            razvoju životnih veština. Dete posmatramo kao jedinstveno,
            autentično i puno potencijala.
          </p>
          <div className="mini-list">
            <span><Icon type="leaf" /> Svakodnevni boravak napolju</span>
            <span><Icon type="heart" /> Stručan i topao pristup detetu</span>
            <span><Icon type="chat" /> Partnerstvo sa roditeljima</span>
          </div>
        </div>
      </section>

      <section id="program" className="section programs">
        <div className="section-heading section-heading--center">
          <p className="script-label">Naš program</p>
          <h2>Program koji razvija radoznalost, samostalnost i kreativnost.</h2>
        </div>
        <div className="program-grid">
          {activities.map((activity) => (
            <article className="program-card" key={activity.title}>
              <Icon type={activity.icon} />
              <h3>{activity.title}</h3>
              <p>{activity.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section family"
        style={{ "--family-bg": `url("${asset("/images/zaDeteiPorodicu_001.png")}")` }}
      >
        <div className="family__content">
          <p className="script-label">Za dete i porodicu</p>
          <h2>Roditelj zna da je dete viđeno, sigurno i podržano.</h2>
          <p>
            Vila Višnjica gradi partnerstvo sa porodicom kroz otvorenu
            komunikaciju, jasne informacije i atmosferu poverenja. Roditelj
            dobija sigurnost, a dete prostor da raste u skladu sa sobom.
          </p>
          <div className="mini-list">
            {familyPoints.map((point) => (
              <span key={point}><Icon type="heart" /> {point}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="prostor" className="section classroom">
        <div className="classroom__content">
          <p className="script-label">Prostor za rast</p>
          <h2>Topao, svetao prostor sa prirodnim materijalima.</h2>
          <p>
            Vrtić je bezbedan, inspirativan i okružen zelenilom. Svaki deo
            prostora podržava igru, odmor, istraživanje i stvaranje.
          </p>
          <ol className="day-flow">
            {dayFlow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="frame frame--tilt-right">
          <img src={asset("/images/classroom.jpg")} alt="Topla učionica sa drvenim igračkama i biljkama" />
        </div>
      </section>

      <section id="adaptacija" className="section enrolment">
        <div className="enrolment__heading">
          <p className="script-label">Prvi dani</p>
          <h2>Adaptacija je postepena, nežna i prilagođena detetu.</h2>
        </div>
        <div className="enrolment__body">
          <p>
            Roditelji su aktivno uključeni u prve dane. O detetovom danu,
            napretku i aktivnostima informišemo ih putem aplikacije, Viber
            grupe, fotografija, dnevnih izveštaja i redovnih razgovora.
          </p>
          <a className="button button--primary" href="#kontakt">Razgovarajte sa nama</a>
        </div>
      </section>

      <section className="section testimonials">
        <div className="testimonial-card">
          <p className="script-label">Poruka roditeljima</p>
          <blockquote>
            “Dete uči kroz istraživanje, igru i iskustvo, u okruženju koje
            neguje sigurnost, ljubav i razvoj.”
          </blockquote>
        </div>
        <div className="testimonial-card testimonial-card--teal">
          <Icon type="sun" />
          <h3>Verifikovana ustanova</h3>
          <p>Roditelji ostvaruju pravo na subvencionisani deo grada Beograda.</p>
        </div>
      </section>

      <section id="kontakt" className="section contact">
        <div className="contact__content">
          <p className="script-label">Dođite da se upoznamo</p>
          <h2>Zakažite obilazak Vile Višnjice.</h2>
          <p>
            Najbolji prvi korak je obilazak vrtića, upoznavanje tima i prostora.
            Upite primamo putem telefona, Vibera, WhatsApp-a, Instagrama,
            e-maila i formulara.
          </p>
        </div>
        <form className="contact-form">
          <label>
            Ime i prezime
            <input type="text" name="name" placeholder="Vaše ime" />
          </label>
          <label>
            Telefon ili e-mail
            <input type="text" name="contact" placeholder="Kontakt za odgovor" />
          </label>
          <label>
            Poruka
            <textarea name="message" rows="4" placeholder="Uzrast deteta i željeni termin obilaska" />
          </label>
          <button className="button button--primary" type="submit">Pošaljite upit</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer__brand">
          <strong>Vila Višnjica</strong>
          <span>Ekološki vrtić u Višnjičkoj Banji</span>
        </div>
        <div className="footer__contact" aria-label="Kontakt podaci">
          <a href="tel:+381600000000">+381 60 000 0000</a>
          <a href="mailto:info@vilavisnjica.rs">info@vilavisnjica.rs</a>
          <span>Višnjička Banja, Beograd</span>
        </div>
        <div className="footer__social" aria-label="Društvene mreže">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Facebook">FB</a>
        </div>
      </footer>
    </main>
  );
}
