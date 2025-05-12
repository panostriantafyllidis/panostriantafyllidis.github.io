document.addEventListener("DOMContentLoaded", () => {
  const selectedFlag = document.getElementById("selected-flag");
  const dropdown = document.getElementById("language-dropdown");

  const selectedFlagNavbar = document.getElementById("selected-flag-navbar");
  const dropdownNavbar = document.getElementById("language-dropdown-navbar");

  // Toggle dropdown on click
  selectedFlag.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });

  if (selectedFlagNavbar && dropdownNavbar) {
    selectedFlagNavbar.addEventListener("click", () => {
      dropdownNavbar.classList.toggle("show");
    });
  }

  // Handle language selection for the main panel
  dropdown.addEventListener("click", (event) => {
    const lang = event.target.closest("li")?.dataset.lang;
    if (lang) {
      selectedFlag.src =
        lang === "gr"
          ? "images/layout/flags/gr.png"
          : "images/layout/flags/uk.png";
      setLanguage(lang);
      dropdown.classList.remove("show");
    }
  });

  // Handle language selection for the navbar
  if (dropdownNavbar) {
    dropdownNavbar.addEventListener("click", (event) => {
      const lang = event.target.closest("li")?.dataset.lang;
      if (lang) {
        selectedFlagNavbar.src =
          lang === "gr"
            ? "images/layout/flags/gr.png"
            : "images/layout/flags/uk.png";
        setLanguage(lang);
        dropdownNavbar.classList.remove("show");
      }
    });
  }

  // Close dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest("#selected-flag")) {
      dropdown.classList.remove("show");
    }
    if (!event.target.closest("#selected-flag-navbar")) {
      dropdownNavbar?.classList.remove("show");
    }
  });

  // Responsive behavior
  const updateVisibility = () => {
    const isMobileView = window.innerWidth <= 768;
    if (dropdownNavbar) {
      dropdownNavbar.style.display = isMobileView ? "none" : "block";
    }
  };

  window.addEventListener("resize", updateVisibility);
  updateVisibility();
});

