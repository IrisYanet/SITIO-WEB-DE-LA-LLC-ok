(function(){
'use strict';
const T={
en:{
'nav.about':'About Us','nav.svc':'Services','nav.doc':'Documents','nav.contact':'Contact','nav.cta':'Free Consultation',
'nav.proadvisor':'View My Intuit ProAdvisor Profile',
'hero.badge':'Bilingual Business Services — Holland, MI',
'hero.title':'Your Trusted <em>Bilingual</em> Business Partner',
'hero.slogan':'Your bilingual partner for precise bookkeeping, compliance, and growth in a diverse marketplace.',
'hero.virtual.note':'Fully virtual services available nationwide with fast remote support.',
'hero.cta1':'Free Consultation','hero.cta2':'Our Services',
'hero.s1n':'5+','hero.s1l':'Service Areas','hero.s2n':'EN/ES','hero.s2l':'Bilingual Support','hero.s3n':'MI','hero.s3l':'Registered in Michigan',
'hero.scroll':'Scroll',
'ab.lbl':'Who We Are','ab.title':'The Bridge Between Two Communities',
'ab.p1':'We understand the unique challenges that business owners face when navigating systems, regulations, and paperwork in a second language. Our team provides expert administrative support in both English and Spanish — so no opportunity is lost in translation.',
'ab.p2':'From entity formation to bookkeeping, government compliance to digital presence, we handle the complexity so you can focus on what you do best: growing your business.',
'mis.lbl':'Mission','mis.txt':'To empower Latino and American entrepreneurs in Michigan\'s diverse marketplace by delivering precise, accessible, and bilingual administrative and financial services — removing barriers and building bridges to sustainable success.',
'vis.lbl':'Vision','vis.txt':'To become the most trusted bilingual business services partner in West Michigan, recognized for our commitment to excellence, cultural sensitivity, and the economic empowerment of diverse communities.',
'svc.lbl':'What We Offer','svc.title':'Comprehensive Business Services','svc.sub':'Five specialized areas designed to support every stage of your business journey — from formation to growth.',
'svc.alert':'Click each service header to view the services in that category.',
'c1.title':'Corporate & Compliance','c1.sub':'Entity Setup & Legal Filings',
'c2.title':'Financial & Bookkeeping','c2.sub':'Bookkeeping & Cost Control',
'c3.title':'Gov Systems & Admin','c3.sub':'State & Federal Systems',
'c4.title':'Strategy & Coaching','c4.sub':'Planning & Business Guidance',
'c5.title':'Digital & Content','c5.sub':'Web & Content Support',
's1.1.t':'LARA Michigan','s1.1.n':'LARA Michigan Entity Formation','s1.1.d':'Full setup including Articles of Organization and Operating Agreement templates.',
's1.2.t':'IRS','s1.2.n':'EIN Procurement (IRS)','s1.2.d':'Fast acquisition of your Federal Tax ID.',
's1.3.t':'FinCEN','s1.3.n':'BOI Reporting (FinCEN)','s1.3.d':'Initial Beneficial Ownership Information filing for federal compliance.',
's1.4.t':'Michigan Treasury','s1.4.n':'MTO Registration','s1.4.d':'State business tax setup with the Michigan Treasury.',
's1.5.t':'Compliance','s1.5.n':'Entity Reinstatement','s1.5.d':'Professional management to restore your business "Good Standing" status.',
's2.1.t':'Monthly','s2.1.n':'Monthly Bookkeeping Starter','s2.1.d':'Monthly record-keeping and bank reconciliations (up to 50 transactions).',
's2.2.t':'Catch-up','s2.2.n':'Accounting Clean-up','s2.2.d':'Historical record correction and financial catch-up services.',
's2.3.t':'QuickBooks','s2.3.n':'QuickBooks / Accounting Setup','s2.3.d':'Software configuration and basic workflow training.',
's2.4.t':'Cost Analysis','s2.4.n':'Custom Unit Cost Sheets','s2.4.d':'Detailed cost templates and product breakdown analysis.',
's3.1.t':'Annual','s3.1.n':'Virtual Registered Agent (Holland, MI)','s3.1.d':'Annual legal mail scanning and 24h business forwarding.',
's3.2.t':'State Vendor','s3.2.n':'SIGMA VSS & PMBC Setup','s3.2.d':'Official registration as a Michigan Government Vendor.',
's3.3.t':'Federal','s3.3.n':'EFTPS Setup & Training','s3.3.d':'Configuration of the federal tax payment system.',
's4.1.t':'Assessment','s4.1.n':'Business Health Diagnose','s4.1.d':'Comprehensive assessment of your current business state.',
's4.2.t':'Roadmap','s4.2.n':'Strategic Action Plan','s4.2.d':'Custom roadmaps designed for sustainable growth.',
's4.3.t':'Analysis','s4.3.n':'Economic Feasibility Study','s4.3.d':'Detailed market and financial viability reports.',
's4.4.t':'Coaching','s4.4.n':'Virtual Coaching & Bilingual VA','s4.4.d':'Hourly professional support and bilingual administrative assistance.',
's5.1.t':'Web','s5.1.n':'Web Designer Starter','s5.1.d':'Professional static website setup for small businesses.',
's5.2.t':'Social Media','s5.2.n':'Social Media Maintenance','s5.2.d':'Monthly management of your digital presence.',
's5.3.t':'EN/ES','s5.3.n':'Simple Translations','s5.3.d':'Non-certified administrative and web copy translations (EN/ES).',
'price.txt':'<strong>Pricing Note:</strong> Prices shown in the Official Price List are estimates. A formal Quote/Estimate will be provided after assessing the specific scope of your project. All rates are subject to the terms of the Master Service Agreement.',
'doc.lbl':'Resources','doc.title':'Document Center','doc.sub':'Download our official documents to understand our terms, pricing, and service addendums.',
'doc.msa.t':'Master Service Agreement','doc.msa.d':'Our complete terms of service, governing all professional relationships with clients.',
'doc.add.t':'Service Addendum','doc.add.d':'Supplemental service terms and specific scope additions to the base agreement.',
'doc.pri.t':'Official Price List','doc.pri.d':'Estimated pricing for all services. Subject to formal Quote/Estimate after scope review.',
'doc.dl':'Download PDF',
'ct.lbl':'Get In Touch','ct.title':'Let\'s Build Something Together','ct.sub':'Ready to take the next step? We\'re here to guide you through every process — in English or in Spanish.',
'apt.lbl':'Appointments','apt.title':'Schedule Your Appointment','apt.sub':'Select your preferred date and time in the calendar below. All required questions are visible in the full form.',
'ct.loc.l':'Location','ct.loc.v':'Holland, Michigan, USA',
'ct.ph.l':'Phone / WhatsApp','ct.ph.v':'+1 (616) 251-7351',
'ct.em.l':'Email','ct.em.v':'<a href="mailto:iytalavera@godbooksolutions.com">iytalavera@godbooksolutions.com</a><br><a href="mailto:infoadmin@godbooksolutions.com">infoadmin@godbooksolutions.com</a>',
'ct.hr.l':'Business Hours','ct.hr.v':'Mon–Fri: 9:00 AM – 5:00 PM ET',
'cta.title':'Ready for Your Free Consultation?','cta.text':'Connect with us directly on WhatsApp for a fast, bilingual response. No commitment — just answers to your questions.','cta.wa':'Start on WhatsApp',
'ft.tag':'Bilingual business services for the Latino and American communities in Michigan.',
'ft.links':'Quick Links','ft.svc':'Services','ft.legal':'Legal / Disclaimer',
'ft.dis.en':'Professional Disclaimer: Provider is not an Attorney, a CPA, or a licensed Tax Preparer (No PTIN). Fees cover administrative labor only.',
'ft.dis.es':'Descargo profesional: El proveedor no es Abogado, CPA ni preparador de impuestos licenciado (No posee PTIN). Los cargos cubren solo labor administrativa.',
'ft.copy':'© 2025 GodBooks Solutions Services LLC. All rights reserved. Holland, MI.'
},
es:{
'nav.about':'Quiénes Somos','nav.svc':'Servicios','nav.doc':'Documentos','nav.contact':'Contacto','nav.cta':'Consulta Gratuita',
'nav.proadvisor':'Ver mi perfil de Intuit ProAdvisor',
'hero.badge':'Servicios Empresariales Bilingües — Holland, MI',
'hero.title':'Tu Socio Empresarial <em>Bilingüe</em> de Confianza',
'hero.slogan':'Tu socio bilingüe para una contabilidad precisa, cumplimiento normativo y crecimiento en un mercado diverso.',
'hero.virtual.note':'Servicios 100% virtuales disponibles en todo el pais con soporte remoto rapido.',
'hero.cta1':'Consulta Gratuita','hero.cta2':'Nuestros Servicios',
'hero.s1n':'5+','hero.s1l':'Áreas de Servicio','hero.s2n':'EN/ES','hero.s2l':'Soporte Bilingüe','hero.s3n':'MI','hero.s3l':'Registrado en Michigan',
'hero.scroll':'Bajar',
'ab.lbl':'Quiénes Somos','ab.title':'El Puente Entre Dos Comunidades',
'ab.p1':'Entendemos los desafíos únicos que enfrentan los empresarios al navegar sistemas, regulaciones y trámites en un segundo idioma. Nuestro equipo brinda soporte administrativo experto en inglés y español — para que ninguna oportunidad se pierda en la traducción.',
'ab.p2':'Desde la formación de entidades hasta la contabilidad, el cumplimiento gubernamental hasta la presencia digital, manejamos la complejidad para que puedas enfocarte en lo que mejor sabes hacer: hacer crecer tu negocio.',
'mis.lbl':'Misión','mis.txt':'Empoderar a los emprendedores latinos y americanos en el diverso mercado de Michigan, ofreciendo servicios administrativos y financieros precisos, accesibles y bilingües — eliminando barreras y construyendo puentes hacia el éxito sostenible.',
'vis.lbl':'Visión','vis.txt':'Convertirnos en el socio de servicios empresariales bilingüe más confiable del oeste de Michigan, reconocidos por nuestro compromiso con la excelencia, la sensibilidad cultural y el empoderamiento económico de las comunidades diversas.',
'svc.lbl':'Lo Que Ofrecemos','svc.title':'Servicios Empresariales Integrales','svc.sub':'Cinco áreas especializadas diseñadas para apoyar cada etapa de tu trayectoria empresarial — desde la formación hasta el crecimiento.',
'svc.alert':'Haz clic en cada encabezado de servicio para ver los servicios de esa categoria.',
'c1.title':'Corporativo y Cumplimiento','c1.sub':'Corporate & Compliance',
'c2.title':'Servicios Contables','c2.sub':'Financial & Bookkeeping',
'c3.title':'Sistemas Gubernamentales','c3.sub':'Gov Systems & Admin',
'c4.title':'Estrategia y Asesoría','c4.sub':'Strategy & Coaching',
'c5.title':'Digital y Contenido','c5.sub':'Digital & Content',
's1.1.t':'LARA Michigan','s1.1.n':'Formación de Entidad LARA Michigan','s1.1.d':'Configuración completa incluyendo Artículos de Organización y plantillas del Acuerdo Operativo.',
's1.2.t':'IRS','s1.2.n':'Obtención de EIN (IRS)','s1.2.d':'Adquisición rápida de tu Número de Identificación Fiscal Federal.',
's1.3.t':'FinCEN','s1.3.n':'Reporte BOI (FinCEN)','s1.3.d':'Presentación inicial de Información de Beneficiarios Reales para el cumplimiento federal.',
's1.4.t':'Michigan Treasury','s1.4.n':'Registro MTO','s1.4.d':'Configuración de impuestos empresariales estatales con el Tesoro de Michigan.',
's1.5.t':'Cumplimiento','s1.5.n':'Reinstalación de Entidad','s1.5.d':'Gestión profesional para restaurar el estatus de "Buena Reputación" de tu empresa.',
's2.1.t':'Mensual','s2.1.n':'Contabilidad Mensual Básica','s2.1.d':'Registro mensual y conciliaciones bancarias (hasta 50 transacciones).',
's2.2.t':'Corrección','s2.2.n':'Limpieza Contable','s2.2.d':'Corrección de registros históricos y servicios de actualización financiera.',
's2.3.t':'QuickBooks','s2.3.n':'Configuración QuickBooks / Contabilidad','s2.3.d':'Configuración de software y capacitación básica de flujo de trabajo.',
's2.4.t':'Análisis de Costos','s2.4.n':'Hojas de Costo Unitario Personalizadas','s2.4.d':'Plantillas detalladas de costos y análisis de desglose de productos.',
's3.1.t':'Anual','s3.1.n':'Agente Registrado Virtual (Holland, MI)','s3.1.d':'Escaneo anual de correo legal y reenvío empresarial en 24h.',
's3.2.t':'Proveedor Estatal','s3.2.n':'Configuración SIGMA VSS & PMBC','s3.2.d':'Registro oficial como Proveedor del Gobierno de Michigan.',
's3.3.t':'Federal','s3.3.n':'Configuración y Capacitación EFTPS','s3.3.d':'Configuración del sistema federal de pago de impuestos.',
's4.1.t':'Diagnóstico','s4.1.n':'Diagnóstico de Salud Empresarial','s4.1.d':'Evaluación integral del estado actual de tu negocio.',
's4.2.t':'Hoja de Ruta','s4.2.n':'Plan de Acción Estratégico','s4.2.d':'Hojas de ruta personalizadas diseñadas para el crecimiento sostenible.',
's4.3.t':'Análisis','s4.3.n':'Estudio de Factibilidad Económica','s4.3.d':'Informes detallados de viabilidad de mercado y financiera.',
's4.4.t':'Coaching','s4.4.n':'Coaching Virtual y VA Bilingüe','s4.4.d':'Soporte profesional por hora y asistencia administrativa bilingüe.',
's5.1.t':'Web','s5.1.n':'Web Designer Básico','s5.1.d':'Configuración profesional de sitio web estático para pequeñas empresas.',
's5.2.t':'Redes Sociales','s5.2.n':'Mantenimiento de Redes Sociales','s5.2.d':'Gestión mensual de tu presencia digital.',
's5.3.t':'EN/ES','s5.3.n':'Traducciones Simples','s5.3.d':'Traducciones administrativas y de contenido web no certificadas (EN/ES).',
'price.txt':'<strong>Nota de Precios:</strong> Los precios mostrados en la Lista de Precios Oficial son estimados. Se proporcionará una Cotización/Estimado formal después de evaluar el alcance específico de tu proyecto. Todas las tarifas están sujetas a los términos del Acuerdo Maestro de Servicios.',
'doc.lbl':'Recursos','doc.title':'Centro de Documentos','doc.sub':'Descarga nuestros documentos oficiales para conocer nuestros términos, precios y adendas de servicio.',
'doc.msa.t':'Acuerdo Maestro de Servicios','doc.msa.d':'Nuestros términos de servicio completos que rigen todas las relaciones profesionales con clientes.',
'doc.add.t':'Adenda de Servicio','doc.add.d':'Términos de servicio suplementarios y adiciones de alcance específicas al acuerdo base.',
'doc.pri.t':'Lista de Precios Oficial','doc.pri.d':'Precios estimados para todos los servicios. Sujeto a Cotización/Estimado formal tras revisión de alcance.',
'doc.dl':'Descargar PDF',
'ct.lbl':'Contáctanos','ct.title':'Construyamos Algo Juntos','ct.sub':'¿Listo para dar el siguiente paso? Estamos aquí para guiarte en cada proceso — en inglés o en español.',
'apt.lbl':'Citas','apt.title':'Programa Tu Cita','apt.sub':'Selecciona la fecha y hora de tu preferencia en el calendario de abajo. Todas las preguntas obligatorias se muestran en el formulario completo.',
'ct.loc.l':'Ubicación','ct.loc.v':'Holland, Michigan, EE.UU.',
'ct.ph.l':'Teléfono / WhatsApp','ct.ph.v':'+1 (616) 251-7351',
'ct.em.l':'Correo Electrónico','ct.em.v':'<a href="mailto:iytalavera@godbooksolutions.com">iytalavera@godbooksolutions.com</a><br><a href="mailto:infoadmin@godbooksolutions.com">infoadmin@godbooksolutions.com</a>',
'ct.hr.l':'Horario de Atención','ct.hr.v':'Lun–Vie: 9:00 AM – 5:00 PM ET',
'cta.title':'¿Listo para tu Consulta Gratuita?','cta.text':'Contáctanos directamente por WhatsApp para una respuesta rápida y bilingüe. Sin compromiso — solo respuestas a tus preguntas.','cta.wa':'Escribir por WhatsApp',
'ft.tag':'Servicios empresariales bilingües para las comunidades latina y americana en Michigan.',
'ft.links':'Navegación','ft.svc':'Servicios','ft.legal':'Legal / Descargo',
'ft.dis.en':'Professional Disclaimer: Provider is not an Attorney, a CPA, or a licensed Tax Preparer (No PTIN). Fees cover administrative labor only.',
'ft.dis.es':'Descargo profesional: El proveedor no es Abogado, CPA ni preparador de impuestos licenciado (No posee PTIN). Los cargos cubren solo labor administrativa.',
'ft.copy':'© 2025 GodBooks Solutions Services LLC. Todos los derechos reservados. Holland, MI.'
}};

let currentLang='en';
function applyLang(lang){
  currentLang=lang;
  const t=T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    if(t[k]!==undefined) el.innerHTML=t[k];
  });
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  document.documentElement.lang=lang;
}

