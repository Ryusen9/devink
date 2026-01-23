import { Metadata } from "next";
import ContactMainForm from "./components/ContactMainForm";

export const metadata: Metadata = {
  title: "CONTACT",
  description: "Get in touch with the DEVINK team.",
  icons: { icon: "/logo.png" },
};

const ContactPage = () => {
  return <ContactMainForm />;
};
export default ContactPage;
