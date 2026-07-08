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
    title: "Eko koncept",
    text: "Priroda je deo svakodnevnog učenja kroz igru, istraživanje i male odgovorne navike.",
  },
  {
    icon: "heart",
    title: "Mali broj dece",
    text: "Mirniji ritam i više prostora da svako dete bude viđeno, podržano i ohrabreno.",
  },
  {
    icon: "sun",
    title: "Zdravo odrastanje",
    text: "Boravak napolju, zdrava ishrana, kretanje, stvaranje i sigurna rutina tokom dana.",
  },
];

const activities = [
  { icon: "blocks", title: "Projektno učenje", text: "Deca istražuju temu kroz pitanja, igru i stvarne situacije." },
  { icon: "leaf", title: "Ekološke radionice", text: "Sadnja, posmatranje prirode i briga o prostoru oko nas." },
  { icon: "pencil", title: "Kreativno stvaranje", text: "Likovne, muzičke i pokretne aktivnosti u redovnom programu." },
  { icon: "sun", title: "Sport i boravak napolju", text: "Školica sporta, dvorište i svakodnevna igra u zelenilu." },
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
      <header id="pocetna" className="hero-header">
        <img className="hero-header__bg" src={asset("/images/visnjicaheader_background.png")} alt="" />
        <div className="hero-logo-wrap">
          <img src={asset("/images/logo_vila_visnjica_3.png")} alt="Vila Višnjica" />
        </div>
        <nav className="floating-nav" aria-label="Glavna navigacija">
          <a href="#pocetna">Početna</a>
          <a href="#koncept">Koncept</a>
          <a href="#program">Program</a>
          <a href="#prostor">Prostor</a>
          <a href="#adaptacija">Adaptacija</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section id="koncept" className="section afterHero">
        <div className="afterHero__intro">
          <p className="script-label">Welcome to</p>
          <h1 className="no-break-title">Vila Višnjica</h1>
          <p className="hero__lead">
            Ekološki vrtić u Višnjičkoj Banji u kome dete raste kroz prirodu,
            igru, istraživanje i siguran odnos sa odraslima.
          </p>
          <div className="hero-points" aria-label="Tri vrednosti vrtića">
            {heroPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <div className="hero__actions">
            <a className="button button--primary" href="#kontakt">Upis i obilazak</a>
            <a className="button button--light" href="#program">Naš program</a>
          </div>
        </div>
        <div className="afterHero__photo frame frame--tilt-left">
          <img src={asset("/images/afterhero-child.jpg")} alt="Dete u toplom prostoru vrtića gleda u kameru" />
        </div>
        <div className="afterHero__heading">
          <p className="script-label">What makes us different</p>
          <h2>Priroda nije dodatak programu. Ona je deo svakog dana.</h2>
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
          <p className="script-label">News from the centre</p>
          <h2>Učimo kroz iskustvo koje dete može da dodirne.</h2>
          <p>
            Svakodnevno povezivanje sa prirodom, ekološke radionice, kretanje,
            zdrave navike i individualni pristup grade samostalno, radoznalo i
            kreativno dete.
          </p>
          <div className="mini-list">
            <span><Icon type="leaf" /> Svakodnevni boravak napolju</span>
            <span><Icon type="heart" /> Individualna pažnja</span>
            <span><Icon type="chat" /> Otvorena komunikacija sa roditeljima</span>
          </div>
        </div>
      </section>

      <section id="program" className="section programs">
        <div className="section-heading section-heading--center">
          <p className="script-label">Our programs</p>
          <h2>Aktivnosti koje prate prirodan ritam deteta.</h2>
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

      <section id="prostor" className="section classroom">
        <div className="classroom__content">
          <p className="script-label">Our happy rooms</p>
          <h2>Topao, svetao prostor sa prirodnim materijalima.</h2>
          <p>
            Prostor je osmišljen da bude bezbedan, miran i inspirativan: drvo,
            biljke, zeleno dvorište, mesta za igru, odmor, istraživanje i stvaranje.
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
          <p className="script-label">Enrolment</p>
          <h2>Prvi dani se grade polako, zajedno sa porodicom.</h2>
        </div>
        <div className="enrolment__body">
          <p>
            Adaptacija je postepena i individualno prilagođena svakom detetu.
            Roditelji dobijaju dnevne informacije kroz aplikaciju, Viber grupu,
            fotografije i redovne razgovore sa vaspitačima.
          </p>
          <a className="button button--primary" href="#kontakt">Razgovarajte sa nama</a>
        </div>
      </section>

      <section className="section testimonials">
        <div className="testimonial-card">
          <p className="script-label">Parents say</p>
          <blockquote>
            “Želimo da roditelji odmah osete poverenje, pristupačnost,
            otvorenost i sigurnost.”
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
          <p className="script-label">Get in touch</p>
          <h2>Zakažite obilazak Vile Višnjice.</h2>
          <p>
            Upite primamo putem telefona, Vibera, WhatsApp-a, Instagrama,
            e-maila i formulara. Najbolji prvi korak je lični obilazak prostora
            i upoznavanje tima.
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
        <div>
          <strong>Vila Višnjica</strong>
          <span>Predškolska ustanova u Višnjičkoj Banji</span>
        </div>
        <a href="#pocetna">Nazad na vrh</a>
      </footer>
    </main>
  );
}
