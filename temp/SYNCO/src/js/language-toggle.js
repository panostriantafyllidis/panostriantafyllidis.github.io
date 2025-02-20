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
      randevou: "Appointments and Contact",
      map: "Map Here",
      navbar1: "HOME",
      navbar2: "SERVICES",
      navbar3: "INFORMATION",
      navbar4: "PARTNERS",
      navbar5: "OUR WORK",
      navbar6: "CONTACT US",
      navbar7: "LOCATION",
      services: "Our Services",
      windowrepair: "WINDOW FRAME REPAIR",
      windowrepairtext:
        "If your window frame needs repair, we can fix everything quickly and efficiently.",
      windowinstallation: "WINDOW INSTALLATION AND REPAIR",
      windowinstallationtext:
        "We take care of the whole process, from measurement to installation. You just choose the window type.",
      shutterinstallation: "WINDOW SHUTTER INSTALLATION",
      shutterinstallationtext:
        "When you want to protect your room from intense sunlight, we can suggest the right solution.",
      replacementwindow: "WINDOW SHAPE REPLACEMENT",
      replacementwindowtext:
        "We offer new window shapes, as sometimes old ones need replacement or improvement.",
      glazing: "SECONDARY DOUBLE GLAZING",
      glazingtext:
        "This option offers additional protection from extreme weather conditions and helps maintain warmth during winter.",
      biofolding: "BI-FOLDING DOORS",
      biofoldingtext:
        "This type of doors saves space in the room. We use highly durable glass and high-quality support",
      demo1: "High-Quality Services at Competitive Prices",
      demo2:
        "We take care of measuring, installing and repairing your windows with absolute precision and professionalism. Contact us today!",
      democontact: "Contact Us",
      partners: "WE PARTNER WITH",
      projects: "Our Projects",
      ourlocation: "Our Location on the Map",
      locationbutton: "Click here for directions",
      ourinfotitle: "Contact Information",
      ourphone: "Our Phone",
      ouraddress1: "Our Address:",
      ouraddress2: "Konstantinoupoleos 64, Vironas, 16232, ",
      ouraddress3: "Athens",
      ouremail: "Our E-mail: ",
      formtext: "Have questions? Talk to us!",
      contactname: "Name:",
      contactemail: "Your E-mail",
      contactmessage: "Message",
      submitmessage: "SEND MESSAGE",
      servicesmini: "SERVICES",
      servicesmini1: "Window & Door Measuring",
      servicesmini2: "Window Installation",
      servicesmin3: "Window Replacement",
      servicesmin4: "Door Installation",
      servicesmin5: "Door & Window Maintenance",
      servicesmin6: "Repair Services",
      contactinfomini: "Contact Information",
      contactphonemini: "Contact Phone:",
      workhourslinebottom1: "Monday-Friday: 9 AM - 7 PM;",
      workhourslinebottom2: "Saturday-Sunday: 10 AM - 3 PM",
      addresslinebottom1: "Konstantinoupoleos 64, Vironas, 16232,",
      addresslinebottom2: "Athens",
    },
    gr: {
      randevou: "Ραντεβού και Επικοινωνία",
      map: "Χάρτης",
      navbar1: "ΑΡΧΙΚΗ",
      navbar2: "ΥΠΗΡΕΣΙΕΣ",
      navbar3: "ΠΛΗΡΟΦΟΡΙΕΣ",
      navbar4: "ΣΥΝΕΡΓΑΤΕΣ",
      navbar5: "ΤΑ ΕΡΓΑ ΜΑΣ",
      navbar6: "ΕΠΙΚΟΙΝΩΝΙΑ",
      navbar7: "ΤΟΠΟΘΕΣΙΑ",
      maintitle1: "Ποιότητα & Εμπειρία",
      maintext1:
        "Η εξειδικευμένη ομάδα μας διαθέτει πολυετή εμπειρία στον τομέα των παραθύρων, κουφωμάτων και μηχανισμών. Εργαζόμαστε με ακρίβεια και φροντίδα για να εξασφαλίσουμε άριστα αποτελέσματα σε κάθε έργο.",
      maintitle2: "Εξατομικευμένες Λύσεις",
      maintext2:
        "Αναγνωρίζουμε τις μοναδικές ανάγκες κάθε πελάτη. Προσφέρουμε εξατομικευμένες υπηρεσίες που προσαρμόζονται στις απαιτήσεις σας, ανεξάρτητα από την κλίμακα του έργου.",
      maintitle3:"Προσιτές Τιμές",
      maintext3:"Δίνουμε έμφαση στη δίκαιη τιμολόγηση. Παρέχουμε λύσεις υψηλής ποιότητας σε ανταγωνιστικές τιμές, χωρίς να θυσιάζουμε την αξιοπιστία και την αντοχή.",
      services: "Οι υπηρεσίες μας",
      windowrepair: "ΕΠΙΣΚΕΥΗ ΠΛΑΙΣΙΟΥ ΠΑΡΑΘΥΡΩΝ",
      windowrepairtext:
        "Αν το πλαίσιο του παραθύρου σας χρειάζεται επισκευή, μπορούμε να διορθώσουμε τα πάντα γρήγορα και αποτελεσματικά.",
      windowinstallation: "ΕΓΚΑΤΑΣΤΑΣΗ ΚΑΙ ΕΠΙΣΚΕΥΗ ΠΑΡΑΘΥΡΩΝ",
      windowinstallationtext:
        "Αναλαμβάνουμε όλη τη διαδικασία, από τη μέτρηση έως την εγκατάσταση. Εσείς απλώς επιλέγετε τον τύπο παραθύρου.",
      shutterinstallation: "ΕΓΚΑΤΑΣΤΑΣΗ ΠΑΝΤΖΟΥΡΙΩΝ",
      shutterinstallationtext:
        "Όταν θέλετε να προστατέψετε το δωμάτιό σας από τον έντονο ήλιο, μπορούμε να σας προτείνουμε την κατάλληλη λύση.",
      replacementwindow: "ΑΝΤΙΚΑΤΑΣΤΑΣΗ ΣΧΗΜΑΤΩΝ ΠΑΡΑΘΥΡΩΝ",
      replacementwindowtext:
        "Προσφέρουμε νέα σχήματα παραθύρων, καθώς μερικές φορές τα παλιά χρειάζονται αντικατάσταση ή βελτίωση.",
      glazing: "ΔΕΥΤΕΡΟΓΕΝΗΣ ΔΙΠΛΗ ΥΑΛΩΣΗ",
      glazingtext:
        "Αυτή η επιλογή προσφέρει επιπλέον προστασία από ακραίες καιρικές συνθήκες και συμβάλλει στη διατήρηση της ζέστης κατά τη διάρκεια του χειμώνα.",
      biofolding: "ΠΟΡΤΕΣ ΜΕ ΔΙΠΛΗ ΑΝΑΔΙΠΛΟΥΜΕΝΗ ΛΕΙΤΟΥΡΓΙΑ",
      biofoldingtext:
        "Αυτός ο τύπος πορτών εξοικονομεί χώρο στο δωμάτιο. Χρησιμοποιούμε εξαιρετικά ανθεκτικό γυαλί και συστήματα στήριξης υψηλής ποιότητας.",
      demo1: "Υπηρεσίες Υψηλής Ποιότητας σε Ανταγωνιστικές Τιμές",
      demo2:
        "Αναλαμβάνουμε τη μέτρηση, την εγκατάσταση και την επισκευή των παραθύρων σας με απόλυτη ακρίβεια και επαγγελματισμό. Επικοινωνήστε μαζί μας σήμερα!",
      democontact: "Επικοινωνηστε μαζι μας",


      
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
      servicesmini1: "Μετρήσεις Παραθύρων & Πορτών",
      servicesmini2: "Υπηρεσίες Εγκατάστασης Παραθύρων",
      servicesmin3: "Υπηρεσίες Αντικατάστασης Παραθύρων",
      servicesmin4: "Υπηρεσίες Εγκατάστασης Πορτών",
      servicesmin5: "Συντήρηση Παραθύρων & Πορτών",
      servicesmin6: "Υπηρεσίες Επισκευής Παραθύρων & Πορτών",
      contactinfomini: "Στοιχεια επικοινωνιας",
      contactphonemini: "Τηλέφωνο επικοινωνιας:",
      workhourslinebottom1: "Δευτέρα-Παρασκευή: 10 ΠΜ - 7 ΜΜ;",
      workhourslinebottom2: "Σάββατο-Κυριακή: 10 ΠΜ - 3 ΜΜ",
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
