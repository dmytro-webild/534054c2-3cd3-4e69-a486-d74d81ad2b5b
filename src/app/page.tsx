"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Pricing", id: "pricing" },
        { name: "Gallery", id: "gallery" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Lebo's Beauty"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Nail & Lash Artistry in Pretoria"
      description="Experience professional care and artistic designs at Lebo's Nail Bar & Beauty. Elevate your look with our expert services."
      testimonials={[
        { name: "Sarah M.", handle: "@sarah_nails", testimonial: "Best nails I've ever had! So professional and quick.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/fair-skinned-adult-woman-uses-roller-massager-while-sitting-her-beautician-light-studio-home-spa-facial-concept_197531-31464.jpg" },
        { name: "Thandi K.", handle: "@thandi_lash", testimonial: "My lashes are perfect every time. Highly recommend!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-stylish-lady-with-bright-makeup-smiling_291650-581.jpg" },
        { name: "Boity R.", handle: "@boity_style", testimonial: "The nail art is beyond expectations. Truly talented.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/satisfied-glad-young-pinup-woman-with-charming-smile-points-upper-right-corner_273609-17108.jpg" }
      ]}
      buttons={[{ text: "Book Appointment", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/man-vaping-from-hookah-indoors_23-2149173629.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      title="Excellence in Beauty"
      description="Lebo's Nail Bar & Beauty is dedicated to providing high-quality nail and lash services. We bring professional care to Kwaggafontein and Pretoria Central."
      metrics={[{ value: "1000+", title: "Sets Done" }, { value: "500+", title: "Happy Clients" }, { value: "5+", title: "Years Experience" }]}
      imageSrc="http://img.b2bpic.net/free-photo/nail-care-concept-with-nail-polish-high-angle_23-2149046526.jpg"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      features={[
        { title: "Nail Extensions", description: "Durable and elegant nail extensions.", imageSrc: "http://img.b2bpic.net/free-photo/female-hands-with-beige-nail-design-holding-black-cup_127675-2659.jpg", titleImageSrc: "http://img.b2bpic.net/free-photo/tanned-hand-woman-with-gentle-beige-pink-manicure-covering-with-gel-polish_343596-6402.jpg", buttonText: "See More" },
        { title: "Lash Installations", description: "Professional lash extensions.", imageSrc: "http://img.b2bpic.net/free-photo/skillful-cosmetologist-lash-extension-procedure_181624-47041.jpg", titleImageSrc: "http://img.b2bpic.net/free-photo/fashion-beauty-portrait-young-brunette-woman-with-evening-stylish-makeup-perfect-clean-skin-sexy-model-with-hair-bun-posing-studio-with-pink-bright-natural-lips_158538-24112.jpg", buttonText: "See More" },
        { title: "Custom Nail Art", description: "Intricate and creative designs.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-with-pretty-manicure_23-2149311578.jpg", titleImageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-with-french-manicure_23-2149311569.jpg", buttonText: "See More" }
      ]}
      title="Our Services"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="split"
      plans={[
        { id: "basic", badge: "Essential", price: "R250", subtitle: "Basic Manicure", features: ["Nail shape", "Cuticle care", "Gel polish"], buttons: [{ text: "Book", href: "#contact" }] },
        { id: "pro", badge: "Popular", price: "R450", subtitle: "Acrylic Set", features: ["Full acrylic set", "Shape", "Solid gel color"], buttons: [{ text: "Book", href: "#contact" }] }
      ]}
      title="Pricing"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      title="Gallery"
      description="Browse our collection of beautiful nail and lash transformations."
      gridVariant="three-columns-all-equal-width"
      animationType="slide-up"
      textboxLayout="split"
      products={[
        { id: "g1", brand: "Lebo's", name: "Bridal Nails", price: "R500", rating: 5, reviewCount: "10", imageSrc: "http://img.b2bpic.net/free-photo/hands-with-beautiful-manicure-holding-flowers_127675-23440.jpg" },
        { id: "g2", brand: "Lebo's", name: "Glitter Finish", price: "R450", rating: 5, reviewCount: "15", imageSrc: "http://img.b2bpic.net/free-photo/female-hands-with-blue-nail-design-blue-glitter-nail-polish-manicure-woman-hands-blue-fabric-background_127675-2950.jpg" },
        { id: "g3", brand: "Lebo's", name: "Classic Lash", price: "R600", rating: 5, reviewCount: "20", imageSrc: "http://img.b2bpic.net/free-photo/skillful-cosmetologist-lash-extension-procedure_181624-47041.jpg" }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      cardTitle="Client Love"
      cardTag="Testimonials"
      cardAnimation="slide-up"
      testimonials={[{ id: "t1", name: "Thandi", imageSrc: "http://img.b2bpic.net/free-photo/group-friends-enjoying-street_329181-12573.jpg" }, { id: "t2", name: "Boity", imageSrc: "http://img.b2bpic.net/free-photo/friendly-young-interracial-girls-good-mood-wear-nightgowns-pajama-party-leisure-lifestyle-beauty-concept_197531-31732.jpg" }]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      tag="Contact Us"
      title="Book Your Session"
      description="Ready to get started? Send us a message today."
      imageSrc="http://img.b2bpic.net/free-photo/view-luxurious-hotel-interior-space_23-2150683409.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoText="Lebo's Nail Bar & Beauty"
      columns={[{ items: [{ label: "Home", href: "#hero" }, { label: "Gallery", href: "#gallery" }] }, { items: [{ label: "Contact", href: "#contact" }] }]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