function setLanguage(lang) {
  const translations = {
    en: {
      randevou: "Appointments and Communication",
      map: "Map",
      navbar1: "HOME",
      navbar2: "SERVICES",
      navbar3: "INFORMATION",
      navbar4: "ABOUT US",
      navbar5: "PARTNERS",
      navbar6: "OUR PROJECTS",
      navbar7: "CONTACT",
      navbar8: "OUR STORE",
      navbar9: "LOCATION",
      maintitle1: "Quality & Experience",
      maintext1:
        "Our specialized team has years of experience in the field of windows, frames, and mechanisms. We work with precision and care to ensure excellent results in every project.",
      maintitle2: "Tailored Solutions",
      maintext2:
        "We recognize the unique needs of each client. We offer customized services that adapt to your requirements, regardless of project scale.",
      maintitle3: "Affordable Prices",
      maintext3:
        "We emphasize fair pricing. We provide high-quality solutions at competitive prices without sacrificing reliability and durability.",
      services: "Our Services",
      windowrepair: "📌 PVC Frame Installation",
      windowrepairtext:
        "🛠 Durability, insulation, design—all in one! The PVC frames we install protect your home from weather and noise while reducing energy bills. Choose superior quality with the experience of Synco Athens Experts!",
      windowinstallation: "📌 Mosquito Screen Installation & Repair",
      windowinstallationtext:
        "🦟 Say goodbye to mosquitoes and hello to fresh air! Your screens should work perfectly, not just exist. From installation to repair, we ensure durability, smooth operation, and impeccable aesthetics.",
      shutterinstallation:
        "📌 Roller Shutter Installation, Repair & Modification",
      shutterinstallationtext:
        "🔒 Reliability that goes down... and up! Shutters protect, insulate, and add style. We replace, repair, and upgrade every type of roller shutter to work flawlessly and withstand time.",
      replacementwindow: "📌 Shutter Installation & Repair",
      replacementwindowtext:
        "🏡 Traditional beauty with modern durability! From wood to aluminum, your shutters should be functional and stylish. With Synco Athens Experts, you get perfect fitting, top quality, and precise adaptation to your needs.",
      glazing: "📌 Window Mechanism Maintenance & Repairs",
      glazingtext:
        "⚙️ Open and close… without surprises! Window mechanisms must operate quietly and effortlessly. We handle adjustment, repair, and replacement for all types of mechanisms, extending the life of your windows.",
      biofolding: "📌 Security Bars",
      biofoldingtext:
        "🔐 Security is not an option. It's a necessity! The security bars we install combine reliability, aesthetics, and durability. Fortify your space without sacrificing design!",
      backbtn: "👉 Learn about our most popular products!",
      demo1: "High-Quality Services at Competitive Prices",
      demo2:
        "We handle measurement, installation, and repair of your windows with absolute precision and professionalism. Contact us today!",
      democontact: "Contact Us",

      aboutustitle: "About Us",
      aboutusttext:
        "If the word 'craftsman' reminds you of delays, endless excuses, and half-finished projects, then it's time to rethink! 👷‍♂️✨",
      body: "At Synco Athens Experts, we are not just another technical crew. We are the window experts distinguished by quality, precision, and professional approach. We don't offer excuses—we offer solutions. And we do it quickly, effectively, and with unwavering accuracy.",

      reasontitle: "🛠 Why Choose Us?",
      expla1:
        "✅ 40+ Years of Experience: We have faced every challenge and know how to solve it. 💪",
      expla2:
        "✅ Durability & Aesthetics: We perfectly balance functionality and design, so your frames are not only durable but also attractive.",
      expla3:
        "✅ Quality Without Compromise: We use only materials that withstand time and the most demanding conditions.",
      expla4:
        "✅ Professionalism Without Surprises: No delays, no sloppiness—only reliability and accuracy at every step.",
      expla5:
        "✅ Expertise & Consistency: Our knowledge and experience ensure the job is done right, stress-free for you.",
      closetext:
        "If you're looking for window services that protect you from noise, weather, and bad technician experiences, you're in the right place.",
      cta: "At Synco Athens Experts, we don't need big words. Our work speaks for itself. Contact us today and let us show you how it's done.",

      trust: "Our Trusted Partners",

      ourprojects: "Our Projects",

      prod1: "Frames",
      prod2: "Screens / Roller Shutters",
      prod3: "Mechanisms",
      prod4: "Shutters",

      call: "Contact",
      callus: "Get in Touch",
      ifcall:
        "If our website did not meet your information needs about our activity and products, do not hesitate to contact us through the options below.",

      fname: "Full Name",
      telephona: "Phone",
      etaxy: "Email Address",
      select: "Select the type of window your home has",
      type: "Window Type",
      wood: "Wooden Windows",
      alu: "Aluminum/Iron",
      plastic: "PVC",
      na: "Other",
      servicesel: "Select the Service You Need",
      servselection: "Service Type",
      o1p: "Screens/Roller Shutters",
      o2p: "Service/Mechanisms",
      o3p: "New Frame Installation",
      o4p: "Other",
      comments: "Text",
      reqsect: "Mandatory Fields",
      conditions: "I accept the Terms of Use",
      send: "Send",

      shop: "Our Store",

      servicesmini1: "PVC Frame Installation",
      servicesmini2: "Mosquito Screen Installation & Repair",
      servicesmini3: "Roller Shutter Installation, Repair & Modification",
      servicesmini4: "Shutter Installation & Repair",
      servicesmini5: "Window Mechanism Maintenance & Repairs",
      servicesmini6: "Security Bars",

      contactinfomini1: "Contact Information",
      contactphonemini2: "Contact Phone",
      workhourslinebottom1: "Monday-Friday: 11 AM - 4 PM",
      workhourslinebottom2: "Saturday-Sunday: Closed",

      partners: "WE COLLABORATE WITH",
      projects: "Our Projects",
      ourlocation: "Our Location on the Map",
      locationbutton: "Click Here for Directions",
      ourinfotitle: "Contact Details",
      ourphone: "Our Phone Number",
      ouraddress1: "Our Address:",
      ouraddress2: "64 Constantinopoleos Street, Vyronas, 16232, ",
      ouraddress3: "Athens",
      ouremail: "Our Email:",
      formtext: "Have questions? Talk to us!",
      contactname: "Name:",
      contactemail: "Your Email",
      contactmessage: "Message",
      submitmessage: "SEND MESSAGE",
      servicesmini: "SERVICES",
      servicesmini1: "Window & Door Measurements",
      servicesmini2: "Window Installation Services",
      servicesmin3: "Window Replacement Services",
      servicesmin4: "Installation Services",
      servicesmin5: "Window Maintenance",
      servicesmin6: "Window Repair Services",
      contactinfomini: "Contact Information",
      contactphonemini: "Contact Phone:",
      addresslinebottom1: "64 Konstantinoupoleos Street, Vyronas, 16232,",
      addresslinebottom2: "Athens, Greece",
    },
    gr: {
      randevou: "Ραντεβού & Επικοινωνία",
      map: "Χάρτης",
      navbar1: "ΑΡΧΙΚΗ",
      navbar2: "ΥΠΗΡΕΣΙΕΣ",
      navbar3: "ΠΛΗΡΟΦΟΡΙΕΣ",
      navbar4: "ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ",
      navbar5: "ΣΥΝΕΡΓΑΤΕΣ",
      navbar6: "ΤΑ ΕΡΓΑ ΜΑΣ",
      navbar7: "ΕΠΙΚΟΙΝΩΝΙΑ",
      navbar8: "ΤΟ ΚΑΤΑΣΤΗΜΑ ΜΑΣ",
      navbar9: "ΤΟΠΟΘΕΣΙΑ",
      maintitle1: "Ποιότητα & Εμπειρία",
      maintext1:
        "Η εξειδικευμένη ομάδα μας διαθέτει πολυετή εμπειρία στον τομέα των παραθύρων, κουφωμάτων και μηχανισμών. Εργαζόμαστε με ακρίβεια και φροντίδα για να εξασφαλίσουμε άριστα αποτελέσματα σε κάθε έργο.",
      maintitle2: "Εξατομικευμένες Λύσεις",
      maintext2:
        "Αναγνωρίζουμε τις μοναδικές ανάγκες κάθε πελάτη. Προσφέρουμε εξατομικευμένες υπηρεσίες που προσαρμόζονται στις απαιτήσεις σας, ανεξάρτητα από την κλίμακα του έργου.",
      maintitle3: "Προσιτές Τιμές",
      maintext3:
        "Δίνουμε έμφαση στη δίκαιη τιμολόγηση. Παρέχουμε λύσεις υψηλής ποιότητας σε ανταγωνιστικές τιμές, χωρίς να θυσιάζουμε την αξιοπιστία και την αντοχή.",
      services: "Οι υπηρεσίες μας",
      windowrepair: "📌 Εγκατάσταση Κουφωμάτων PVC",
      windowrepairtext:
        "🛠 Ανθεκτικότητα, μόνωση, design. Όλα σε ένα! Τα κουφώματα PVC που εγκαθιστούμε προστατεύουν το σπίτι σας από καιρικές συνθήκες και θόρυβο, ενώ μειώνουν τους λογαριασμούς ενέργειας. Επιλέξτε την ανώτερη ποιότητα με την εμπειρία της Synco Athens Experts!",
      windowinstallation: "📌 Εγκατάσταση & Επιδιόρθωση Σίτων",
      windowinstallationtext:
        "🦟 Πείτε αντίο στα κουνούπια και γεια στον καθαρό αέρα! Οι σίτες σας πρέπει να δουλεύουν τέλεια και όχι απλώς να υπάρχουν. Από εγκατάσταση έως επισκευή, εξασφαλίζουμε αντοχή, ομαλή λειτουργία και άψογη αισθητική.",
      shutterinstallation: "📌 Εγκατάσταση, Επιδιόρθωση & Τροποποίηση Ρολών",
      shutterinstallationtext:
        "🔒 Αξιοπιστία που κατεβαίνει… και ανεβαίνει! Τα ρολά προστατεύουν, μονώνουν και δίνουν στυλ. Αντικαθιστούμε, επισκευάζουμε και βελτιώνουμε κάθε τύπο ρολού, ώστε να λειτουργεί άψογα και να αντέχει στον χρόνο.",
      replacementwindow: "📌 Εγκατάσταση & Επιδιόρθωση Παντζουριών",
      replacementwindowtext:
        "🏡 Παραδοσιακή ομορφιά με σύγχρονη αντοχή! Από ξύλινα έως αλουμινίου, τα παντζούρια σας πρέπει να είναι λειτουργικά και κομψά. Με τη Synco Athens Experts, έχετε τέλεια εφαρμογή, κορυφαία ποιότητα και ακριβή προσαρμογή στις ανάγκες σας.",
      glazing: "📌 Συντήρηση & Επιδιορθώσεις Μηχανισμών Παραθύρων",
      glazingtext:
        "⚙️ Ανοίξτε και κλείστε… χωρίς εκπλήξεις! Οι μηχανισμοί των κουφωμάτων πρέπει να λειτουργούν αθόρυβα και αβίαστα. Αναλαμβάνουμε ρύθμιση, επισκευή και αντικατάσταση σε όλους τους τύπους μηχανισμών, παρατείνοντας τη διάρκεια ζωής των παραθύρων σας.",
      biofolding: "📌 Κάγκελα Ασφαλείας",
      biofoldingtext:
        "🔐 Η ασφάλεια δεν είναι επιλογή. Είναι ανάγκη! Τα κάγκελα ασφαλείας που τοποθετούμε συνδυάζουν αξιοπιστία, αισθητική και αντοχή. Θωρακίστε τον χώρο σας χωρίς να θυσιάσετε το design!",
      backbtn: "👉 Ενημερωθείτε για τα πιο δημοφιλή προϊόντα μας!",
      demo1: "Υπηρεσίες Υψηλής Ποιότητας σε Ανταγωνιστικές Τιμές",
      demo2:
        "Αναλαμβάνουμε τη μέτρηση, την εγκατάσταση και την επισκευή των παραθύρων σας με απόλυτη ακρίβεια και επαγγελματισμό. Επικοινωνήστε μαζί μας σήμερα!",
      democontact: "Επικοινωνηστε μαζι μας",

      aboutustitle: "Σχετικά με εμάς",
      aboutusttext:
        "Αν η λέξη “μάστορας” σας θυμίζει καθυστερήσεις, απανωτές δικαιολογίες και ημιτελή έργα, τότε είναι ώρα να αναθεωρήσετε! 👷‍♂️✨",
      body: "Στη Synco Athens Experts, δεν είμαστε απλώς ένα ακόμη τεχνικό συνεργείο. Είμαστε οι ειδικοί στα κουφώματα που ξεχωρίζουν για την ποιότητα, την ακρίβεια και την επαγγελματική τους προσέγγιση. Δεν προσφέρουμε δικαιολογίες – προσφέρουμε λύσεις. Και το κάνουμε γρήγορα, αποτελεσματικά και με αμετάβλητη ακρίβεια.",

      reasontitle: "🛠 Γιατί να επιλέξετε εμάς;",
      expla1:
        "✅ 40+ χρόνια εμπειρίας: Έχουμε αντιμετωπίσει κάθε πρόκληση και γνωρίζουμε πώς να την λύσουμε. 💪",
      expla2:
        "✅ Αντοχή & Αισθητική: Ισορροπούμε τέλεια μεταξύ λειτουργικότητας και σχεδιασμού, ώστε τα κουφώματά σας να είναι όχι μόνο ανθεκτικά, αλλά και ελκυστικά.",
      expla3:
        "✅ Ποιότητα χωρίς συμβιβασμούς: Χρησιμοποιούμε μόνο υλικά που αντέχουν στον χρόνο και στις πιο απαιτητικές συνθήκες.",
      expla4:
        "✅ Επαγγελματισμός χωρίς εκπλήξεις: Χωρίς χρονοτριβές, χωρίς προχειρότητες – μόνο αξιοπιστία και ακρίβεια σε κάθε βήμα.",
      expla5:
        "✅ Τεχνογνωσία & Συνέπεια: Η γνώση και η εμπειρία μας εξασφαλίζουν ότι η δουλειά θα γίνει σωστά, χωρίς άγχος για εσάς.",
      closetext:
        "Αν ψάχνετε υπηρεσίες για τα κουφώματά σας που σας προστατεύουν από τον θόρυβο, τις καιρικές συνθήκες και τις κακές εμπειρίες με τεχνικούς, τότε είστε στο σωστό μέρος.",
      cta: "Στη Synco Athens Experts, δεν χρειαζόμαστε μεγάλα λόγια. Η δουλειά μας μιλάει για εμάς. Επικοινωνήστε μαζί μας σήμερα και αφήστε μας να σας δείξουμε πώς γίνεται η διαφορά.",

      trust: "Οι εμπιστοι συνεργατες μας",

      ourprojects: "Τα εργα μας",

      prod1: "Κουφώματα",
      prod2: "Σίτες / Ρολά",
      prod3: "Μηχανισμοί",
      prod4: "Παντζούρια",

      call: "Επικοινωνια",
      callus: "Επικοινωνήστε μαζί μας",
      ifcall:
        "Εάν ο ιστότοπός μας δεν ικανοποίησε την ανάγκη σας για ενημέρωση πάνω στη δραστηριότητα και τα προϊόντα μας, μη διστάσετε να επικοινωνήσετε μαζί μας με τους παρακάτω τρόπους.",

      fname: "Ονοματεπώνυμο",
      telephona: "Τηλέφωνο",
      etaxy: "Διεύθυνση email",
      select: "Επιλέξτε τον τύπο κουφώματος που διαθέτει η οικία σας",
      type: "Τύπος Κουφώματος",
      wood: "Ξύλινα παράθυρα",
      alu: "Αλουμίνιο/Σιδερένιο",
      plastic: "PVC",
      na: "Άλλο",
      servicesel: "Επιλέξτε την υπηρεσία που χρειάζεστε",
      servselection: "Τύπος Υπηρεσίας",
      o1p: "Σίτες/Ρολά",
      o2p: "Σέρβις/Μηναχισμοί",
      o3p: "Νέα εγκατάσταση κουφώματος",
      o4p: "Άλλο",
      comments: "Κείμενο",
      reqsect: "Υποχρεωτικά Πεδία",
      conditions: "Αποδέχομαι τους όρους χρήσης",
      send: "Αποστολη",

      shop: "Το καταστημα μας",

      servicesmini1: "Εγκατάσταση Κουφωμάτων PVC",
      servicesmini2: "Εγκατάσταση & Επιδιόρθωση Σίτων",
      servicesmini3: "Εγκατάσταση, Επιδιόρθωση & Τροποποίηση Ρολών",
      servicesmini4: "Εγκατάσταση & Επιδιόρθωση Παντζουριών",
      servicesmini5: "Συντήρηση & Επιδιορθώσεις Μηχανισμών Παραθύρων",
      servicesmini6: "Κάγκελα Ασφαλείας",

      contactinfomini1: "Στοιχεια επικοινωνίας",
      contactphonemini2: "Τηλέφωνο επικοινωνας",
      workhourslinebottom1: "Δευτέρα-Παρασκευή: 11 ΠΜ - 4 ΜΜ",
      workhourslinebottom2: "Σάββατο-Κυριακή: Κλειστά",

      partners: "ΣΥΝΕΡΓΑΖΟΜΑΣΤΕ ΜΕ",
      projects: "Τα εργα μας",
      ourlocation: "Η τοποθεσία μας στον χάρτη",
      locationbutton: "Πατηστε εδω για οδηγιες κατευθηνσης",
      ourinfotitle: "Στοιχεία επικοινωνίας",
      ourphone: "Το τηλέφωνό μας",
      ouraddress1: "Η διεύθυνσή μας:",
      ouraddress2: "Κωνσταντινουπόλεως 64, Βύρωνας, 16232, ",
      ouraddress3: "Αθήνα",
      ouremail: "Το E-mail μας: ",
      formtext: "Εχετε απορίες ; Μιλήστε μαζί μας !",
      contactname: "Ονομ/νυμο:",
      contactemail: "Το E-mail σας",
      contactmessage: "Μήνυμα",
      submitmessage: "ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ",
      servicesmini: "ΥΠΗΡΕΣΙΕΣ",
      servicesmini1: "Μετρήσεις Παραθύρων",
      servicesmini2: "Υπηρεσίες Εγκατάστασης Παραθύρων",
      servicesmin3: "Υπηρεσίες Αντικατάστασης Παραθύρων",
      servicesmin4: "Υπηρεσίες Εγκατάστασης",
      servicesmin5: "Συντήρηση Παραθύρων",
      servicesmin6: "Υπηρεσίες Επισκευής Παραθύρων",
      contactinfomini: "Στοιχεια επικοινωνιας",
      contactphonemini2: "Τηλέφωνο επικοινωνίας:",
      addresslinebottom1: "Κωνσταντινουπόλεως 64, Βύρωνας, 16232,",
      addresslinebottom2: "Αθήνα",
    },
  };

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
