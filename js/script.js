
const translations = {
    en: {
        navTours: "Tours",
        navAbout: "About",
        navContact: "Contact",

        heroEyebrow: "HISTORY · ARCHAEOLOGY · KRAKÓW",
        heroTitle: "Discover Kraków<br>beneath the surface.",
        heroDescription: "Explore the city through the eyes of an archaeologist. Discover the stories hidden beneath its streets and within its medieval architecture.",
        heroButton: "Explore the tours",
        heroCaption: "Kraków, Poland",

        introLabel: "A DIFFERENT WAY TO EXPLORE",
        introTitle: "More than sightseeing.<br>A journey into the past.",
        introText: "Kraków is a city shaped by centuries of history. Its streets, buildings and underground remains reveal stories that are easy to miss on a traditional sightseeing tour. Discover these stories with a guide whose background is in archaeology.",

        toursLabel: "EXPLORE KRAKÓW",
        toursTitle: "Choose your experience",
        tour1Title: "Rynek Underground",
        tour1Text: "Discover medieval Kraków beneath the Main Market Square. Explore archaeological remains and learn how the city developed through the centuries.",
        tour2Title: "Medieval Kraków",
        tour2Text: "Walk through the historic heart of Kraków. Discover medieval urban planning, architecture and the historical traces hidden in the city streets.",
        tourButton: "Enquire about this tour →",

        aboutLabel: "MEET YOUR GUIDE",
        aboutTitle: "Archaeologist.<br>Local guide.<br>Storyteller.",
        aboutText: "My name is Daniel Sobczyński. I am an archaeologist and a licensed Kraków tour guide. My academic background allows me to approach the city's history from a different perspective — connecting historical sources with archaeological evidence and the places we visit.",
        aboutText2: "My goal is to help you understand not only what happened in Kraków, but also how we know it.",

        differenceLabel: "THE ARCHAEOLOGICAL PERSPECTIVE",
        differenceTitle: "Look closer. Discover more.",
        difference1Title: "Evidence, not just legends",
        difference1Text: "Discover the material remains and historical evidence behind Kraków's past.",
        difference2Title: "History beneath your feet",
        difference2Text: "Understand how archaeological discoveries help us reconstruct the medieval city.",
        difference3Title: "A personal experience",
        difference3Text: "Explore Kraków with a guide who combines professional archaeological knowledge with local insight.",

        contactLabel: "PLAN YOUR VISIT",
        contactTitle: "Discover another side of Kraków.",
        contactText: "Interested in a tour? Get in touch to discuss availability, group size and your preferred experience.",
        contactButton: "Contact me"
    },

    pl: {
        navTours: "Wycieczki",
        navAbout: "O mnie",
        navContact: "Kontakt",

        heroEyebrow: "HISTORIA · ARCHEOLOGIA · KRAKÓW",
        heroTitle: "Odkryj Kraków<br>z innej perspektywy.",
        heroDescription: "Poznaj miasto oczami archeologa. Odkryj historie ukryte pod jego ulicami i zapisane w średniowiecznej architekturze.",
        heroButton: "Poznaj wycieczki",
        heroCaption: "Kraków, Polska",

        introLabel: "INNY SPOSÓB ZWIEDZANIA",
        introTitle: "Więcej niż zwiedzanie.<br>Podróż w przeszłość.",
        introText: "Kraków to miasto ukształtowane przez stulecia historii. Jego ulice, budynki i podziemne pozostałości kryją opowieści, które łatwo przeoczyć podczas typowego zwiedzania. Odkryj je z przewodnikiem, którego specjalnością jest archeologia.",

        toursLabel: "POZNAJ KRAKÓW",
        toursTitle: "Wybierz swoją wycieczkę",
        tour1Title: "Podziemia Rynku",
        tour1Text: "Odkryj średniowieczny Kraków pod płytą Rynku Głównego. Poznaj pozostałości archeologiczne i dowiedz się, jak miasto rozwijało się na przestrzeni wieków.",
        tour2Title: "Średniowieczny Kraków",
        tour2Text: "Wybierz się na spacer po historycznym centrum Krakowa. Poznaj średniowieczny układ miasta, architekturę i ślady przeszłości ukryte w miejskiej przestrzeni.",
        tourButton: "Zapytaj o wycieczkę →",

        aboutLabel: "POZNAJ PRZEWODNIKA",
        aboutTitle: "Archeolog.<br>Przewodnik.<br>Miłośnik historii.",
        aboutText: "Nazywam się Daniel Sobczyński. Jestem archeologiem i licencjonowanym przewodnikiem po Krakowie. Wykształcenie pozwala mi spojrzeć na historię miasta z innej perspektywy – łącząc źródła historyczne z dowodami archeologicznymi i miejscami, które odwiedzamy.",
        aboutText2: "Chcę pomóc Ci zrozumieć nie tylko to, co wydarzyło się w Krakowie, ale także skąd o tym wiemy.",

        differenceLabel: "PERSPEKTYWA ARCHEOLOGICZNA",
        differenceTitle: "Przyjrzyj się bliżej. Odkryj więcej.",
        difference1Title: "Dowody, nie tylko legendy",
        difference1Text: "Poznaj materialne pozostałości i historyczne dowody, które pozwalają odtworzyć przeszłość Krakowa.",
        difference2Title: "Historia pod Twoimi stopami",
        difference2Text: "Dowiedz się, jak odkrycia archeologiczne pomagają odtworzyć obraz średniowiecznego miasta.",
        difference3Title: "Indywidualne doświadczenie",
        difference3Text: "Zwiedzaj Kraków z przewodnikiem łączącym wiedzę archeologiczną ze znajomością miasta.",

        contactLabel: "ZAPLANUJ WIZYTĘ",
        contactTitle: "Odkryj inne oblicze Krakowa.",
        contactText: "Zainteresowała Cię wycieczka? Skontaktuj się, aby omówić dostępne terminy, wielkość grupy i wybraną trasę.",
        contactButton: "Skontaktuj się"
    }
};

function setLanguage(lang) {
    const selected = translations[lang] ? lang : "en";

    document.documentElement.lang = selected;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (translations[selected][key]) {
            element.innerHTML = translations[selected][key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.classList.toggle("active", button.dataset.lang === selected);
    });

    localStorage.setItem("preferredLanguage", selected);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("preferredLanguage") || "en";

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });
    });

    setLanguage(savedLanguage);

    document.getElementById("year").textContent = new Date().getFullYear();
});
