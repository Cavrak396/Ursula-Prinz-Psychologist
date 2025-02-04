import { contactDetails } from "./utils/consultationUtils";

function ConsultationScheduling() {
  return (
    <div className="consultation__scheduling">
      <p className="consultation__scheduling-lines">
        Terminvereinbarung für ein Erstgespräch sind unter
        {contactDetails.map((contact, index) => (
          <span key={index}>
            <a className="consultation__scheduling-link" href={contact.href}>
              {contact.label}
            </a>
            {index < contactDetails.length - 1 && " und "}
          </span>
        ))}
        möglich.
      </p>
    </div>
  );
}

export default ConsultationScheduling;
