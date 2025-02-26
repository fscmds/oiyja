import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        }
    },
    language: {
        default: "es",
        autoDetect: "browser",
        translations: {
            es: {
                consentModal: {
                    title: "Antes de continuar",
                    description: "Utilizamos cookies propias y de terceros para mejorar nuestros servicios, personalizar tu experiencia y analizar tus hábitos de navegación. Al continuar navegando en nuestro sitio web, aceptas el uso de cookies.",
                    acceptAllBtn: "Aceptar",
                    footer: "El contenido disponible en este sitio web no reside en nuestros servidores. Los materiales se encuentran alojados en servidores externos, ajenos a nuestra gestión y control, por lo que declinamos toda responsabilidad sobre su disponibilidad, precisión o integridad."
                },
                preferencesModal: {
                    title: "Preferencias de Consentimiento",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    savePreferencesBtn: "Guardar preferencias",
                    closeIconLabel: "Cerrar modal",
                    serviceCounterLabel: "Servicios",
                    sections: [
                        {
                            title: "Uso de Cookies",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        },
                        {
                            title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Más información",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                        }
                    ]
                }
            }
        }
    },
    disablePageInteraction: true
});