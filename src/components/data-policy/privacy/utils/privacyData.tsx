import {
  PrivacyDataTypes,
  LinkParts,
  ServerLogType,
} from "../types/privacyTypes";

export const privacyData: PrivacyDataTypes[] = [
  {
    id: 1,
    title: "Haftungsausschluss",
    text: `Diese Website enthält Links zu anderen externen Webseiten, auf deren Inhalte ich keinen Einfluss habe. 
             Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. 
             Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter der Seiten verantwortlich. 
             Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft, 
             wobei zu diesem Zeitpunkt keine rechtswidrigen Inhalte erkennbar waren. 
             Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung 
             nicht zumutbar. Sollte eine der Seiten, auf die verwiesen wird, bedenkliche Inhalte aufweisen, 
             wird um Mitteilung ersucht; in so einem Fall wird der Link sofort gelöscht.`,
  },
  {
    id: 2,
    title: "Google Maps",
    text: `Diese Website verwendet Funktionen des Webkartendienstes „Google Maps“. Der Dienstanbieter dieser Funktion ist:
             Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland
             Im Zuge der Nutzung von Google Maps ist es notwendig Ihre IP-Adresse zu speichern und zu verarbeiten. 
             Google überträgt in der Regel an einen Server in den USA und speichert die Daten dort. Die Verarbeitung geschieht 
             durch Google, die Betreiberin dieser Homepage hat keinen Einfluss auf die Übertragung der Daten.
  
             Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit f 
             (berechtigtes Interesse) der DSGVO. Die Nutzung von Google Maps erhöht die Auffindbarkeit der Orte, welche auf unserer Webseite bereitgestellt werden.
             Weitere Informationen über den Umgang mit Nutzer:innendaten von Google können Sie der Datenschutzerklärung entnehmen: 
             https://policies.google.com/privacy?hl=de.
             Google verarbeitet die Daten auch in den USA, hat sich jedoch dem EU-US Privacy-Shield unterworfen. 
             https://www.privacyshield.gov/EU-US-Framework.`,
  },
  {
    id: 3,
    title: "Google Fonts",
    text: `Unsere Website verwendet Schriftarten von „Google Fonts“. Der Dienstanbieter dieser Funktion ist: 
             Google Ireland Limited Gordon House, Barrow Street Dublin 4. Ireland
             Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und speichert diese in den Cache. Als Besucher:in der Webseite 
             empfangen Sie Daten des Dienstanbieters. Unter Umständen kann Google Cookies auf Ihrem Rechner setzen oder analysieren.
             Die Nutzung von „Google-Fonts“ dient der Optimierung und der einheitlichen Darstellung von Inhalten. 
             Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
             Weitere Informationen zu Google Fonts erhalten Sie unter folgendem Link: 
             https://developers.google.com/fonts/faq`,
  },
  {
    id: 4,
    title: "Ihre Rechte",
    text: `Sie haben bezüglich Ihrer Daten, die bei mir gespeichert sind, grundsätzlich ein Recht auf Auskunft, Löschung der Daten, 
             Berichtigung der Daten, Übertragbarkeit der Daten, Widerruf und Widerspruch zur Datenverarbeitung und Einschränkung.
             Wenn Sie glauben, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das Datenschutzrecht passiert sind, 
             so haben Sie die Möglichkeit sich bei mir oder der Datenschutzbehörde zu beschweren.`,
  },
];

export const serverLogs: ServerLogType[] = [
  { id: 1, text: "IP-Adresse oder Hostname" },
  { id: 2, text: "den verwendeten Browser" },
  { id: 3, text: "Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit" },
  { id: 4, text: "aufgerufene Seiten der Webseite" },
  { id: 5, text: "Spracheinstellungen und Betriebssystem" },
  {
    id: 6,
    text: "Leaving-Page (auf welcher URL hat der Benutzer die Webseite verlassen)",
  },
  { id: 7, text: "ISP (Internet Service Provider)" },
];

export function createLinksFromText(text: string): LinkParts[] {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a href={part} key={index} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    } else {
      return part;
    }
  });
}
