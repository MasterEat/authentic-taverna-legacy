import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPreview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-tavern">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Βρείτε μας
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Επικοινωνία & Τοποθεσία
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Διεύθυνση</h3>
                <p className="text-muted-foreground">Οδός Παραδείγματος 42, [Πόλη/Περιοχή], Ελλάδα</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Τηλέφωνο</h3>
                <a href="tel:+302101234567" className="text-muted-foreground hover:text-foreground transition-colors">
                  +30 210 1234567
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Email</h3>
                <a href="mailto:info@taverna-giorgos.gr" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@taverna-giorgos.gr
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Ωράριο</h3>
                <p className="text-muted-foreground">Δευτέρα – Κυριακή: 12:00 – 00:00</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-muted h-[350px] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground font-semibold">Χάρτης Google Maps</p>
              <p className="text-muted-foreground text-sm mt-1">
                Αντικαταστήστε με Google Maps iframe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
