"use client";

export default function ContactUsPage() {
  return (
    <div className="contact-us-container">
       <img 
          src="/logo.png" 
          alt="Aqua Alert NI Logo" 
          className="logo" 
        />
      <h1 className="page-title">Contact Us</h1>
      <div className="contact-content">
        <section>
          <h2>Get in Touch</h2>
          <p>
            If you have any questions, suggestions, or concerns, feel free to reach out to us. We're here to help!
          </p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>Email: <a href="mailto:info@aquaalertni.com">info@aquaalertni.com</a></p>
          <p>Phone: <a href="tel:+441234567890">+44 123 456 7890</a></p>
          <p>Address: Aqua Alert NI, 123 Water St, Belfast, Northern Ireland</p>
        </section>

        <section>
          <h2>Follow Us</h2>
          <p>Stay updated with the latest news on water pollution and Lough Neagh:</p>
          <p>
            <a href="https://facebook.com/aquaalertni" target="_blank" rel="noopener noreferrer">Facebook</a> |
            <a href="https://twitter.com/aquaalertni" target="_blank" rel="noopener noreferrer">Twitter</a> |
            <a href="https://instagram.com/aquaalertni" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </section>
      </div>
    </div>
  );
}
