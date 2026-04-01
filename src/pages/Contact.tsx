import { useState, FormEvent } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-tavern px-4 text-center">
          <p className="text-gold-light font-semibold uppercase tracking-widest text-sm mb-3">
            Επικοινωνήστε μαζί μας
          </p>
          <h1 className="heading-hero text-primary-foreground mb-4">Επικοινωνία</h1>
          <p className="text-primary-foreground/70 text-body-lg max-w-2xl mx-auto">
            Κλείστε τραπέζι τηλεφωνικά ή στείλτε μας μήνυμα. Σας περιμένουμε!
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tavern">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="heading-subsection text-foreground mb-8">Στοιχεία Επικοινωνίας</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Διεύθυνση</h3>
                    <p className="text-muted-foreground">Οδός Παραδείγματος 42<br />[Πόλη/Περιοχή], Ελλάδα</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Τηλέφωνο Κράτησης</h3>
                    <a href="tel:+302101234567" className="text-accent text-xl font-semibold hover:underline">
                      +30 210 1234567
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">
                      Προτιμήστε τηλεφωνική κράτηση για άμεση εξυπηρέτηση
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Email</h3>
                    <a href="mailto:info@taverna-giorgos.gr" className="text-muted-foreground hover:text-foreground">
                      info@taverna-giorgos.gr
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Ωράριο Λειτουργίας</h3>
                    <p className="text-muted-foreground">Δευτέρα – Κυριακή: 12:00 – 00:00</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden bg-muted h-[280px] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground font-semibold">Google Maps</p>
                  <p className="text-muted-foreground text-sm">Αντικαταστήστε με iframe χάρτη</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="heading-subsection text-foreground mb-8">Στείλτε μας Μήνυμα</h2>

              {submitted ? (
                <div className="bg-secondary rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Ευχαριστούμε!</h3>
                  <p className="text-muted-foreground">Το μήνυμά σας στάλθηκε. Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Ονοματεπώνυμο *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground 
                                 focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition"
                      placeholder="Το όνομά σας"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground 
                                   focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Τηλέφωνο
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground 
                                   focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition"
                        placeholder="+30 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Μήνυμα *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground 
                                 focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition resize-none"
                      placeholder="Γράψτε το μήνυμά σας ή ζητήστε κράτηση..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full gap-2">
                    <Send className="w-5 h-5" />
                    Αποστολή Μηνύματος
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