const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>60),{passive:true});

const ham=document.getElementById('ham'),mob=document.getElementById('mob'),mclose=document.getElementById('mclose');
function openM(){
  if(!mob||!ham)return;
  mob.classList.add('open');
  mob.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  ham.classList.add('open');
  ham.setAttribute('aria-expanded','true');
}
function closeM(){
  if(!mob||!ham)return;
  mob.classList.remove('open');
  mob.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  ham.classList.remove('open');
  ham.setAttribute('aria-expanded','false');
}
function toggleM(){
  if(!mob)return;
  if(mob.classList.contains('open')) closeM();
  else openM();
}
if(ham)ham.addEventListener('click',toggleM);
if(mclose)mclose.addEventListener('click',closeM);
if(mob)mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeM));
if(mob)mob.addEventListener('click',e=>{if(e.target===mob)closeM();});
window.addEventListener('keydown',e=>{if(e.key==='Escape')closeM();});
window.addEventListener('resize',()=>{if(window.innerWidth>1024)closeM();});

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

const serviceCats=[...document.querySelectorAll('.svc-cat')];
document.querySelectorAll('.service-toggle-btn').forEach(btn=>btn.addEventListener('click',()=>{
  const parent=btn.closest('.svc-cat');
  const isOpen=parent.classList.contains('active');
  serviceCats.forEach(cat=>{
    cat.classList.remove('active');
    const catBtn=cat.querySelector('.service-toggle-btn');
    if(catBtn)catBtn.setAttribute('aria-expanded','false');
  });
  if(!isOpen){
    parent.classList.add('active');
    btn.setAttribute('aria-expanded','true');
  }
}));

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',function(e){
  const t=document.querySelector(this.getAttribute('href'));
  if(t){e.preventDefault();closeM();window.scrollTo({top:t.getBoundingClientRect().top+scrollY-72,behavior:'smooth'})}
}));

document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));

/* ── MAIL CLIENT CHOOSER ── */
const _mailModal=document.getElementById('mail-chooser');
const _mailOptGmail=document.getElementById('mail-opt-gmail');
const _mailOptOutlook=document.getElementById('mail-opt-outlook');
const _mailOptYahoo=document.getElementById('mail-opt-yahoo');
const _mailOptDefault=document.getElementById('mail-opt-default');
const _mailOptDefaultLabel=document.getElementById('mail-opt-default-label');
const _mailChooserTitle=document.getElementById('mail-chooser-title');
const _mailI18n={
  en:{title:'Open email with...',def:'Default Mail App'},
  es:{title:'Abrir con tu correo...',def:'Aplicación de correo'}
};
function _openMailChooser(email){
  const t=_mailI18n[currentLang]||_mailI18n.en;
  _mailChooserTitle.textContent=t.title;
  _mailOptDefaultLabel.textContent=t.def;
  _mailOptGmail.href='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(email);
  _mailOptOutlook.href='https://outlook.live.com/mail/0/deeplink/compose?to='+encodeURIComponent(email);
  _mailOptYahoo.href='https://compose.mail.yahoo.com/?to='+encodeURIComponent(email);
  _mailOptDefault.href='mailto:'+email;
  _mailModal.classList.add('open');
  _mailModal.setAttribute('aria-hidden','false');
}
function _closeMailChooser(){
  _mailModal.classList.remove('open');
  _mailModal.setAttribute('aria-hidden','true');
}
document.getElementById('mail-chooser-close').addEventListener('click',_closeMailChooser);
document.getElementById('mail-chooser-backdrop').addEventListener('click',_closeMailChooser);
document.addEventListener('keydown',e=>{if(e.key==='Escape')_closeMailChooser();});
_mailModal.querySelectorAll('.mail-opt').forEach(opt=>opt.addEventListener('click',()=>setTimeout(_closeMailChooser,120)));
document.addEventListener('click',e=>{
  const link=e.target.closest('a[href^="mailto:"]');
  if(!link||link.closest('#mail-chooser'))return;
  e.preventDefault();
  _openMailChooser(link.href.replace('mailto:',''));
});

applyLang('en');
})();
